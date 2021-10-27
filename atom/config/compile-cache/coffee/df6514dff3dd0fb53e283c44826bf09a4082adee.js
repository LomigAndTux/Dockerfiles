(function() {
  var PU, Preferences, PreferencesSettings;

  PU = require('./preferences-util');

  PreferencesSettings = require('./preferences-settings');

  Preferences = (function() {
    var applyInstallPanelOnSwitch;

    function Preferences() {}

    Preferences.localize = function(defS) {
      this.defS = defS;
      this.updateSettings();
      return atom.workspace.onDidChangeActivePaneItem((function(_this) {
        return function(item) {
          if (item !== void 0) {
            if (item.uri !== void 0) {
              if (item.uri.indexOf('atom://config') !== -1) {
                if (!window.FrenchMenu.pref.done) {
                  return _this.updateSettings(true);
                }
              }
            }
          }
        };
      })(this));
    };

    Preferences.updateSettings = function(onSettingsOpen) {
      if (onSettingsOpen == null) {
        onSettingsOpen = false;
      }
      return setTimeout(this.delaySettings, 0, onSettingsOpen);
    };

    Preferences.delaySettings = function(onSettingsOpen) {
      var btn, btns, e, editorPane, handler, i, len, settingsEnabled, settingsTab;
      settingsTab = document.querySelector('.tab-bar [data-type="SettingsView"]');
      if (settingsTab) {
        settingsEnabled = settingsTab.className.includes('active');
      }
      if (!(settingsTab && settingsEnabled)) {
        return;
      }
      try {
        settingsTab.querySelector('.title').textContent = "Paramètres";
        Preferences.sv = document.querySelector('.settings-view');
        Preferences.loadAllSettingsPanels();
        PreferencesSettings.localize();
        Preferences.applyLeftSide();
        btns = Preferences.sv.querySelectorAll('div.section:not(.themes-panel) .search-container .btn');
        for (i = 0, len = btns.length; i < len; i++) {
          btn = btns[i];
          btn.addEventListener('click', applyInstallPanelOnSwitch);
        }
        window.FrenchMenu.pref.done = true;
        editorPane = atom.workspace.getActivePane();
        if (editorPane) {
          return handler = editorPane.onDidRemoveItem(function(event) {
            if (event.item.uri === 'atom://config') {
              window.FrenchMenu.pref.done = false;
            }
            return handler.dispose();
          });
        }
      } catch (error) {
        e = error;
        return console.error("Echec de traduction en Francais", e);
      }
    };

    Preferences.loadAllSettingsPanels = function() {
      var i, lastMenu, len, panelMenus, pm;
      lastMenu = Preferences.sv.querySelector('.panels-menu .active a');
      panelMenus = Preferences.sv.querySelectorAll('.settings-view .panels-menu li a');
      for (i = 0, len = panelMenus.length; i < len; i++) {
        pm = panelMenus[i];
        pm.click();
        pm.addEventListener('click', applyInstallPanelOnSwitch);
      }
      if (lastMenu) {
        return lastMenu.click();
      }
    };

    Preferences.applyLeftSide = function() {
      var d, el, ext, i, len, menu, ref;
      menu = Preferences.sv.querySelector('.settings-view .panels-menu');
      if (!menu) {
        return;
      }
      ref = Preferences.defS.Settings.menu;
      for (i = 0, len = ref.length; i < len; i++) {
        d = ref[i];
        el = menu.querySelector("[name='" + d.label + "']>a");
        PU.applyTextWithOrg(el, d.value);
      }
      ext = Preferences.sv.querySelector('.settings-view .icon-link-external');
      return PU.applyTextWithOrg(ext, "Dossier de config.");
    };

    applyInstallPanelOnSwitch = function() {
      var info, inst;
      PU.applySectionHeadings(true);
      PU.applyButtonToolbar();
      inst = document.querySelector('div.section:not(.themes-panel)');
      info = inst.querySelector('.native-key-bindings');
      return info.querySelector('span:nth-child(2)').textContent = "Les thèmes et packages sont publiés sur ";
    };

    return Preferences;

  })();

  module.exports = Preferences;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZnJlbmNoLW1lbnUvbGliL3ByZWZlcmVuY2VzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxvQkFBUjs7RUFDTCxtQkFBQSxHQUFzQixPQUFBLENBQVEsd0JBQVI7O0VBRWhCO0FBRUosUUFBQTs7OztJQUFBLFdBQUMsQ0FBQSxRQUFELEdBQVcsU0FBQyxJQUFEO01BQ1QsSUFBQyxDQUFBLElBQUQsR0FBUTtNQUNSLElBQUMsQ0FBQSxjQUFELENBQUE7YUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUFmLENBQXlDLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQyxJQUFEO1VBQ3ZDLElBQUcsSUFBQSxLQUFVLE1BQWI7WUFDRSxJQUFHLElBQUksQ0FBQyxHQUFMLEtBQWMsTUFBakI7Y0FDRSxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBVCxDQUFpQixlQUFqQixDQUFBLEtBQXVDLENBQUMsQ0FBM0M7Z0JBQ0UsSUFBQSxDQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQTlCO3lCQUNFLEtBQUMsQ0FBQSxjQUFELENBQWdCLElBQWhCLEVBREY7aUJBREY7ZUFERjthQURGOztRQUR1QztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBekM7SUFIUzs7SUFVWCxXQUFDLENBQUEsY0FBRCxHQUFpQixTQUFDLGNBQUQ7O1FBQUMsaUJBQWlCOzthQUNqQyxVQUFBLENBQVcsSUFBQyxDQUFBLGFBQVosRUFBMkIsQ0FBM0IsRUFBOEIsY0FBOUI7SUFEZTs7SUFHakIsV0FBQyxDQUFBLGFBQUQsR0FBZ0IsU0FBQyxjQUFEO0FBQ2QsVUFBQTtNQUFBLFdBQUEsR0FBYyxRQUFRLENBQUMsYUFBVCxDQUF1QixxQ0FBdkI7TUFDZCxJQUE2RCxXQUE3RDtRQUFBLGVBQUEsR0FBa0Is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Y2VzLXV0aWwnXG5QcmVmZXJlbmNlc1NldHRpbmdzID0gcmVxdWlyZSAnLi9wcmVmZXJlbmNlcy1zZXR0aW5ncydcblxuY2xhc3MgUHJlZmVyZW5jZXNcblxuICBAbG9jYWxpemU6IChkZWZTKSAtPlxuICAgIEBkZWZTID0gZGVmU1xuICAgIEB1cGRhdGVTZXR0aW5ncygpXG4gICAgYXRvbS53b3Jrc3BhY2Uub25EaWRDaGFuZ2VBY3RpdmVQYW5lSXRlbSAoaXRlbSkgPT5cbiAgICAgIGlmIGl0ZW0gaXNudCB1bmRlZmluZWRcbiAgICAgICAgaWYgaXRlbS51cmkgaXNudCB1bmRlZmluZWRcbiAgICAgICAgICBpZiBpdGVtLnVyaS5pbmRleE9mKCdhdG9tOi8vY29uZmlnJykgaXNudCAtMVxuICAgICAgICAgICAgdW5sZXNzIHdpbmRvdy5GcmVuY2hNZW51LnByZWYuZG9uZVxuICAgICAgICAgICAgICBAdXBkYXRlU2V0dGluZ3ModHJ1ZSlcblxuICBAdXBkYXRlU2V0dGluZ3M6IChvblNldHRpbmdzT3BlbiA9IGZhbHNlKSAtPlxuICAgIHNldFRpbWVvdXQoQGRlbGF5U2V0dGluZ3MsIDAsIG9uU2V0dGluZ3NPcGVuKVxuXG4gIEBkZWxheVNldHRpbmdzOiAob25TZXR0aW5nc09wZW4pID0+XG4gICAgc2V0dGluZ3NUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWJhciBbZGF0YS10eXBlPVwiU2V0dGluZ3NWaWV3XCJdJylcbiAgICBzZXR0aW5nc0VuYWJsZWQgPSBzZXR0aW5nc1RhYi5jbGFzc05hbWUuaW5jbHVkZXMgJ2FjdGl2ZScgaWYgc2V0dGluZ3NUYWJcbiAgICByZXR1cm4gdW5sZXNzIHNldHRpbmdzVGFiICYmIHNldHRpbmdzRW5hYmxlZFxuICAgIHRyeVxuICAgICAgIyBUYWIgdGl0bGVcbiAgICAgIHNldHRpbmdzVGFiLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnRleHRDb250ZW50ID0gXCJQYXJhbcOodHJlc1wiXG5cbiAgICAgIEBzdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy12aWV3JylcblxuICAgICAgQGxvYWRBbGxTZXR0aW5nc1BhbmVscygpXG5cbiAgICAgIFByZWZlcmVuY2VzU2V0dGluZ3MubG9jYWxpemUoKVxuXG4gICAgICBAYXBwbHlMZWZ0U2lkZSgpXG5cbiAgICAgICMgQWRkIEV2ZW50c1xuICAgICAgYnRucyA9IEBzdi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuc2VjdGlvbjpub3QoLnRoZW1lcy1wYW5lbCkgLnNlYXJjaC1jb250YWluZXIgLmJ0bicpXG4gICAgICBmb3IgYnRuIGluIGJ0bnNcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlJbnN0YWxsUGFuZWxPblN3aXRjaClcblxuICAgICAgd2luZG93LkZyZW5jaE1lbnUucHJlZi5kb25lID0gdHJ1ZVxuXG4gICAgICAjIFJlc3RvcmUgdGhlIGZsYWcgd2hlbiB0aGUgc2V0dGluZ3MgcGFuZWwgaXMgY2xvc2VkXG4gICAgICBlZGl0b3JQYW5lID0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlUGFuZSgpXG4gICAgICBpZiBlZGl0b3JQYW5lXG4gICAgICAgIGhhbmRsZXIgPSBlZGl0b3JQYW5lLm9uRGlkUmVtb3ZlSXRlbSAoZXZlbnQpID0+XG4gICAgICAgICAgaWYgZXZlbnQuaXRlbS51cmkgPT0gJ2F0b206Ly9jb25maWcnXG4gICAgICAgICAgICB3aW5kb3cuRnJlbmNoTWVudS5wcmVmLmRvbmUgPSBmYWxzZVxuICAgICAgICAgIGhhbmRsZXIuZGlzcG9zZSgpXG4gICAgY2F0Y2ggZVxuICAgICAgY29uc29sZS5lcnJvciBcIkVjaGVjIGRlIHRyYWR1Y3Rpb24gZW4gRnJhbmNhaXNcIiwgZVxuXG4gIEBsb2FkQWxsU2V0dGluZ3NQYW5lbHM6ICgpID0+XG4gICAgIyBMb2FkIGFsbCBzZXR0aW5ncyBwYW5lbHNcbiAgICBsYXN0TWVudSA9IEBzdi5xdWVyeVNlbGVjdG9yKCcucGFuZWxzLW1lbnUgLmFjdGl2ZSBhJylcbiAgICBwYW5lbE1lbnVzID0gQHN2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXR0aW5ncy12aWV3IC5wYW5lbHMtbWVudSBsaSBhJylcbiAgICBmb3IgcG0gaW4gcGFuZWxNZW51c1xuICAgICAgcG0uY2xpY2soKVxuICAgICAgcG0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUluc3RhbGxQYW5lbE9uU3dpdGNoKVxuICAgICMgUmVzdG9yZSBsYXN0IGFjdGl2ZSBtZW51XG4gICAgbGFzdE1lbnUuY2xpY2soKSBpZiBsYXN0TWVudVxuXG4gIEBhcHBseUxlZnRTaWRlOiAoKSA9PlxuICAgICMgTGVmdC1zaWRlIG1lbnVcbiAgICBtZW51ID0gQHN2LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy12aWV3IC5wYW5lbHMtbWVudScpXG4gICAgcmV0dXJuIHVubGVzcyBtZW51XG4gICAgZm9yIGQgaW4gQGRlZlMuU2V0dGluZ3MubWVudVxuICAgICAgZWwgPSBtZW51LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0nI3tkLmxhYmVsfSddPmFcIilcbiAgICAgIFBVLmFwcGx5VGV4dFdpdGhPcmcgZWwsIGQudmFsdWVcblxuICAgICMgTGVmdC1zaWRlIGJ1dHRvblxuICAgIGV4dCA9IEBzdi5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtdmlldyAuaWNvbi1saW5rLWV4dGVybmFsJylcbiAgICBQVS5hcHBseVRleHRXaXRoT3JnIGV4dCwgXCJEb3NzaWVyIGRlIGNvbmZpZy5cIlxuXG4gIGFwcGx5SW5zdGFsbFBhbmVsT25Td2l0Y2ggPSAoKSAtPlxuICAgIFBVLmFwcGx5U2VjdGlvbkhlYWRpbmdzKHRydWUpXG4gICAgUFUuYXBwbHlCdXR0b25Ub29sYmFyKClcbiAgICBpbnN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnNlY3Rpb246bm90KC50aGVtZXMtcGFuZWwpJylcbiAgICBpbmZvID0gaW5zdC5xdWVyeVNlbGVjdG9yKCcubmF0aXZlLWtleS1iaW5kaW5ncycpXG4gICAgaW5mby5xdWVyeVNlbGVjdG9yKCdzcGFuOm50aC1jaGlsZCgyKScpLnRleHRDb250ZW50ID0gXCJMZXMgdGjDqG1lcyBldCBwYWNrYWdlcyBzb250IHB1Ymxpw6lzIHN1ciBcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IFByZWZlcmVuY2VzXG4iXX0=
