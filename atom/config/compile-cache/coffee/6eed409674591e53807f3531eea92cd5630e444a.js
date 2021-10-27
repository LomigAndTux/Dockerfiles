(function() {
  var PU, PreferencesSettings;

  PU = require('./preferences-util');

  PreferencesSettings = (function() {
    var applyTextContentBySettingsId;

    function PreferencesSettings() {}

    PreferencesSettings.localize = function() {
      this.defS = window.FrenchMenu.defS.Settings;
      this.sv = document.querySelector('.settings-view');
      this.localizeSettingsPanel();
      this.localizeKeybindingsPanel();
      this.localizeThemesPanel();
      this.localizeUpdatesPanel();
      this.localizeInstallPanel();
      return PU.applyButtonToolbar();
    };

    PreferencesSettings.localizeSettingsPanel = function() {
      var d, i, info, j, len, len1, note, ref, ref1, results;
      ref = this.defS.settings.notes;
      for (i = 0, len = ref.length; i < len; i++) {
        note = ref[i];
        info = this.sv.querySelector("[id='" + note.id + "']");
        if (!PU.isAlreadyLocalized(info)) {
          info.innerHTML = note.html;
          info.setAttribute('data-localized', 'true');
        }
      }
      ref1 = this.defS.settings.controls;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        d = ref1[j];
        results.push(applyTextContentBySettingsId(d));
      }
      return results;
    };

    applyTextContentBySettingsId = function(data) {
      var ctrl, el, i, len, o, ref, results, v;
      el = document.querySelector("[id='" + data.id + "']");
      if (!el) {
        return;
      }
      ctrl = el.closest('.control-group');
      PU.applyTextWithOrg(ctrl.querySelector('.setting-title'), data.title);
      PU.applyTextWithOrg(ctrl.querySelector('.setting-description'), data.desc);
      if (!data.select) {
        return;
      }
      ref = el.querySelectorAll("option");
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        o = ref[i];
        v = o.attributes["value"].value;
        results.push(o.innerText = data.select[v]);
      }
      return results;
    };

    PreferencesSettings.localizeKeybindingsPanel = function() {
      var info, span;
      info = PreferencesSettings.sv.querySelector('.keybinding-panel>div:nth-child(2)');
      if (!PU.isAlreadyLocalized(info)) {
        info.querySelector('span:nth-child(2)').textContent = "Vous pouvez modifier ces raccourcis claviers en les copiant ( ";
        info.querySelector('span:nth-child(4)').textContent = ") et en les collant dans";
        info.querySelector('a.link').textContent = " votre fichier de raccourcis clavier";
        span = document.createElement('span');
        span.textContent = ".";
        info.appendChild(span);
        return info.setAttribute('data-localized', 'true');
      }
    };

    PreferencesSettings.localizeThemesPanel = function() {
      var info, span, tp1, tp2;
      info = PreferencesSettings.sv.querySelector('.themes-panel>div>div:nth-child(2)');
      if (!PU.isAlreadyLocalized(info)) {
        info.querySelector('span').textContent = "Vous pouvez aussi ouvrir";
        info.querySelector('a.link').textContent = " votre feuille de style ";
        span = document.createElement('span');
        span.textContent = "pour modifier l'apparence d'Atom.";
        info.appendChild(span);
        tp1 = PreferencesSettings.sv.querySelector('.themes-picker>div:nth-child(1)');
        tp1.querySelector('.setting-title').textContent = "Thème de l'interface";
        tp1.querySelector('.setting-description').textContent = "Modifie l'apparence des onglets, de la barre de statut, la colonne de navigation et des menus déroulants.";
        tp2 = PreferencesSettings.sv.querySelector('.themes-picker>div:nth-child(2)');
        tp2.querySelector('.setting-title').textContent = "Thème de la syntaxe";
        tp2.querySelector('.setting-description').textContent = "Modifie l'apparence du texte dans l'éditeur.";
        return info.setAttribute('data-localized', 'true');
      }
    };

    PreferencesSettings.localizeUpdatesPanel = function() {
      PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.update-all-button.btn-primary'), "Tout mettre à jour");
      PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.update-all-button:not(.btn-primary)'), "Rechercher des mises à jour");
      PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.alert.icon-hourglass'), "Recherche de mises à jour...");
      return PU.applyTextWithOrg(PreferencesSettings.sv.querySelector('.alert.icon-heart'), "Tous les packages installés sont à jour ！");
    };

    PreferencesSettings.localizeInstallPanel = function() {
      var info, inst, span, tc;
      PU.applySectionHeadings();
      inst = document.querySelector('div.section:not(.themes-panel)');
      info = inst.querySelector('.native-key-bindings');
      if (!PU.isAlreadyLocalized(info)) {
        info.querySelector('span:nth-child(2)').textContent = "Les packages sont publiés sur ";
        tc = info.querySelector('span:nth-child(4)');
        tc.textContent = tc.textContent.replace("and are installed to", "et sont installés dans le répertoire suivant : ");
        span = document.createElement('span');
        span.textContent = "";
        info.appendChild(span);
        info.setAttribute('data-localized', 'true');
      }
      PU.applyTextWithOrg(inst.querySelector('.search-container .btn:nth-child(1)'), "Packages");
      return PU.applyTextWithOrg(inst.querySelector('.search-container .btn:nth-child(2)'), "Thèmes");
    };

    return PreferencesSettings;

  })();

  module.exports = PreferencesSettings;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZnJlbmNoLW1lbnUvbGliL3ByZWZlcmVuY2VzLXNldHRpbmdzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsRUFBQSxHQUFLLE9BQUEsQ0FBUSxvQkFBUjs7RUFFQztBQUVKLFFBQUE7Ozs7SUFBQSxtQkFBQyxDQUFBLFFBQUQsR0FBVyxTQUFBO01BRVQsSUFBQyxDQUFBLElBQUQsR0FBUSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztNQUMvQixJQUFDLENBQUEsRUFBRCxHQUFNLFFBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QjtNQUdOLElBQUMsQ0FBQSxxQkFBRCxDQUFBO01BR0EsSUFBQyxDQUFBLHdCQUFELENBQUE7TUFHQSxJQUFDLENBQUEsbUJBQUQsQ0FBQTtNQUdBLElBQUMsQ0FBQSxvQkFBRCxDQUFBO01BR0EsSUFBQyxDQUFBLG9CQUFELENBQUE7YUFHQSxFQUFFLENBQUMsa0JBQUgsQ0FBQTtJQXJCUzs7SUF1QlgsbUJBQUMsQ0FBQSxxQkFBRCxHQUF3QixTQUFBO0FBRXRCLFVBQUE7QUFBQTtBQUFBLFdBQUEscUNBQUE7O1FBQ0UsSUFBQSxHQUFPLElBQUMsQ0FBQSxFQUFFLENBQUMsYUFBSixDQUFrQixPQUFBLEdBQVEsSUFBSSxDQUFDLEVBQWIsR0FBZ0IsSUFBbEM7UUFDUCxJQUFBLENBQU8sRUFBRSxDQUFDLGtCQUFILENBQXNCLElBQXRCLENBQVA7VUFDRSxJQUFJLENBQUMsU0FBTCxHQUFpQixJQUFJLENBQUM7VUFDdEIsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLE1BQXBDLEVBRkY7O0FBRkY7QUFPQTtBQUFBO1dBQUEsd0NBQUE7O3FCQUNFLDRCQUFBLENBQTZCLENBQTdCO0FBREY7O0lBVHNCOztJQVl4Qiw0QkFBQSxHQUErQixTQUFDLElBQUQ7QUFDN0IsVUFBQTtN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QUErRSxVQUEvRTthQUNBLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixJQUFJLENBQUMsYUFBTCxDQUFtQixxQ0FBbkIsQ0FBcEIsRUFBK0UsUUFBL0U7SUFicUI7Ozs7OztFQWdCekIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7QUFuR2pCIiwic291cmNlc0NvbnRlbnQiOlsiUFUgPSByZXF1aXJlICcuL3ByZWZlcmVuY2VzLXV0aWwnXG5cbmNsYXNzIFByZWZlcmVuY2VzU2V0dGluZ3NcblxuICBAbG9jYWxpemU6ICgpIC0+XG5cbiAgICBAZGVmUyA9IHdpbmRvdy5GcmVuY2hNZW51LmRlZlMuU2V0dGluZ3NcbiAgICBAc3YgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtdmlldycpXG5cbiAgICAjIFNldHRpbmdzIHBhbmVsXG4gICAgQGxvY2FsaXplU2V0dGluZ3NQYW5lbCgpXG5cbiAgICAjIEtleWJpbmRpbmdzXG4gICAgQGxvY2FsaXplS2V5YmluZGluZ3NQYW5lbCgpXG5cbiAgICAjIFRoZW1lcyBwYW5lbFxuICAgIEBsb2NhbGl6ZVRoZW1lc1BhbmVsKClcblxuICAgICMgVXBkYXRlcyBwYW5lbFxuICAgIEBsb2NhbGl6ZVVwZGF0ZXNQYW5lbCgpXG5cbiAgICAjIEluc3RhbGwgcGFuZWxcbiAgICBAbG9jYWxpemVJbnN0YWxsUGFuZWwoKVxuXG4gICAgIyBCdXR0b25zXG4gICAgUFUuYXBwbHlCdXR0b25Ub29sYmFyKClcblxuICBAbG9jYWxpemVTZXR0aW5nc1BhbmVsOiAoKSAtPlxuICAgICMgTm90ZXNcbiAgICBmb3Igbm90ZSBpbiBAZGVmUy5zZXR0aW5ncy5ub3Rlc1xuICAgICAgaW5mbyA9IEBzdi5xdWVyeVNlbGVjdG9yKFwiW2lkPScje25vdGUuaWR9J11cIilcbiAgICAgIHVubGVzcyBQVS5pc0FscmVhZHlMb2NhbGl6ZWQoaW5mbylcbiAgICAgICAgaW5mby5pbm5lckhUTUwgPSBub3RlLmh0bWxcbiAgICAgICAgaW5mby5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYWxpemVkJywgJ3RydWUnKVxuXG4gICAgIyBFdmVyeSBzZXR0aW5ncyBpdGVtXG4gICAgZm9yIGQgaW4gQGRlZlMuc2V0dGluZ3MuY29udHJvbHNcbiAgICAgIGFwcGx5VGV4dENvbnRlbnRCeVNldHRpbmdzSWQoZClcblxuICBhcHBseVRleHRDb250ZW50QnlTZXR0aW5nc0lkID0gKGRhdGEpIC0+XG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2lkPScje2RhdGEuaWR9J11cIilcbiAgICByZXR1cm4gdW5sZXNzIGVsXG4gICAgY3RybCA9IGVsLmNsb3Nlc3QoJy5jb250cm9sLWdyb3VwJylcbiAgICBQVS5hcHBseVRleHRXaXRoT3JnKGN0cmwucXVlcnlTZWxlY3RvcignLnNldHRpbmctdGl0bGUnKSwgZGF0YS50aXRsZSlcbiAgICBQVS5hcHBseVRleHRXaXRoT3JnKGN0cmwucXVlcnlTZWxlY3RvcignLnNldHRpbmctZGVzY3JpcHRpb24nKSwgZGF0YS5kZXNjKVxuICAgIHJldHVybiB1bmxlc3MgZGF0YS5zZWxlY3RcbiAgICBmb3IgbyBpbiBlbC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpXG4gICAgICB2ID0gby5hdHRyaWJ1dGVzW1widmFsdWVcIl0udmFsdWVcbiAgICAgIG8uaW5uZXJUZXh0ID0gZGF0YS5zZWxlY3Rbdl1cblxuICBAbG9jYWxpemVLZXliaW5kaW5nc1BhbmVsOiAoKSA9PlxuICAgIGluZm8gPSBAc3YucXVlcnlTZWxlY3RvcignLmtleWJpbmRpbmctcGFuZWw+ZGl2Om50aC1jaGlsZCgyKScpXG4gICAgdW5sZXNzIFBVLmlzQWxyZWFkeUxvY2FsaXplZChpbmZvKVxuICAgICAgaW5mby5xdWVyeVNlbGVjdG9yKCdzcGFuOm50aC1jaGlsZCgyKScpLnRleHRDb250ZW50ID0gXCJWb3VzIHBvdXZleiBtb2RpZmllciBjZXMgcmFjY291cmNpcyBjbGF2aWVycyBlbiBsZXMgY29waWFudCAoIFwiXG4gICAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bnRoLWNoaWxkKDQpJykudGV4dENvbnRlbnQgPSBcIikgZXQgZW4gbGVzIGNvbGxhbnQgZGFuc1wiXG4gICAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ2EubGluaycpLnRleHRDb250ZW50ID0gXCIgdm90cmUgZmljaGllciBkZSByYWNjb3VyY2lzIGNsYXZpZXJcIlxuICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiLlwiXG4gICAgICBpbmZvLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICBpbmZvLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGl6ZWQnLCAndHJ1ZScpXG5cbiAgQGxvY2FsaXplVGhlbWVzUGFuZWw6ICgpID0+XG4gICAgaW5mbyA9IEBzdi5xdWVyeVNlbGVjdG9yKCcudGhlbWVzLXBhbmVsPmRpdj5kaXY6bnRoLWNoaWxkKDIpJylcbiAgICB1bmxlc3MgUFUuaXNBbHJlYWR5TG9jYWxpemVkKGluZm8pXG4gICAgICBpbmZvLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IFwiVm91cyBwb3V2ZXogYXVzc2kgb3V2cmlyXCJcbiAgICAgIGluZm8ucXVlcnlTZWxlY3RvcignYS5saW5rJykudGV4dENvbnRlbnQgPSBcIiB2b3RyZSBmZXVpbGxlIGRlIHN0eWxlIFwiXG4gICAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJwb3VyIG1vZGlmaWVyIGwnYXBwYXJlbmNlIGQnQXRvbS5cIlxuICAgICAgaW5mby5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgdHAxID0gQHN2LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZXMtcGlja2VyPmRpdjpudGgtY2hpbGQoMSknKVxuICAgICAgdHAxLnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5nLXRpdGxlJykudGV4dENvbnRlbnQgPSBcIlRow6htZSBkZSBsJ2ludGVyZmFjZVwiXG4gICAgICB0cDEucXVlcnlTZWxlY3RvcignLnNldHRpbmctZGVzY3JpcHRpb24nKS50ZXh0Q29udGVudCA9IFwiTW9kaWZpZSBsJ2FwcGFyZW5jZSBkZXMgb25nbGV0cywgZGUgbGEgYmFycmUgZGUgc3RhdHV0LCBsYSBjb2xvbm5lIGRlIG5hdmlnYXRpb24gZXQgZGVzIG1lbnVzIGTDqXJvdWxhbnRzLlwiXG4gICAgICB0cDIgPSBAc3YucXVlcnlTZWxlY3RvcignLnRoZW1lcy1waWNrZXI+ZGl2Om50aC1jaGlsZCgyKScpXG4gICAgICB0cDIucXVlcnlTZWxlY3RvcignLnNldHRpbmctdGl0bGUnKS50ZXh0Q29udGVudCA9IFwiVGjDqG1lIGRlIGxhIHN5bnRheGVcIlxuICAgICAgdHAyLnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5nLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPSBcIk1vZGlmaWUgbCdhcHBhcmVuY2UgZHUgdGV4dGUgZGFucyBsJ8OpZGl0ZXVyLlwiXG4gICAgICBpbmZvLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGl6ZWQnLCAndHJ1ZScpXG5cbiAgQGxvY2FsaXplVXBkYXRlc1BhbmVsOiAoKSA9PlxuICAgIFBVLmFwcGx5VGV4dFdpdGhPcmcoQHN2LnF1ZXJ5U2VsZWN0b3IoJy51cGRhdGUtYWxsLWJ1dHRvbi5idG4tcHJpbWFyeScpLCBcIlRvdXQgbWV0dHJlIMOgIGpvdXJcIilcbiAgICBQVS5hcHBseVRleHRXaXRoT3JnKEBzdi5xdWVyeVNlbGVjdG9yKCcudXBkYXRlLWFsbC1idXR0b246bm90KC5idG4tcHJpbWFyeSknKSwgXCJSZWNoZXJjaGVyIGRlcyBtaXNlcyDDoCBqb3VyXCIpXG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhAc3YucXVlcnlTZWxlY3RvcignLmFsZXJ0Lmljb24taG91cmdsYXNzJyksIFwiUmVjaGVyY2hlIGRlIG1pc2VzIMOgIGpvdXIuLi5cIilcbiAgICBQVS5hcHBseVRleHRXaXRoT3JnKEBzdi5xdWVyeVNlbGVjdG9yKCcuYWxlcnQuaWNvbi1oZWFydCcpLCBcIlRvdXMgbGVzIHBhY2thZ2VzIGluc3RhbGzDqXMgc29udCDDoCBqb3VyIO+8gVwiKVxuXG4gIEBsb2NhbGl6ZUluc3RhbGxQYW5lbDogKCkgLT5cbiAgICBQVS5hcHBseVNlY3Rpb25IZWFkaW5ncygpXG4gICAgaW5zdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5zZWN0aW9uOm5vdCgudGhlbWVzLXBhbmVsKScpXG4gICAgaW5mbyA9IGluc3QucXVlcnlTZWxlY3RvcignLm5hdGl2ZS1rZXktYmluZGluZ3MnKVxuICAgIHVubGVzcyBQVS5pc0FscmVhZHlMb2NhbGl6ZWQoaW5mbylcbiAgICAgIGluZm8ucXVlcnlTZWxlY3Rvcignc3BhbjpudGgtY2hpbGQoMiknKS50ZXh0Q29udGVudCA9IFwiTGVzIHBhY2thZ2VzIHNvbnQgcHVibGnDqXMgc3VyIFwiXG4gICAgICB0YyA9IGluZm8ucXVlcnlTZWxlY3Rvcignc3BhbjpudGgtY2hpbGQoNCknKVxuICAgICAgdGMudGV4dENvbnRlbnQgPSB0Yy50ZXh0Q29udGVudC5yZXBsYWNlKFwiYW5kIGFyZSBpbnN0YWxsZWQgdG9cIiwgXCJldCBzb250IGluc3RhbGzDqXMgZGFucyBsZSByw6lwZXJ0b2lyZSBzdWl2YW50IDogXCIpXG4gICAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIlxuICAgICAgaW5mby5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgaW5mby5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYWxpemVkJywgJ3RydWUnKVxuICAgIFBVLmFwcGx5VGV4dFdpdGhPcmcoaW5zdC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNvbnRhaW5lciAuYnRuOm50aC1jaGlsZCgxKScpLCBcIlBhY2thZ2VzXCIpXG4gICAgUFUuYXBwbHlUZXh0V2l0aE9yZyhpbnN0LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtY29udGFpbmVyIC5idG46bnRoLWNoaWxkKDIpJyksIFwiVGjDqG1lc1wiKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gUHJlZmVyZW5jZXNTZXR0aW5nc1xuIl19
