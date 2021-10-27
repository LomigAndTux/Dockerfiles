"use strict"; // Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

Object.defineProperty(exports, "__esModule", {
  value: true
});

const os_1 = require("os");

const characters_1 = require("../../language/characters");

var State;

(function (State) {
  State[State["Default"] = 0] = "Default";
  State[State["Preformatted"] = 1] = "Preformatted";
  State[State["Code"] = 2] = "Code";
})(State || (State = {}));

class RestTextConverter {
  constructor() {
    this.state = State.Default;
    this.md = [];
  } // tslint:disable-next-line:cyclomatic-complexity


  toMarkdown(docstring) {
    // Translates reStructruredText (Python doc syntax) to markdown.
    // It only translates as much as needed to display tooltips
    // and documentation in the completion list.
    // See https://en.wikipedia.org/wiki/ReStructuredText
    const result = this.transformLines(docstring);
    this.state = State.Default;
    this.md = [];
    return result;
  }

  escapeMarkdown(text) {
    // Not complete escape list so it does not interfere
    // with subsequent code highlighting (see above).
    return text.replace(/\#/g, '\\#').replace(/\*/g, '\\*').replace(/\ _/g, ' \\_').replace(/^_/, '\\_');
  }

  transformLines(docstring) {
    const lines = docstring.split(/\r?\n/);

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i]; // Avoid leading empty lines

      if (this.md.length === 0 && line.length === 0) {
        continue;
      }

      switch (this.state) {
        case State.Default:
          i += this.inDefaultState(lines, i);
          break;

        case State.Preformatted:
          i += this.inPreformattedState(lines, i);
          break;

        case State.Code:
          this.inCodeState(line);
          break;

        default:
          break;
      }
    }

