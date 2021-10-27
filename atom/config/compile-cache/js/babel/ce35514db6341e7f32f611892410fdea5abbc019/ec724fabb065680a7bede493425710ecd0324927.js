"use babel";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var goToDefinition = _asyncToGenerator(function* (providerRegistry) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var editor = _ref.editor;
  var knownDefinitions = _ref.definitions;

  if (!editor) {
    return;
  }

  var definitions = knownDefinitions || (yield getDefinitions(providerRegistry, { editor: editor }));

  if (!definitions || definitions.length === 0) {
    atom.notifications.addError("Sorry, no definitions found.");
    return;
  }

  var _definitions$0 = definitions[0];
  var path = _definitions$0.path;
  var _definitions$0$position = _definitions$0.position;
  var row = _definitions$0$position.row;
  var column = _definitions$0$position.column;

  if (editor.getPath() === path) {
    var paneContainer = atom.workspace.paneContainerForItem(editor);
    paneContainer.activate();

    editor.setCursorBufferPosition([row, column]);
    editor.scrollToBufferPosition([row, column], { center: true });
  } else {
    yield atom.workspace.open(path, {
      initialLine: row,
      initialColumn: column,
      searchAllPanes: true,
      activatePane: true,
      activateItem: true
    });
  }
});

exports.goToDefinition = goToDefinition;

var getDefinitions = _asyncToGenerator(function* (providerRegistry) {
  var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var editor = _ref2.editor;
  var targetPosition = _ref2.position;

  if (!providerRegistry || !editor) {
    return;
  }

  var position = targetPosition || editor.getCursorBufferPosition();

  var provider = providerRegistry.getProviderForEditor(editor);
  if (!provider) {
    return;
  }
  var result = yield provider.getDefinition(editor, position);

  return result && result.definitions;
});

