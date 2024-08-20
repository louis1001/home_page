export type Rule = { classes: string[], patterns: RegExp[]}
export type Language = { rules: Rule[] }

export let languageDefinitions: {[name: string]: Language} = {
  odo: {
    rules: [
      {
        classes: ["literal"],
        patterns: [
          /true|false/,
          /([1-9]\d*(\.\d+)?|0)/
        ],
      },
      {
        classes: ["keyword"],
        patterns: [
          /parango|func|si|obien/
        ]
      },
      {
        classes: ["builtin-type"],
        patterns: [
          /ent|texto|verdad/
        ]
      },
      {
        classes: ["identifier"],
        patterns: [
          /[a-zA-Z_]+[\w\d_]*/
        ]
      },
      {
        classes: ["literal", "string"],
        patterns: [/\".*?\"/]
      },
      {
        classes: ["comment"],
        patterns: [/\#.*/]
      },
      {
        classes: ["operator"],
        patterns: [
          /\=/,   // =
          /\=\=/, // ==
          /\:/,   // :
          /\~\:/, // ~:
          /\*\=/, //
          /\+/,
          /\-/,
          /\//,
          /\*/]
      },
      {
        classes: ["punctuation"],
        patterns: [
          /\;/,
          /{|\}/
        ]
      }
    ],
  },
  cordial: {
    rules: [
      {
        classes: ["literal"],
        patterns: [
          /([1-9]\d*)|cierto|falso/
        ]
      },
      {
        classes: ["literal", "string"],
        patterns: [
          /\".*?\"/
        ]
      },
      {
        classes: ["keyword"],
        patterns: [
          /hola|adios/,
          /por favor|gracias/,
          /di|muestra|baja/,
        ]
      },
      {
        classes: ["control-flow"],
        patterns: [
          /si/,
          /repite|veces/
        ]
      },
      {
        classes: ["operator"],
        patterns: [
          /mas|menos|por|entre/
        ]
      },
      {
        classes: ["punctuation"],
        patterns: [
          /\.|\,|y|\:/
        ]
      }
    ]
  },
  javascript: {
    rules: [
      {
        classes: ["literal", "special"], // regex
        patterns: [
          /\/.*?\//
        ]
      },
      {
        classes: ["literal"],
        patterns: [
          /true|false/,
          /([1-9]\d*(\.\d+)?|0)/
        ],
      },
      {
        classes: ["literal", "string"],
        patterns: [/\".*?\"/]
      },
      {
        classes: ["identifier"],
        patterns: [
          /[a-zA-Z_]+[\w\d_]*/
        ]
      },
      {
        classes: ["punctuation"],
        patterns: [
          /\,/,
          /{|\}/,
          /\[|\]/
        ]
      }
    ]
  }
}
