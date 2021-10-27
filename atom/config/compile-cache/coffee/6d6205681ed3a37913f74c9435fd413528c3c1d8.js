(function() {
  module.exports = {
    Menu: {
      "&File": {
        value: "Fichier (&F)",
        submenu: {
          "New &Window": {
            value: "Nouvelle fenêtre (&W)"
          },
          "&New File": {
            value: "Nouveau fichier (&N)"
          },
          "&Open File…": {
            value: "Ouvrir un fichier... (&O)"
          },
          "Open Folder…": {
            value: "Ouvrir un dossier..."
          },
          "Add Project Folder…": {
            value: "Ajouter un dossier de projet..."
          },
          "Reopen Last &Item": {
            value: "Réouvrir le dernier élément (&I)"
          },
          "&Save": {
            value: "Enregistrer (&S)"
          },
          "Save &As…": {
            value: "Enregistrer sous... (&A)"
          },
          "Save A&ll": {
            value: "Enregistrer tout (&L)"
          },
          "&Close Tab": {
            value: "Fermer l'onglet (&C)"
          },
          "Close &Pane": {
            value: "Fermer le volet (&P)"
          },
          "Clos&e Window": {
            value: "Fermer la fenêtre (&E)"
          },
          "Quit": {
            value: "Quitter"
          },
          "Close All Tabs": {
            value: "Fermer tous les onglets"
          }
        }
      },
      "&Edit": {
        value: "Édition (&E)",
        submenu: {
          "&Undo": {
            value: "Annuler (&U)"
          },
          "&Redo": {
            value: "Rétablir (&R)"
          },
          "&Cut": {
            value: "Couper (&C)"
          },
          "C&opy": {
            value: "Copier (&O)"
          },
          "Copy Pat&h": {
            value: "Copier le chemin d'accès (&H)"
          },
          "&Paste": {
            value: "Coller (&P)"
          },
          "Select &All": {
            value: "Tout sélectionner (&A)"
          },
          "&Toggle Comments": {
            value: "Commenter/Décommenter la sélection (&T)"
          },
          Lines: {
            value: "Lignes",
            submenu: {
              "&Indent": {
                value: "Indenter (&I)"
              },
              "&Outdent": {
                value: "Désindenter (&O)"
              },
              "&Auto Indent": {
                value: "Indentation automatique (&A)"
              },
              "Move Line &Up": {
                value: "Déplacer les lignes sélectionnées vers le haut (&U)"
              },
              "Move Line &Down": {
                value: "Déplacer les lignes sélectionnées vers le bas (&D)"
              },
              "Du&plicate Lines": {
                value: "Dupliquer les lignes sélectionnées (&P)"
              },
              "D&elete Line": {
                value: "Supprimer les lignes sélectionnées (&E)"
              },
              "&Join Lines": {
                value: "Joindre les lignes (&J)"
              }
            }
          },
          Columns: {
            value: "Colonnes",
            submenu: {
              "Move Selection &Left": {
                value: "Déplacer la sélection vers la gauche (&L)"
              },
              "Move Selection &Right": {
                value: "Déplacer la sélection vers la droite (&R)"
              }
            }
          },
          Text: {
            value: "Texte",
            submenu: {
              "&Upper Case": {
                value: "Majusculiser (&U)"
              },
              "&Lower Case": {
                value: "Minusculiser (&L)"
              },
              "Delete to End of &Word": {
                value: "Supprimer jusqu'à la fin du mot (&W)"
              },
              "Delete to Previous Word Boundary": {
                value: "Supprimer jusqu'à la limite de mot précédente"
              },
              "Delete to Next Word Boundary": {
                value: "Supprimer jusqu'à la limite de mot suivante"
              },
              "&Delete Line": {
                value: "Supprimer les lignes sélectionnées (&D)"
              },
              "&Transpose": {
                value: "Transposer (&T)"
              }
            }
          },
          Folding: {
            value: "Pliage",
            submenu: {
              "&Fold": {
                value: "Plier (&F)"
              },
              "&Unfold": {
                value: "Déplier (&U)"
              },
              "Unfold &All": {
                value: "Tout déplier (&A)"
              },
              "Fol&d All": {
                value: "Tout plier (&D)"
              },
              "Fold Level 1": {
                value: "Plier (Niveau 1)"
              },
              "Fold Level 2": {
                value: "Plier (Niveau 2)"
              },
              "Fold Level 3": {
                value: "Plier (Niveau 3)"
              },
              "Fold Level 4": {
                value: "Plier (Niveau 4)"
              },
              "Fold Level 5": {
                value: "Plier (Niveau 5)"
              },
              "Fold Level 6": {
                value: "Plier (Niveau 6)"
              },
              "Fold Level 7": {
                value: "Plier (Niveau 7)"
              },
              "Fold Level 8": {
                value: "Plier (Niveau 8)"
              },
              "Fold Level 9": {
                value: "Plier (Niveau 9)"
              }
            }
          },
          "&Preferences": {
            value: "Paramètres... (&P)"
          },
          "Config…": {
            value: "Configuration..."
          },
          "Init Script…": {
            value: "Script d'initialisation..."
          },
          "Keymap…": {
            value: "Raccourcis clavier..."
          },
          "Snippets…": {
            value: "Snippets..."
          },
          "Stylesheet…": {
            value: "Feuille de style..."
          },
          "Reflow Selection": {
            value: "Reformater la sélection"
          },
          Bookmark: {
            value: "Marque-page",
            submenu: {
              "View All": {
                value: "Voir tout"
              },
              "Toggle Bookmark": {
                value: "Marquer/Démarquer la sélection"
              },
              "Jump to Next Bookmark": {
                value: "Passer au marque-page suivant"
              },
              "Jump to Previous Bookmark": {
                value: "Passer au marque-page précédent"
              }
            }
          },
          "Select Encoding": {
            value: "Sélectionner l'encodage"
          },
          "Go to Line": {
            value: "Aller à une ligne spécifique"
          },
          "Select Grammar": {
            value: "Sélectionner le langage"
          }
        }
      },
      "&View": {
        value: "Affichage (&V)",
        submenu: {
          "Toggle &Full Screen": {
            value: "Basculer en plein écran (&F)"
          },
          "Toggle Menu Bar": {
            value: "Afficher/Cacher la barre de menu"
          },
          Panes: {
            value: "Volets",
            submenu: {
              "Split Up": {
                value: "Fractionner vers le haut ↑"
              },
              "Split Down": {
                value: "Fractionner vers le bas ↓"
              },
              "Split Left": {
                value: "Fractionner vers la gauche ←"
              },
              "Split Right": {
                value: "Fractionner vers la droite →"
              },
              "Focus Next Pane": {
                value: "Sélectionner le volet suivant"
              },
              "Focus Previous Pane": {
                value: "Sélectionner le volet précédent"
              },
              "Focus Pane Above": {
                value: "Sélectionner le volet ci-dessus ↑"
              },
              "Focus Pane Below": {
                value: "Sélectionner le volet ci-dessous ↓"
              },
              "Focus Pane On Left": {
                value: "Sélectionner le volet sur la gauche ←"
              },
              "Focus Pane On Right": {
                value: "Sélectionner le volet sur la droite →"
              },
              "Close Pane": {
                value: "Fermer l'onglet"
              }
            }
          },
          Developer: {
            value: "Développeur",
            submenu: {
              "Open In &Dev Mode…": {
                value: "Ouvrir en mode développeur... (&D)"
              },
              "&Reload Window": {
                value: "Actualiser la fenêtre (&R)"
              },
              "Run Package &Specs": {
                value: "Lancer les tests de packages (&S)"
              },
              "Toggle Developer &Tools": {
                value: "Activer/Désactiver les outils de développement (&T)"
              }
            }
          },
          "&Increase Font Size": {
            value: "Augmenter la taille de la police"
          },
          "&Decrease Font Size": {
            value: "Diminuer la taille de la police"
          },
          "Re&set Font Size": {
            value: "Réinitialiser la taille de la police"
          },
          "Toggle Soft &Wrap": {
            value: "Activer/Désactiver le retour à la ligne automatique (&W)"
          },
          "Toggle Command Palette": {
            value: "Afficher/Cache la palette de commandes"
          },
          "Toggle Tree View": {
            value: "Afficher/Cacher la colonne de navigation"
          }
        }
      },
      "&Selection": {
        value: "Sélection (&S)",
        submenu: {
          "Add Selection &Above": {
            value: "Ajouter une ligne de sélection ci-dessus ↑ (&A)"
          },
          "Add Selection &Below": {
            value: "Ajouter une ligne de sélection ci-dessous ↓ (&B)"
          },
          "S&plit into Lines": {
            value: "Fractionner en plusieurs lignes (&P)"
          },
          "Single Selection": {
            value: "Sélection unique"
          },
          "Select to &Top": {
            value: "Sélectionner jusqu'en haut (&T)"
          },
          "Select to Botto&m": {
            value: "Sélectionner jusqu'en bas (&M)"
          },
          "Select &Line": {
            value: "Sélectionner la ligne (&L)"
          },
          "Select &Word": {
            value: "Sélectionner le mot (&W)"
          },
          "Select to Beginning of W&ord": {
            value: "Sélectionner jusqu'au début du mot (&O)"
          },
          "Select to Beginning of L&ine": {
            value: "Sélectionner jusqu'au début de la ligne (&I)"
          },
          "Select to First &Character of Line": {
            value: "Sélectionner jusqu'au premier caractère de la ligne (&C)"
          },
          "Select to End of Wor&d": {
            value: "Sélectionner jusqu'à la fin du mot (&D)"
          },
          "Select to End of Lin&e": {
            value: "Sélectionner jusqu'à la fin de la ligne (&E)"
          },
          "Select Inside Brackets": {
            value: "Sélectionner l'élément à l'intérieur de crochets"
          }
        }
      },
      "F&ind": {
        value: "Rechercher (&I)",
        submenu: {
          "Find in Buffer": {
            value: "Rechercher dans le buffer..."
          },
          "Replace in Buffer": {
            value: "Remplacer dans le buffer..."
          },
          "Select Next": {
            value: "Sélectionner l'élément suivant"
          },
          "Select All": {
            value: "Tout sélectionner"
          },
          "Toggle Find in Buffer": {
            value: "Afficher/Cacher le menu de recherche dans le buffer"
          },
          "Find in Project": {
            value: "Rechercher dans le projet..."
          },
          "Toggle Find in Project": {
            value: "Afficher/Cacher le menu de recherche dans le projet"
          },
          "Find Next": {
            value: "Rechercher l'élément suivant"
          },
          "Find Previous": {
            value: "Rechercher l'élément précédent"
          },
          "Replace Next": {
            value: "Remplacer l'élément suivant"
          },
          "Replace All": {
            value: "Tout remplacer"
          },
          "Clear History": {
            value: "Effacer l'historique"
          },
          "Find Buffer": {
            value: "Rechercher dans le buffer"
          },
          "Find File": {
            value: "Rechercher dans le fichier"
          },
          "Find Modified File": {
            value: "Rechercher dans le fichier modifié"
          }
        }
      },
      "&Packages": {
        value: "Packages (&P)"
      },
      "&Help": {
        value: "Aide (&H)",
        submenu: {
          "View &Terms of Use": {
            value: "Conditions d'utilisation (&T)"
          },
          "View &License": {
            value: "Licence (&L)"
          },
          "&Documentation": {
            value: "Documentation (&D)"
          },
          Roadmap: {
            value: "Roadmap"
          },
          "Frequently Asked Questions": {
            value: "Foire aux questions"
          },
          "Community Discussions": {
            value: "Discussions communautaires"
          },
          "Report Issue": {
            value: "Signaler un bug"
          },
          "Search Issues": {
            value: "Rechercher des bugs"
          },
          "About Atom": {
            value: "À propos d’Atom"
          },
          "Welcome Guide": {
            value: "Guide d'introduction"
          }
        }
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL3Jvb3QvLmF0b20vcGFja2FnZXMvZnJlbmNoLW1lbnUvZGVmL21lbnVfbGludXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsTUFBTSxDQUFDLE9BQVAsR0FBaUI7SUFDakIsSUFBQSxFQUNFO01BQUEsT0FBQSxFQUNFO1FBQUEsS0FBQSxFQUFPLGNBQVA7UUFDQSxPQUFBLEVBQ0U7VUFBQSxhQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sdUJBQVA7V0FERjtVQUVBLFdBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxzQkFBUDtXQUhGO1VBSUEsYUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLDJCQUFQO1dBTEY7VUFNQSxjQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sc0JBQVA7V0FQRjtVQVFBLHFCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8saUNBQVA7V0FURjtVQVVBLG1CQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sa0NBQVA7V0FYRjtVQVlBLE9BQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxrQkFBUDtXQWJGO1VBY0EsV0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLDBCQUFQO1dBZkY7VUFnQkEsV0FBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLHVCQUFQO1dBakJGO1VBa0JBLFlBQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxzQkFBUDtXQW5CRjtVQW9CQSxhQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sc0JBQVA7V0FyQkY7VUFzQkEsZUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLHdCQUFQO1dBdkJGO1VBd0JBLE1BQUEsRUFDRTtZQUFBLEtBQUEsRUFBTyxTQUFQO1dBekJGO1VBMEJBLGdCQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8seUJBQVA7V0EzQkY7U0FGRjtPQURGO01BK0JBLE9BQUEsRUFDRTtRQUFBLEtBQUEsRUFBTyxjQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsT0FBQSxFQUNFO1lBQUEsS0FB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QSxFQUFPLGlCQUFQO1dBYkY7VUFjQSxlQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8scUJBQVA7V0FmRjtVQWdCQSxZQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8saUJBQVA7V0FqQkY7VUFrQkEsZUFBQSxFQUNFO1lBQUEsS0FBQSxFQUFPLHNCQUFQO1dBbkJGO1NBRkY7T0FuUkY7S0FGZTs7QUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbk1lbnU6XG4gIFwiJkZpbGVcIjpcbiAgICB2YWx1ZTogXCJGaWNoaWVyICgmRilcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIk5ldyAmV2luZG93XCI6XG4gICAgICAgIHZhbHVlOiBcIk5vdXZlbGxlIGZlbsOqdHJlICgmVylcIlxuICAgICAgXCImTmV3IEZpbGVcIjpcbiAgICAgICAgdmFsdWU6IFwiTm91dmVhdSBmaWNoaWVyICgmTilcIlxuICAgICAgXCImT3BlbiBGaWxl4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIk91dnJpciB1biBmaWNoaWVyLi4uICgmTylcIlxuICAgICAgXCJPcGVuIEZvbGRlcuKAplwiOlxuICAgICAgICB2YWx1ZTogXCJPdXZyaXIgdW4gZG9zc2llci4uLlwiXG4gICAgICBcIkFkZCBQcm9qZWN0IEZvbGRlcuKAplwiOlxuICAgICAgICB2YWx1ZTogXCJBam91dGVyIHVuIGRvc3NpZXIgZGUgcHJvamV0Li4uXCJcbiAgICAgIFwiUmVvcGVuIExhc3QgJkl0ZW1cIjpcbiAgICAgICAgdmFsdWU6IFwiUsOpb3V2cmlyIGxlIGRlcm5pZXIgw6lsw6ltZW50ICgmSSlcIlxuICAgICAgXCImU2F2ZVwiOlxuICAgICAgICB2YWx1ZTogXCJFbnJlZ2lzdHJlciAoJlMpXCJcbiAgICAgIFwiU2F2ZSAmQXPigKZcIjpcbiAgICAgICAgdmFsdWU6IFwiRW5yZWdpc3RyZXIgc291cy4uLiAoJkEpXCJcbiAgICAgIFwiU2F2ZSBBJmxsXCI6XG4gICAgICAgIHZhbHVlOiBcIkVucmVnaXN0cmVyIHRvdXQgKCZMKVwiXG4gICAgICBcIiZDbG9zZSBUYWJcIjpcbiAgICAgICAgdmFsdWU6IFwiRmVybWVyIGwnb25nbGV0ICgmQylcIlxuICAgICAgXCJDbG9zZSAmUGFuZVwiOlxuICAgICAgICB2YWx1ZTogXCJGZXJtZXIgbGUgdm9sZXQgKCZQKVwiXG4gICAgICBcIkNsb3MmZSBXaW5kb3dcIjpcbiAgICAgICAgdmFsdWU6IFwiRmVybWVyIGxhIGZlbsOqdHJlICgmRSlcIlxuICAgICAgXCJRdWl0XCI6XG4gICAgICAgIHZhbHVlOiBcIlF1aXR0ZXJcIlxuICAgICAgXCJDbG9zZSBBbGwgVGFic1wiOlxuICAgICAgICB2YWx1ZTogXCJGZXJtZXIgdG91cyBsZXMgb25nbGV0c1wiXG4gIFwiJkVkaXRcIjpcbiAgICB2YWx1ZTogXCLDiWRpdGlvbiAoJkUpXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCImVW5kb1wiOlxuICAgICAgICB2YWx1ZTogXCJBbm51bGVyICgmVSlcIlxuICAgICAgXCImUmVkb1wiOlxuICAgICAgICB2YWx1ZTogXCJSw6l0YWJsaXIgKCZSKVwiXG4gICAgICBcIiZDdXRcIjpcbiAgICAgICAgdmFsdWU6IFwiQ291cGVyICgmQylcIlxuICAgICAgXCJDJm9weVwiOlxuICAgICAgICB2YWx1ZTogXCJDb3BpZXIgKCZPKVwiXG4gICAgICBcIkNvcHkgUGF0JmhcIjpcbiAgICAgICAgdmFsdWU6IFwiQ29waWVyIGxlIGNoZW1pbiBkJ2FjY8OocyAoJkgpXCJcbiAgICAgIFwiJlBhc3RlXCI6XG4gICAgICAgIHZhbHVlOiBcIkNvbGxlciAoJlApXCJcbiAgICAgIFwiU2VsZWN0ICZBbGxcIjpcbiAgICAgICAgdmFsdWU6IFwiVG91dCBzw6lsZWN0aW9ubmVyICgmQSlcIlxuICAgICAgXCImVG9nZ2xlIENvbW1lbnRzXCI6XG4gICAgICAgIHZhbHVlOiBcIkNvbW1lbnRlci9Ew6ljb21tZW50ZXIgbGEgc8OpbGVjdGlvbiAoJlQpXCJcbiAgICAgIExpbmVzOlxuICAgICAgICB2YWx1ZTogXCJMaWduZXNcIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiJkluZGVudFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiSW5kZW50ZXIgKCZJKVwiXG4gICAgICAgICAgXCImT3V0ZGVudFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiRMOpc2luZGVudGVyICgmTylcIlxuICAgICAgICAgIFwiJkF1dG8gSW5kZW50XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJJbmRlbnRhdGlvbiBhdXRvbWF0aXF1ZSAoJkEpXCJcbiAgICAgICAgICBcIk1vdmUgTGluZSAmVXBcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkTDqXBsYWNlciBsZXMgbGlnbmVzIHPDqWxlY3Rpb25uw6llcyB2ZXJzIGxlIGhhdXQgKCZVKVwiXG4gICAgICAgICAgXCJNb3ZlIExpbmUgJkRvd25cIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkTDqXBsYWNlciBsZXMgbGlnbmVzIHPDqWxlY3Rpb25uw6llcyB2ZXJzIGxlIGJhcyAoJkQpXCJcbiAgICAgICAgICBcIkR1JnBsaWNhdGUgTGluZXNcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkR1cGxpcXVlciBsZXMgbGlnbmVzIHPDqWxlY3Rpb25uw6llcyAoJlApXCJcbiAgICAgICAgICBcIkQmZWxldGUgTGluZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiU3VwcHJpbWVyIGxlcyBsaWduZXMgc8OpbGVjdGlvbm7DqWVzICgmRSlcIlxuICAgICAgICAgIFwiJkpvaW4gTGluZXNcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkpvaW5kcmUgbGVzIGxpZ25lcyAoJkopXCJcbiAgICAgIENvbHVtbnM6XG4gICAgICAgIHZhbHVlOiBcIkNvbG9ubmVzXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIk1vdmUgU2VsZWN0aW9uICZMZWZ0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJEw6lwbGFjZXIgbGEgc8OpbGVjdGlvbiB2ZXJzIGxhIGdhdWNoZSAoJkwpXCJcbiAgICAgICAgICBcIk1vdmUgU2VsZWN0aW9uICZSaWdodFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiRMOpcGxhY2VyIGxhIHPDqWxlY3Rpb24gdmVycyBsYSBkcm9pdGUgKCZSKVwiXG4gICAgICBUZXh0OlxuICAgICAgICB2YWx1ZTogXCJUZXh0ZVwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCImVXBwZXIgQ2FzZVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiTWFqdXNjdWxpc2VyICgmVSlcIlxuICAgICAgICAgIFwiJkxvd2VyIENhc2VcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIk1pbnVzY3VsaXNlciAoJkwpXCJcbiAgICAgICAgICBcIkRlbGV0ZSB0byBFbmQgb2YgJldvcmRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlN1cHByaW1lciBqdXNxdSfDoCBsYSBmaW4gZHUgbW90ICgmVylcIlxuICAgICAgICAgIFwiRGVsZXRlIHRvIFByZXZpb3VzIFdvcmQgQm91bmRhcnlcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlN1cHByaW1lciBqdXNxdSfDoCBsYSBsaW1pdGUgZGUgbW90IHByw6ljw6lkZW50ZVwiXG4gICAgICAgICAgXCJEZWxldGUgdG8gTmV4dCBXb3JkIEJvdW5kYXJ5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJTdXBwcmltZXIganVzcXUnw6AgbGEgbGltaXRlIGRlIG1vdCBzdWl2YW50ZVwiXG4gICAgICAgICAgXCImRGVsZXRlIExpbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlN1cHByaW1lciBsZXMgbGlnbmVzIHPDqWxlY3Rpb25uw6llcyAoJkQpXCJcbiAgICAgICAgICBcIiZUcmFuc3Bvc2VcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlRyYW5zcG9zZXIgKCZUKVwiXG4gICAgICBGb2xkaW5nOlxuICAgICAgICB2YWx1ZTogXCJQbGlhZ2VcIlxuICAgICAgICBzdWJtZW51OlxuICAgICAgICAgIFwiJkZvbGRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlBsaWVyICgmRilcIlxuICAgICAgICAgIFwiJlVuZm9sZFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiRMOpcGxpZXIgKCZVKVwiXG4gICAgICAgICAgXCJVbmZvbGQgJkFsbFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiVG91dCBkw6lwbGllciAoJkEpXCJcbiAgICAgICAgICBcIkZvbCZkIEFsbFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiVG91dCBwbGllciAoJkQpXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgMVwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiUGxpZXIgKE5pdmVhdSAxKVwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDJcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlBsaWVyIChOaXZlYXUgMilcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCAzXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJQbGllciAoTml2ZWF1IDMpXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgNFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiUGxpZXIgKE5pdmVhdSA0KVwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlBsaWVyIChOaXZlYXUgNSlcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA2XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJQbGllciAoTml2ZWF1IDYpXCJcbiAgICAgICAgICBcIkZvbGQgTGV2ZWwgN1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwiUGxpZXIgKE5pdmVhdSA3KVwiXG4gICAgICAgICAgXCJGb2xkIExldmVsIDhcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlBsaWVyIChOaXZlYXUgOClcIlxuICAgICAgICAgIFwiRm9sZCBMZXZlbCA5XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJQbGllciAoTml2ZWF1IDkpXCJcbiAgICAgIFwiJlByZWZlcmVuY2VzXCI6XG4gICAgICAgIHZhbHVlOiBcIlBhcmFtw6h0cmVzLi4uICgmUClcIlxuICAgICAgXCJDb25maWfigKZcIjpcbiAgICAgICAgdmFsdWU6IFwiQ29uZmlndXJhdGlvbi4uLlwiXG4gICAgICBcIkluaXQgU2NyaXB04oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIlNjcmlwdCBkJ2luaXRpYWxpc2F0aW9uLi4uXCJcbiAgICAgIFwiS2V5bWFw4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIlJhY2NvdXJjaXMgY2xhdmllci4uLlwiXG4gICAgICBcIlNuaXBwZXRz4oCmXCI6XG4gICAgICAgIHZhbHVlOiBcIlNuaXBwZXRzLi4uXCJcbiAgICAgIFwiU3R5bGVzaGVldOKAplwiOlxuICAgICAgICB2YWx1ZTogXCJGZXVpbGxlIGRlIHN0eWxlLi4uXCJcbiAgICAgIFwiUmVmbG93IFNlbGVjdGlvblwiOlxuICAgICAgICB2YWx1ZTogXCJSZWZvcm1hdGVyIGxhIHPDqWxlY3Rpb25cIlxuICAgICAgQm9va21hcms6XG4gICAgICAgIHZhbHVlOiBcIk1hcnF1ZS1wYWdlXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIlZpZXcgQWxsXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJWb2lyIHRvdXRcIlxuICAgICAgICAgIFwiVG9nZ2xlIEJvb2ttYXJrXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJNYXJxdWVyL0TDqW1hcnF1ZXIgbGEgc8OpbGVjdGlvblwiXG4gICAgICAgICAgXCJKdW1wIHRvIE5leHQgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlBhc3NlciBhdSBtYXJxdWUtcGFnZSBzdWl2YW50XCJcbiAgICAgICAgICBcIkp1bXAgdG8gUHJldmlvdXMgQm9va21hcmtcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlBhc3NlciBhdSBtYXJxdWUtcGFnZSBwcsOpY8OpZGVudFwiXG4gICAgICBcIlNlbGVjdCBFbmNvZGluZ1wiOlxuICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGwnZW5jb2RhZ2VcIlxuICAgICAgXCJHbyB0byBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIkFsbGVyIMOgIHVuZSBsaWduZSBzcMOpY2lmaXF1ZVwiXG4gICAgICBcIlNlbGVjdCBHcmFtbWFyXCI6XG4gICAgICAgIHZhbHVlOiBcIlPDqWxlY3Rpb25uZXIgbGUgbGFuZ2FnZVwiXG4gIFwiJlZpZXdcIjpcbiAgICB2YWx1ZTogXCJBZmZpY2hhZ2UgKCZWKVwiXG4gICAgc3VibWVudTpcbiAgICAgIFwiVG9nZ2xlICZGdWxsIFNjcmVlblwiOlxuICAgICAgICB2YWx1ZTogXCJCYXNjdWxlciBlbiBwbGVpbiDDqWNyYW4gKCZGKVwiXG4gICAgICBcIlRvZ2dsZSBNZW51IEJhclwiOlxuICAgICAgICB2YWx1ZTogXCJBZmZpY2hlci9DYWNoZXIgbGEgYmFycmUgZGUgbWVudVwiXG4gICAgICBQYW5lczpcbiAgICAgICAgdmFsdWU6IFwiVm9sZXRzXCJcbiAgICAgICAgc3VibWVudTpcbiAgICAgICAgICBcIlNwbGl0IFVwXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJGcmFjdGlvbm5lciB2ZXJzIGxlIGhhdXQg4oaRXCJcbiAgICAgICAgICBcIlNwbGl0IERvd25cIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkZyYWN0aW9ubmVyIHZlcnMgbGUgYmFzIOKGk1wiXG4gICAgICAgICAgXCJTcGxpdCBMZWZ0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJGcmFjdGlvbm5lciB2ZXJzIGxhIGdhdWNoZSDihpBcIlxuICAgICAgICAgIFwiU3BsaXQgUmlnaHRcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkZyYWN0aW9ubmVyIHZlcnMgbGEgZHJvaXRlIOKGklwiXG4gICAgICAgICAgXCJGb2N1cyBOZXh0IFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlPDqWxlY3Rpb25uZXIgbGUgdm9sZXQgc3VpdmFudFwiXG4gICAgICAgICAgXCJGb2N1cyBQcmV2aW91cyBQYW5lXCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGxlIHZvbGV0IHByw6ljw6lkZW50XCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgQWJvdmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIlPDqWxlY3Rpb25uZXIgbGUgdm9sZXQgY2ktZGVzc3VzIOKGkVwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIEJlbG93XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGxlIHZvbGV0IGNpLWRlc3NvdXMg4oaTXCJcbiAgICAgICAgICBcIkZvY3VzIFBhbmUgT24gTGVmdFwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiU8OpbGVjdGlvbm5lciBsZSB2b2xldCBzdXIgbGEgZ2F1Y2hlIOKGkFwiXG4gICAgICAgICAgXCJGb2N1cyBQYW5lIE9uIFJpZ2h0XCI6XG4gICAgICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGxlIHZvbGV0IHN1ciBsYSBkcm9pdGUg4oaSXCJcbiAgICAgICAgICBcIkNsb3NlIFBhbmVcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkZlcm1lciBsJ29uZ2xldFwiXG4gICAgICBEZXZlbG9wZXI6XG4gICAgICAgIHZhbHVlOiBcIkTDqXZlbG9wcGV1clwiXG4gICAgICAgIHN1Ym1lbnU6XG4gICAgICAgICAgXCJPcGVuIEluICZEZXYgTW9kZeKAplwiOlxuICAgICAgICAgICAgdmFsdWU6IFwiT3V2cmlyIGVuIG1vZGUgZMOpdmVsb3BwZXVyLi4uICgmRClcIlxuICAgICAgICAgIFwiJlJlbG9hZCBXaW5kb3dcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkFjdHVhbGlzZXIgbGEgZmVuw6p0cmUgKCZSKVwiXG4gICAgICAgICAgXCJSdW4gUGFja2FnZSAmU3BlY3NcIjpcbiAgICAgICAgICAgIHZhbHVlOiBcIkxhbmNlciBsZXMgdGVzdHMgZGUgcGFja2FnZXMgKCZTKVwiXG4gICAgICAgICAgXCJUb2dnbGUgRGV2ZWxvcGVyICZUb29sc1wiOlxuICAgICAgICAgICAgdmFsdWU6IFwiQWN0aXZlci9Ew6lzYWN0aXZlciBsZXMgb3V0aWxzIGRlIGTDqXZlbG9wcGVtZW50ICgmVClcIlxuICAgICAgXCImSW5jcmVhc2UgRm9udCBTaXplXCI6XG4gICAgICAgIHZhbHVlOiBcIkF1Z21lbnRlciBsYSB0YWlsbGUgZGUgbGEgcG9saWNlXCJcbiAgICAgIFwiJkRlY3JlYXNlIEZvbnQgU2l6ZVwiOlxuICAgICAgICB2YWx1ZTogXCJEaW1pbnVlciBsYSB0YWlsbGUgZGUgbGEgcG9saWNlXCJcbiAgICAgIFwiUmUmc2V0IEZvbnQgU2l6ZVwiOlxuICAgICAgICB2YWx1ZTogXCJSw6lpbml0aWFsaXNlciBsYSB0YWlsbGUgZGUgbGEgcG9saWNlXCJcbiAgICAgIFwiVG9nZ2xlIFNvZnQgJldyYXBcIjpcbiAgICAgICAgdmFsdWU6IFwiQWN0aXZlci9Ew6lzYWN0aXZlciBsZSByZXRvdXIgw6AgbGEgbGlnbmUgYXV0b21hdGlxdWUgKCZXKVwiXG4gICAgICBcIlRvZ2dsZSBDb21tYW5kIFBhbGV0dGVcIjpcbiAgICAgICAgdmFsdWU6IFwiQWZmaWNoZXIvQ2FjaGUgbGEgcGFsZXR0ZSBkZSBjb21tYW5kZXNcIlxuICAgICAgXCJUb2dnbGUgVHJlZSBWaWV3XCI6XG4gICAgICAgIHZhbHVlOiBcIkFmZmljaGVyL0NhY2hlciBsYSBjb2xvbm5lIGRlIG5hdmlnYXRpb25cIlxuICBcIiZTZWxlY3Rpb25cIjpcbiAgICB2YWx1ZTogXCJTw6lsZWN0aW9uICgmUylcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIkFkZCBTZWxlY3Rpb24gJkFib3ZlXCI6XG4gICAgICAgIHZhbHVlOiBcIkFqb3V0ZXIgdW5lIGxpZ25lIGRlIHPDqWxlY3Rpb24gY2ktZGVzc3VzIOKGkSAoJkEpXCJcbiAgICAgIFwiQWRkIFNlbGVjdGlvbiAmQmVsb3dcIjpcbiAgICAgICAgdmFsdWU6IFwiQWpvdXRlciB1bmUgbGlnbmUgZGUgc8OpbGVjdGlvbiBjaS1kZXNzb3VzIOKGkyAoJkIpXCJcbiAgICAgIFwiUyZwbGl0IGludG8gTGluZXNcIjpcbiAgICAgICAgdmFsdWU6IFwiRnJhY3Rpb25uZXIgZW4gcGx1c2lldXJzIGxpZ25lcyAoJlApXCJcbiAgICAgIFwiU2luZ2xlIFNlbGVjdGlvblwiOlxuICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9uIHVuaXF1ZVwiXG4gICAgICBcIlNlbGVjdCB0byAmVG9wXCI6XG4gICAgICAgIHZhbHVlOiBcIlPDqWxlY3Rpb25uZXIganVzcXUnZW4gaGF1dCAoJlQpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEJvdHRvJm1cIjpcbiAgICAgICAgdmFsdWU6IFwiU8OpbGVjdGlvbm5lciBqdXNxdSdlbiBiYXMgKCZNKVwiXG4gICAgICBcIlNlbGVjdCAmTGluZVwiOlxuICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGxhIGxpZ25lICgmTClcIlxuICAgICAgXCJTZWxlY3QgJldvcmRcIjpcbiAgICAgICAgdmFsdWU6IFwiU8OpbGVjdGlvbm5lciBsZSBtb3QgKCZXKVwiXG4gICAgICBcIlNlbGVjdCB0byBCZWdpbm5pbmcgb2YgVyZvcmRcIjpcbiAgICAgICAgdmFsdWU6IFwiU8OpbGVjdGlvbm5lciBqdXNxdSdhdSBkw6lidXQgZHUgbW90ICgmTylcIlxuICAgICAgXCJTZWxlY3QgdG8gQmVnaW5uaW5nIG9mIEwmaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIlPDqWxlY3Rpb25uZXIganVzcXUnYXUgZMOpYnV0IGRlIGxhIGxpZ25lICgmSSlcIlxuICAgICAgXCJTZWxlY3QgdG8gRmlyc3QgJkNoYXJhY3RlciBvZiBMaW5lXCI6XG4gICAgICAgIHZhbHVlOiBcIlPDqWxlY3Rpb25uZXIganVzcXUnYXUgcHJlbWllciBjYXJhY3TDqHJlIGRlIGxhIGxpZ25lICgmQylcIlxuICAgICAgXCJTZWxlY3QgdG8gRW5kIG9mIFdvciZkXCI6XG4gICAgICAgIHZhbHVlOiBcIlPDqWxlY3Rpb25uZXIganVzcXUnw6AgbGEgZmluIGR1IG1vdCAoJkQpXCJcbiAgICAgIFwiU2VsZWN0IHRvIEVuZCBvZiBMaW4mZVwiOlxuICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGp1c3F1J8OgIGxhIGZpbiBkZSBsYSBsaWduZSAoJkUpXCJcbiAgICAgIFwiU2VsZWN0IEluc2lkZSBCcmFja2V0c1wiOlxuICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGwnw6lsw6ltZW50IMOgIGwnaW50w6lyaWV1ciBkZSBjcm9jaGV0c1wiXG4gIFwiRiZpbmRcIjpcbiAgICB2YWx1ZTogXCJSZWNoZXJjaGVyICgmSSlcIlxuICAgIHN1Ym1lbnU6XG4gICAgICBcIkZpbmQgaW4gQnVmZmVyXCI6XG4gICAgICAgIHZhbHVlOiBcIlJlY2hlcmNoZXIgZGFucyBsZSBidWZmZXIuLi5cIlxuICAgICAgXCJSZXBsYWNlIGluIEJ1ZmZlclwiOlxuICAgICAgICB2YWx1ZTogXCJSZW1wbGFjZXIgZGFucyBsZSBidWZmZXIuLi5cIlxuICAgICAgXCJTZWxlY3QgTmV4dFwiOlxuICAgICAgICB2YWx1ZTogXCJTw6lsZWN0aW9ubmVyIGwnw6lsw6ltZW50IHN1aXZhbnRcIlxuICAgICAgXCJTZWxlY3QgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIlRvdXQgc8OpbGVjdGlvbm5lclwiXG4gICAgICBcIlRvZ2dsZSBGaW5kIGluIEJ1ZmZlclwiOlxuICAgICAgICB2YWx1ZTogXCJBZmZpY2hlci9DYWNoZXIgbGUgbWVudSBkZSByZWNoZXJjaGUgZGFucyBsZSBidWZmZXJcIlxuICAgICAgXCJGaW5kIGluIFByb2plY3RcIjpcbiAgICAgICAgdmFsdWU6IFwiUmVjaGVyY2hlciBkYW5zIGxlIHByb2pldC4uLlwiXG4gICAgICBcIlRvZ2dsZSBGaW5kIGluIFByb2plY3RcIjpcbiAgICAgICAgdmFsdWU6IFwiQWZmaWNoZXIvQ2FjaGVyIGxlIG1lbnUgZGUgcmVjaGVyY2hlIGRhbnMgbGUgcHJvamV0XCJcbiAgICAgIFwiRmluZCBOZXh0XCI6XG4gICAgICAgIHZhbHVlOiBcIlJlY2hlcmNoZXIgbCfDqWzDqW1lbnQgc3VpdmFudFwiXG4gICAgICBcIkZpbmQgUHJldmlvdXNcIjpcbiAgICAgICAgdmFsdWU6IFwiUmVjaGVyY2hlciBsJ8OpbMOpbWVudCBwcsOpY8OpZGVudFwiXG4gICAgICBcIlJlcGxhY2UgTmV4dFwiOlxuICAgICAgICB2YWx1ZTogXCJSZW1wbGFjZXIgbCfDqWzDqW1lbnQgc3VpdmFudFwiXG4gICAgICBcIlJlcGxhY2UgQWxsXCI6XG4gICAgICAgIHZhbHVlOiBcIlRvdXQgcmVtcGxhY2VyXCJcbiAgICAgIFwiQ2xlYXIgSGlzdG9yeVwiOlxuICAgICAgICB2YWx1ZTogXCJFZmZhY2VyIGwnaGlzdG9yaXF1ZVwiXG4gICAgICBcIkZpbmQgQnVmZmVyXCI6XG4gICAgICAgIHZhbHVlOiBcIlJlY2hlcmNoZXIgZGFucyBsZSBidWZmZXJcIlxuICAgICAgXCJGaW5kIEZpbGVcIjpcbiAgICAgICAgdmFsdWU6IFwiUmVjaGVyY2hlciBkYW5zIGxlIGZpY2hpZXJcIlxuICAgICAgXCJGaW5kIE1vZGlmaWVkIEZpbGVcIjpcbiAgICAgICAgdmFsdWU6IFwiUmVjaGVyY2hlciBkYW5zIGxlIGZpY2hpZXIgbW9kaWZpw6lcIlxuICBcIiZQYWNrYWdlc1wiOlxuICAgIHZhbHVlOiBcIlBhY2thZ2VzICgmUClcIlxuICBcIiZIZWxwXCI6XG4gICAgdmFsdWU6IFwiQWlkZSAoJkgpXCJcbiAgICBzdWJtZW51OlxuICAgICAgXCJWaWV3ICZUZXJtcyBvZiBVc2VcIjpcbiAgICAgICAgdmFsdWU6IFwiQ29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uICgmVClcIlxuICAgICAgXCJWaWV3ICZMaWNlbnNlXCI6XG4gICAgICAgIHZhbHVlOiBcIkxpY2VuY2UgKCZMKVwiXG4gICAgICBcIiZEb2N1bWVudGF0aW9uXCI6XG4gICAgICAgIHZhbHVlOiBcIkRvY3VtZW50YXRpb24gKCZEKVwiXG4gICAgICBSb2FkbWFwOlxuICAgICAgICB2YWx1ZTogXCJSb2FkbWFwXCJcbiAgICAgIFwiRnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnNcIjpcbiAgICAgICAgdmFsdWU6IFwiRm9pcmUgYXV4IHF1ZXN0aW9uc1wiXG4gICAgICBcIkNvbW11bml0eSBEaXNjdXNzaW9uc1wiOlxuICAgICAgICB2YWx1ZTogXCJEaXNjdXNzaW9ucyBjb21tdW5hdXRhaXJlc1wiXG4gICAgICBcIlJlcG9ydCBJc3N1ZVwiOlxuICAgICAgICB2YWx1ZTogXCJTaWduYWxlciB1biBidWdcIlxuICAgICAgXCJTZWFyY2ggSXNzdWVzXCI6XG4gICAgICAgIHZhbHVlOiBcIlJlY2hlcmNoZXIgZGVzIGJ1Z3NcIlxuICAgICAgXCJBYm91dCBBdG9tXCI6XG4gICAgICAgIHZhbHVlOiBcIsOAIHByb3BvcyBk4oCZQXRvbVwiXG4gICAgICBcIldlbGNvbWUgR3VpZGVcIjpcbiAgICAgICAgdmFsdWU6IFwiR3VpZGUgZCdpbnRyb2R1Y3Rpb25cIlxufVxuIl19