exports.getDefinitions = getDefinitions;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, "next"); var callThrow = step.bind(null, "throw"); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290Ly5hdG9tL3BhY2thZ2VzL2F0b20taWRlLWRlZmluaXRpb25zL2xpYi9nb1RvRGVmaW5pdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXLENBQUE7Ozs7OztJQUVXLGNBQWMscUJBQTdCLFdBQThCLGdCQUFnQixFQUFrRDttRUFBSixFQUFFOztNQUE1QyxNQUFNLFFBQU4sTUFBTTtNQUFlLGdCQUFnQixRQUE3QixXQUFXOztBQUMxRSxNQUFJLENBQUMsTUFBTSxFQUFFO0FBQ1gsV0FBTTtHQUNQOztBQUVELE1BQU0sV0FBVyxHQUFHLGdCQUFnQixLQUFLLE1BQU0sY0FBYyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBRSxDQUFDLENBQUEsQUFBQyxDQUFBOztBQUU1RixNQUFJLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQzVDLFFBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUE7QUFDM0QsV0FBTTtHQUNQOzt1QkFLRyxXQUFXLENBQUMsQ0FBQyxDQUFDO01BRmhCLElBQUksa0JBQUosSUFBSTsrQ0FDSixRQUFRO01BQUksR0FBRywyQkFBSCxHQUFHO01BQUUsTUFBTSwyQkFBTixNQUFNOztBQUd6QixNQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDN0IsUUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNqRSxpQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFBOztBQUV4QixVQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUM3QyxVQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtHQUMvRCxNQUFNO0FBQ0wsVUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDOUIsaUJBQVcsRUFBRSxHQUFHO0FBQ2hCLG1CQUFhLEVBQUUsTUFBTTtBQUNyQixvQkFBYyxFQUFFLElBQUk7QUFDcEIsa0JBQVksRUFBRSxJQUFJO0FBQ2xCLGtCQUFZLEVBQUUsSUFBSTtLQUNuQixDQUFDLENBQUE7R0FDSDtDQUNGOzs7O0lBRXFCLGNBQWMscUJBQTdCLFdBQThCLGdCQUFnQixFQUE2QztvRUFBSixFQUFFOztNQUF2QyxNQUFNLFNBQU4sTUFBTTtNQUFZLGNBQWMsU0FBeEIsUUFBUTs7QUFDdkUsTUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2hDLFdBQU07R0FDUDs7QUFFRCxNQUFNLFFBQVEsR0FBRyxjQUFjLElBQUksTUFBTSxDQUFDLHVCQUF1QixFQUFFLENBQUE7O0FBRW5FLE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzlELE1BQUksQ0FBQyxRQUFRLEVBQUU7QUFDYixXQUFNO0dBQ1A7QUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBOztBQUU3RCxTQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFBO0NBQ3BDIiwiZmlsZSI6Ii9yb290Ly5hdG9tL3BhY2thZ2VzL2F0b20taWRlLWRlZmluaXRpb25zL2xpYi9nb1RvRGVmaW5pdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGJhYmVsXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdvVG9EZWZpbml0aW9uKHByb3ZpZGVyUmVnaXN0cnksIHsgZWRpdG9yLCBkZWZpbml0aW9uczoga25vd25EZWZpbml0aW9ucyB9ID0ge30pIHtcbiAgaWYgKCFlZGl0b3IpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGRlZmluaXRpb25zID0ga25vd25EZWZpbml0aW9ucyB8fCAoYXdhaXQgZ2V0RGVmaW5pdGlvbnMocHJvdmlkZXJSZWdpc3RyeSwgeyBlZGl0b3IgfSkpXG5cbiAgaWYgKCFkZWZpbml0aW9ucyB8fCBkZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoXCJTb3JyeSwgbm8gZGVmaW5pdGlvbnMgZm91bmQuXCIpXG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCB7XG4gICAgcGF0aCxcbiAgICBwb3NpdGlvbjogeyByb3csIGNvbHVtbiB9LFxuICB9ID0gZGVmaW5pdGlvbnNbMF1cblxuICBpZiAoZWRpdG9yLmdldFBhdGgoKSA9PT0gcGF0aCkge1xuICAgIGNvbnN0IHBhbmVDb250YWluZXIgPSBhdG9tLndvcmtzcGFjZS5wYW5lQ29udGFpbmVyRm9ySXRlbShlZGl0b3IpXG4gICAgcGFuZUNvbnRhaW5lci5hY3RpdmF0ZSgpXG5cbiAgICBlZGl0b3Iuc2V0Q3Vyc29yQnVmZmVyUG9zaXRpb24oW3JvdywgY29sdW1uXSlcbiAgICBlZGl0b3Iuc2Nyb2xsVG9CdWZmZXJQb3NpdGlvbihbcm93LCBjb2x1bW5dLCB7IGNlbnRlcjogdHJ1ZSB9KVxuICB9IGVsc2Uge1xuICAgIGF3YWl0IGF0b20ud29ya3NwYWNlLm9wZW4ocGF0aCwge1xuICAgICAgaW5pdGlhbExpbmU6IHJvdyxcbiAgICAgIGluaXRpYWxDb2x1bW46IGNvbHVtbixcbiAgICAgIHNlYXJjaEFsbFBhbmVzOiB0cnVlLFxuICAgICAgYWN0aXZhdGVQYW5lOiB0cnVlLFxuICAgICAgYWN0aXZhdGVJdGVtOiB0cnVlLFxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlZmluaXRpb25zKHByb3ZpZGVyUmVnaXN0cnksIHsgZWRpdG9yLCBwb3NpdGlvbjogdGFyZ2V0UG9zaXRpb24gfSA9IHt9KSB7XG4gIGlmICghcHJvdmlkZXJSZWdpc3RyeSB8fCAhZWRpdG9yKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjb25zdCBwb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uIHx8IGVkaXRvci5nZXRDdXJzb3JCdWZmZXJQb3NpdGlvbigpXG5cbiAgY29uc3QgcHJvdmlkZXIgPSBwcm92aWRlclJlZ2lzdHJ5LmdldFByb3ZpZGVyRm9yRWRpdG9yKGVkaXRvcilcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb3ZpZGVyLmdldERlZmluaXRpb24oZWRpdG9yLCBwb3NpdGlvbilcblxuICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5kZWZpbml0aW9uc1xufVxuIl19