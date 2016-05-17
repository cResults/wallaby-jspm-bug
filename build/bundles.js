module.exports = {
    "bundles": {
        "dist/app-build": {
            "includes": [
              "[**/*.js]",
              "**/*.svg!text",
              "**/*.html!text",
              "**/*.css!text"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "htmlminopts":{ //https://github.com/kangax/html-minifier#options-quick-reference
                    "collapseInlineTagWhitespace": true,
                    "collapseWhitespace": true,
                    "minifyCSS": true,
                    "minifyJS": true,
                    "removeComments": true,
                    "removeEmptyAttributes": true,
                },
                "cssminopts":{ //https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api

                },
                "rev": true
            }
        },
        "view-bundle": {
            "skip": true,
            "htmlimport": true,
            "includes": "dist/*.html",
            "options": {
                "inject": {
                    "indexFile": "index.html",
                    "destFile": "dest_index.html"
                }
            }
        },
        "dist/aurelia": {
            "includes": [
              "aurelia-framework",
              "aurelia-bootstrapper",
              "aurelia-fetch-client",
              "aurelia-router",
              "aurelia-animator-css",
              "aurelia-templating-binding",
              "aurelia-templating-resources",
              "aurelia-templating-router",
              "aurelia-loader-default",
              "aurelia-history-browser",
              "aurelia-logging-console",
            ],
            "options": {
                "inject": true,
                "minify": true,
                "rev": true
            }
        }
    }
}
