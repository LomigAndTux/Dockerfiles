Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, "next"); var callThrow = step.bind(null, "throw"); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _goToDefinition = require("./goToDefinition");

"use babel";

var ClickProvider = (function () {
  function ClickProvider(options) {
    _classCallCheck(this, ClickProvider);

    this.providerRegistry = options.providerRegistry;

    this.suggestionForWordHandler = this.suggestionForWordHandler.bind(this);
    this.getProvider = this.getProvider.bind(this);
  }

  _createClass(ClickProvider, [{
    key: "suggestionForWordHandler",
    value: _asyncToGenerator(function* (editor, text, range) {
      var _this = this;

      var position = range.start;

      var definitions = yield (0, _goToDefinition.getDefinitions)(this.providerRegistry, {
        editor: editor,
        position: position
      });
      var hasDefinitions = definitions && !!definitions[0];

      var suggestion = hasDefinitions ? {
        range: range,
        callback: function callback() {
          return (0, _goToDefinition.goToDefinition)(_this.providerRegistry, { editor: editor, definitions: definitions });
        }
      } : false;

      return suggestion;
    })
  }, {
    key: "getProvider",
    value: function getProvider() {
      var grammarScopes = atom.config.get("atom-ide-definitions.clickGrammarScopes");
      var priority = atom.config.get("atom-ide-definitions.clickPriority");

      return {
        priority: priority,
        // Assign value only if at least one scope is available. Falsey triggers default behaviour, "apply to all".
        grammarScopes: grammarScopes && !!grammarScopes[0] && grammarScopes || null,
        getSuggestionForWord: this.suggestionForWordHandler
      };
    }
  }]);

  return ClickProvider;
})();

