(function() {
  var PreferencesUtil;

  PreferencesUtil = (function() {
    function PreferencesUtil() {}

    PreferencesUtil.isAlreadyLocalized = function(elem) {
      var localized;
      if (elem) {
        localized = elem.getAttribute('data-localized');
      }
      return localized === 'true';
    };

    PreferencesUtil.applySpecialHeading = function(area, org, childIdx, text) {
      var sh, span;
      sh = this.getTextMatchElement(area, '.section-heading', org);
      if (!(sh && !this.isAlreadyLocalized(sh))) {
        return;
      }
      sh.childNodes[childIdx].textContent = null;
      span = document.createElement('span');
      span.textContent = org;
      this.applyTextWithOrg(span, text);
      return sh.appendChild(span);
    };

    PreferencesUtil.applyTextWithOrg = function(elem, text) {
      var before;
      if (!text) {
        return;
      }
      before = String(elem.textContent);
      if (before === text) {
        return;
      }
      elem.textContent = text;
      elem.setAttribute('title', before);
      return elem.setAttribute('data-localized', 'true');
    };

    PreferencesUtil.getTextMatchElement = function(area, query, text) {
      var el, elems, i, len, result;
      elems = area.querySelectorAll(query);
      result;
      for (i = 0, len = elems.length; i < len; i++) {
        el = elems[i];
        if (el.textContent.includes(text)) {
          result = el;
          break;
        }
      }
      return result;
    };

    PreferencesUtil.applySectionHeadings = function(force) {
      var el, i, j, len, len1, ref, ref1, results, sh, sv;
      sv = document.querySelector('.settings-view');
      ref = window.FrenchMenu.defS.Settings.sectionHeadings;
      for (i = 0, len = ref.length; i < len; i++) {
        sh = ref[i];
        el = this.getTextMatchElement(sv, '.section-heading', sh.label);
        if (!el) {
          continue;
        }
        if (!this.isAlreadyLocalized(el) || force) {
          this.applyTextWithOrg(el, sh.value);
        }
      }
      ref1 = window.FrenchMenu.defS.Settings.subSectionHeadings;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        sh = ref1[j];
        el = this.getTextMatchElement(sv, '.sub-section-heading', sh.label);
        if (!el) {
          continue;
        }
        if (!this.isAlreadyLocalized(el) || force) {
          results.push(this.applyTextWithOrg(el, sh.value));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    PreferencesUtil.applyButtonToolbar = function() {
      var btn, i, j, k, l, len, len1, len2, len3, len4, m, ref, ref1, ref2, ref3, ref4, results, sv;
      sv = document.querySelector('.settings-view');
      ref = sv.querySelectorAll('.meta-controls .install-button');
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        this.applyTextWithOrg(btn, "Installer");
      }
      ref1 = sv.querySelectorAll('.meta-controls .settings');
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        btn = ref1[j];
        this.applyTextWithOrg(btn, "Paramètres");
      }
      ref2 = sv.querySelectorAll('.meta-controls .uninstall-button');
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        btn = ref2[k];
        this.applyTextWithOrg(btn, "Désinstaller");
      }
      ref3 = sv.querySelectorAll('.meta-controls .icon-playback-pause span');
      for (l = 0, len3 = ref3.length; l < len3; l++) {
        btn = ref3[l];
        this.applyTextWithOrg(btn, "Désactiver");
      }
      ref4 = sv.querySelectorAll('.meta-controls .icon-playback-play span');
      results = [];
      for (m = 0, len4 = ref4.length; m < len4; m++) {
        btn = ref4[m];
        results.push(this.applyTextWithOrg(btn, "Activer"));
      }
      return results;
    };

    return PreferencesUtil;

  })();

  module.exports = PreferencesUtil;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZnJlbmNoLW1lbnUvbGliL3ByZWZlcmVuY2VzLXV0aWwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBTTs7O0lBRUosZUFBQyxDQUFBLGtCQUFELEdBQXNCLFNBQUMsSUFBRDtBQUNwQixVQUFBO01BQUEsSUFBbUQsSUFBbkQ7UUFBQSxTQUFBLEdBQVksSUFBSSxDQUFDLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQVo7O0FBQ0EsYUFBTyxTQUFBLEtBQWE7SUFGQTs7SUFJdEIsZUFBQyxDQUFBLG1CQUFELEdBQXVCLFNBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxRQUFaLEVBQXNCLElBQXRCO0FBQ3JCLFVBQUE7TUFBQSxFQUFBLEdBQUssSUFBQyxDQUFBLG1CQUFELENBQXFCLElBQXJCLEVBQTJCLGtCQUEzQixFQUErQyxHQUEvQztNQUNMLElBQUEsQ0FBQSxDQUFjLEVBQUEsSUFBTSxDQUFDLElBQUMsQ0FBQSxrQkFBRCxDQUFvQixFQUFwQixDQUFyQixDQUFBO0FBQUEsZUFBQTs7TUFDQSxFQUFFLENBQUMsVUFBVyxDQUFBLFFBQUEsQ0FBUyxDQUFDLFdBQXhCLEdBQXNDO01BQ3RDLElBQUEsR0FBTyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QjtNQUNQLElBQUksQ0FBQyxXQUFMLEdBQW1CO01BQ25CLElBQUMsQ0FBQSxnQkFBRCxDQUFrQixJQUFsQixFQUF3QixJQUF4QjthQUNBLEVBQUUsQ0FBQyxXQUFILENBQWUsSUFBZjtJQVBxQjs7SUFTdkIsZUFBQyxDQUFBLGdCQUFELEdBQW9CLFNBQUMsSUFBRCxFQUFPLElBQVA7QUFDbEIsVUFBQTtNQUFBLElBQUEsQ0FBYyxJQUFkO0FBQUEsZUFBQTs7TUFDQSxNQUFBLEdBQVMsTUFBQSxDQUFPLElBQUksQ0FBQyxXQUFaO01BQ1QsSUFBVSxNQUFBLEtBQVUsSUFBcEI7QUFBQSxlQUFBOztNQUNBLElBQUksQ0FBQyxXQUFMLEdBQW1CO01BQ25CLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCO2FBQ0EsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsZ0JBQWxCLEVBQW9DLE1BQXBDO0lBTmtCOztJQVFwQixlQUFDLENBQUEsbUJBQUQsR0FBdUIsU0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQ7QUFDckIsVUFBQTtNQUFBLEtBQUEsR0FBUSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsS0FBdEI7TUFDUjtBQUNBLFdBQUEsdUNBQUE7O1FBQ0UsSUFBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFFBQWYsQ0FBd0IsSUFBeEIsQ0FBSDtVQUNFLE1BQUEsR0FBUztBQUNULGdCQUZGOztBQURGO0FBSUEsYUFBTztJQVBjOztJQVN2QixlQUFDLENBQUEsb0JBQUQsR0FBd0IsU0FBQyxLQUFEO0FBQ3RCLFVBQUE7TUFBQSxFQUFBLEdBQUssUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCO0FBQ0w7QUFBQSxXQUFBLHFDQUFBOztRQUNFLEVBQUEsR0FBSyxJQUFDLENBQUEsbUJBQUQsQ0FBcUIsRUFBckIsRUFBeUIsa0JBQXpCLEVBQTZDLEVBQUUsQ0FBQyxLQUFoRDtRQUNMLElBQUEsQ0FBZ0IsRUFBaEI7QUFBQSxtQkFBQTs7UUFDQSxJQUFHLENBQUMsSUFBQyxDQUFBLGtCQUFELENBQW9CLEVBQXBCLENBQUQsSUFBNEIsS0FBL0I7VUFDRSxJQUFDLENBQUEsZ0JBQUQsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBRSxDQUFDLEtBQXpCLEVBREY7O0FBSEY7QUFLQTtBQUFBO1dBQUEsd0NBQUE7O1FBQ0UsRUFBQSxHQUFLLElBQUMsQ0FBQSxtQkFBRCxDQUFxQixFQUFyQixFQUF5QixzQkFBekIsRUFBaUQsRUFBRSxDQUFDLEtBQXBEO1FBQ0wsSUFBQSxDQUFnQixFQUFoQjtBQUFBLG1CQUFBOztRQUNBLElBQUcsQ0FBQyxJQUFDLENBQUEsa0JBQUQsQ0FBb0IsRUFBcEIsQ0FBRCxJQUE0QixLQUEvQjt1QkFDRSxJQUFDLENBQUEsZ0JBQUQsQ0FBa0IsRUFBbEIsRUFBc0IsRUFBRSxDQUFDLEtBQXpCLEdBREY7U0FBQSxNQUFBOytCQUFBOztBQUhGOztJQVBzQjs7SUFheEIsZUFBQyxDQUFBLGtCQUFELEdBQXNCLFNBQUE7QUFDcEIsVUFBQTtNQUFBLEVBQUEsR0FBSyxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkI7QUFDTDtBQUFBLFdBQUEscUNBQUE7O1FBQ0UsSUFBQyxDQUFBLGdCQUFELENBQWtCLEdBQWxCLEVBQXVCLFdBQXZCO0FBREY7QUFFQTtBQUFBLFdBQUEsd0NBQUE7O1FBQ0UsSUFBQyxDQUFBLGdCQUFELENBQWtCLEdBQWxCLEVBQXVCLFlBQXZCO0FBREY7QUFFQTtBQUFBLFdBQUEsd0NBQUE7O1FBQ0UsSUFBQyxDQUFBLGdCQUFELENBQWtCLEdBQWxCLEVBQXVCLGNBQXZCO0FBREY7QUFFQTtBQUFBLFdBQUEsd0NBQUE7O1FBQ0UsSUFBQyxDQUFBLGdCQUFELENBQWtCLEdBQWxCLEVBQXVCLFlBQXZCO0FBREY7QUFFQTtBQUFBO1dBQUEsd0NBQUE7O3FCQUNFLElBQUMsQ0FBQSxnQkFBRCxDQUFrQixHQUFsQixFQUF1QixTQUF2QjtBQURGOztJQVZvQjs7Ozs7O0VBYXhCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0FBMURqQiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByZWZlcmVuY2VzVXRpbFxuXG4gIEBpc0FscmVhZHlMb2NhbGl6ZWQgPSAoZWxlbSkgLT5cbiAgICBsb2NhbGl6ZWQgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhbGl6ZWQnKSBpZiBlbGVtXG4gICAgcmV0dXJuIGxvY2FsaXplZCA9PSAndHJ1ZSdcblxuICBAYXBwbHlTcGVjaWFsSGVhZGluZyA9IChhcmVhLCBvcmcsIGNoaWxkSWR4LCB0ZXh0KSAtPlxuICAgIHNoID0gQGdldFRleHRNYXRjaEVsZW1lbnQoYXJlYSwgJy5zZWN0aW9uLWhlYWRpbmcnLCBvcmcpXG4gICAgcmV0dXJuIHVubGVzcyBzaCAmJiAhQGlzQWxyZWFkeUxvY2FsaXplZChzaClcbiAgICBzaC5jaGlsZE5vZGVzW2NoaWxkSWR4XS50ZXh0Q29udGVudCA9IG51bGxcbiAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG9yZ1xuICAgIEBhcHBseVRleHRXaXRoT3JnKHNwYW4sIHRleHQpXG4gICAgc2guYXBwZW5kQ2hpbGQoc3BhbilcblxuICBAYXBwbHlUZXh0V2l0aE9yZyA9IChlbGVtLCB0ZXh0KSAtPlxuICAgIHJldHVybiB1bmxlc3MgdGV4dFxuICAgIGJlZm9yZSA9IFN0cmluZyhlbGVtLnRleHRDb250ZW50KVxuICAgIHJldHVybiBpZiBiZWZvcmUgPT0gdGV4dFxuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgZWxlbS5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYmVmb3JlKVxuICAgIGVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWxvY2FsaXplZCcsICd0cnVlJylcblxuICBAZ2V0VGV4dE1hdGNoRWxlbWVudCA9IChhcmVhLCBxdWVyeSwgdGV4dCkgLT5cbiAgICBlbGVtcyA9IGFyZWEucXVlcnlTZWxlY3RvckFsbChxdWVyeSlcbiAgICByZXN1bHRcbiAgICBmb3IgZWwgaW4gZWxlbXNcbiAgICAgIGlmIGVsLnRleHRDb250ZW50LmluY2x1ZGVzKHRleHQpXG4gICAgICAgIHJlc3VsdCA9IGVsXG4gICAgICAgIGJyZWFrXG4gICAgcmV0dXJuIHJlc3VsdFxuXG4gIEBhcHBseVNlY3Rpb25IZWFkaW5ncyA9IChmb3JjZSkgLT5cbiAgICBzdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy12aWV3JylcbiAgICBmb3Igc2ggaW4gd2luZG93LkZyZW5jaE1lbnUuZGVmUy5TZXR0aW5ncy5zZWN0aW9uSGVhZGluZ3NcbiAgICAgIGVsID0gQGdldFRleHRNYXRjaEVsZW1lbnQoc3YsICcuc2VjdGlvbi1oZWFkaW5nJywgc2gubGFiZWwpXG4gICAgICBjb250aW51ZSB1bmxlc3MgZWxcbiAgICAgIGlmICFAaXNBbHJlYWR5TG9jYWxpemVkKGVsKSB8fCBmb3JjZVxuICAgICAgICBAYXBwbHlUZXh0V2l0aE9yZyhlbCwgc2gudmFsdWUpXG4gICAgZm9yIHNoIGluIHdpbmRvdy5GcmVuY2hNZW51LmRlZlMuU2V0dGluZ3Muc3ViU2VjdGlvbkhlYWRpbmdzXG4gICAgICBlbCA9IEBnZXRUZXh0TWF0Y2hFbGVtZW50KHN2LCAnLnN1Yi1zZWN0aW9uLWhlYWRpbmcnLCBzaC5sYWJlbClcbiAgICAgIGNvbnRpbnVlIHVubGVzcyBlbFxuICAgICAgaWYgIUBpc0FscmVhZHlMb2NhbGl6ZWQoZWwpIHx8IGZvcmNlXG4gICAgICAgIEBhcHBseVRleHRXaXRoT3JnKGVsLCBzaC52YWx1ZSlcblxuICBAYXBwbHlCdXR0b25Ub29sYmFyID0gKCkgLT5cbiAgICBzdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy12aWV3JylcbiAgICBmb3IgYnRuIGluIHN2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXRhLWNvbnRyb2xzIC5pbnN0YWxsLWJ1dHRvbicpXG4gICAgICBAYXBwbHlUZXh0V2l0aE9yZyhidG4sIFwiSW5zdGFsbGVyXCIpXG4gICAgZm9yIGJ0biBpbiBzdi5xdWVyeVNlbGVjdG9yQWxsKCcubWV0YS1jb250cm9scyAuc2V0dGluZ3MnKVxuICAgICAgQGFwcGx5VGV4dFdpdGhPcmcoYnRuLCBcIlBhcmFtw6h0cmVzXCIpXG4gICAgZm9yIGJ0biBpbiBzdi5xdWVyeVNlbGVjdG9yQWxsKCcubWV0YS1jb250cm9scyAudW5pbnN0YWxsLWJ1dHRvbicpXG4gICAgICBAYXBwbHlUZXh0V2l0aE9yZyhidG4sIFwiRMOpc2luc3RhbGxlclwiKVxuICAgIGZvciBidG4gaW4gc3YucXVlcnlTZWxlY3RvckFsbCgnLm1ldGEtY29udHJvbHMgLmljb24tcGxheWJhY2stcGF1c2Ugc3BhbicpXG4gICAgICBAYXBwbHlUZXh0V2l0aE9yZyhidG4sIFwiRMOpc2FjdGl2ZXJcIilcbiAgICBmb3IgYnRuIGluIHN2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZXRhLWNvbnRyb2xzIC5pY29uLXBsYXliYWNrLXBsYXkgc3BhbicpXG4gICAgICBAYXBwbHlUZXh0V2l0aE9yZyhidG4sIFwiQWN0aXZlclwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByZWZlcmVuY2VzVXRpbFxuIl19
