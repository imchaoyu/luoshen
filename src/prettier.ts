module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  proseWrap: 'never',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};

// module.exports = {
//   arrowParens: 'always',
//   bracketSameLine: false,
//   bracketSpacing: false,
//   embeddedLanguageFormatting: 'auto',
//   htmlWhitespaceSensitivity: 'css',
//   insertPragma: false,
//   jsxSingleQuote: false,
//   printWidth: 80,
//   proseWrap: 'preserve',
//   quoteProps: 'as-needed',
//   requirePragma: false,
//   semi: false,
//   singleAttributePerLine: false,
//   singleQuote: true,
//   tabWidth: 2,
//   trailingComma: 'es5',
//   useTabs: false,
//   vueIndentScriptAndStyle: false,
// };
