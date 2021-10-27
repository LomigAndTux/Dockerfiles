(function() {
  module.exports = {
    Settings: {
      menu: [
        {
          label: "Core",
          value: "Principal"
        }, {
          label: "Editor",
          value: "Éditeur"
        }, {
          label: "System",
          value: "Système"
        }, {
          label: "Keybindings",
          value: "Raccourcis clavier"
        }, {
          label: "Packages",
          value: "Packages"
        }, {
          label: "Themes",
          value: "Thèmes"
        }, {
          label: "Updates",
          value: "Mises à jour"
        }, {
          label: "Install",
          value: "Installer"
        }
      ],
      sectionHeadings: [
        {
          label: "Core Settings",
          value: "Paramètres principaux"
        }, {
          label: "Editor Settings",
          value: "Paramètres de l'éditeur"
        }, {
          label: "System Settings",
          value: "Paramètres système"
        }, {
          label: "Keybindings",
          value: "Raccourcis clavier"
        }, {
          label: "Installed Packages",
          value: "Packages installés"
        }, {
          label: "Choose a Theme",
          value: "Choisir un thème"
        }, {
          label: "Installed Themes",
          value: "Thèmes installés"
        }, {
          label: "Available Updates",
          value: "Mises à jours disponibles"
        }, {
          label: "Install Packages",
          value: "Installer des packages"
        }, {
          label: "Featured Packages",
          value: "Packages à la une"
        }, {
          label: "Install Themes",
          value: "Installer des thèmes"
        }, {
          label: "Featured Themes",
          value: "Thèmes à la une"
        }
      ],
      subSectionHeadings: [
        {
          label: "Invisible",
          value: "Invisible"
        }, {
          label: "Community Packages",
          value: "Packages créés par la communauté"
        }, {
          label: "Core Packages",
          value: "Packages principaux"
        }, {
          label: "Development Packages",
          value: "Packages de développement"
        }, {
          label: "Git Packages",
          value: "Packages Git"
        }, {
          label: "Community Themes",
          value: "Thèmes créés par la communauté"
        }, {
          label: "Core Themes",
          value: "Thèmes principaux"
        }, {
          label: "Development Themes",
          value: "Thèmes de développement"
        }, {
          label: "Git Themes",
          value: "Thèmes Git"
        }
      ],
      settings: {
        notes: [
          {
            id: 'core-settings-note',
            html: 'Ce panel comprend les paramètres principaux d\'Atom, sans lien avec l\'éditeur de texte. Certains packages peuvent avoir leurs propres paramètres. Pour plus d\'informations, consultez les pages individuelles de chaque package disponibles dans la <a class="link packages-open">liste des packages</a>.'
          }, {
            id: 'editor-settings-note',
            html: 'Ce panel comprend les paramètres de l\'éditeur de texte. Il se peut que certains de ces paramètres ne s\'appliquent pas comme prévu pour certains langages. Pour plus d\'informations, consultez les pages individuelles de chaque package de langage dans la <a class="link packages-open">liste des packages</a>.'
          }
        ],
        controls: [
          {
            id: 'core.allowPendingPaneItems',
            title: "Prévisualisation des fichiers",
            desc: "Permets de prévisualiser le contenu de fichiers sans avoir à les ajouter à un volet de manière permanente. Par exemple, lorsqu'un seul clic est effectué sur un fichier depuis la colonne de navigation à gauche, ce fichier est considéré comme étant « provisoire » et sera remplacé par le prochain fichier provisoire ouvert. Cela peut s'avérer utile lorsque vous voulez, par exemple, rechercher une information mais que vous ne vous souvenez plus du fichier dans lequel cette information se trouve : vous pouvez donc ouvrir plusieurs fichiers sans avoir à tous les fermer une fois l'information trouvée. Plus d'informations (en anglais) sont disponibles sur http://flight-manual.atom.io/, chapitre 2, section « Pending Pane Items »."
          }, {
            id: 'core.audioBeep',
            title: "Signal sonore",
            desc: "Active le signal sonore (bip) du système lorsque certaines actions ne peuvent pas être exécutées ou lorsqu'aucun résultat n'est trouvé."
          }, {
            id: 'core.automaticallyUpdate',
            title: "Mises à jour automatiques",
            desc: "Mets à jour Atom automatiquement lorsqu'une nouvelle version est disponible."
          }, {
            id: 'core.autoHideMenuBar',
            title: "Cacher automatiquement la barre de menu",
            desc: "Cache automatiquement la barre de menu. Une fois l'option activée, la barre de menu pourra être activée et désactivée en appuyant sur Alt. Cette option ne fonctionne que sur Windows et Linux."
          }, {
            id: 'core.closeEmptyWindows',
            title: "Fermer les fenêtres vides",
            desc: "Si aucun onglet n'est ouvert dans une fenêtre et que la commande « Fermer l'onglet » est utilisée, ferme la fenêtre."
          }, {
            id: 'core.destroyEmptyPanes',
            title: "Supprimer les volets vides",
            desc: "Lorsque le dernier onglet d'un volet est fermé, ferme le volet en question."
          }, {
            id: 'core.excludeVcsIgnoredPaths',
            title: "Exclure les chemins ignorés par VCS",
            desc: "Les fichiers et dossiers ignorés par le système VCS (Gestion de versions) du projet actuel seront aussi ignorés par certains packages, tels que Fuzzy Finder et Find and Replace. Par exemple, les projets utilisant Git définissent ces chemins dans le fichier .gitignore. Certains packages peuvent avoir leurs propres paramètres concernant l'exclusion des fichiers et dossiers ignorés par VCS."
          }, {
            id: 'core.fileEncoding',
            title: "Encodage de fichier",
            desc: "Encodage des caractères à utiliser par défaut lors de la lecture et de l'écriture de fichiers."
          }, {
            id: 'core.followSymlinks',
            title: "Utiliser les liens symboliques",
            desc: "Utilise les liens symboliques lors de la recherche et de l'ouverture de fichiers à l'aide de Fuzzy Finder."
          }, {
            id: 'core.ignoredNames',
            title: "Extensions ignorées",
            desc: "Liste des motifs glob. Les fichiers et les répertoires correspondant à ces motifs seront ignorés par certains packages, tels que Fuzzy Finder et Tree View (colonne de navigation à droite) Certains packages peuvent avoir leurs propres paramètres concernant les extensions ignorées."
          }, {
            id: 'core.openEmptyEditorOnStart',
            title: "Ouvrir une fenêtre d'éditeur vide au démarrage",
            desc: "Ouvre automatiquement une fenêtre d'éditeur vide au démarrage du système."
          }, {
            id: 'core.packagesWithKeymapsDisabled',
            title: "Désactiver les raccourcis clavier des packages",
            desc: "Saisissez ci-dessous des noms de packages pour désactiver leurs raccourcis clavier."
          }, {
            id: 'core.projectHome',
            title: "Répertoire des projets",
            desc: "Le répertoire contenant vos projets. Les packages créés à l'aide de Package Generator seront enregistrés dans celui-ci par défaut."
          }, {
            id: 'core.telemetryConsent',
            title: "Envoyer des rapports à l'équipe d'Atom",
            desc: "Permets d'envoyer des rapports de statistiques et d'exceptions à l'équipe d'Atom afin d'aider à l'amélioration du produit.",
            select: {
              limited: "Permettre l'envoi de statistiques d'utilisation, de rapport d'exceptions et de plantages anonymes",
              no: "N'envoyer aucun rapport ni donnée",
              undecided: "Incertain (Atom vous le demandera à son prochain lancement)"
            }
          }, {
            id: 'core.useCustomTitleBar',
            title: "Utiliser une barre de titre personnalisée"
          }, {
            id: 'core.warnOnLargeFileLimit',
            title: "Avertir lors du dépassement de la limite de poids des fichiers",
            desc: "Affiche un avertissement lors de l'ouverture de fichiers dépassant le nombre de mégabytes mentionné."
          }, {
            id: 'editor.atomicSoftTabs',
            title: "Tabulations soft (Atomic)",
            desc: "Ignore les espaces blancs de tabulations lors du déplacement du curseur."
          }, {
            id: 'editor.autoIndent',
            title: "Indentation automatique",
            desc: "Indente automatiquement le curseur lors d'une nouvelle ligne."
          }, {
            id: 'editor.autoIndentOnPaste',
            title: "Indentation automatique (Coller)",
            desc: "Indente automatiquement le texte collé selon l'indentation de la ligne précédente."
          }, {
            id: 'editor.backUpBeforeSaving',
            title: "Créer une sauvegarde avant l'enregistrement d'un fichier",
            desc: "Créé une copie dupliquée des fichiers avant que ceux-ci ne soient enregistrés afin d'éviter tout problème de corruption de fichiers."
          }, {
            id: 'editor.confirmCheckoutHeadRevision',
            title: "Permettre d'annuler les derniers changements et de revenir à la dernière révision (HEAD REVISION)",
            desc: "Affiche une fenêtre de confirmation permettant d'annuler tous les derniers changements appliqués à un fichier et de revenir à la révision du dernier commit."
          }, {
            id: 'editor.fontFamily',
            title: "Police",
            desc: "Le nom de la police (font-family) à utiliser pour le texte écrit dans l'éditeur."
          }, {
            id: 'editor.fontSize',
            title: "Taille de la police",
            desc: "La taille de la police (font-size) à utiliser pour le texte écrit dans l'éditeur."
          }, {
            id: 'editor.invisibles.cr',
            title: "Retours chariot (Cr) invisibles",
            desc: "Caractère substitutif à utiliser afin de remplacer les caractères de retour chariot (\\r) lorsque l'option « Afficher les caractères invisibles » est activée."
          }, {
            id: 'editor.invisibles.eol',
            title: "Retours à la ligne (Eol) invisibles",
            desc: "Caractère substitutif à utiliser afin de remplacer les caractères de nouvelle ligne (\\n) lorsque l'option « Afficher les caractères invisibles » est activée."
          }, {
            id: 'editor.invisibles.space',
            title: "Espaces invisibles",
            desc: "Caractère substitutif à utiliser afin de remplacer les espaces apparaîssant en début et en fin de fichier lorsque l'option « Afficher les caractères invisibles » est activée."
          }, {
            id: 'editor.invisibles.tab',
            title: "Tabulations invisibles",
            desc: "Caractère substitutif à utiliser afin de remplacer les caractères de tabulation (\\t) lorsque l'option « Afficher les caractères invisibles » est activée."
          }, {
            id: 'editor.lineHeight',
            title: "Hauteur des lignes",
            desc: "La hauteur des lignes de l'éditeur."
          }, {
            id: 'editor.nonWordCharacters',
            title: "Caractères non-alphanumériques",
            desc: "Une chaîne de caractères non-alphanumériques utilisés pour définir les limites de mot."
          }, {
            id: 'editor.preferredLineLength',
            title: "Longueur de ligne spécifique",
            desc: "Identifie la longueur de la ligne utilisée lors d'un retour à la ligne lorsque l'option « Retour à la ligne automatique à une longueur de ligne spécifique » est activée, en nombre de caractères."
          }, {
            id: 'editor.scrollPastEnd',
            title: "Défiler au-delà de la fin d'un fichier",
            desc: "Permets de défiler au-delà de la fin d'un fichier."
          }, {
            id: 'editor.scrollSensitivity',
            title: "Sensibilité de défilement",
            desc: "Détermine la vitesse de défilement de l'éditeur lors de l'utilisation d'une souris ou d'un pavé tactile."
          }, {
            id: 'editor.showIndentGuide',
            title: "Afficher les lignes d'indentation",
            desc: "Affiche les indicateurs d'identation dans l'éditeur."
          }, {
            id: 'editor.showInvisibles',
            title: "Afficher les caractères invisibles",
            desc: "Affiche des caractères substitutifs afin de remplacer les caractères invisibles (tabulations, espaces, nouvelles lignes)"
          }, {
            id: 'editor.showLineNumbers',
            title: "Afficher le nombre de lignes",
            desc: "Affiche le nombre de lignes en bas de l'éditeur."
          }, {
            id: 'editor.softTabs',
            title: "Tabulations soft",
            desc: "Si l'option « Type de tabulations » est définie sur « auto » et que la détection automatique du type de tabulations échoue, alors ce paramètre sera utilisé à la place. Cochez-la si vous souhaitez utiliser des tabulations soft si la détection automatique échoue, ou décochez-la si vous souhaitez utiliser des tabulations hard."
          }, {
            id: 'editor.softWrap',
            title: "Retour à la ligne automatique",
            desc: "Un retour à la ligne sera automatiquement effectué si les lignes dépassent la largeur de la fenêtre. Si l'option « Retour à la ligne automatique à une longueur de ligne spécifique » est activée, un retour à la ligne sera effectué au nombre de caractères défini par l'option « Longueur de ligne spécifique »."
          }, {
            id: 'editor.softWrapAtPreferredLineLength',
            title: "Retour à la ligne automatique à une longueur de ligne spécifique",
            desc: "Au lieu d'effectuer un retour à la ligne si la largeur de la fenêtre est dépassé, activer cette option effectuera un retour à la ligne au nombre de caractères défini par l'option « Longueur de ligne spécifique ». Cela ne prendra effet que si l'option « Tabulations soft » est activée pour tous les langages ou pour le langage actuellement utilisé. Remarque : si vous souhaitez cacher l'indication de retour à la ligne (la ligne verticale), vous pouvez désactiver le package wrap-guide."
          }, {
            id: 'editor.softWrapHangingIndent',
            title: "Indentation des tabulations soft",
            desc: "Lorsque l'option « Tabulations soft » est activée, définit la longueur des indentations supplémentaires appliquées aux retours à la ligne, en nombre de caractères."
          }, {
            id: 'editor.tabLength',
            title: "Longueur des tabulations",
            desc: "Nombre d'espaces à utiliser pour représenter une tabulation."
          }, {
            id: 'editor.tabType',
            title: "Type de tabulations",
            desc: 'Détermine le caractère à insérer lorsque la touche Tab est appuyée. Valeurs possibles : « auto », « soft » et « hard ». Lorsque la valeur est définie sur « soft » ou « hard », les tabulations soft (espaces) ou les tabulations hard (caractères de tabulation) sont utilisées selon l\'option choisie. Lorsque la valeur est définie sur « auto », l\'éditeur se chargera de détecter automatiquement le type de tabulations à utiliser en se basant sur les contenus du buffer, ou utilisera la valeur « soft » si la détection automatique échoue.'
          }, {
            id: 'editor.undoGroupingInterval',
            title: "Intervalle d'application des annulations",
            desc: "L'intervalle de temps en millisecondes pendant laquelle les opérations d'édition de texte sont « groupées » dans l'historique des annulations. Par exemple, si l'intervalle est de 10 000 millisecondes, appuyer simultanément sur CTRL et Z annulera les modifications effectuées toutes les 10 secondes. La même option s'applique pour l'action « Rétablir » (CTRL+Y)."
          }, {
            id: 'editor.zoomFontWhenCtrlScrolling',
            title: "Modifier la taille de la police avec défilement + Ctrl",
            desc: "Modifie la taille de la police de l'éditeur lorsque la touche Ctrl et la molette de défilement sont utilisées simultanément."
          }, {
            id: 'system.windows.file-handler',
            title: 'Ajouter Atom au menu d\'association d\'applications',
            desc: 'Affiche Atom dans le menu « Ouvrir avec > Choisir une autre application » de l\'explorateur Windows afin de rendre l\'association à d\'autres fichiers plus simple.'
          }, {
            id: 'system.windows.shell-menu-files',
            title: 'Ouvrir avec Atom (Fichier)',
            desc: 'Ajoute l\'option « Ouvrir avec Atom » dans le menu contextuel de l\'explorateur Windows pour les fichiers.'
          }, {
            id: 'system.windows.shell-menu-folders',
            title: 'Ouvrir avec Atom (Dossier)',
            desc: 'Ajoute l\'option « Ouvrir avec Atom » dans le menu contextuel de l\'explorateur Windows pour les dossiers.'
          }
        ]
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZnJlbmNoLW1lbnUvZGVmL3NldHRpbmdzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO0lBQ2pCLFFBQUEsRUFDRTtNQUFBLElBQUEsRUFBTTtRQUNKO1VBQ0UsS0FBQSxFQUFPLE1BRFQ7VUFFRSxLQUFBLEVBQU8sV0FGVDtTQURJLEVBS0o7VUFDRSxLQUFBLEVBQU8sUUFEVDtVQUVFLEtBQUEsRUFBTyxTQUZUO1NBTEksRUFTSjtVQUNFLEtBQUEsRUFBTyxRQURUO1VBRUUsS0FBQSxFQUFPLFNBRlQ7U0FUSSxFQWFKO1VBQ0UsS0FBQSxFQUFPLGFBRFQ7VUFFRSxLQUFBLEVBQU8sb0JBRlQ7U0FiSSxFQWlCSjtVQUNFLEtBQUEsRUFBTyxVQURUO1VBRUUsS0FBQSxFQUFPLFVBRlQ7U0FqQkksRUFxQko7VUFDRSxLQUFBLEVBQU8sUUFEVDtVQUVFLEtBQUEsRUFBTyxRQUZUO1NBckJJLEVBeUJKO1VBQ0UsS0FBQSxFQUFPLFNBRFQ7VUFFRSxLQUFBLEVBQU8sY0FGVDtTQXpCSSxFQTZCSjtVQUNFLEtBQUEsRUFBTyxTQURUO1VBRUUsS0FBQSxFQUFPLFdBRlQ7U0E3Qkk7T0FBTjtNQWtDQSxlQUFBLEVBQWlCO1FBQ2Y7VUFBQyxLQUFBLEVBQU8sZUFBUjtVQUF5QixLQUFBLEVBQU8sdUJBQWhDO1NBRGUsRUFFZjtVQUFDLEtBQUEsRUFBTyxpQkFBUjtVQUEyQixLQUFBLEVBQU8seUJBQWxDO1NBRmUsRUFHZjtVQUFDLEtBQUEsRUFBTyxpQkFBUjtVQUEyQixLQUFBLEVBQU8sb0JBQWxDO1NBSGUsRUFJZjtVQUFDLEtBQUEsRUFBTyxhQUFSO1VBQXVCLEtBQUEsRUFBTyxvQkFBOUI7U0FKZSxFQUtmO1VBQUMsS0FBQSxFQUFPLG9CQUFSO1VBQThCLEtBQUEsRUFBTyxvQkFBckM7U0FMZSxFQU1mO1VBQUMs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QUksbUNBRE47WUFFRSxLQUFBLEVBQU8sNEJBRlQ7WUFHRSxJQUFBLEVBQU0sNEdBSFI7V0F0UFE7U0FiRjtPQTNEVjtLQUZlOztBQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuU2V0dGluZ3M6XG4gIG1lbnU6IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCJDb3JlXCJcbiAgICAgIHZhbHVlOiBcIlByaW5jaXBhbFwiXG4gICAgfVxuICAgIHtcbiAgICAgIGxhYmVsOiBcIkVkaXRvclwiXG4gICAgICB2YWx1ZTogXCLDiWRpdGV1clwiXG4gICAgfVxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlN5c3RlbVwiXG4gICAgICB2YWx1ZTogXCJTeXN0w6htZVwiXG4gICAgfVxuICAgIHtcbiAgICAgIGxhYmVsOiBcIktleWJpbmRpbmdzXCJcbiAgICAgIHZhbHVlOiBcIlJhY2NvdXJjaXMgY2xhdmllclwiXG4gICAgfVxuICAgIHtcbiAgICAgIGxhYmVsOiBcIlBhY2thZ2VzXCJcbiAgICAgIHZhbHVlOiBcIlBhY2thZ2VzXCJcbiAgICB9XG4gICAge1xuICAgICAgbGFiZWw6IFwiVGhlbWVzXCJcbiAgICAgIHZhbHVlOiBcIlRow6htZXNcIlxuICAgIH1cbiAgICB7XG4gICAgICBsYWJlbDogXCJVcGRhdGVzXCJcbiAgICAgIHZhbHVlOiBcIk1pc2VzIMOgIGpvdXJcIlxuICAgIH1cbiAgICB7XG4gICAgICBsYWJlbDogXCJJbnN0YWxsXCJcbiAgICAgIHZhbHVlOiBcIkluc3RhbGxlclwiXG4gICAgfVxuICBdXG4gIHNlY3Rpb25IZWFkaW5nczogW1xuICAgIHtsYWJlbDogXCJDb3JlIFNldHRpbmdzXCIsIHZhbHVlOiBcIlBhcmFtw6h0cmVzIHByaW5jaXBhdXhcIn1cbiAgICB7bGFiZWw6IFwiRWRpdG9yIFNldHRpbmdzXCIsIHZhbHVlOiBcIlBhcmFtw6h0cmVzIGRlIGwnw6lkaXRldXJcIn1cbiAgICB7bGFiZWw6IFwiU3lzdGVtIFNldHRpbmdzXCIsIHZhbHVlOiBcIlBhcmFtw6h0cmVzIHN5c3TDqG1lXCJ9XG4gICAge2xhYmVsOiBcIktleWJpbmRpbmdzXCIsIHZhbHVlOiBcIlJhY2NvdXJjaXMgY2xhdmllclwifVxuICAgIHtsYWJlbDogXCJJbnN0YWxsZWQgUGFja2FnZXNcIiwgdmFsdWU6IFwiUGFja2FnZXMgaW5zdGFsbMOpc1wifVxuICAgIHtsYWJlbDogXCJDaG9vc2UgYSBUaGVtZVwiLCB2YWx1ZTogXCJDaG9pc2lyIHVuIHRow6htZVwifVxuICAgIHtsYWJlbDogXCJJbnN0YWxsZWQgVGhlbWVzXCIsIHZhbHVlOiBcIlRow6htZXMgaW5zdGFsbMOpc1wifVxuICAgIHtsYWJlbDogXCJBdmFpbGFibGUgVXBkYXRlc1wiLCB2YWx1ZTogXCJNaXNlcyDDoCBqb3VycyBkaXNwb25pYmxlc1wifVxuICAgIHtsYWJlbDogXCJJbnN0YWxsIFBhY2thZ2VzXCIsIHZhbHVlOiBcIkluc3RhbGxlciBkZXMgcGFja2FnZXNcIn1cbiAgICB7bGFiZWw6IFwiRmVhdHVyZWQgUGFja2FnZXNcIiwgdmFsdWU6IFwiUGFja2FnZXMgw6AgbGEgdW5lXCJ9XG4gICAge2xhYmVsOiBcIkluc3RhbGwgVGhlbWVzXCIsIHZhbHVlOiBcIkluc3RhbGxlciBkZXMgdGjDqG1lc1wifVxuICAgIHtsYWJlbDogXCJGZWF0dXJlZCBUaGVtZXNcIiwgdmFsdWU6IFwiVGjDqG1lcyDDoCBsYSB1bmVcIn1cbiAgXVxuICBzdWJTZWN0aW9uSGVhZGluZ3M6IFtcbiAgICB7bGFiZWw6IFwiSW52aXNpYmxlXCIsIHZhbHVlOiBcIkludmlzaWJsZVwifVxuICAgIHtsYWJlbDogXCJDb21tdW5pdHkgUGFja2FnZXNcIiwgdmFsdWU6IFwiUGFja2FnZXMgY3LDqcOpcyBwYXIgbGEgY29tbXVuYXV0w6lcIn1cbiAgICB7bGFiZWw6IFwiQ29yZSBQYWNrYWdlc1wiLCB2YWx1ZTogXCJQYWNrYWdlcyBwcmluY2lwYXV4XCJ9XG4gICAge2xhYmVsOiBcIkRldmVsb3BtZW50IFBhY2thZ2VzXCIsIHZhbHVlOiBcIlBhY2thZ2VzIGRlIGTDqXZlbG9wcGVtZW50XCJ9XG4gICAge2xhYmVsOiBcIkdpdCBQYWNrYWdlc1wiLCB2YWx1ZTogXCJQYWNrYWdlcyBHaXRcIn1cbiAgICB7bGFiZWw6IFwiQ29tbXVuaXR5IFRoZW1lc1wiLCB2YWx1ZTogXCJUaMOobWVzIGNyw6nDqXMgcGFyIGxhIGNvbW11bmF1dMOpXCJ9XG4gICAge2xhYmVsOiBcIkNvcmUgVGhlbWVzXCIsIHZhbHVlOiBcIlRow6htZXMgcHJpbmNpcGF1eFwifVxuICAgIHtsYWJlbDogXCJEZXZlbG9wbWVudCBUaGVtZXNcIiwgdmFsdWU6IFwiVGjDqG1lcyBkZSBkw6l2ZWxvcHBlbWVudFwifVxuICAgIHtsYWJlbDogXCJHaXQgVGhlbWVzXCIsIHZhbHVlOiBcIlRow6htZXMgR2l0XCJ9XG4gIF1cbiAgc2V0dGluZ3M6IHtcbiAgICBub3RlczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUtc2V0dGluZ3Mtbm90ZSdcbiAgICAgICAgaHRtbDogJ0NlIHBhbmVsIGNvbXByZW5kIGxlcyBwYXJhbcOodHJlcyBwcmluY2lwYXV4IGRcXCdBdG9tLCBzYW5zIGxpZW4gYXZlYyBsXFwnw6lkaXRldXIgZGUgdGV4dGUuIENlcnRhaW5zIHBhY2thZ2VzXG4gICAgICAgICAgICAgICBwZXV2ZW50IGF2b2lyIGxldXJzIHByb3ByZXMgcGFyYW3DqHRyZXMuIFBvdXIgcGx1cyBkXFwnaW5mb3JtYXRpb25zLCBjb25zdWx0ZXogbGVzIHBhZ2VzIGluZGl2aWR1ZWxsZXMgZGUgY2hhcXVlIHBhY2thZ2UgZGlzcG9uaWJsZXMgZGFucyBsYSA8YSBjbGFzcz1cImxpbmsgcGFja2FnZXMtb3BlblwiPmxpc3RlIGRlcyBwYWNrYWdlczwvYT4uJ1xuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci1zZXR0aW5ncy1ub3RlJ1xuICAgICAgICBodG1sOiAnQ2UgcGFuZWwgY29tcHJlbmQgbGVzIHBhcmFtw6h0cmVzIGRlIGxcXCfDqWRpdGV1ciBkZSB0ZXh0ZS4gSWwgc2UgcGV1dCBxdWUgY2VydGFpbnMgZGUgY2VzIHBhcmFtw6h0cmVzIG5lIHNcXCdhcHBsaXF1ZW50IHBhcyBjb21tZSBwcsOpdnUgcG91ciBjZXJ0YWlucyBsYW5nYWdlcy5cbiAgICAgICAgICAgICAgIFBvdXIgcGx1cyBkXFwnaW5mb3JtYXRpb25zLCBjb25zdWx0ZXogbGVzIHBhZ2VzIGluZGl2aWR1ZWxsZXMgZGUgY2hhcXVlIHBhY2thZ2UgZGUgbGFuZ2FnZSBkYW5zIGxhIDxhIGNsYXNzPVwibGluayBwYWNrYWdlcy1vcGVuXCI+bGlzdGUgZGVzIHBhY2thZ2VzPC9hPi4nXG4gICAgICB9XG4gICAgXVxuICAgIGNvbnRyb2xzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5hbGxvd1BlbmRpbmdQYW5lSXRlbXMnXG4gICAgICAgIHRpdGxlOiBcIlByw6l2aXN1YWxpc2F0aW9uIGRlcyBmaWNoaWVyc1wiXG4gICAgICAgIGRlc2M6IFwiUGVybWV0cyBkZSBwcsOpdmlzdWFsaXNlciBsZSBjb250ZW51IGRlIGZpY2hpZXJzIHNhbnMgYXZvaXIgw6AgbGVzIGFqb3V0ZXIgw6AgdW4gdm9sZXQgZGUgbWFuacOocmUgcGVybWFuZW50ZS5cbiAgICAgICAgUGFyIGV4ZW1wbGUsIGxvcnNxdSd1biBzZXVsIGNsaWMgZXN0IGVmZmVjdHXDqSBzdXIgdW4gZmljaGllciBkZXB1aXMgbGEgY29sb25uZSBkZSBuYXZpZ2F0aW9uIMOgIGdhdWNoZSwgY2UgZmljaGllclxuICAgICAgICBlc3QgY29uc2lkw6lyw6kgY29tbWUgw6l0YW50IMKrIHByb3Zpc29pcmUgwrsgZXQgc2VyYSByZW1wbGFjw6kgcGFyIGxlIHByb2NoYWluIGZpY2hpZXIgcHJvdmlzb2lyZSBvdXZlcnQuIENlbGEgcGV1dCBzJ2F2w6lyZXIgdXRpbGUgbG9yc3F1ZSB2b3VzIHZvdWxleiwgcGFyIGV4ZW1wbGUsIHJlY2hlcmNoZXIgdW5lIGluZm9ybWF0aW9uIG1haXMgcXVlIHZvdXMgbmUgdm91cyBzb3V2ZW5lelxuICAgICAgICBwbHVzIGR1IGZpY2hpZXIgZGFucyBsZXF1ZWwgY2V0dGUgaW5mb3JtYXRpb24gc2UgdHJvdXZlIDogdm91cyBwb3V2ZXogZG9uYyBvdXZyaXIgcGx1c2lldXJzIGZpY2hpZXJzIHNhbnMgYXZvaXIgw6AgdG91c1xuICAgICAgICBsZXMgZmVybWVyIHVuZSBmb2lzIGwnaW5mb3JtYXRpb24gdHJvdXbDqWUuIFBsdXMgZCdpbmZvcm1hdGlvbnMgKGVuIGFuZ2xhaXMpIHNvbnQgZGlzcG9uaWJsZXMgc3VyIGh0dHA6Ly9mbGlnaHQtbWFudWFsLmF0b20uaW8vLCBjaGFwaXRyZSAyLCBzZWN0aW9uIMKrIFBlbmRpbmcgUGFuZSBJdGVtcyDCuy5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuYXVkaW9CZWVwJ1xuICAgICAgICB0aXRsZTogXCJTaWduYWwgc29ub3JlXCJcbiAgICAgICAgZGVzYzogXCJBY3RpdmUgbGUgc2lnbmFsIHNvbm9yZSAoYmlwKSBkdSBzeXN0w6htZSBsb3JzcXVlIGNlcnRhaW5lcyBhY3Rpb25zIG5lIHBldXZlbnQgcGFzIMOqdHJlIGV4w6ljdXTDqWVzIG91IGxvcnNxdSdhdWN1biByw6lzdWx0YXQgbidlc3QgdHJvdXbDqS5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuYXV0b21hdGljYWxseVVwZGF0ZSdcbiAgICAgICAgdGl0bGU6IFwiTWlzZXMgw6Agam91ciBhdXRvbWF0aXF1ZXNcIlxuICAgICAgICBkZXNjOiBcIk1ldHMgw6Agam91ciBBdG9tIGF1dG9tYXRpcXVlbWVudCBsb3JzcXUndW5lIG5vdXZlbGxlIHZlcnNpb24gZXN0IGRpc3BvbmlibGUuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLmF1dG9IaWRlTWVudUJhcidcbiAgICAgICAgdGl0bGU6IFwiQ2FjaGVyIGF1dG9tYXRpcXVlbWVudCBsYSBiYXJyZSBkZSBtZW51XCJcbiAgICAgICAgZGVzYzogXCJDYWNoZSBhdXRvbWF0aXF1ZW1lbnQgbGEgYmFycmUgZGUgbWVudS4gVW5lIGZvaXMgbCdvcHRpb24gYWN0aXbDqWUsIGxhIGJhcnJlIGRlIG1lbnUgcG91cnJhIMOqdHJlIGFjdGl2w6llIGV0IGTDqXNhY3RpdsOpZSBlbiBhcHB1eWFudCBzdXIgQWx0LiBDZXR0ZSBvcHRpb24gbmUgZm9uY3Rpb25uZSBxdWUgc3VyIFdpbmRvd3MgZXQgTGludXguXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLmNsb3NlRW1wdHlXaW5kb3dzJ1xuICAgICAgICB0aXRsZTogXCJGZXJtZXIgbGVzIGZlbsOqdHJlcyB2aWRlc1wiXG4gICAgICAgIGRlc2M6IFwiU2kgYXVjdW4gb25nbGV0IG4nZXN0IG91dmVydCBkYW5zIHVuZSBmZW7DqnRyZSBldCBxdWUgbGEgY29tbWFuZGUgwqsgRmVybWVyIGwnb25nbGV0IMK7IGVzdCB1dGlsaXPDqWUsIGZlcm1lIGxhIGZlbsOqdHJlLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5kZXN0cm95RW1wdHlQYW5lcydcbiAgICAgICAgdGl0bGU6IFwiU3VwcHJpbWVyIGxlcyB2b2xldHMgdmlkZXNcIlxuICAgICAgICBkZXNjOiBcIkxvcnNxdWUgbGUgZGVybmllciBvbmdsZXQgZCd1biB2b2xldCBlc3QgZmVybcOpLCBmZXJtZSBsZSB2b2xldCBlbiBxdWVzdGlvbi5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUuZXhjbHVkZVZjc0lnbm9yZWRQYXRocydcbiAgICAgICAgdGl0bGU6IFwiRXhjbHVyZSBsZXMgY2hlbWlucyBpZ25vcsOpcyBwYXIgVkNTXCJcbiAgICAgICAgZGVzYzogXCJMZXMgZmljaGllcnMgZXQgZG9zc2llcnMgaWdub3LDqXMgcGFyIGxlIHN5c3TDqG1lIFZDUyAoR2VzdGlvbiBkZSB2ZXJzaW9ucykgZHUgcHJvamV0IGFjdHVlbCBzZXJvbnQgYXVzc2kgaWdub3LDqXMgcGFyIGNlcnRhaW5zIHBhY2thZ2VzLFxuICAgICAgICAgICAgICAgdGVscyBxdWUgRnV6enkgRmluZGVyIGV0IEZpbmQgYW5kIFJlcGxhY2UuIFBhciBleGVtcGxlLCBsZXMgcHJvamV0cyB1dGlsaXNhbnQgR2l0IGTDqWZpbmlzc2VudCBjZXMgY2hlbWlucyBkYW5zIGxlIGZpY2hpZXIgLmdpdGlnbm9yZS5cbiAgICAgICAgICAgICAgIENlcnRhaW5zIHBhY2thZ2VzIHBldXZlbnQgYXZvaXIgbGV1cnMgcHJvcHJlcyBwYXJhbcOodHJlcyBjb25jZXJuYW50IGwnZXhjbHVzaW9uIGRlcyBmaWNoaWVycyBldCBkb3NzaWVycyBpZ25vcsOpcyBwYXIgVkNTLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5maWxlRW5jb2RpbmcnXG4gICAgICAgIHRpdGxlOiBcIkVuY29kYWdlIGRlIGZpY2hpZXJcIlxuICAgICAgICBkZXNjOiBcIkVuY29kYWdlIGRlcyBjYXJhY3TDqHJlcyDDoCB1dGlsaXNlciBwYXIgZMOpZmF1dCBsb3JzIGRlIGxhIGxlY3R1cmUgZXQgZGUgbCfDqWNyaXR1cmUgZGUgZmljaGllcnMuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLmZvbGxvd1N5bWxpbmtzJ1xuICAgICAgICB0aXRsZTogXCJVdGlsaXNlciBsZXMgbGllbnMgc3ltYm9saXF1ZXNcIlxuICAgICAgICBkZXNjOiBcIlV0aWxpc2UgbGVzIGxpZW5zIHN5bWJvbGlxdWVzIGxvcnMgZGUgbGEgcmVjaGVyY2hlIGV0IGRlIGwnb3V2ZXJ0dXJlIGRlIGZpY2hpZXJzIMOgIGwnYWlkZSBkZSBGdXp6eSBGaW5kZXIuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLmlnbm9yZWROYW1lcydcbiAgICAgICAgdGl0bGU6IFwiRXh0ZW5zaW9ucyBpZ25vcsOpZXNcIlxuICAgICAgICBkZXNjOiBcIkxpc3RlIGRlcyBtb3RpZnMgZ2xvYi4gTGVzIGZpY2hpZXJzIGV0IGxlcyByw6lwZXJ0b2lyZXMgY29ycmVzcG9uZGFudCDDoCBjZXMgbW90aWZzIHNlcm9udCBpZ25vcsOpcyBwYXIgY2VydGFpbnMgcGFja2FnZXMsXG4gICAgICAgICAgICAgICB0ZWxzIHF1ZSBGdXp6eSBGaW5kZXIgZXQgVHJlZSBWaWV3IChjb2xvbm5lIGRlIG5hdmlnYXRpb24gw6AgZHJvaXRlKVxuICAgICAgICAgICAgICAgQ2VydGFpbnMgcGFja2FnZXMgcGV1dmVudCBhdm9pciBsZXVycyBwcm9wcmVzIHBhcmFtw6h0cmVzIGNvbmNlcm5hbnQgbGVzIGV4dGVuc2lvbnMgaWdub3LDqWVzLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5vcGVuRW1wdHlFZGl0b3JPblN0YXJ0J1xuICAgICAgICB0aXRsZTogXCJPdXZyaXIgdW5lIGZlbsOqdHJlIGQnw6lkaXRldXIgdmlkZSBhdSBkw6ltYXJyYWdlXCJcbiAgICAgICAgZGVzYzogXCJPdXZyZSBhdXRvbWF0aXF1ZW1lbnQgdW5lIGZlbsOqdHJlIGQnw6lkaXRldXIgdmlkZSBhdSBkw6ltYXJyYWdlIGR1IHN5c3TDqG1lLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS5wYWNrYWdlc1dpdGhLZXltYXBzRGlzYWJsZWQnXG4gICAgICAgIHRpdGxlOiBcIkTDqXNhY3RpdmVyIGxlcyByYWNjb3VyY2lzIGNsYXZpZXIgZGVzIHBhY2thZ2VzXCJcbiAgICAgICAgZGVzYzogXCJTYWlzaXNzZXogY2ktZGVzc291cyBkZXMgbm9tcyBkZSBwYWNrYWdlcyBwb3VyIGTDqXNhY3RpdmVyIGxldXJzIHJhY2NvdXJjaXMgY2xhdmllci5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUucHJvamVjdEhvbWUnXG4gICAgICAgIHRpdGxlOiBcIlLDqXBlcnRvaXJlIGRlcyBwcm9qZXRzXCJcbiAgICAgICAgZGVzYzogXCJMZSByw6lwZXJ0b2lyZSBjb250ZW5hbnQgdm9zIHByb2pldHMuIExlcyBwYWNrYWdlcyBjcsOpw6lzIMOgIGwnYWlkZSBkZSBQYWNrYWdlIEdlbmVyYXRvciBzZXJvbnQgZW5yZWdpc3Ryw6lzIGRhbnMgY2VsdWktY2kgcGFyIGTDqWZhdXQuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdjb3JlLnRlbGVtZXRyeUNvbnNlbnQnXG4gICAgICAgIHRpdGxlOiBcIkVudm95ZXIgZGVzIHJhcHBvcnRzIMOgIGwnw6lxdWlwZSBkJ0F0b21cIlxuICAgICAgICBkZXNjOiBcIlBlcm1ldHMgZCdlbnZveWVyIGRlcyByYXBwb3J0cyBkZSBzdGF0aXN0aXF1ZXMgZXQgZCdleGNlcHRpb25zIMOgIGwnw6lxdWlwZSBkJ0F0b20gYWZpbiBkJ2FpZGVyIMOgIGwnYW3DqWxpb3JhdGlvbiBkdSBwcm9kdWl0LlwiXG4gICAgICAgIHNlbGVjdDpcbiAgICAgICAgICBsaW1pdGVkOiBcIlBlcm1ldHRyZSBsJ2Vudm9pIGRlIHN0YXRpc3RpcXVlcyBkJ3V0aWxpc2F0aW9uLCBkZSByYXBwb3J0IGQnZXhjZXB0aW9ucyBldCBkZSBwbGFudGFnZXMgYW5vbnltZXNcIlxuICAgICAgICAgIG5vOiBcIk4nZW52b3llciBhdWN1biByYXBwb3J0IG5pIGRvbm7DqWVcIlxuICAgICAgICAgIHVuZGVjaWRlZDogXCJJbmNlcnRhaW4gKEF0b20gdm91cyBsZSBkZW1hbmRlcmEgw6Agc29uIHByb2NoYWluIGxhbmNlbWVudClcIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2NvcmUudXNlQ3VzdG9tVGl0bGVCYXInXG4gICAgICAgIHRpdGxlOiBcIlV0aWxpc2VyIHVuZSBiYXJyZSBkZSB0aXRyZSBwZXJzb25uYWxpc8OpZVwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnY29yZS53YXJuT25MYXJnZUZpbGVMaW1pdCdcbiAgICAgICAgdGl0bGU6IFwiQXZlcnRpciBsb3JzIGR1IGTDqXBhc3NlbWVudCBkZSBsYSBsaW1pdGUgZGUgcG9pZHMgZGVzIGZpY2hpZXJzXCJcbiAgICAgICAgZGVzYzogXCJBZmZpY2hlIHVuIGF2ZXJ0aXNzZW1lbnQgbG9ycyBkZSBsJ291dmVydHVyZSBkZSBmaWNoaWVycyBkw6lwYXNzYW50IGxlIG5vbWJyZSBkZSBtw6lnYWJ5dGVzIG1lbnRpb25uw6kuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3IuYXRvbWljU29mdFRhYnMnXG4gICAgICAgIHRpdGxlOiBcIlRhYnVsYXRpb25zIHNvZnQgKEF0b21pYylcIlxuICAgICAgICBkZXNjOiBcIklnbm9yZSBsZXMgZXNwYWNlcyBibGFuY3MgZGUgdGFidWxhdGlvbnMgbG9ycyBkdSBkw6lwbGFjZW1lbnQgZHUgY3Vyc2V1ci5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5hdXRvSW5kZW50J1xuICAgICAgICB0aXRsZTogXCJJbmRlbnRhdGlvbiBhdXRvbWF0aXF1ZVwiXG4gICAgICAgIGRlc2M6IFwiSW5kZW50ZSBhdXRvbWF0aXF1ZW1lbnQgbGUgY3Vyc2V1ciBsb3JzIGQndW5lIG5vdXZlbGxlIGxpZ25lLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmF1dG9JbmRlbnRPblBhc3RlJ1xuICAgICAgICB0aXRsZTogXCJJbmRlbnRhdGlvbiBhdXRvbWF0aXF1ZSAoQ29sbGVyKVwiXG4gICAgICAgIGRlc2M6IFwiSW5kZW50ZSBhdXRvbWF0aXF1ZW1lbnQgbGUgdGV4dGUgY29sbMOpIHNlbG9uIGwnaW5kZW50YXRpb24gZGUgbGEgbGlnbmUgcHLDqWPDqWRlbnRlLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmJhY2tVcEJlZm9yZVNhdmluZydcbiAgICAgICAgdGl0bGU6IFwiQ3LDqWVyIHVuZSBzYXV2ZWdhcmRlIGF2YW50IGwnZW5yZWdpc3RyZW1lbnQgZCd1biBmaWNoaWVyXCJcbiAgICAgICAgZGVzYzogXCJDcsOpw6kgdW5lIGNvcGllIGR1cGxpcXXDqWUgZGVzIGZpY2hpZXJzIGF2YW50IHF1ZSBjZXV4LWNpIG5lIHNvaWVudCBlbnJlZ2lzdHLDqXMgYWZpbiBkJ8Opdml0ZXIgdG91dCBwcm9ibMOobWUgZGUgY29ycnVwdGlvbiBkZSBmaWNoaWVycy5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5jb25maXJtQ2hlY2tvdXRIZWFkUmV2aXNpb24nXG4gICAgICAgIHRpdGxlOiBcIlBlcm1ldHRyZSBkJ2FubnVsZXIgbGVzIGRlcm5pZXJzIGNoYW5nZW1lbnRzIGV0IGRlIHJldmVuaXIgw6AgbGEgZGVybmnDqHJlIHLDqXZpc2lvbiAoSEVBRCBSRVZJU0lPTilcIlxuICAgICAgICBkZXNjOiBcIkFmZmljaGUgdW5lIGZlbsOqdHJlIGRlIGNvbmZpcm1hdGlvbiBwZXJtZXR0YW50IGQnYW5udWxlciB0b3VzIGxlcyBkZXJuaWVycyBjaGFuZ2VtZW50cyBhcHBsaXF1w6lzIMOgIHVuIGZpY2hpZXIgZXQgZGUgcmV2ZW5pciDDoCBsYSByw6l2aXNpb24gZHUgZGVybmllciBjb21taXQuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3IuZm9udEZhbWlseSdcbiAgICAgICAgdGl0bGU6IFwiUG9saWNlXCJcbiAgICAgICAgZGVzYzogXCJMZSBub20gZGUgbGEgcG9saWNlIChmb250LWZhbWlseSkgw6AgdXRpbGlzZXIgcG91ciBsZSB0ZXh0ZSDDqWNyaXQgZGFucyBsJ8OpZGl0ZXVyLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmZvbnRTaXplJ1xuICAgICAgICB0aXRsZTogXCJUYWlsbGUgZGUgbGEgcG9saWNlXCJcbiAgICAgICAgZGVzYzogXCJMYSB0YWlsbGUgZGUgbGEgcG9saWNlIChmb250LXNpemUpIMOgIHV0aWxpc2VyIHBvdXIgbGUgdGV4dGUgw6ljcml0IGRhbnMgbCfDqWRpdGV1ci5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5pbnZpc2libGVzLmNyJ1xuICAgICAgICB0aXRsZTogXCJSZXRvdXJzIGNoYXJpb3QgKENyKSBpbnZpc2libGVzXCJcbiAgICAgICAgZGVzYzogXCJDYXJhY3TDqHJlIHN1YnN0aXR1dGlmIMOgIHV0aWxpc2VyIGFmaW4gZGUgcmVtcGxhY2VyIGxlcyBjYXJhY3TDqHJlcyBkZSByZXRvdXIgY2hhcmlvdCAoXFxcXHIpIGxvcnNxdWUgbCdvcHRpb24gwqsgQWZmaWNoZXIgbGVzIGNhcmFjdMOocmVzIGludmlzaWJsZXMgwrsgZXN0IGFjdGl2w6llLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmludmlzaWJsZXMuZW9sJ1xuICAgICAgICB0aXRsZTogXCJSZXRvdXJzIMOgIGxhIGxpZ25lIChFb2wpIGludmlzaWJsZXNcIlxuICAgICAgICBkZXNjOiBcIkNhcmFjdMOocmUgc3Vic3RpdHV0aWYgw6AgdXRpbGlzZXIgYWZpbiBkZSByZW1wbGFjZXIgbGVzIGNhcmFjdMOocmVzIGRlIG5vdXZlbGxlIGxpZ25lIChcXFxcbikgbG9yc3F1ZSBsJ29wdGlvbiDCqyBBZmZpY2hlciBsZXMgY2FyYWN0w6hyZXMgaW52aXNpYmxlcyDCuyBlc3QgYWN0aXbDqWUuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3IuaW52aXNpYmxlcy5zcGFjZSdcbiAgICAgICAgdGl0bGU6IFwiRXNwYWNlcyBpbnZpc2libGVzXCJcbiAgICAgICAgZGVzYzogXCJDYXJhY3TDqHJlIHN1YnN0aXR1dGlmIMOgIHV0aWxpc2VyIGFmaW4gZGUgcmVtcGxhY2VyIGxlcyBlc3BhY2VzIGFwcGFyYcOuc3NhbnQgZW4gZMOpYnV0IGV0IGVuIGZpbiBkZSBmaWNoaWVyIGxvcnNxdWUgbCdvcHRpb24gwqsgQWZmaWNoZXIgbGVzIGNhcmFjdMOocmVzIGludmlzaWJsZXMgwrsgZXN0IGFjdGl2w6llLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLmludmlzaWJsZXMudGFiJ1xuICAgICAgICB0aXRsZTogXCJUYWJ1bGF0aW9ucyBpbnZpc2libGVzXCJcbiAgICAgICAgZGVzYzogXCJDYXJhY3TDqHJlIHN1YnN0aXR1dGlmIMOgIHV0aWxpc2VyIGFmaW4gZGUgcmVtcGxhY2VyIGxlcyBjYXJhY3TDqHJlcyBkZSB0YWJ1bGF0aW9uIChcXFxcdCkgbG9yc3F1ZSBsJ29wdGlvbiDCqyBBZmZpY2hlciBsZXMgY2FyYWN0w6hyZXMgaW52aXNpYmxlcyDCuyBlc3QgYWN0aXbDqWUuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3IubGluZUhlaWdodCdcbiAgICAgICAgdGl0bGU6IFwiSGF1dGV1ciBkZXMgbGlnbmVzXCJcbiAgICAgICAgZGVzYzogXCJMYSBoYXV0ZXVyIGRlcyBsaWduZXMgZGUgbCfDqWRpdGV1ci5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5ub25Xb3JkQ2hhcmFjdGVycydcbiAgICAgICAgdGl0bGU6IFwiQ2FyYWN0w6hyZXMgbm9uLWFscGhhbnVtw6lyaXF1ZXNcIlxuICAgICAgICBkZXNjOiBcIlVuZSBjaGHDrm5lIGRlIGNhcmFjdMOocmVzIG5vbi1hbHBoYW51bcOpcmlxdWVzIHV0aWxpc8OpcyBwb3VyIGTDqWZpbmlyIGxlcyBsaW1pdGVzIGRlIG1vdC5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5wcmVmZXJyZWRMaW5lTGVuZ3RoJ1xuICAgICAgICB0aXRsZTogXCJMb25ndWV1ciBkZSBsaWduZSBzcMOpY2lmaXF1ZVwiXG4gICAgICAgIGRlc2M6IFwiSWRlbnRpZmllIGxhIGxvbmd1ZXVyIGRlIGxhIGxpZ25lIHV0aWxpc8OpZSBsb3JzIGQndW4gcmV0b3VyIMOgIGxhIGxpZ25lIGxvcnNxdWUgbCdvcHRpb24gwqsgUmV0b3VyIMOgIGxhIGxpZ25lIGF1dG9tYXRpcXVlIMOgIHVuZSBsb25ndWV1ciBkZSBsaWduZSBzcMOpY2lmaXF1ZSDCuyBlc3QgYWN0aXbDqWUsIGVuIG5vbWJyZSBkZSBjYXJhY3TDqHJlcy5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5zY3JvbGxQYXN0RW5kJ1xuICAgICAgICB0aXRsZTogXCJEw6lmaWxlciBhdS1kZWzDoCBkZSBsYSBmaW4gZCd1biBmaWNoaWVyXCJcbiAgICAgICAgZGVzYzogXCJQZXJtZXRzIGRlIGTDqWZpbGVyIGF1LWRlbMOgIGRlIGxhIGZpbiBkJ3VuIGZpY2hpZXIuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc2Nyb2xsU2Vuc2l0aXZpdHknXG4gICAgICAgIHRpdGxlOiBcIlNlbnNpYmlsaXTDqSBkZSBkw6lmaWxlbWVudFwiXG4gICAgICAgIGRlc2M6IFwiRMOpdGVybWluZSBsYSB2aXRlc3NlIGRlIGTDqWZpbGVtZW50IGRlIGwnw6lkaXRldXIgbG9ycyBkZSBsJ3V0aWxpc2F0aW9uIGQndW5lIHNvdXJpcyBvdSBkJ3VuIHBhdsOpIHRhY3RpbGUuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc2hvd0luZGVudEd1aWRlJ1xuICAgICAgICB0aXRsZTogXCJBZmZpY2hlciBsZXMgbGlnbmVzIGQnaW5kZW50YXRpb25cIlxuICAgICAgICBkZXNjOiBcIkFmZmljaGUgbGVzIGluZGljYXRldXJzIGQnaWRlbnRhdGlvbiBkYW5zIGwnw6lkaXRldXIuXCJcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdlZGl0b3Iuc2hvd0ludmlzaWJsZXMnXG4gICAgICAgIHRpdGxlOiBcIkFmZmljaGVyIGxlcyBjYXJhY3TDqHJlcyBpbnZpc2libGVzXCJcbiAgICAgICAgZGVzYzogXCJBZmZpY2hlIGRlcyBjYXJhY3TDqHJlcyBzdWJzdGl0dXRpZnMgYWZpbiBkZSByZW1wbGFjZXIgbGVzIGNhcmFjdMOocmVzIGludmlzaWJsZXMgKHRhYnVsYXRpb25zLCBlc3BhY2VzLCBub3V2ZWxsZXMgbGlnbmVzKVwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnNob3dMaW5lTnVtYmVycydcbiAgICAgICAgdGl0bGU6IFwiQWZmaWNoZXIgbGUgbm9tYnJlIGRlIGxpZ25lc1wiXG4gICAgICAgIGRlc2M6IFwiQWZmaWNoZSBsZSBub21icmUgZGUgbGlnbmVzIGVuIGJhcyBkZSBsJ8OpZGl0ZXVyLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnNvZnRUYWJzJ1xuICAgICAgICB0aXRsZTogXCJUYWJ1bGF0aW9ucyBzb2Z0XCJcbiAgICAgICAgZGVzYzogXCJTaSBsJ29wdGlvbiDCqyBUeXBlIGRlIHRhYnVsYXRpb25zIMK7IGVzdCBkw6lmaW5pZSBzdXIgwqsgYXV0byDCuyBldCBxdWUgbGEgZMOpdGVjdGlvbiBhdXRvbWF0aXF1ZSBkdSB0eXBlIGRlIHRhYnVsYXRpb25zIMOpY2hvdWUsIGFsb3JzIGNlIHBhcmFtw6h0cmUgc2VyYSB1dGlsaXPDqSDDoCBsYSBwbGFjZS5cbiAgICAgICAgQ29jaGV6LWxhIHNpIHZvdXMgc291aGFpdGV6IHV0aWxpc2VyIGRlcyB0YWJ1bGF0aW9ucyBzb2Z0IHNpIGxhIGTDqXRlY3Rpb24gYXV0b21hdGlxdWUgw6ljaG91ZSwgb3UgZMOpY29jaGV6LWxhIHNpIHZvdXMgc291aGFpdGV6IHV0aWxpc2VyIGRlcyB0YWJ1bGF0aW9ucyBoYXJkLlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnNvZnRXcmFwJ1xuICAgICAgICB0aXRsZTogXCJSZXRvdXIgw6AgbGEgbGlnbmUgYXV0b21hdGlxdWVcIlxuICAgICAgICBkZXNjOiBcIlVuIHJldG91ciDDoCBsYSBsaWduZSBzZXJhIGF1dG9tYXRpcXVlbWVudCBlZmZlY3R1w6kgc2kgbGVzIGxpZ25lcyBkw6lwYXNzZW50IGxhIGxhcmdldXIgZGUgbGEgZmVuw6p0cmUuIFNpIGwnb3B0aW9uIMKrIFJldG91ciDDoCBsYSBsaWduZSBhdXRvbWF0aXF1ZSDDoCB1bmUgbG9uZ3VldXIgZGUgbGlnbmUgc3DDqWNpZmlxdWUgwrsgZXN0IGFjdGl2w6llLFxuICAgICAgICB1biByZXRvdXIgw6AgbGEgbGlnbmUgc2VyYSBlZmZlY3R1w6kgYXUgbm9tYnJlIGRlIGNhcmFjdMOocmVzIGTDqWZpbmkgcGFyIGwnb3B0aW9uIMKrIExvbmd1ZXVyIGRlIGxpZ25lIHNww6ljaWZpcXVlIMK7LlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnNvZnRXcmFwQXRQcmVmZXJyZWRMaW5lTGVuZ3RoJ1xuICAgICAgICB0aXRsZTogXCJSZXRvdXIgw6AgbGEgbGlnbmUgYXV0b21hdGlxdWUgw6AgdW5lIGxvbmd1ZXVyIGRlIGxpZ25lIHNww6ljaWZpcXVlXCJcbiAgICAgICAgZGVzYzogXCJBdSBsaWV1IGQnZWZmZWN0dWVyIHVuIHJldG91ciDDoCBsYSBsaWduZSBzaSBsYSBsYXJnZXVyIGRlIGxhIGZlbsOqdHJlIGVzdCBkw6lwYXNzw6ksIGFjdGl2ZXIgY2V0dGUgb3B0aW9uIGVmZmVjdHVlcmEgdW4gcmV0b3VyIMOgIGxhIGxpZ25lIGF1IG5vbWJyZSBkZSBjYXJhY3TDqHJlcyBkw6lmaW5pIHBhciBsJ29wdGlvbiDCqyBMb25ndWV1ciBkZSBsaWduZSBzcMOpY2lmaXF1ZSDCuy5cbiAgICAgICAgQ2VsYSBuZSBwcmVuZHJhIGVmZmV0IHF1ZSBzaSBsJ29wdGlvbiDCqyBUYWJ1bGF0aW9ucyBzb2Z0IMK7IGVzdCBhY3RpdsOpZSBwb3VyIHRvdXMgbGVzIGxhbmdhZ2VzIG91IHBvdXIgbGUgbGFuZ2FnZSBhY3R1ZWxsZW1lbnQgdXRpbGlzw6kuXG4gICAgICAgIFJlbWFycXVlIDogc2kgdm91cyBzb3VoYWl0ZXogY2FjaGVyIGwnaW5kaWNhdGlvbiBkZSByZXRvdXIgw6AgbGEgbGlnbmUgKGxhIGxpZ25lIHZlcnRpY2FsZSksIHZvdXMgcG91dmV6IGTDqXNhY3RpdmVyIGxlIHBhY2thZ2Ugd3JhcC1ndWlkZS5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci5zb2Z0V3JhcEhhbmdpbmdJbmRlbnQnXG4gICAgICAgIHRpdGxlOiBcIkluZGVudGF0aW9uIGRlcyB0YWJ1bGF0aW9ucyBzb2Z0XCJcbiAgICAgICAgZGVzYzogXCJMb3JzcXVlIGwnb3B0aW9uIMKrIFRhYnVsYXRpb25zIHNvZnQgwrsgZXN0IGFjdGl2w6llLCBkw6lmaW5pdCBsYSBsb25ndWV1ciBkZXMgaW5kZW50YXRpb25zIHN1cHBsw6ltZW50YWlyZXMgYXBwbGlxdcOpZXMgYXV4IHJldG91cnMgw6AgbGEgbGlnbmUsIGVuIG5vbWJyZSBkZSBjYXJhY3TDqHJlcy5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci50YWJMZW5ndGgnXG4gICAgICAgIHRpdGxlOiBcIkxvbmd1ZXVyIGRlcyB0YWJ1bGF0aW9uc1wiXG4gICAgICAgIGRlc2M6IFwiTm9tYnJlIGQnZXNwYWNlcyDDoCB1dGlsaXNlciBwb3VyIHJlcHLDqXNlbnRlciB1bmUgdGFidWxhdGlvbi5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci50YWJUeXBlJ1xuICAgICAgICB0aXRsZTogXCJUeXBlIGRlIHRhYnVsYXRpb25zXCJcbiAgICAgICAgZGVzYzogJ0TDqXRlcm1pbmUgbGUgY2FyYWN0w6hyZSDDoCBpbnPDqXJlciBsb3JzcXVlIGxhIHRvdWNoZSBUYWIgZXN0IGFwcHV5w6llLiBWYWxldXJzIHBvc3NpYmxlcyA6IMKrIGF1dG8gwrssIMKrIHNvZnQgwrsgZXQgwqsgaGFyZCDCuy5cbiAgICAgICAgTG9yc3F1ZSBsYSB2YWxldXIgZXN0IGTDqWZpbmllIHN1ciDCqyBzb2Z0IMK7IG91IMKrIGhhcmQgwrssIGxlcyB0YWJ1bGF0aW9ucyBzb2Z0IChlc3BhY2VzKSBvdSBsZXMgdGFidWxhdGlvbnMgaGFyZCAoY2FyYWN0w6hyZXMgZGUgdGFidWxhdGlvbilcbiAgICAgICAgc29udCB1dGlsaXPDqWVzIHNlbG9uIGxcXCdvcHRpb24gY2hvaXNpZS4gTG9yc3F1ZSBsYSB2YWxldXIgZXN0IGTDqWZpbmllIHN1ciDCqyBhdXRvIMK7LCBsXFwnw6lkaXRldXIgc2UgY2hhcmdlcmEgZGUgZMOpdGVjdGVyIGF1dG9tYXRpcXVlbWVudFxuICAgICAgICBsZSB0eXBlIGRlIHRhYnVsYXRpb25zIMOgIHV0aWxpc2VyIGVuIHNlIGJhc2FudCBzdXIgbGVzIGNvbnRlbnVzIGR1IGJ1ZmZlciwgb3UgdXRpbGlzZXJhIGxhIHZhbGV1ciDCqyBzb2Z0IMK7IHNpIGxhIGTDqXRlY3Rpb24gYXV0b21hdGlxdWUgw6ljaG91ZS4nXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnZWRpdG9yLnVuZG9Hcm91cGluZ0ludGVydmFsJ1xuICAgICAgICB0aXRsZTogXCJJbnRlcnZhbGxlIGQnYXBwbGljYXRpb24gZGVzIGFubnVsYXRpb25zXCJcbiAgICAgICAgZGVzYzogXCJMJ2ludGVydmFsbGUgZGUgdGVtcHMgZW4gbWlsbGlzZWNvbmRlcyBwZW5kYW50IGxhcXVlbGxlIGxlcyBvcMOpcmF0aW9ucyBkJ8OpZGl0aW9uIGRlIHRleHRlIHNvbnQgwqsgZ3JvdXDDqWVzIMK7IGRhbnMgbCdoaXN0b3JpcXVlIGRlcyBhbm51bGF0aW9ucy5cbiAgICAgICAgUGFyIGV4ZW1wbGUsIHNpIGwnaW50ZXJ2YWxsZSBlc3QgZGUgMTAgMDAwIG1pbGxpc2Vjb25kZXMsIGFwcHV5ZXIgc2ltdWx0YW7DqW1lbnQgc3VyIENUUkwgZXQgWiBhbm51bGVyYSBsZXMgbW9kaWZpY2F0aW9ucyBlZmZlY3R1w6llcyB0b3V0ZXMgbGVzIDEwIHNlY29uZGVzLlxuICAgICAgICBMYSBtw6ptZSBvcHRpb24gcydhcHBsaXF1ZSBwb3VyIGwnYWN0aW9uIMKrIFLDqXRhYmxpciDCuyAoQ1RSTCtZKS5cIlxuICAgICAgfVxuICAgICAge1xuICAgICAgICBpZDogJ2VkaXRvci56b29tRm9udFdoZW5DdHJsU2Nyb2xsaW5nJ1xuICAgICAgICB0aXRsZTogXCJNb2RpZmllciBsYSB0YWlsbGUgZGUgbGEgcG9saWNlIGF2ZWMgZMOpZmlsZW1lbnQgKyBDdHJsXCJcbiAgICAgICAgZGVzYzogXCJNb2RpZmllIGxhIHRhaWxsZSBkZSBsYSBwb2xpY2UgZGUgbCfDqWRpdGV1ciBsb3JzcXVlIGxhIHRvdWNoZSBDdHJsIGV0IGxhIG1vbGV0dGUgZGUgZMOpZmlsZW1lbnQgc29udCB1dGlsaXPDqWVzIHNpbXVsdGFuw6ltZW50LlwiXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnc3lzdGVtLndpbmRvd3MuZmlsZS1oYW5kbGVyJ1xuICAgICAgICB0aXRsZTogJ0Fqb3V0ZXIgQXRvbSBhdSBtZW51IGRcXCdhc3NvY2lhdGlvbiBkXFwnYXBwbGljYXRpb25zJ1xuICAgICAgICBkZXNjOiAnQWZmaWNoZSBBdG9tIGRhbnMgbGUgbWVudSDCqyBPdXZyaXIgYXZlYyA+IENob2lzaXIgdW5lIGF1dHJlIGFwcGxpY2F0aW9uIMK7IGRlIGxcXCdleHBsb3JhdGV1ciBXaW5kb3dzIGFmaW4gZGUgcmVuZHJlIGxcXCdhc3NvY2lhdGlvbiDDoCBkXFwnYXV0cmVzIGZpY2hpZXJzIHBsdXMgc2ltcGxlLidcbiAgICAgIH1cbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzeXN0ZW0ud2luZG93cy5zaGVsbC1tZW51LWZpbGVzJ1xuICAgICAgICB0aXRsZTogJ091dnJpciBhdmVjIEF0b20gKEZpY2hpZXIpJ1xuICAgICAgICBkZXNjOiAnQWpvdXRlIGxcXCdvcHRpb24gwqsgT3V2cmlyIGF2ZWMgQXRvbSDCuyBkYW5zIGxlIG1lbnUgY29udGV4dHVlbCBkZSBsXFwnZXhwbG9yYXRldXIgV2luZG93cyBwb3VyIGxlcyBmaWNoaWVycy4nXG4gICAgICB9XG4gICAgICB7XG4gICAgICAgIGlkOiAnc3lzdGVtLndpbmRvd3Muc2hlbGwtbWVudS1mb2xkZXJzJ1xuICAgICAgICB0aXRsZTogJ091dnJpciBhdmVjIEF0b20gKERvc3NpZXIpJ1xuICAgICAgICBkZXNjOiAnQWpvdXRlIGxcXCdvcHRpb24gwqsgT3V2cmlyIGF2ZWMgQXRvbSDCuyBkYW5zIGxlIG1lbnUgY29udGV4dHVlbCBkZSBsXFwnZXhwbG9yYXRldXIgV2luZG93cyBwb3VyIGxlcyBkb3NzaWVycy4nXG4gICAgICB9XG4gICAgXVxuICB9XG59XG4iXX0=
