module.exports = {
Context:
  "atom-workspace":
    "application:inspect": "Inspecter"
  "atom-text-editor":
    "color-picker:open": "Ouvrir Color Picker"
    "minimap:toggle": "Activer/Désactiver Minimap"
    "snowfall:toggle": "Activer/Désactiver Snowfall"
  "atom-text-editor, .overlayer":
    "core:undo": "Annuler"
    "core:redo": "Rétablir"
    "core:cut": "Couper"
    "core:copy": "Copier"
    "core:paste": "Coller"
    "core:delete": "Supprimer"
    "core:select-all": "Tout sélectionner"
    "pane:split-up-and-copy-active-item": "Fractionner vers le haut et copier l'élément actif ↑"
    "pane:split-down-and-copy-active-item": "Fractionner vers le bas et copier l'élément actif ↓"
    "pane:split-left-and-copy-active-item": "Fractionner vers la droite et copier l'élément actif ←"
    "pane:split-right-and-copy-active-item": "Fractionner vers la gauche et copier l'élément actif →"
    "pane:close": "Fermer"
  "atom-pane":
    "pane:split-up-and-copy-active-item": "Fractionner vers le haut et copier l'élément actif ↑"
    "pane:split-down-and-copy-active-item": "Fractionner vers le bas et copier l'élément actif ↓"
    "pane:split-left-and-copy-active-item": "Fractionner vers la gauche et copier l'élément actif ←"
    "pane:split-right-and-copy-active-item": "Fractionner vers la droite et copier l'élément actif →"
    "pane:close": "Fermer"
  "atom-text-editor:not([mini])":
    "encoding-selector:show": "Sélectionner l'encodage"
    "spell-check:correct-misspelling": "Corriger les fautes d'orthographe"
    "symbols-view:go-to-declaration": "Aller à la déclaration"
  ".overlayer":
    "autocomplete:toggle": "Activer/Désactiver Autocomplete"
    "grammar-selector:show": "Sélectionner le langage"
  ".image-view":
    "image-view:reload": "Actualiser"
  ".tab":
    "tabs:close-tab": "Fermer l'onglet"
    "tabs:close-other-tabs": "Fermer tous les autres onglets"
    "tabs:close-tabs-to-right": "Fermer les onglets à droite"
    "tabs:close-tabs-to-left": "Fermer les onglets à gauche"
    "tabs:close-saved-tabs": "Fermer les onglets enregistrés"
    "tabs:close-all-tabs": "Fermer tous les onglets"
    "tabs:split-up": "Fractionner vers le haut ↑"
    "tabs:split-down": "Fractionner vers le bas ↓"
    "tabs:split-left": "Fractionner vers la gauche ←"
    "tabs:split-right": "Fractionner vers la droite →"
  ".tab.texteditor":
    "tabs:open-in-new-window": "Ouvrir dans une nouvelle fenêtre"
  ".tab-bar":
    "pane:reopen-closed-item": "Réouvrir le dernier élément fermé"
  ".tree-view.full-menu":
    "tree-view:add-file": "Ajouter un fichier"
    "tree-view:add-folder": "Ajouter un dossier"
    "tree-view:move": "Déplacer..."
    "tree-view:duplicate": "Dupliquer"
    "tree-view:remove": "Supprimer"
    "tree-view:copy": "Copier"
    "tree-view:cut": "Couper"
    "tree-view:paste": "Coller"
    "tree-view:open-selected-entry-up": "Ouvrir l'élément sélectionné en haut ↑"
    "tree-view:open-selected-entry-down": "Ouvrir l'élément sélectionné en bas ↓"
    "tree-view:open-selected-entry-left": "Ouvrir l'élément sélectionné à gauche ←"
    "tree-view:open-selected-entry-right": "Ouvrir l'élément sélectionné à droite →"
    "application:add-project-folder": "Ajouter un fichier de projet..."
    "tree-view:copy-full-path": "Copier le chemin d'accès complet"
    "tree-view:copy-project-path": "Copier le chemin du projet"
    "tree-view:open-in-new-window": "Ouvrir dans une nouvelle fenêtre"
  '.tree-view.full-menu [is="tree-view-file"]':
    "tree-view:open-selected-entry-up": "Ouvrir l'élément sélectionné en haut ↑"
    "tree-view:open-selected-entry-down": "Ouvrir l'élément sélectionné en bas ↓"
    "tree-view:open-selected-entry-left": "Ouvrir l'élément sélectionné à gauche ←"
    "tree-view:open-selected-entry-right": "Ouvrir l'élément sélectionné à droite →"
  ".tree-view.full-menu .project-root > .header":
    "tree-view:add-file": "Ajouter un fichier"
    "tree-view:add-folder": "Ajouter un dossier"
    "tree-view:move": "Déplacer..."
    "tree-view:duplicate": "Dupliquer"
    "tree-view:remove": "Supprimer"
    "tree-view:copy": "Copier"
    "tree-view:cut": "Couper"
    "tree-view:paste": "Coller"
    "tree-view:open-selected-entry-up": "Ouvrir l'élément sélectionné en haut ↑"
    "tree-view:open-selected-entry-down": "Ouvrir l'élément sélectionné en bas ↓"
    "tree-view:open-selected-entry-left": "Ouvrir l'élément sélectionné à gauche ←"
    "tree-view:open-selected-entry-right": "Ouvrir l'élément sélectionné à droite →"
    "application:add-project-folder": "Ajouter un fichier de projet..."
    "tree-view:remove-project-folder": "Supprimer le fichier de projet"
    "tree-view:copy-full-path": "Copier le chemin d'accès complet"
    "tree-view:copy-project-path": "Copier le chemin du projet"
    "tree-view:open-in-new-window": "Ouvrir dans une nouvelle fenêtre"
  ".platform-darwin .tree-view.full-menu":
    "tree-view:show-in-file-manager": "Voir dans Finder"
  ".platform-win32 .tree-view.full-menu":
    "tree-view:show-in-file-manager": "Voir dans l'explorateur Windows"
  ".platform-linux .tree-view.full-menu":
    "tree-view:show-in-file-manager": "Voir dans le gestionnaire de fichiers"
  ".tree-view > li.directory":
    "project-find:show-in-current-directory": "Rechercher dans le répertoire actuel"
  ".tree-view.multi-select":
    "tree-view:remove": "Supprimer"
    "tree-view:copy": "Copier"
    "tree-view:cut": "Couper"
    "tree-view:paste": "Coller"
  "atom-pane[data-active-item-path] .item-views":
    "tree-view:reveal-active-file": "Afficher le dossier du fichier actif"
  "atom-pane[data-active-item-path] .tab.active":
    "tree-view:rename": "Renommer..."
    "tree-view:reveal-active-file": "Afficher le dossier du fichier actif"
  ".platform-darwin atom-pane[data-active-item-path] .tab.active":
    "tree-view:show-current-file-in-file-manager": "Voir dans Finder"
  ".platform-win32 atom-pane[data-active-item-path] .tab.active":
    "tree-view:show-current-file-in-file-manager": "Voir dans l'explorateur Windows"
  ".platform-linux atom-pane[data-active-item-path] .tab.active":
    "tree-view:show-current-file-in-file-manager": "Voir dans le gestionnaire de fichiers"
  ".platform-darwin atom-text-editor:not([mini])":
    "tree-view:show-current-file-in-file-manager": "Voir dans Finder"
  ".platform-win32 atom-text-editor:not([mini])":
    "tree-view:show-current-file-in-file-manager": "Voir dans l'explorateur Windows'"
  ".platform-linux atom-text-editor:not([mini])":
    "tree-view:show-current-file-in-file-manager": "Voir dans le gestionnaire de fichiers"
}