exports.ClickProvider = ClickProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9yb290Ly5hdG9tL3BhY2thZ2VzL2F0b20taWRlLWRlZmluaXRpb25zL2xpYi9jbGlja1Byb3ZpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OEJBRStDLGtCQUFrQjs7QUFGakUsV0FBVyxDQUFBOztJQUlFLGFBQWE7QUFDYixXQURBLGFBQWEsQ0FDWixPQUFPLEVBQUU7MEJBRFYsYUFBYTs7QUFFdEIsUUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQTs7QUFFaEQsUUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDeEUsUUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtHQUMvQzs7ZUFOVSxhQUFhOzs2QkFRTSxXQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7VUFDbkMsUUFBUSxHQUFLLEtBQUssQ0FBekIsS0FBSzs7QUFDYixVQUFNLFdBQVcsR0FBRyxNQUFNLG9DQUFlLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUM5RCxjQUFNLEVBQU4sTUFBTTtBQUNOLGdCQUFRLEVBQVIsUUFBUTtPQUNULENBQUMsQ0FBQTtBQUNGLFVBQU0sY0FBYyxHQUFHLFdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBOztBQUV0RCxVQUFNLFVBQVUsR0FBRyxjQUFjLEdBQzdCO0FBQ0UsYUFBSyxFQUFMLEtBQUs7QUFDTCxnQkFBUSxFQUFFO2lCQUFNLG9DQUFlLE1BQUssZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLFdBQVcsRUFBWCxXQUFXLEVBQUUsQ0FBQztTQUFBO09BQy9FLEdBQ0QsS0FBSyxDQUFBOztBQUVULGFBQU8sVUFBVSxDQUFBO0tBQ2xCOzs7V0FFVSx1QkFBRztBQUNaLFVBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7QUFDaEYsVUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQTs7QUFFdEUsYUFBTztBQUNMLGdCQUFRLEVBQVIsUUFBUTs7QUFFUixxQkFBYSxFQUFFLEFBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBYSxJQUFLLElBQUk7QUFDN0UsNEJBQW9CLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtPQUNwRCxDQUFBO0tBQ0Y7OztTQXBDVSxhQUFhIiwiZmlsZSI6Ii9yb290Ly5hdG9tL3BhY2thZ2VzL2F0b20taWRlLWRlZmluaXRpb25zL2xpYi9jbGlja1Byb3ZpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgYmFiZWxcIlxuXG5pbXBvcnQgeyBnb1RvRGVmaW5pdGlvbiwgZ2V0RGVmaW5pdGlvbnMgfSBmcm9tIFwiLi9nb1RvRGVmaW5pdGlvblwiXG5cbmV4cG9ydCBjbGFzcyBDbGlja1Byb3ZpZGVyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMucHJvdmlkZXJSZWdpc3RyeSA9IG9wdGlvbnMucHJvdmlkZXJSZWdpc3RyeVxuXG4gICAgdGhpcy5zdWdnZXN0aW9uRm9yV29yZEhhbmRsZXIgPSB0aGlzLnN1Z2dlc3Rpb25Gb3JXb3JkSGFuZGxlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRQcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgc3VnZ2VzdGlvbkZvcldvcmRIYW5kbGVyKGVkaXRvciwgdGV4dCwgcmFuZ2UpIHtcbiAgICBjb25zdCB7IHN0YXJ0OiBwb3NpdGlvbiB9ID0gcmFuZ2VcbiAgICBjb25zdCBkZWZpbml0aW9ucyA9IGF3YWl0IGdldERlZmluaXRpb25zKHRoaXMucHJvdmlkZXJSZWdpc3RyeSwge1xuICAgICAgZWRpdG9yLFxuICAgICAgcG9zaXRpb24sXG4gICAgfSlcbiAgICBjb25zdCBoYXNEZWZpbml0aW9ucyA9IGRlZmluaXRpb25zICYmICEhZGVmaW5pdGlvbnNbMF1cblxuICAgIGNvbnN0IHN1Z2dlc3Rpb24gPSBoYXNEZWZpbml0aW9uc1xuICAgICAgPyB7XG4gICAgICAgICAgcmFuZ2UsXG4gICAgICAgICAgY2FsbGJhY2s6ICgpID0+IGdvVG9EZWZpbml0aW9uKHRoaXMucHJvdmlkZXJSZWdpc3RyeSwgeyBlZGl0b3IsIGRlZmluaXRpb25zIH0pLFxuICAgICAgICB9XG4gICAgICA6IGZhbHNlXG5cbiAgICByZXR1cm4gc3VnZ2VzdGlvblxuICB9XG5cbiAgZ2V0UHJvdmlkZXIoKSB7XG4gICAgY29uc3QgZ3JhbW1hclNjb3BlcyA9IGF0b20uY29uZmlnLmdldChcImF0b20taWRlLWRlZmluaXRpb25zLmNsaWNrR3JhbW1hclNjb3Blc1wiKVxuICAgIGNvbnN0IHByaW9yaXR5ID0gYXRvbS5jb25maWcuZ2V0KFwiYXRvbS1pZGUtZGVmaW5pdGlvbnMuY2xpY2tQcmlvcml0eVwiKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByaW9yaXR5LFxuICAgICAgLy8gQXNzaWduIHZhbHVlIG9ubHkgaWYgYXQgbGVhc3Qgb25lIHNjb3BlIGlzIGF2YWlsYWJsZS4gRmFsc2V5IHRyaWdnZXJzIGRlZmF1bHQgYmVoYXZpb3VyLCBcImFwcGx5IHRvIGFsbFwiLlxuICAgICAgZ3JhbW1hclNjb3BlczogKGdyYW1tYXJTY29wZXMgJiYgISFncmFtbWFyU2NvcGVzWzBdICYmIGdyYW1tYXJTY29wZXMpIHx8IG51bGwsXG4gICAgICBnZXRTdWdnZXN0aW9uRm9yV29yZDogdGhpcy5zdWdnZXN0aW9uRm9yV29yZEhhbmRsZXIsXG4gICAgfVxuICB9XG59XG4iXX0=