    this.endCodeBlock();
    this.endPreformattedBlock();
    return this.md.join(os_1.EOL).trim();
  }

  inDefaultState(lines, i) {
    let line = lines[i];

    if (line.startsWith('```')) {
      this.startCodeBlock();
      return 0;
    }

    if (line.startsWith('===') || line.startsWith('---')) {
      return 0; // Eat standalone === or --- lines.
    }

    if (this.handleDoubleColon(line)) {
      return 0;
    }

    if (this.isIgnorable(line)) {
      return 0;
    }

    if (this.handleSectionHeader(lines, i)) {
      return 1; // Eat line with === or ---
    }

    const result = this.checkPreContent(lines, i);

    if (this.state !== State.Default) {
      return result; // Handle line in the new state
    }

    line = this.cleanup(line);
    line = line.replace(/``/g, '`'); // Convert double backticks to single.

    line = this.escapeMarkdown(line);
    this.md.push(line);
    return 0;
  }

  inPreformattedState(lines, i) {
    let line = lines[i];

    if (this.isIgnorable(line)) {
      return 0;
    } // Preformatted block terminates by a line without leading whitespace.


    if (line.length > 0 && !characters_1.isWhiteSpace(line.charCodeAt(0)) && !this.isListItem(line)) {
      this.endPreformattedBlock();
      return -1;
    }

    const prevLine = this.md.length > 0 ? this.md[this.md.length - 1] : undefined;

    if (line.length === 0 && prevLine && (prevLine.length === 0 || prevLine.startsWith('```'))) {
      return 0; // Avoid more than one empty line in a row.
    } // Since we use HTML blocks as preformatted text
    // make sure we drop angle brackets since otherwise
    // they will render as tags and attributes


    line = line.replace(/</g, ' ').replace(/>/g, ' ');
    line = line.replace(/``/g, '`'); // Convert double backticks to single.
    // Keep hard line breaks for the preformatted content

    this.md.push(`${line}  `);
    return 0;
  }

  inCodeState(line) {
    const prevLine = this.md.length > 0 ? this.md[this.md.length - 1] : undefined;

    if (line.length === 0 && prevLine && (prevLine.length === 0 || prevLine.startsWith('```'))) {
      return; // Avoid more than one empty line in a row.
    }

    if (line.startsWith('```')) {
      this.endCodeBlock();
    } else {
      this.md.push(line);
    }
  }

  isIgnorable(line) {
    if (line.indexOf('generated/') >= 0) {
      return true; // Drop generated content.
    }

    const trimmed = line.trim();

    if (trimmed.startsWith('..') && trimmed.indexOf('::') > 0) {
      // Ignore lines likes .. sectionauthor:: John Doe.
      return true;
    }

    return false;
  }

  checkPreContent(lines, i) {
    const line = lines[i];

    if (i === 0 || line.trim().length === 0) {
      return 0;
    }

    if (!characters_1.isWhiteSpace(line.charCodeAt(0)) && !this.isListItem(line)) {
      return 0; // regular line, nothing to do here.
    } // Indented content is considered to be preformatted.


    this.startPreformattedBlock();
    return -1;
  }

  handleSectionHeader(lines, i) {
    const line = lines[i];

    if (i < lines.length - 1 && lines[i + 1].startsWith('===')) {
      // Section title -> heading level 3.
      this.md.push(`### ${this.cleanup(line)}`);
      return true;
    }

    if (i < lines.length - 1 && lines[i + 1].startsWith('---')) {
      // Subsection title -> heading level 4.
      this.md.push(`#### ${this.cleanup(line)}`);
      return true;
    }

    return false;
  }

  handleDoubleColon(line) {
    if (!line.endsWith('::')) {
      return false;
    } // Literal blocks begin with `::`. Such as sequence like
    // '... as shown below::' that is followed by a preformatted text.


    if (line.length > 2 && !line.startsWith('..')) {
      // Ignore lines likes .. autosummary:: John Doe.
      // Trim trailing : so :: turns into :.
      this.md.push(line.substring(0, line.length - 1));
    }

    this.startPreformattedBlock();
    return true;
  }

  startPreformattedBlock() {
    // Remove previous empty line so we avoid double empties.
    this.tryRemovePrecedingEmptyLines(); // Lie about the language since we don't want preformatted text
    // to be colorized as Python. HTML is more 'appropriate' as it does
    // not colorize -- or + or keywords like 'from'.

    this.md.push('```html');
    this.state = State.Preformatted;
  }

  endPreformattedBlock() {
    if (this.state === State.Preformatted) {
      this.tryRemovePrecedingEmptyLines();
      this.md.push('```');
      this.state = State.Default;
    }
  }

  startCodeBlock() {
    // Remove previous empty line so we avoid double empties.
    this.tryRemovePrecedingEmptyLines();
    this.md.push('```python');
    this.state = State.Code;
  }

  endCodeBlock() {
    if (this.state === State.Code) {
      this.tryRemovePrecedingEmptyLines();
      this.md.push('```');
      this.state = State.Default;
    }
  }

  tryRemovePrecedingEmptyLines() {
    while (this.md.length > 0 && this.md[this.md.length - 1].trim().length === 0) {
      this.md.pop();
    }
  }

  isListItem(line) {
    const trimmed = line.trim();
    const ch = trimmed.length > 0 ? trimmed.charCodeAt(0) : 0;
    return ch === 42
    /* Asterisk */
    || ch === 45
    /* Hyphen */
    || characters_1.isDecimal(ch);
  }

  cleanup(line) {
    return line.replace(/:mod:/g, 'module:');
  }

}

