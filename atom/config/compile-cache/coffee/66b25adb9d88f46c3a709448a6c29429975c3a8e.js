(function() {
  var $, $$, CompositeDisposable, ProjectsView, Requester, ScrollView, SelectListView, gitlab, ref,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = require('atom-space-pen-views'), $ = ref.$, $$ = ref.$$, ScrollView = ref.ScrollView, SelectListView = ref.SelectListView;

  CompositeDisposable = require('atom').CompositeDisposable;

  Requester = require('./requester');

  gitlab = new Requester;

  module.exports = ProjectsView = (function(superClass) {
    extend(ProjectsView, superClass);

    function ProjectsView() {
      return ProjectsView.__super__.constructor.apply(this, arguments);
    }

    ProjectsView.prototype.panel = null;

    ProjectsView.content = function() {
      return this.div({
        "class": 'gitlab'
      }, (function(_this) {
        return function() {
          return _this.div({
            "class": 'panel'
          }, function() {
            return _this.div({
              outlet: 'panelText',
              "class": 'padded'
            }, function() {
              _this.div({
                "class": 'block gitlab-title'
              }, function() {
                _this.h4({
                  "class": 'inline-block'
                }, 'GitLab');
                return _this.span({
                  "class": 'badge badge-large icon icon-repo gitlab-projects-count',
                  outlet: 'repoCount'
                }, 0);
              });
              return _this.div({
                "class": 'btn-toolbar'
              }, function() {
                return _this.div({
                  "class": 'block btn-group'
                }, function() {
                  _this.button({
                    "class": 'btn icon icon-repo-clone',
                    outlet: 'btnClone'
                  }, 'Clone');
                  _this.button({
                    "class": 'btn icon icon-repo-create',
                    outlet: 'btnCreate'
                  }, 'Create');
                  return _this.button({
                    "class": 'btn icon icon-repo-sync',
                    outlet: 'btnSync'
                  }, 'Sync');
                });
              });
            });
          });
        };
      })(this));
    };

    ProjectsView.prototype.initialize = function(state) {
      this.disposables = new CompositeDisposable;
      if (state != null ? state.attached : void 0) {
        return this.attach();
      }
    };

    ProjectsView.prototype.serialize = function() {
      return {
        attached: this.panel != null
      };
    };

    ProjectsView.prototype.deactivate = function() {
      this.disposables.dispose();
      if (this.panel != null) {
        return this.detach();
      }
    };

    ProjectsView.prototype.getTitle = function() {
      return "GitLab";
    };

    ProjectsView.prototype.updateProjectsCount = function() {
      return gitlab.getProjects().then((function(_this) {
        return function(projects) {
          _this.repoCount.context.style.display = void 0;
          return _this.repoCount.context.innerHTML = projects.length;
        };
      })(this))["catch"]((function(_this) {
        return function(error) {
          console.error(error);
          return _this.repoCount.context.style.display = 'none';
        };
      })(this));
    };

    ProjectsView.prototype.attach = function() {
      this.updateProjectsCount();
      if (atom.config.get('gitlab.position') === 'right') {
        return this.panel != null ? this.panel : this.panel = atom.workspace.addRightPanel({
          item: this
        });
      } else {
        return this.panel != null ? this.panel : this.panel = atom.workspace.addLeftPanel({
          item: this
        });
      }
    };

    ProjectsView.prototype.detach = function() {
      this.panel.destroy();
      return this.panel = null;
    };

    ProjectsView.prototype.toggle = function() {
      if (this.isVisible()) {
        return this.detach();
      } else {
        return this.attach();
      }
    };

    return ProjectsView;

  })(ScrollView);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZ2l0bGFiL2xpYi9wcm9qZWN0cy12aWV3LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsNEZBQUE7SUFBQTs7O0VBQUEsTUFBc0MsT0FBQSxDQUFRLHNCQUFSLENBQXRDLEVBQUMsU0FBRCxFQUFJLFdBQUosRUFBUSwyQkFBUixFQUFvQjs7RUFDbkIsc0JBQXVCLE9BQUEsQ0FBUSxNQUFSOztFQUV4QixTQUFBLEdBQVksT0FBQSxDQUFRLGFBQVI7O0VBRVosTUFBQSxHQUFTLElBQUk7O0VBRWIsTUFBTSxDQUFDLE9BQVAsR0FDTTs7Ozs7OzsyQkFDSixLQUFBLEdBQU87O0lBRVAsWUFBQyxDQUFBLE9BQUQsR0FBVSxTQUFBO2FBQ1IsSUFBQyxDQUFBLEdBQUQsQ0FBSztRQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sUUFBUDtPQUFMLEVBQXNCLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtpQkFDcEIsS0FBQyxDQUFBLEdBQUQsQ0FBSztZQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sT0FBUDtXQUFMLEVBQXFCLFNBQUE7bUJBQ25CLEtBQUMsQ0FBQSxHQUFELENBQUs7Y0FBQSxNQUFBLEVBQVEsV0FBUjtjQUFxQixDQUFBLEtBQUEsQ0FBQSxFQUFPLFFBQTVCO2FBQUwsRUFBMkMsU0FBQTtjQUN6QyxLQUFDLENBQUEsR0FBRCxDQUFLO2dCQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sb0JBQVA7ZUFBTCxFQUFrQyxTQUFBO2dCQUNoQyxLQUFDLENBQUEsRUFBRCxDQUFJO2tCQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sY0FBUDtpQkFBSixFQUEyQixRQUEzQjt1QkFDQSxLQUFDLENBQUEsSUFBRCxDQUFNO2tCQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sd0RBQVA7a0JBQWlFLE1BQUEsRUFBUSxXQUF6RTtpQkFBTixFQUE0RixDQUE1RjtjQUZn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T0FBQSxNQUFBO2VBR0UsSUFBQyxDQUFBLE1BQUQsQ0FBQSxFQUhGOztJQURNOzs7O0tBbERpQjtBQVIzQiIsInNvdXJjZXNDb250ZW50IjpbInskLCAkJCwgU2Nyb2xsVmlldywgU2VsZWN0TGlzdFZpZXd9ID0gcmVxdWlyZSAnYXRvbS1zcGFjZS1wZW4tdmlld3MnXG57Q29tcG9zaXRlRGlzcG9zYWJsZX0gPSByZXF1aXJlICdhdG9tJ1xuXG5SZXF1ZXN0ZXIgPSByZXF1aXJlKCcuL3JlcXVlc3RlcicpXG5cbmdpdGxhYiA9IG5ldyBSZXF1ZXN0ZXJcblxubW9kdWxlLmV4cG9ydHMgPVxuY2xhc3MgUHJvamVjdHNWaWV3IGV4dGVuZHMgU2Nyb2xsVmlld1xuICBwYW5lbDogbnVsbFxuXG4gIEBjb250ZW50OiAtPlxuICAgIEBkaXYgY2xhc3M6ICdnaXRsYWInLCA9PlxuICAgICAgQGRpdiBjbGFzczogJ3BhbmVsJywgPT5cbiAgICAgICAgQGRpdiBvdXRsZXQ6ICdwYW5lbFRleHQnLCBjbGFzczogJ3BhZGRlZCcsID0+XG4gICAgICAgICAgQGRpdiBjbGFzczogJ2Jsb2NrIGdpdGxhYi10aXRsZScsID0+XG4gICAgICAgICAgICBAaDQgY2xhc3M6ICdpbmxpbmUtYmxvY2snLCAnR2l0TGFiJ1xuICAgICAgICAgICAgQHNwYW4gY2xhc3M6ICdiYWRnZSBiYWRnZS1sYXJnZSBpY29uIGljb24tcmVwbyBnaXRsYWItcHJvamVjdHMtY291bnQnLCBvdXRsZXQ6ICdyZXBvQ291bnQnLCAwXG4gICAgICAgICAgQGRpdiBjbGFzczogJ2J0bi10b29sYmFyJywgPT5cbiAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdibG9jayBidG4tZ3JvdXAnLCA9PlxuICAgICAgICAgICAgICBAYnV0dG9uIGNsYXNzOiAnYnRuIGljb24gaWNvbi1yZXBvLWNsb25lJywgb3V0bGV0OiAnYnRuQ2xvbmUnLCAnQ2xvbmUnXG4gICAgICAgICAgICAgIEBidXR0b24gY2xhc3M6ICdidG4gaWNvbiBpY29uLXJlcG8tY3JlYXRlJywgb3V0bGV0OiAnYnRuQ3JlYXRlJywgJ0NyZWF0ZSdcbiAgICAgICAgICAgICAgQGJ1dHRvbiBjbGFzczogJ2J0biBpY29uIGljb24tcmVwby1zeW5jJywgb3V0bGV0OiAnYnRuU3luYycsICdTeW5jJ1xuXG4gIGluaXRpYWxpemU6IChzdGF0ZSkgLT5cbiAgICBAZGlzcG9zYWJsZXMgPSBuZXcgQ29tcG9zaXRlRGlzcG9zYWJsZVxuICAgIEBhdHRhY2goKSBpZiBzdGF0ZT8uYXR0YWNoZWRcblxuICBzZXJpYWxpemU6IC0+XG4gICAgYXR0YWNoZWQ6IEBwYW5lbD9cblxuICBkZWFjdGl2YXRlOiAtPlxuICAgIEBkaXNwb3NhYmxlcy5kaXNwb3NlKClcbiAgICBAZGV0YWNoKCkgaWYgQHBhbmVsP1xuXG4gIGdldFRpdGxlOiAtPlxuICAgIFwiR2l0TGFiXCJcblxuICB1cGRhdGVQcm9qZWN0c0NvdW50OiAtPlxuICAgIGdpdGxhYi5nZXRQcm9qZWN0cygpXG4gICAgICAudGhlbiAocHJvamVjdHMpID0+XG4gICAgICAgIEByZXBvQ291bnQuY29udGV4dC5zdHlsZS5kaXNwbGF5ID0gdW5kZWZpbmVkO1xuICAgICAgICBAcmVwb0NvdW50LmNvbnRleHQuaW5uZXJIVE1MID0gcHJvamVjdHMubGVuZ3RoXG4gICAgICAuY2F0Y2ggKGVycm9yKSA9PlxuICAgICAgICBjb25zb2xlLmVycm9yIGVycm9yXG4gICAgICAgIEByZXBvQ291bnQuY29udGV4dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGF0dGFjaDogLT5cbiAgICBAdXBkYXRlUHJvamVjdHNDb3VudCgpXG4gICAgaWYgYXRvbS5jb25maWcuZ2V0KCdnaXRsYWIucG9zaXRpb24nKSA9PSAncmlnaHQnXG4gICAgICBAcGFuZWwgPz0gYXRvbS53b3Jrc3BhY2UuYWRkUmlnaHRQYW5lbCBpdGVtOiB0aGlzXG4gICAgZWxzZVxuICAgICAgQHBhbmVsID89IGF0b20ud29ya3NwYWNlLmFkZExlZnRQYW5lbCBpdGVtOiB0aGlzXG5cbiAgZGV0YWNoOiAtPlxuICAgIEBwYW5lbC5kZXN0cm95KClcbiAgICBAcGFuZWwgPSBudWxsXG5cbiAgdG9nZ2xlOiAtPlxuICAgIGlmIEBpc1Zpc2libGUoKVxuICAgICAgQGRldGFjaCgpXG4gICAgZWxzZVxuICAgICAgQGF0dGFjaCgpXG5cbiAgIyBUZWFyIGRvd24gYW55IHN0YXRlIGFuZCBkZXRhY2hcbiAgIyBkZXN0cm95OiAtPlxuICAjICAgIyBAcm9vdC5yZW1vdmUoKVxuICAjXG4gICMgZ2V0RWxlbWVudDogLT5cbiAgIyAgIEByb290XG4iXX0=
