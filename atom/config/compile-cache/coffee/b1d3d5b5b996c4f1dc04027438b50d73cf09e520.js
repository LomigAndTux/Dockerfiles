(function() {
  var CompositeDisposable, Config, GitLab, ProjectsView;

  CompositeDisposable = require('atom').CompositeDisposable;

  Config = require('../config/settings');

  ProjectsView = require('./projects-view');

  module.exports = GitLab = {
    projectsView: null,
    config: Config,
    activate: function(state) {
      var base;
      this.state = state;
      this.disposables = new CompositeDisposable;
      if (this.shouldAttach()) {
        if ((base = this.state).attached == null) {
          base.attached = true;
        }
      }
      if (this.state.attached) {
        this.createViews();
      }
      return this.disposables.add(atom.commands.add('atom-workspace', {
        'gitlab:toggle-projects': (function(_this) {
          return function() {
            return _this.toggle();
          };
        })(this)
      }));
    },
    deactivate: function() {
      var ref;
      this.disposables.dispose();
      if ((ref = this.projectsView) != null) {
        ref.deactivate();
      }
      return this.projectsView = null;
    },
    serialize: function() {
      var ref;
      return {
        projectsViewState: (ref = this.projectsView) != null ? ref.serialize() : void 0
      };
    },
    createViews: function() {
      if (this.projectsView == null) {
        this.projectsView = new ProjectsView(this.state.projectsViewState);
      }
      return this.projectsView;
    },
    shouldAttach: function() {
      return true;
    },
    toggle: function() {
      var ref;
      if ((ref = this.projectsView) != null ? ref.isVisible() : void 0) {
        return this.projectsView.toggle();
      } else {
        this.createViews();
        return this.projectsView.attach();
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZ2l0bGFiL2xpYi9naXRsYWIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBRSxzQkFBd0IsT0FBQSxDQUFRLE1BQVI7O0VBQzFCLE1BQUEsR0FBUyxPQUFBLENBQVEsb0JBQVI7O0VBQ1QsWUFBQSxHQUFlLE9BQUEsQ0FBUSxpQkFBUjs7RUFFZixNQUFNLENBQUMsT0FBUCxHQUFpQixNQUFBLEdBQ2Y7SUFBQSxZQUFBLEVBQWMsSUFBZDtJQUNBLE1BQUEsRUFBUSxNQURSO0lBR0EsUUFBQSxFQUFVLFNBQUMsS0FBRDtBQUNSLFVBQUE7TUFEUyxJQUFDLENBQUEsUUFBRDtNQUNULElBQUMsQ0FBQSxXQUFELEdBQWUsSUFBSTtNQUNuQixJQUEyQixJQUFDLENBQUEsWUFBRCxDQUFBLENBQTNCOztjQUFNLENBQUMsV0FBWTtTQUFuQjs7TUFFQSxJQUFrQixJQUFDLENBQUEsS0FBSyxDQUFDLFFBQXpCO1FBQUEsSUFBQyxDQUFBLFdBQUQsQ0FBQSxFQUFBOzthQUVBLElBQUMsQ0FBQSxXQUFXLENBQUMsR0FBYixDQUFpQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQW9DO1FBQUEsd0JBQUEsRUFBMEIsQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQTttQkFBRyxLQUFDLENBQUEsTUFBRCxDQUFBO1VBQUg7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTFCO09BQXBDLENBQWpCO0lBTlEsQ0FIVjtJQVdBLFVBQUEsRUFBWSxTQUFBO0FBQ1YsVUFBQTtNQUFBLElBQUMsQ0FBQSxXQUFXLENBQUMsT0FBYixDQUFBOztXQUNhLENBQUUsVUFBZixDQUFBOzthQUNBLElBQUMsQ0FBQSxZQUFELEdBQWdCO0lBSE4sQ0FYWjtJQWdCQSxTQUFBLEVBQVcsU0FBQTtBQUNULFVBQUE7YUFBQTtRQUFBLGlCQUFBLHlDQUFnQyxDQUFFLFNBQWYsQ0FBQSxVQUFuQjs7SUFEUyxDQWhCWDtJQW1CQSxXQUFBLEVBQWEsU0FBQTtNQUNYLElBQU8seUJBQVA7UUFDRSxJQUFDLENBQUEsWUFBRCxHQUFnQixJQUFJLFlBQUosQ0FBaUIsSUFBQyxDQUFBLEtBQUssQ0FBQyxpQkFBeEIsRUFEbEI7O2FBR0EsSUFBQyxDQUFBO0lBSlUsQ0FuQmI7SUF5QkEsWUFBQSxFQUFjLFNBQUE7YUFDWjtJQURZLENBekJkO0lBNEJBLE1BQUEsRUFBUSxTQUFBO0FBQ04sVUFBQTtNQUFBLDJDQUFnQixDQUFFLFNBQWYsQ0FBQSxVQUFIO2VBQ0UsSUFBQyxDQUFBLFlBQVksQ0FBQyxNQUFkLENBQUEsRUFERjtPQUFBLE1BQUE7UUFHRSxJQUFDLENBQUEsV0FBRCxDQUFBO2VBQ0EsSUFBQyxDQUFBLFlBQVksQ0FBQyxNQUFkLENBQUEsRUFKRjs7SUFETSxDQTVCUjs7QUFMRiIsInNvdXJjZXNDb250ZW50IjpbInsgQ29tcG9zaXRlRGlzcG9zYWJsZSB9ID0gcmVxdWlyZSAnYXRvbSdcbkNvbmZpZyA9IHJlcXVpcmUgJy4uL2NvbmZpZy9zZXR0aW5ncydcblByb2plY3RzVmlldyA9IHJlcXVpcmUgJy4vcHJvamVjdHMtdmlldydcblxubW9kdWxlLmV4cG9ydHMgPSBHaXRMYWIgPVxuICBwcm9qZWN0c1ZpZXc6IG51bGxcbiAgY29uZmlnOiBDb25maWdcblxuICBhY3RpdmF0ZTogKEBzdGF0ZSkgLT5cbiAgICBAZGlzcG9zYWJsZXMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZVxuICAgIEBzdGF0ZS5hdHRhY2hlZCA/PSB0cnVlIGlmIEBzaG91bGRBdHRhY2goKVxuXG4gICAgQGNyZWF0ZVZpZXdzKCkgaWYgQHN0YXRlLmF0dGFjaGVkXG5cbiAgICBAZGlzcG9zYWJsZXMuYWRkIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXdvcmtzcGFjZScsICdnaXRsYWI6dG9nZ2xlLXByb2plY3RzJzogPT4gQHRvZ2dsZSgpXG5cbiAgZGVhY3RpdmF0ZTogLT5cbiAgICBAZGlzcG9zYWJsZXMuZGlzcG9zZSgpXG4gICAgQHByb2plY3RzVmlldz8uZGVhY3RpdmF0ZSgpXG4gICAgQHByb2plY3RzVmlldyA9IG51bGxcblxuICBzZXJpYWxpemU6IC0+XG4gICAgcHJvamVjdHNWaWV3U3RhdGU6IEBwcm9qZWN0c1ZpZXc/LnNlcmlhbGl6ZSgpXG5cbiAgY3JlYXRlVmlld3M6IC0+XG4gICAgdW5sZXNzIEBwcm9qZWN0c1ZpZXc/XG4gICAgICBAcHJvamVjdHNWaWV3ID0gbmV3IFByb2plY3RzVmlldyBAc3RhdGUucHJvamVjdHNWaWV3U3RhdGVcblxuICAgIEBwcm9qZWN0c1ZpZXdcblxuICBzaG91bGRBdHRhY2g6IC0+XG4gICAgdHJ1ZVxuXG4gIHRvZ2dsZTogLT5cbiAgICBpZiBAcHJvamVjdHNWaWV3Py5pc1Zpc2libGUoKVxuICAgICAgQHByb2plY3RzVmlldy50b2dnbGUoKVxuICAgIGVsc2VcbiAgICAgIEBjcmVhdGVWaWV3cygpXG4gICAgICBAcHJvamVjdHNWaWV3LmF0dGFjaCgpXG4iXX0=
