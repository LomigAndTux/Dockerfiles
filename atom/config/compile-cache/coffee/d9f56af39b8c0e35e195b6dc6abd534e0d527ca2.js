(function() {
  var ContextMenu, FrenchMenu, Menu, Preferences,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Menu = require('./menu');

  ContextMenu = require('./context-menu');

  Preferences = require('./preferences');

  FrenchMenu = (function() {
    FrenchMenu.prototype.pref = {
      done: false
    };

    function FrenchMenu() {
      this.delay = bind(this.delay, this);
      this.defM = require("../def/menu_" + process.platform);
      this.defC = require("../def/context");
      this.defS = require("../def/settings");
    }

    FrenchMenu.prototype.activate = function(state) {
      return setTimeout(this.delay, atom.config.get('french-menu.delay'));
    };

    FrenchMenu.prototype.delay = function() {
      Menu.localize(this.defM);
      ContextMenu.localize(this.defC);
      return Preferences.localize(this.defS);
    };

    return FrenchMenu;

  })();

  module.exports = window.FrenchMenu = new FrenchMenu();

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZnJlbmNoLW1lbnUvbGliL21haW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSwwQ0FBQTtJQUFBOztFQUFBLElBQUEsR0FBYyxPQUFBLENBQVEsUUFBUjs7RUFDZCxXQUFBLEdBQWMsT0FBQSxDQUFRLGdCQUFSOztFQUNkLFdBQUEsR0FBYyxPQUFBLENBQVEsZUFBUjs7RUFFUjt5QkFFSixJQUFBLEdBQU07TUFBQyxJQUFBLEVBQU0sS0FBUDs7O0lBRU8sb0JBQUE7O01BQ1gsSUFBQyxDQUFBLElBQUQsR0FBUSxPQUFBLENBQVEsY0FBQSxHQUFlLE9BQU8sQ0FBQyxRQUEvQjtNQUNSLElBQUMsQ0FBQSxJQUFELEdBQVEsT0FBQSxDQUFRLGdCQUFSO01BQ1IsSUFBQyxDQUFBLElBQUQsR0FBUSxPQUFBLENBQVEsaUJBQVI7SUFIRzs7eUJBS2IsUUFBQSxHQUFVLFNBQUMsS0FBRDthQUNSLFVBQUEsQ0FBVyxJQUFDLENBQUEsS0FBWixFQUFtQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsbUJBQWhCLENBQW5CO0lBRFE7O3lCQUdWLEtBQUEsR0FBTyxTQUFBO01BQ0wsSUFBSSxDQUFDLFFBQUwsQ0FBYyxJQUFDLENBQUEsSUFBZjtNQUNBLFdBQVcsQ0FBQyxRQUFaLENBQXFCLElBQUMsQ0FBQSxJQUF0QjthQUNBLFdBQVcsQ0FBQyxRQUFaLENBQXFCLElBQUMsQ0FBQSxJQUF0QjtJQUhLOzs7Ozs7RUFNVCxNQUFNLENBQUMsT0FBUCxHQUFpQixNQUFNLENBQUMsVUFBUCxHQUFvQixJQUFJLFVBQUosQ0FBQTtBQXRCckMiLCJzb3VyY2VzQ29udGVudCI6WyJNZW51ICAgICAgICA9IHJlcXVpcmUgJy4vbWVudSdcbkNvbnRleHRNZW51ID0gcmVxdWlyZSAnLi9jb250ZXh0LW1lbnUnXG5QcmVmZXJlbmNlcyA9IHJlcXVpcmUgJy4vcHJlZmVyZW5jZXMnXG5cbmNsYXNzIEZyZW5jaE1lbnVcblxuICBwcmVmOiB7ZG9uZTogZmFsc2V9XG5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgQGRlZk0gPSByZXF1aXJlIFwiLi4vZGVmL21lbnVfI3twcm9jZXNzLnBsYXRmb3JtfVwiXG4gICAgQGRlZkMgPSByZXF1aXJlIFwiLi4vZGVmL2NvbnRleHRcIlxuICAgIEBkZWZTID0gcmVxdWlyZSBcIi4uL2RlZi9zZXR0aW5nc1wiXG5cbiAgYWN0aXZhdGU6IChzdGF0ZSkgLT5cbiAgICBzZXRUaW1lb3V0KEBkZWxheSwgYXRvbS5jb25maWcuZ2V0KCdmcmVuY2gtbWVudS5kZWxheScpKVxuXG4gIGRlbGF5OiAoKSA9PlxuICAgIE1lbnUubG9jYWxpemUoQGRlZk0pXG4gICAgQ29udGV4dE1lbnUubG9jYWxpemUoQGRlZkMpXG4gICAgUHJlZmVyZW5jZXMubG9jYWxpemUoQGRlZlMpXG5cblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuRnJlbmNoTWVudSA9IG5ldyBGcmVuY2hNZW51KClcbiJdfQ==