exports.RestTextConverter = RestTextConverter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RUZXh0Q29udmVydGVyLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwib3NfMSIsInJlcXVpcmUiLCJjaGFyYWN0ZXJzXzEiLCJTdGF0ZSIsIlJlc3RUZXh0Q29udmVydGVyIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsIkRlZmF1bHQiLCJtZCIsInRvTWFya2Rvd24iLCJkb2NzdHJpbmciLCJyZXN1bHQiLCJ0cmFuc2Zvcm1MaW5lcyIsImVzY2FwZU1hcmtkb3duIiwidGV4dCIsInJlcGxhY2UiLCJsaW5lcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsImxpbmUiLCJpbkRlZmF1bHRTdGF0ZSIsIlByZWZvcm1hdHRlZCIsImluUHJlZm9ybWF0dGVkU3RhdGUiLCJDb2RlIiwiaW5Db2RlU3RhdGUiLCJlbmRDb2RlQmxvY2siLCJlbmRQcmVmb3JtYXR0ZWRCbG9jayIsImpvaW4iLCJFT0wiLCJ0cmltIiwic3RhcnRzV2l0aCIsInN0YXJ0Q29kZUJsb2NrIiwiaGFuZGxlRG91YmxlQ29sb24iLCJpc0lnbm9yYWJsZSIsImhhbmRsZVNlY3Rpb25IZWFkZXIiLCJjaGVja1ByZUNvbnRlbnQiLCJjbGVhbnVwIiwicHVzaCIsImlzV2hpdGVTcGFjZSIsImNoYXJDb2RlQXQiLCJpc0xpc3RJdGVtIiwicHJldkxpbmUiLCJ1bmRlZmluZWQiLCJpbmRleE9mIiwidHJpbW1lZCIsInN0YXJ0UHJlZm9ybWF0dGVkQmxvY2siLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsInRyeVJlbW92ZVByZWNlZGluZ0VtcHR5TGluZXMiLCJwb3AiLCJjaCIsImlzRGVjaW1hbCJdLCJtYXBwaW5ncyI6IkFBQUEsYSxDQUNBO0FBQ0E7O0FBQ0FBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxP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LEtBQUssQ0FBQ0ksT0FBbkI7QUFDSDtBQUNKOztBQUNEMEMsRUFBQUEsNEJBQTRCLEdBQUc7QUFDM0IsV0FBTyxLQUFLekMsRUFBTCxDQUFRVyxNQUFSLEdBQWlCLENBQWpCLElBQXNCLEtBQUtYLEVBQUwsQ0FBUSxLQUFLQSxFQUFMLENBQVFXLE1BQVIsR0FBaUIsQ0FBekIsRUFBNEJXLElBQTVCLEdBQW1DWCxNQUFuQyxLQUE4QyxDQUEzRSxFQUE4RTtBQUMxRSxXQUFLWCxFQUFMLENBQVEwQyxHQUFSO0FBQ0g7QUFDSjs7QUFDRFQsRUFBQUEsVUFBVSxDQUFDckIsSUFBRCxFQUFPO0FBQ2IsVUFBTXlCLE9BQU8sR0FBR3pCLElBQUksQ0FBQ1UsSUFBTCxFQUFoQjtBQUNBLFVBQU1xQixFQUFFLEdBQUdOLE9BQU8sQ0FBQzFCLE1BQVIsR0FBaUIsQ0FBakIsR0FBcUIwQixPQUFPLENBQUNMLFVBQVIsQ0FBbUIsQ0FBbkIsQ0FBckIsR0FBNkMsQ0FBeEQ7QUFDQSxXQUFPVyxFQUFFLEtBQUs7QUFBRztBQUFWLE9BQTRCQSxFQUFFLEtBQUs7QUFBRztBQUF0QyxPQUFzRGpELFlBQVksQ0FBQ2tELFNBQWIsQ0FBdUJELEVBQXZCLENBQTdEO0FBQ0g7O0FBQ0RkLEVBQUFBLE9BQU8sQ0FBQ2pCLElBQUQsRUFBTztBQUNWLFdBQU9BLElBQUksQ0FBQ0wsT0FBTCxDQUFhLFFBQWIsRUFBdUIsU0FBdkIsQ0FBUDtBQUNIOztBQTlNbUI7O0FBZ054QmpCLE9BQU8sQ0FBQ00saUJBQVIsR0FBNEJBLGlCQUE1QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBvc18xID0gcmVxdWlyZShcIm9zXCIpO1xuY29uc3QgY2hhcmFjdGVyc18xID0gcmVxdWlyZShcIi4uLy4uL2xhbmd1YWdlL2NoYXJhY3RlcnNcIik7XG52YXIgU3RhdGU7XG4oZnVuY3Rpb24gKFN0YXRlKSB7XG4gICAgU3RhdGVbU3RhdGVbXCJEZWZhdWx0XCJdID0gMF0gPSBcIkRlZmF1bHRcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIlByZWZvcm1hdHRlZFwiXSA9IDFdID0gXCJQcmVmb3JtYXR0ZWRcIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNvZGVcIl0gPSAyXSA9IFwiQ29kZVwiO1xufSkoU3RhdGUgfHwgKFN0YXRlID0ge30pKTtcbmNsYXNzIFJlc3RUZXh0Q29udmVydGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkRlZmF1bHQ7XG4gICAgICAgIHRoaXMubWQgPSBbXTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxuICAgIHRvTWFya2Rvd24oZG9jc3RyaW5nKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZXMgcmVTdHJ1Y3RydXJlZFRleHQgKFB5dGhvbiBkb2Mgc3ludGF4KSB0byBtYXJrZG93bi5cbiAgICAgICAgLy8gSXQgb25seSB0cmFuc2xhdGVzIGFzIG11Y2ggYXMgbmVlZGVkIHRvIGRpc3BsYXkgdG9vbHRpcHNcbiAgICAgICAgLy8gYW5kIGRvY3VtZW50YXRpb24gaW4gdGhlIGNvbXBsZXRpb24gbGlzdC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JlU3RydWN0dXJlZFRleHRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy50cmFuc2Zvcm1MaW5lcyhkb2NzdHJpbmcpO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuRGVmYXVsdDtcbiAgICAgICAgdGhpcy5tZCA9IFtdO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlc2NhcGVNYXJrZG93bih0ZXh0KSB7XG4gICAgICAgIC8vIE5vdCBjb21wbGV0ZSBlc2NhcGUgbGlzdCBzbyBpdCBkb2VzIG5vdCBpbnRlcmZlcmVcbiAgICAgICAgLy8gd2l0aCBzdWJzZXF1ZW50IGNvZGUgaGlnaGxpZ2h0aW5nIChzZWUgYWJvdmUpLlxuICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcIy9nLCAnXFxcXCMnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnXFxcXConKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcIF8vZywgJyBcXFxcXycpXG4gICAgICAgICAgICAucmVwbGFjZSgvXl8vLCAnXFxcXF8nKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtTGluZXMoZG9jc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gZG9jc3RyaW5nLnNwbGl0KC9cXHI/XFxuLyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIC8vIEF2b2lkIGxlYWRpbmcgZW1wdHkgbGluZXNcbiAgICAgICAgICAgIGlmICh0aGlzLm1kLmxlbmd0aCA9PT0gMCAmJiBsaW5lLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBTdGF0ZS5EZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpICs9IHRoaXMuaW5EZWZhdWx0U3RhdGUobGluZXMsIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLlByZWZvcm1hdHRlZDpcbiAgICAgICAgICAgICAgICAgICAgaSArPSB0aGlzLmluUHJlZm9ybWF0dGVkU3RhdGUobGluZXMsIGkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFN0YXRlLkNvZGU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5Db2RlU3RhdGUobGluZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kQ29kZUJsb2NrKCk7XG4gICAgICAgIHRoaXMuZW5kUHJlZm9ybWF0dGVkQmxvY2soKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWQuam9pbihvc18xLkVPTCkudHJpbSgpO1xuICAgIH1cbiAgICBpbkRlZmF1bHRTdGF0ZShsaW5lcywgaSkge1xuICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBpZiAobGluZS5zdGFydHNXaXRoKCdgYGAnKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydENvZGVCbG9jaygpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnPT09JykgfHwgbGluZS5zdGFydHNXaXRoKCctLS0nKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7IC8vIEVhdCBzdGFuZGFsb25lID09PSBvciAtLS0gbGluZXMuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlRG91YmxlQ29sb24obGluZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzSWdub3JhYmxlKGxpbmUpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYW5kbGVTZWN0aW9uSGVhZGVyKGxpbmVzLCBpKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIEVhdCBsaW5lIHdpdGggPT09IG9yIC0tLVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2hlY2tQcmVDb250ZW50KGxpbmVzLCBpKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlLkRlZmF1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7IC8vIEhhbmRsZSBsaW5lIGluIHRoZSBuZXcgc3RhdGVcbiAgICAgICAgfVxuICAgICAgICBsaW5lID0gdGhpcy5jbGVhbnVwKGxpbmUpO1xuICAgICAgICBsaW5lID0gbGluZS5yZXBsYWNlKC9gYC9nLCAnYCcpOyAvLyBDb252ZXJ0IGRvdWJsZSBiYWNrdGlja3MgdG8gc2luZ2xlLlxuICAgICAgICBsaW5lID0gdGhpcy5lc2NhcGVNYXJrZG93bihsaW5lKTtcbiAgICAgICAgdGhpcy5tZC5wdXNoKGxpbmUpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaW5QcmVmb3JtYXR0ZWRTdGF0ZShsaW5lcywgaSkge1xuICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBpZiAodGhpcy5pc0lnbm9yYWJsZShsaW5lKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJlZm9ybWF0dGVkIGJsb2NrIHRlcm1pbmF0ZXMgYnkgYSBsaW5lIHdpdGhvdXQgbGVhZGluZyB3aGl0ZXNwYWNlLlxuICAgICAgICBpZiAobGluZS5sZW5ndGggPiAwICYmICFjaGFyYWN0ZXJzXzEuaXNXaGl0ZVNwYWNlKGxpbmUuY2hhckNvZGVBdCgwKSkgJiYgIXRoaXMuaXNMaXN0SXRlbShsaW5lKSkge1xuICAgICAgICAgICAgdGhpcy5lbmRQcmVmb3JtYXR0ZWRCbG9jaygpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZMaW5lID0gdGhpcy5tZC5sZW5ndGggPiAwID8gdGhpcy5tZFt0aGlzLm1kLmxlbmd0aCAtIDFdIDogdW5kZWZpbmVkO1xuICAgICAgICBpZiAobGluZS5sZW5ndGggPT09IDAgJiYgcHJldkxpbmUgJiYgKHByZXZMaW5lLmxlbmd0aCA9PT0gMCB8fCBwcmV2TGluZS5zdGFydHNXaXRoKCdgYGAnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAwOyAvLyBBdm9pZCBtb3JlIHRoYW4gb25lIGVtcHR5IGxpbmUgaW4gYSByb3cuXG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2Ugd2UgdXNlIEhUTUwgYmxvY2tzIGFzIHByZWZvcm1hdHRlZCB0ZXh0XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkcm9wIGFuZ2xlIGJyYWNrZXRzIHNpbmNlIG90aGVyd2lzZVxuICAgICAgICAvLyB0aGV5IHdpbGwgcmVuZGVyIGFzIHRhZ3MgYW5kIGF0dHJpYnV0ZXNcbiAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvPC9nLCAnICcpLnJlcGxhY2UoLz4vZywgJyAnKTtcbiAgICAgICAgbGluZSA9IGxpbmUucmVwbGFjZSgvYGAvZywgJ2AnKTsgLy8gQ29udmVydCBkb3VibGUgYmFja3RpY2tzIHRvIHNpbmdsZS5cbiAgICAgICAgLy8gS2VlcCBoYXJkIGxpbmUgYnJlYWtzIGZvciB0aGUgcHJlZm9ybWF0dGVkIGNvbnRlbnRcbiAgICAgICAgdGhpcy5tZC5wdXNoKGAke2xpbmV9ICBgKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGluQ29kZVN0YXRlKGxpbmUpIHtcbiAgICAgICAgY29uc3QgcHJldkxpbmUgPSB0aGlzLm1kLmxlbmd0aCA+IDAgPyB0aGlzLm1kW3RoaXMubWQubGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChsaW5lLmxlbmd0aCA9PT0gMCAmJiBwcmV2TGluZSAmJiAocHJldkxpbmUubGVuZ3RoID09PSAwIHx8IHByZXZMaW5lLnN0YXJ0c1dpdGgoJ2BgYCcpKSkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBBdm9pZCBtb3JlIHRoYW4gb25lIGVtcHR5IGxpbmUgaW4gYSByb3cuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUuc3RhcnRzV2l0aCgnYGBgJykpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kQ29kZUJsb2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1kLnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNJZ25vcmFibGUobGluZSkge1xuICAgICAgICBpZiAobGluZS5pbmRleE9mKCdnZW5lcmF0ZWQvJykgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vIERyb3AgZ2VuZXJhdGVkIGNvbnRlbnQuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICAgICAgICBpZiAodHJpbW1lZC5zdGFydHNXaXRoKCcuLicpICYmIHRyaW1tZWQuaW5kZXhPZignOjonKSA+IDApIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBsaW5lcyBsaWtlcyAuLiBzZWN0aW9uYXV0aG9yOjogSm9obiBEb2UuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNoZWNrUHJlQ29udGVudChsaW5lcywgaSkge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGlmIChpID09PSAwIHx8IGxpbmUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGFyYWN0ZXJzXzEuaXNXaGl0ZVNwYWNlKGxpbmUuY2hhckNvZGVBdCgwKSkgJiYgIXRoaXMuaXNMaXN0SXRlbShsaW5lKSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7IC8vIHJlZ3VsYXIgbGluZSwgbm90aGluZyB0byBkbyBoZXJlLlxuICAgICAgICB9XG4gICAgICAgIC8vIEluZGVudGVkIGNvbnRlbnQgaXMgY29uc2lkZXJlZCB0byBiZSBwcmVmb3JtYXR0ZWQuXG4gICAgICAgIHRoaXMuc3RhcnRQcmVmb3JtYXR0ZWRCbG9jaygpO1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGhhbmRsZVNlY3Rpb25IZWFkZXIobGluZXMsIGkpIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBpZiAoaSA8IGxpbmVzLmxlbmd0aCAtIDEgJiYgKGxpbmVzW2kgKyAxXS5zdGFydHNXaXRoKCc9PT0nKSkpIHtcbiAgICAgICAgICAgIC8vIFNlY3Rpb24gdGl0bGUgLT4gaGVhZGluZyBsZXZlbCAzLlxuICAgICAgICAgICAgdGhpcy5tZC5wdXNoKGAjIyMgJHt0aGlzLmNsZWFudXAobGluZSl9YCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxpbmVzLmxlbmd0aCAtIDEgJiYgKGxpbmVzW2kgKyAxXS5zdGFydHNXaXRoKCctLS0nKSkpIHtcbiAgICAgICAgICAgIC8vIFN1YnNlY3Rpb24gdGl0bGUgLT4gaGVhZGluZyBsZXZlbCA0LlxuICAgICAgICAgICAgdGhpcy5tZC5wdXNoKGAjIyMjICR7dGhpcy5jbGVhbnVwKGxpbmUpfWApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoYW5kbGVEb3VibGVDb2xvbihsaW5lKSB7XG4gICAgICAgIGlmICghbGluZS5lbmRzV2l0aCgnOjonKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIExpdGVyYWwgYmxvY2tzIGJlZ2luIHdpdGggYDo6YC4gU3VjaCBhcyBzZXF1ZW5jZSBsaWtlXG4gICAgICAgIC8vICcuLi4gYXMgc2hvd24gYmVsb3c6OicgdGhhdCBpcyBmb2xsb3dlZCBieSBhIHByZWZvcm1hdHRlZCB0ZXh0LlxuICAgICAgICBpZiAobGluZS5sZW5ndGggPiAyICYmICFsaW5lLnN0YXJ0c1dpdGgoJy4uJykpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZSBsaW5lcyBsaWtlcyAuLiBhdXRvc3VtbWFyeTo6IEpvaG4gRG9lLlxuICAgICAgICAgICAgLy8gVHJpbSB0cmFpbGluZyA6IHNvIDo6IHR1cm5zIGludG8gOi5cbiAgICAgICAgICAgIHRoaXMubWQucHVzaChsaW5lLnN1YnN0cmluZygwLCBsaW5lLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXJ0UHJlZm9ybWF0dGVkQmxvY2soKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXJ0UHJlZm9ybWF0dGVkQmxvY2soKSB7XG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBlbXB0eSBsaW5lIHNvIHdlIGF2b2lkIGRvdWJsZSBlbXB0aWVzLlxuICAgICAgICB0aGlzLnRyeVJlbW92ZVByZWNlZGluZ0VtcHR5TGluZXMoKTtcbiAgICAgICAgLy8gTGllIGFib3V0IHRoZSBsYW5ndWFnZSBzaW5jZSB3ZSBkb24ndCB3YW50IHByZWZvcm1hdHRlZCB0ZXh0XG4gICAgICAgIC8vIHRvIGJlIGNvbG9yaXplZCBhcyBQeXRob24uIEhUTUwgaXMgbW9yZSAnYXBwcm9wcmlhdGUnIGFzIGl0IGRvZXNcbiAgICAgICAgLy8gbm90IGNvbG9yaXplIC0tIG9yICsgb3Iga2V5d29yZHMgbGlrZSAnZnJvbScuXG4gICAgICAgIHRoaXMubWQucHVzaCgnYGBgaHRtbCcpO1xuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGUuUHJlZm9ybWF0dGVkO1xuICAgIH1cbiAgICBlbmRQcmVmb3JtYXR0ZWRCbG9jaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlLlByZWZvcm1hdHRlZCkge1xuICAgICAgICAgICAgdGhpcy50cnlSZW1vdmVQcmVjZWRpbmdFbXB0eUxpbmVzKCk7XG4gICAgICAgICAgICB0aGlzLm1kLnB1c2goJ2BgYCcpO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRDb2RlQmxvY2soKSB7XG4gICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBlbXB0eSBsaW5lIHNvIHdlIGF2b2lkIGRvdWJsZSBlbXB0aWVzLlxuICAgICAgICB0aGlzLnRyeVJlbW92ZVByZWNlZGluZ0VtcHR5TGluZXMoKTtcbiAgICAgICAgdGhpcy5tZC5wdXNoKCdgYGBweXRob24nKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlLkNvZGU7XG4gICAgfVxuICAgIGVuZENvZGVCbG9jaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlLkNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMudHJ5UmVtb3ZlUHJlY2VkaW5nRW1wdHlMaW5lcygpO1xuICAgICAgICAgICAgdGhpcy5tZC5wdXNoKCdgYGAnKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZS5EZWZhdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyeVJlbW92ZVByZWNlZGluZ0VtcHR5TGluZXMoKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLm1kLmxlbmd0aCA+IDAgJiYgdGhpcy5tZFt0aGlzLm1kLmxlbmd0aCAtIDFdLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubWQucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNMaXN0SXRlbShsaW5lKSB7XG4gICAgICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lLnRyaW0oKTtcbiAgICAgICAgY29uc3QgY2ggPSB0cmltbWVkLmxlbmd0aCA+IDAgPyB0cmltbWVkLmNoYXJDb2RlQXQoMCkgOiAwO1xuICAgICAgICByZXR1cm4gY2ggPT09IDQyIC8qIEFzdGVyaXNrICovIHx8IGNoID09PSA0NSAvKiBIeXBoZW4gKi8gfHwgY2hhcmFjdGVyc18xLmlzRGVjaW1hbChjaCk7XG4gICAgfVxuICAgIGNsZWFudXAobGluZSkge1xuICAgICAgICByZXR1cm4gbGluZS5yZXBsYWNlKC86bW9kOi9nLCAnbW9kdWxlOicpO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVzdFRleHRDb252ZXJ0ZXIgPSBSZXN0VGV4dENvbnZlcnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc3RUZXh0Q29udmVydGVyLmpzLm1hcCJdfQ==