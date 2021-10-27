(function() {
  module.exports = {
    Context: {
      "atom-workspace": {
        "application:inspect": "Inspecter"
      },
      "atom-text-editor": {
        "color-picker:open": "Ouvrir Color Picker",
        "minimap:toggle": "Activer/Désactiver Minimap",
        "snowfall:toggle": "Activer/Désactiver Snowfall"
      },
      "atom-text-editor, .overlayer": {
        "core:undo": "Annuler",
        "core:redo": "Rétablir",
        "core:cut": "Couper",
        "core:copy": "Copier",
        "core:paste": "Coller",
        "core:delete": "Supprimer",
        "core:select-all": "Tout sélectionner",
        "pane:split-up-and-copy-active-item": "Fractionner vers le haut et copier l'élément actif ↑",
        "pane:split-down-and-copy-active-item": "Fractionner vers le bas et copier l'élément actif ↓",
        "pane:split-left-and-copy-active-item": "Fractionner vers la droite et copier l'élément actif ←",
        "pane:split-right-and-copy-active-item": "Fractionner vers la gauche et copier l'élément actif →",
        "pane:close": "Fermer"
      },
      "atom-pane": {
        "pane:split-up-and-copy-active-item": "Fractionner vers le haut et copier l'élément actif ↑",
        "pane:split-down-and-copy-active-item": "Fractionner vers le bas et copier l'élément actif ↓",
        "pane:split-left-and-copy-active-item": "Fractionner vers la gauche et copier l'élément actif ←",
        "pane:split-right-and-copy-active-item": "Fractionner vers la droite et copier l'élément actif →",
        "pane:close": "Fermer"
      },
      "atom-text-editor:not([mini])": {
        "encoding-selector:show": "Sélectionner l'encodage",
        "spell-check:correct-misspelling": "Corriger les fautes d'orthographe",
        "symbols-view:go-to-declaration": "Aller à la déclaration"
      },
      ".overlayer": {
        "autocomplete:toggle": "Activer/Désactiver Autocomplete",
        "grammar-selector:show": "Sélectionner le langage"
      },
      ".image-view": {
        "image-view:reload": "Actualiser"
      },
      ".tab": {
        "tabs:close-tab": "Fermer l'onglet",
        "tabs:close-other-tabs": "Fermer tous les autres onglets",
        "tabs:close-tabs-to-right": "Fermer les onglets à droite",
        "tabs:close-tabs-to-left": "Fermer les onglets à gauche",
        "tabs:close-saved-tabs": "Fermer les onglets enregistrés",
        "tabs:close-all-tabs": "Fermer tous les onglets",
        "tabs:split-up": "Fractionner vers le haut ↑",
        "tabs:split-down": "Fractionner vers le bas ↓",
        "tabs:split-left": "Fractionner vers la gauche ←",
        "tabs:split-right": "Fractionner vers la droite →"
      },
      ".tab.texteditor": {
        "tabs:open-in-new-window": "Ouvrir dans une nouvelle fenêtre"
      },
      ".tab-bar": {
        "pane:reopen-closed-item": "Réouvrir le dernier élément fermé"
      },
      ".tree-view.full-menu": {
        "tree-view:add-file": "Ajouter un fichier",
        "tree-view:add-folder": "Ajouter un dossier",
        "tree-view:move": "Déplacer...",
        "tree-view:duplicate": "Dupliquer",
        "tree-view:remove": "Supprimer",
        "tree-view:copy": "Copier",
        "tree-view:cut": "Couper",
        "tree-view:paste": "Coller",
        "tree-view:open-selected-entry-up": "Ouvrir l'élément sélectionné en haut ↑",
        "tree-view:open-selected-entry-down": "Ouvrir l'élément sélectionné en bas ↓",
        "tree-view:open-selected-entry-left": "Ouvrir l'élément sélectionné à gauche ←",
        "tree-view:open-selected-entry-right": "Ouvrir l'élément sélectionné à droite →",
        "application:add-project-folder": "Ajouter un fichier de projet...",
        "tree-view:copy-full-path": "Copier le chemin d'accès complet",
        "tree-view:copy-project-path": "Copier le chemin du projet",
        "tree-view:open-in-new-window": "Ouvrir dans une nouvelle fenêtre"
      },
      '.tree-view.full-menu [is="tree-view-file"]': {
        "tree-view:open-selected-entry-up": "Ouvrir l'élément sélectionné en haut ↑",
        "tree-view:open-selected-entry-down": "Ouvrir l'élément sélectionné en bas ↓",
        "tree-view:open-selected-entry-left": "Ouvrir l'élément sélectionné à gauche ←",
        "tree-view:open-selected-entry-right": "Ouvrir l'élément sélectionné à droite →"
      },
      ".tree-view.full-menu .project-root > .header": {
        "tree-view:add-file": "Ajouter un fichier",
        "tree-view:add-folder": "Ajouter un dossier",
        "tree-view:move": "Déplacer...",
        "tree-view:duplicate": "Dupliquer",
        "tree-view:remove": "Supprimer",
        "tree-view:copy": "Copier",
        "tree-view:cut": "Couper",
        "tree-view:paste": "Coller",
        "tree-view:open-selected-entry-up": "Ouvrir l'élément sélectionné en haut ↑",
        "tree-view:open-selected-entry-down": "Ouvrir l'élément sélectionné en bas ↓",
        "tree-view:open-selected-entry-left": "Ouvrir l'élément sélectionné à gauche ←",
        "tree-view:open-selected-entry-right": "Ouvrir l'élément sélectionné à droite →",
        "application:add-project-folder": "Ajouter un fichier de projet...",
        "tree-view:remove-project-folder": "Supprimer le fichier de projet",
        "tree-view:copy-full-path": "Copier le chemin d'accès complet",
        "tree-view:copy-project-path": "Copier le chemin du projet",
        "tree-view:open-in-new-window": "Ouvrir dans une nouvelle fenêtre"
      },
      ".platform-darwin .tree-view.full-menu": {
        "tree-view:show-in-file-manager": "Voir dans Finder"
      },
      ".platform-win32 .tree-view.full-menu": {
        "tree-view:show-in-file-manager": "Voir dans l'explorateur Windows"
      },
      ".platform-linux .tree-view.full-menu": {
        "tree-view:show-in-file-manager": "Voir dans le gestionnaire de fichiers"
      },
      ".tree-view > li.directory": {
        "project-find:show-in-current-directory": "Rechercher dans le répertoire actuel"
      },
      ".tree-view.multi-select": {
        "tree-view:remove": "Supprimer",
        "tree-view:copy": "Copier",
        "tree-view:cut": "Couper",
        "tree-view:paste": "Coller"
      },
      "atom-pane[data-active-item-path] .item-views": {
        "tree-view:reveal-active-file": "Afficher le dossier du fichier actif"
      },
      "atom-pane[data-active-item-path] .tab.active": {
        "tree-view:rename": "Renommer...",
        "tree-view:reveal-active-file": "Afficher le dossier du fichier actif"
      },
      ".platform-darwin atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "Voir dans Finder"
      },
      ".platform-win32 atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "Voir dans l'explorateur Windows"
      },
      ".platform-linux atom-pane[data-active-item-path] .tab.active": {
        "tree-view:show-current-file-in-file-manager": "Voir dans le gestionnaire de fichiers"
      },
      ".platform-darwin atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "Voir dans Finder"
      },
      ".platform-win32 atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "Voir dans l'explorateur Windows'"
      },
      ".platform-linux atom-text-editor:not([mini])": {
        "tree-view:show-current-file-in-file-manager": "Voir dans le gestionnaire de fichiers"
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZnJlbmNoLW1lbnUvZGVmL2NvbnRleHQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUI7SUFDakIsT0FBQSxFQUNFO01BQUEsZ0JBQUEsRUFDRTtRQUFBLHFCQUFBLEVBQXVCLFdBQXZCO09BREY7TUFFQSxrQkFBQSxFQUNFO1FBQUEsbUJBQUEsRUFBcUIscUJBQXJCO1FBQ0EsZ0JBQUEsRUFBa0IsNEJBRGxCO1FBRUEsaUJBQUEsRUFBbUIsNkJBRm5CO09BSEY7TUFNQSw4QkFBQSxFQUNFO1FBQUEsV0FBQSxFQUFhLFNBQWI7UUFDQSxXQUFBLEVBQWEsVUFEYjtRQUVBLFVBQUEsRUFBWSxRQUZaO1FBR0EsV0FBQSxFQUFhLFFBSGI7UUFJQSxZQUFBLEVBQWMsUUFKZDtRQUtBLGFBQUEsRUFBZSxXQUxmO1FBTUEsaUJBQUEsRUFBbUIsbUJBTm5CO1FBT0Esb0NBQUEsRUFBc0Msc0RBUHRDO1FBUUEsc0NBQUEsRUFBd0MscURBUnhDO1FBU0Esc0NBQUEsRUFBd0Msd0RBVHhDO1FBVUEsdUNBQUEsRUFBeUMsd0RBVnpDO1FBV0EsWUFBQSxFQUFjLFFBWGQ7T0FQRjtNQW1CQSxXQUFBLEVBQ0U7UUFBQSxvQ0FBQSxFQUFzQyxzREFBdEM7UUFDQSxzQ0FBQSxFQUF3QyxxREFEeEM7UUFFQSxzQ0FBQSxFQUF3Qyx3REFGeEM7UUFHQSx1Q0FBQSxFQUF5Qyx3REFIekM7UUFJQSxZQUFBLEVBQWMsUUFKZDtPQXBCRjtNQXlCQSw4QkFBQSxFQUNFO1FBQUEsd0JBQUEsRUFBMEIseUJBQTFCO1FBQ0EsaUNBQUEsRUFBbUMsbUNBRG5DO1FBRUEsZ0NBQUEsRUFBa0Msd0JBRmxDO09BMUJGO01BNkJBLFlBQUEsRUFDRTtRQUFBLHFCQUFBLEVBQXVCLGlDQUF2QjtRQUNBLHVCQUFBLEVBQXlCLHlCQUR6QjtPQTlCRjtNQWdD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T0E1R0Y7TUE2R0EsOERBQUEsRUFDRTtRQUFBLDZDQUFBLEVBQStDLGlDQUEvQztPQTlHRjtNQStHQSw4REFBQSxFQUNFO1FBQUEsNkNBQUEsRUFBK0MsdUNBQS9DO09BaEhGO01BaUhBLCtDQUFBLEVBQ0U7UUFBQSw2Q0FBQSxFQUErQyxrQkFBL0M7T0FsSEY7TUFtSEEsOENBQUEsRUFDRTtRQUFBLDZDQUFBLEVBQStDLGtDQUEvQztPQXBIRjtNQXFIQSw4Q0FBQSxFQUNFO1FBQUEsNkNBQUEsRUFBK0MsdUNBQS9DO09BdEhGO0tBRmU7O0FBQWpCIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5Db250ZXh0OlxuICBcImF0b20td29ya3NwYWNlXCI6XG4gICAgXCJhcHBsaWNhdGlvbjppbnNwZWN0XCI6IFwiSW5zcGVjdGVyXCJcbiAgXCJhdG9tLXRleHQtZWRpdG9yXCI6XG4gICAgXCJjb2xvci1waWNrZXI6b3BlblwiOiBcIk91dnJpciBDb2xvciBQaWNrZXJcIlxuICAgIFwibWluaW1hcDp0b2dnbGVcIjogXCJBY3RpdmVyL0TDqXNhY3RpdmVyIE1pbmltYXBcIlxuICAgIFwic25vd2ZhbGw6dG9nZ2xlXCI6IFwiQWN0aXZlci9Ew6lzYWN0aXZlciBTbm93ZmFsbFwiXG4gIFwiYXRvbS10ZXh0LWVkaXRvciwgLm92ZXJsYXllclwiOlxuICAgIFwiY29yZTp1bmRvXCI6IFwiQW5udWxlclwiXG4gICAgXCJjb3JlOnJlZG9cIjogXCJSw6l0YWJsaXJcIlxuICAgIFwiY29yZTpjdXRcIjogXCJDb3VwZXJcIlxuICAgIFwiY29yZTpjb3B5XCI6IFwiQ29waWVyXCJcbiAgICBcImNvcmU6cGFzdGVcIjogXCJDb2xsZXJcIlxuICAgIFwiY29yZTpkZWxldGVcIjogXCJTdXBwcmltZXJcIlxuICAgIFwiY29yZTpzZWxlY3QtYWxsXCI6IFwiVG91dCBzw6lsZWN0aW9ubmVyXCJcbiAgICBcInBhbmU6c3BsaXQtdXAtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCJGcmFjdGlvbm5lciB2ZXJzIGxlIGhhdXQgZXQgY29waWVyIGwnw6lsw6ltZW50IGFjdGlmIOKGkVwiXG4gICAgXCJwYW5lOnNwbGl0LWRvd24tYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCJGcmFjdGlvbm5lciB2ZXJzIGxlIGJhcyBldCBjb3BpZXIgbCfDqWzDqW1lbnQgYWN0aWYg4oaTXCJcbiAgICBcInBhbmU6c3BsaXQtbGVmdC1hbmQtY29weS1hY3RpdmUtaXRlbVwiOiBcIkZyYWN0aW9ubmVyIHZlcnMgbGEgZHJvaXRlIGV0IGNvcGllciBsJ8OpbMOpbWVudCBhY3RpZiDihpBcIlxuICAgIFwicGFuZTpzcGxpdC1yaWdodC1hbmQtY29weS1hY3RpdmUtaXRlbVwiOiBcIkZyYWN0aW9ubmVyIHZlcnMgbGEgZ2F1Y2hlIGV0IGNvcGllciBsJ8OpbMOpbWVudCBhY3RpZiDihpJcIlxuICAgIFwicGFuZTpjbG9zZVwiOiBcIkZlcm1lclwiXG4gIFwiYXRvbS1wYW5lXCI6XG4gICAgXCJwYW5lOnNwbGl0LXVwLWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwiRnJhY3Rpb25uZXIgdmVycyBsZSBoYXV0IGV0IGNvcGllciBsJ8OpbMOpbWVudCBhY3RpZiDihpFcIlxuICAgIFwicGFuZTpzcGxpdC1kb3duLWFuZC1jb3B5LWFjdGl2ZS1pdGVtXCI6IFwiRnJhY3Rpb25uZXIgdmVycyBsZSBiYXMgZXQgY29waWVyIGwnw6lsw6ltZW50IGFjdGlmIOKGk1wiXG4gICAgXCJwYW5lOnNwbGl0LWxlZnQtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCJGcmFjdGlvbm5lciB2ZXJzIGxhIGdhdWNoZSBldCBjb3BpZXIgbCfDqWzDqW1lbnQgYWN0aWYg4oaQXCJcbiAgICBcInBhbmU6c3BsaXQtcmlnaHQtYW5kLWNvcHktYWN0aXZlLWl0ZW1cIjogXCJGcmFjdGlvbm5lciB2ZXJzIGxhIGRyb2l0ZSBldCBjb3BpZXIgbCfDqWzDqW1lbnQgYWN0aWYg4oaSXCJcbiAgICBcInBhbmU6Y2xvc2VcIjogXCJGZXJtZXJcIlxuICBcImF0b20tdGV4dC1lZGl0b3I6bm90KFttaW5pXSlcIjpcbiAgICBcImVuY29kaW5nLXNlbGVjdG9yOnNob3dcIjogXCJTw6lsZWN0aW9ubmVyIGwnZW5jb2RhZ2VcIlxuICAgIFwic3BlbGwtY2hlY2s6Y29ycmVjdC1taXNzcGVsbGluZ1wiOiBcIkNvcnJpZ2VyIGxlcyBmYXV0ZXMgZCdvcnRob2dyYXBoZVwiXG4gICAgXCJzeW1ib2xzLXZpZXc6Z28tdG8tZGVjbGFyYXRpb25cIjogXCJBbGxlciDDoCBsYSBkw6ljbGFyYXRpb25cIlxuICBcIi5vdmVybGF5ZXJcIjpcbiAgICBcImF1dG9jb21wbGV0ZTp0b2dnbGVcIjogXCJBY3RpdmVyL0TDqXNhY3RpdmVyIEF1dG9jb21wbGV0ZVwiXG4gICAgXCJncmFtbWFyLXNlbGVjdG9yOnNob3dcIjogXCJTw6lsZWN0aW9ubmVyIGxlIGxhbmdhZ2VcIlxuICBcIi5pbWFnZS12aWV3XCI6XG4gICAgXCJpbWFnZS12aWV3OnJlbG9hZFwiOiBcIkFjdHVhbGlzZXJcIlxuICBcIi50YWJcIjpcbiAgICBcInRhYnM6Y2xvc2UtdGFiXCI6IFwiRmVybWVyIGwnb25nbGV0XCJcbiAgICBcInRhYnM6Y2xvc2Utb3RoZXItdGFic1wiOiBcIkZlcm1lciB0b3VzIGxlcyBhdXRyZXMgb25nbGV0c1wiXG4gICAgXCJ0YWJzOmNsb3NlLXRhYnMtdG8tcmlnaHRcIjogXCJGZXJtZXIgbGVzIG9uZ2xldHMgw6AgZHJvaXRlXCJcbiAgICBcInRhYnM6Y2xvc2UtdGFicy10by1sZWZ0XCI6IFwiRmVybWVyIGxlcyBvbmdsZXRzIMOgIGdhdWNoZVwiXG4gICAgXCJ0YWJzOmNsb3NlLXNhdmVkLXRhYnNcIjogXCJGZXJtZXIgbGVzIG9uZ2xldHMgZW5yZWdpc3Ryw6lzXCJcbiAgICBcInRhYnM6Y2xvc2UtYWxsLXRhYnNcIjogXCJGZXJtZXIgdG91cyBsZXMgb25nbGV0c1wiXG4gICAgXCJ0YWJzOnNwbGl0LXVwXCI6IFwiRnJhY3Rpb25uZXIgdmVycyBsZSBoYXV0IOKGkVwiXG4gICAgXCJ0YWJzOnNwbGl0LWRvd25cIjogXCJGcmFjdGlvbm5lciB2ZXJzIGxlIGJhcyDihpNcIlxuICAgIFwidGFiczpzcGxpdC1sZWZ0XCI6IFwiRnJhY3Rpb25uZXIgdmVycyBsYSBnYXVjaGUg4oaQXCJcbiAgICBcInRhYnM6c3BsaXQtcmlnaHRcIjogXCJGcmFjdGlvbm5lciB2ZXJzIGxhIGRyb2l0ZSDihpJcIlxuICBcIi50YWIudGV4dGVkaXRvclwiOlxuICAgIFwidGFiczpvcGVuLWluLW5ldy13aW5kb3dcIjogXCJPdXZyaXIgZGFucyB1bmUgbm91dmVsbGUgZmVuw6p0cmVcIlxuICBcIi50YWItYmFyXCI6XG4gICAgXCJwYW5lOnJlb3Blbi1jbG9zZWQtaXRlbVwiOiBcIlLDqW91dnJpciBsZSBkZXJuaWVyIMOpbMOpbWVudCBmZXJtw6lcIlxuICBcIi50cmVlLXZpZXcuZnVsbC1tZW51XCI6XG4gICAgXCJ0cmVlLXZpZXc6YWRkLWZpbGVcIjogXCJBam91dGVyIHVuIGZpY2hpZXJcIlxuICAgIFwidHJlZS12aWV3OmFkZC1mb2xkZXJcIjogXCJBam91dGVyIHVuIGRvc3NpZXJcIlxuICAgIFwidHJlZS12aWV3Om1vdmVcIjogXCJEw6lwbGFjZXIuLi5cIlxuICAgIFwidHJlZS12aWV3OmR1cGxpY2F0ZVwiOiBcIkR1cGxpcXVlclwiXG4gICAgXCJ0cmVlLXZpZXc6cmVtb3ZlXCI6IFwiU3VwcHJpbWVyXCJcbiAgICBcInRyZWUtdmlldzpjb3B5XCI6IFwiQ29waWVyXCJcbiAgICBcInRyZWUtdmlldzpjdXRcIjogXCJDb3VwZXJcIlxuICAgIFwidHJlZS12aWV3OnBhc3RlXCI6IFwiQ29sbGVyXCJcbiAgICBcInRyZWUtdmlldzpvcGVuLXNlbGVjdGVkLWVudHJ5LXVwXCI6IFwiT3V2cmlyIGwnw6lsw6ltZW50IHPDqWxlY3Rpb25uw6kgZW4gaGF1dCDihpFcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktZG93blwiOiBcIk91dnJpciBsJ8OpbMOpbWVudCBzw6lsZWN0aW9ubsOpIGVuIGJhcyDihpNcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktbGVmdFwiOiBcIk91dnJpciBsJ8OpbMOpbWVudCBzw6lsZWN0aW9ubsOpIMOgIGdhdWNoZSDihpBcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktcmlnaHRcIjogXCJPdXZyaXIgbCfDqWzDqW1lbnQgc8OpbGVjdGlvbm7DqSDDoCBkcm9pdGUg4oaSXCJcbiAgICBcImFwcGxpY2F0aW9uOmFkZC1wcm9qZWN0LWZvbGRlclwiOiBcIkFqb3V0ZXIgdW4gZmljaGllciBkZSBwcm9qZXQuLi5cIlxuICAgIFwidHJlZS12aWV3OmNvcHktZnVsbC1wYXRoXCI6IFwiQ29waWVyIGxlIGNoZW1pbiBkJ2FjY8OocyBjb21wbGV0XCJcbiAgICBcInRyZWUtdmlldzpjb3B5LXByb2plY3QtcGF0aFwiOiBcIkNvcGllciBsZSBjaGVtaW4gZHUgcHJvamV0XCJcbiAgICBcInRyZWUtdmlldzpvcGVuLWluLW5ldy13aW5kb3dcIjogXCJPdXZyaXIgZGFucyB1bmUgbm91dmVsbGUgZmVuw6p0cmVcIlxuICAnLnRyZWUtdmlldy5mdWxsLW1lbnUgW2lzPVwidHJlZS12aWV3LWZpbGVcIl0nOlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktdXBcIjogXCJPdXZyaXIgbCfDqWzDqW1lbnQgc8OpbGVjdGlvbm7DqSBlbiBoYXV0IOKGkVwiXG4gICAgXCJ0cmVlLXZpZXc6b3Blbi1zZWxlY3RlZC1lbnRyeS1kb3duXCI6IFwiT3V2cmlyIGwnw6lsw6ltZW50IHPDqWxlY3Rpb25uw6kgZW4gYmFzIOKGk1wiXG4gICAgXCJ0cmVlLXZpZXc6b3Blbi1zZWxlY3RlZC1lbnRyeS1sZWZ0XCI6IFwiT3V2cmlyIGwnw6lsw6ltZW50IHPDqWxlY3Rpb25uw6kgw6AgZ2F1Y2hlIOKGkFwiXG4gICAgXCJ0cmVlLXZpZXc6b3Blbi1zZWxlY3RlZC1lbnRyeS1yaWdodFwiOiBcIk91dnJpciBsJ8OpbMOpbWVudCBzw6lsZWN0aW9ubsOpIMOgIGRyb2l0ZSDihpJcIlxuICBcIi50cmVlLXZpZXcuZnVsbC1tZW51IC5wcm9qZWN0LXJvb3QgPiAuaGVhZGVyXCI6XG4gICAgXCJ0cmVlLXZpZXc6YWRkLWZpbGVcIjogXCJBam91dGVyIHVuIGZpY2hpZXJcIlxuICAgIFwidHJlZS12aWV3OmFkZC1mb2xkZXJcIjogXCJBam91dGVyIHVuIGRvc3NpZXJcIlxuICAgIFwidHJlZS12aWV3Om1vdmVcIjogXCJEw6lwbGFjZXIuLi5cIlxuICAgIFwidHJlZS12aWV3OmR1cGxpY2F0ZVwiOiBcIkR1cGxpcXVlclwiXG4gICAgXCJ0cmVlLXZpZXc6cmVtb3ZlXCI6IFwiU3VwcHJpbWVyXCJcbiAgICBcInRyZWUtdmlldzpjb3B5XCI6IFwiQ29waWVyXCJcbiAgICBcInRyZWUtdmlldzpjdXRcIjogXCJDb3VwZXJcIlxuICAgIFwidHJlZS12aWV3OnBhc3RlXCI6IFwiQ29sbGVyXCJcbiAgICBcInRyZWUtdmlldzpvcGVuLXNlbGVjdGVkLWVudHJ5LXVwXCI6IFwiT3V2cmlyIGwnw6lsw6ltZW50IHPDqWxlY3Rpb25uw6kgZW4gaGF1dCDihpFcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktZG93blwiOiBcIk91dnJpciBsJ8OpbMOpbWVudCBzw6lsZWN0aW9ubsOpIGVuIGJhcyDihpNcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktbGVmdFwiOiBcIk91dnJpciBsJ8OpbMOpbWVudCBzw6lsZWN0aW9ubsOpIMOgIGdhdWNoZSDihpBcIlxuICAgIFwidHJlZS12aWV3Om9wZW4tc2VsZWN0ZWQtZW50cnktcmlnaHRcIjogXCJPdXZyaXIgbCfDqWzDqW1lbnQgc8OpbGVjdGlvbm7DqSDDoCBkcm9pdGUg4oaSXCJcbiAgICBcImFwcGxpY2F0aW9uOmFkZC1wcm9qZWN0LWZvbGRlclwiOiBcIkFqb3V0ZXIgdW4gZmljaGllciBkZSBwcm9qZXQuLi5cIlxuICAgIFwidHJlZS12aWV3OnJlbW92ZS1wcm9qZWN0LWZvbGRlclwiOiBcIlN1cHByaW1lciBsZSBmaWNoaWVyIGRlIHByb2pldFwiXG4gICAgXCJ0cmVlLXZpZXc6Y29weS1mdWxsLXBhdGhcIjogXCJDb3BpZXIgbGUgY2hlbWluIGQnYWNjw6hzIGNvbXBsZXRcIlxuICAgIFwidHJlZS12aWV3OmNvcHktcHJvamVjdC1wYXRoXCI6IFwiQ29waWVyIGxlIGNoZW1pbiBkdSBwcm9qZXRcIlxuICAgIFwidHJlZS12aWV3Om9wZW4taW4tbmV3LXdpbmRvd1wiOiBcIk91dnJpciBkYW5zIHVuZSBub3V2ZWxsZSBmZW7DqnRyZVwiXG4gIFwiLnBsYXRmb3JtLWRhcndpbiAudHJlZS12aWV3LmZ1bGwtbWVudVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctaW4tZmlsZS1tYW5hZ2VyXCI6IFwiVm9pciBkYW5zIEZpbmRlclwiXG4gIFwiLnBsYXRmb3JtLXdpbjMyIC50cmVlLXZpZXcuZnVsbC1tZW51XCI6XG4gICAgXCJ0cmVlLXZpZXc6c2hvdy1pbi1maWxlLW1hbmFnZXJcIjogXCJWb2lyIGRhbnMgbCdleHBsb3JhdGV1ciBXaW5kb3dzXCJcbiAgXCIucGxhdGZvcm0tbGludXggLnRyZWUtdmlldy5mdWxsLW1lbnVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWluLWZpbGUtbWFuYWdlclwiOiBcIlZvaXIgZGFucyBsZSBnZXN0aW9ubmFpcmUgZGUgZmljaGllcnNcIlxuICBcIi50cmVlLXZpZXcgPiBsaS5kaXJlY3RvcnlcIjpcbiAgICBcInByb2plY3QtZmluZDpzaG93LWluLWN1cnJlbnQtZGlyZWN0b3J5XCI6IFwiUmVjaGVyY2hlciBkYW5zIGxlIHLDqXBlcnRvaXJlIGFjdHVlbFwiXG4gIFwiLnRyZWUtdmlldy5tdWx0aS1zZWxlY3RcIjpcbiAgICBcInRyZWUtdmlldzpyZW1vdmVcIjogXCJTdXBwcmltZXJcIlxuICAgIFwidHJlZS12aWV3OmNvcHlcIjogXCJDb3BpZXJcIlxuICAgIFwidHJlZS12aWV3OmN1dFwiOiBcIkNvdXBlclwiXG4gICAgXCJ0cmVlLXZpZXc6cGFzdGVcIjogXCJDb2xsZXJcIlxuICBcImF0b20tcGFuZVtkYXRhLWFjdGl2ZS1pdGVtLXBhdGhdIC5pdGVtLXZpZXdzXCI6XG4gICAgXCJ0cmVlLXZpZXc6cmV2ZWFsLWFjdGl2ZS1maWxlXCI6IFwiQWZmaWNoZXIgbGUgZG9zc2llciBkdSBmaWNoaWVyIGFjdGlmXCJcbiAgXCJhdG9tLXBhbmVbZGF0YS1hY3RpdmUtaXRlbS1wYXRoXSAudGFiLmFjdGl2ZVwiOlxuICAgIFwidHJlZS12aWV3OnJlbmFtZVwiOiBcIlJlbm9tbWVyLi4uXCJcbiAgICBcInRyZWUtdmlldzpyZXZlYWwtYWN0aXZlLWZpbGVcIjogXCJBZmZpY2hlciBsZSBkb3NzaWVyIGR1IGZpY2hpZXIgYWN0aWZcIlxuICBcIi5wbGF0Zm9ybS1kYXJ3aW4gYXRvbS1wYW5lW2RhdGEtYWN0aXZlLWl0ZW0tcGF0aF0gLnRhYi5hY3RpdmVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCJWb2lyIGRhbnMgRmluZGVyXCJcbiAgXCIucGxhdGZvcm0td2luMzIgYXRvbS1wYW5lW2RhdGEtYWN0aXZlLWl0ZW0tcGF0aF0gLnRhYi5hY3RpdmVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCJWb2lyIGRhbnMgbCdleHBsb3JhdGV1ciBXaW5kb3dzXCJcbiAgXCIucGxhdGZvcm0tbGludXggYXRvbS1wYW5lW2RhdGEtYWN0aXZlLWl0ZW0tcGF0aF0gLnRhYi5hY3RpdmVcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCJWb2lyIGRhbnMgbGUgZ2VzdGlvbm5haXJlIGRlIGZpY2hpZXJzXCJcbiAgXCIucGxhdGZvcm0tZGFyd2luIGF0b20tdGV4dC1lZGl0b3I6bm90KFttaW5pXSlcIjpcbiAgICBcInRyZWUtdmlldzpzaG93LWN1cnJlbnQtZmlsZS1pbi1maWxlLW1hbmFnZXJcIjogXCJWb2lyIGRhbnMgRmluZGVyXCJcbiAgXCIucGxhdGZvcm0td2luMzIgYXRvbS10ZXh0LWVkaXRvcjpub3QoW21pbmldKVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctY3VycmVudC1maWxlLWluLWZpbGUtbWFuYWdlclwiOiBcIlZvaXIgZGFucyBsJ2V4cGxvcmF0ZXVyIFdpbmRvd3MnXCJcbiAgXCIucGxhdGZvcm0tbGludXggYXRvbS10ZXh0LWVkaXRvcjpub3QoW21pbmldKVwiOlxuICAgIFwidHJlZS12aWV3OnNob3ctY3VycmVudC1maWxlLWluLWZpbGUtbWFuYWdlclwiOiBcIlZvaXIgZGFucyBsZSBnZXN0aW9ubmFpcmUgZGUgZmljaGllcnNcIlxufVxuIl19
