(function() {
  var Axios, GitLab, axios, conf;

  Axios = require('axios');

  conf = (function(_this) {
    return function() {
      return {
        url: atom.config.get('gitlab.serverUrl') + '/api/v3',
        token: atom.config.get('gitlab.privateToken')
      };
    };
  })(this);

  axios = (function(_this) {
    return function(c) {
      return Axios.create({
        baseURL: c.url,
        headers: {
          'PRIVATE-TOKEN': c.token
        }
      });
    };
  })(this);

  module.exports = GitLab = (function() {
    var inst, projects;

    inst = null;

    projects = [];

    function GitLab() {
      this.inst = axios(conf());
    }

    GitLab.prototype.getProjects = function() {
      return this.inst.get('/projects').then((function(_this) {
        return function(response) {
          return _this.projects = response.data;
        };
      })(this));
    };

    return GitLab;

  })();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZ2l0bGFiL2xpYi9yZXF1ZXN0ZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0FBQUEsTUFBQTs7RUFBQSxLQUFBLEdBQVEsT0FBQSxDQUFRLE9BQVI7O0VBRVIsSUFBQSxHQUFPLENBQUEsU0FBQSxLQUFBO1dBQUEsU0FBQTthQUNMO1FBQUEsR0FBQSxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixrQkFBaEIsQ0FBQSxHQUFzQyxTQUEzQztRQUNBLEtBQUEsRUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IscUJBQWhCLENBRFA7O0lBREs7RUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBOztFQUlQLEtBQUEsR0FBUSxDQUFBLFNBQUEsS0FBQTtXQUFBLFNBQUMsQ0FBRDthQUNOLEtBQUssQ0FBQyxNQUFOLENBQ0U7UUFBQSxPQUFBLEVBQVMsQ0FBQyxDQUFDLEdBQVg7UUFDQSxPQUFBLEVBQ0U7VUFBQSxlQUFBLEVBQWlCLENBQUMsQ0FBQyxLQUFuQjtTQUZGO09BREY7SUFETTtFQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7O0VBTVIsTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUNKLFFBQUE7O0lBQUEsSUFBQSxHQUFPOztJQUNQLFFBQUEsR0FBVzs7SUFFRSxnQkFBQTtNQUNYLElBQUMsQ0FBQSxJQUFELEdBQVEsS0FBQSxDQUFNLElBQUEsQ0FBQSxDQUFOO0lBREc7O3FCQUdiLFdBQUEsR0FBYSxTQUFBO2FBQ1gsSUFBQyxDQUFBLElBQUksQ0FBQyxHQUFOLENBQVUsV0FBVixDQUNFLENBQUMsSUFESCxDQUNRLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxRQUFEO2lCQUFjLEtBQUMsQ0FBQSxRQUFELEdBQVksUUFBUSxDQUFDO1FBQW5DO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQURSO0lBRFc7Ozs7O0FBcEJmIiwic291cmNlc0NvbnRlbnQiOlsiXG5BeGlvcyA9IHJlcXVpcmUgJ2F4aW9zJ1xuXG5jb25mID0gKCkgPT5cbiAgdXJsOiBhdG9tLmNvbmZpZy5nZXQoJ2dpdGxhYi5zZXJ2ZXJVcmwnKSArICcvYXBpL3YzJ1xuICB0b2tlbjogYXRvbS5jb25maWcuZ2V0KCdnaXRsYWIucHJpdmF0ZVRva2VuJylcblxuYXhpb3MgPSAoYykgPT5cbiAgQXhpb3MuY3JlYXRlXG4gICAgYmFzZVVSTDogYy51cmxcbiAgICBoZWFkZXJzOlxuICAgICAgJ1BSSVZBVEUtVE9LRU4nOiBjLnRva2VuXG5cbm1vZHVsZS5leHBvcnRzID1cbmNsYXNzIEdpdExhYlxuICBpbnN0ID0gbnVsbFxuICBwcm9qZWN0cyA9IFtdXG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQGluc3QgPSBheGlvcyBjb25mKClcblxuICBnZXRQcm9qZWN0czogLT5cbiAgICBAaW5zdC5nZXQgJy9wcm9qZWN0cydcbiAgICAgIC50aGVuIChyZXNwb25zZSkgPT4gQHByb2plY3RzID0gcmVzcG9uc2UuZGF0YVxuIl19
