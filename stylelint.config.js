module.exports = {
  rules: {
    'color-no-invalid-hex': true,
    'color-no-hex': true,
    'color-named': [
      'never', {
        ignore: [
          'inside-function',
        ]
      }
    ],
    'string-no-newline': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'comment-no-empty': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'length-zero-no-unit': true,
    'font-weight-notation': 'named-where-possible',
    'declaration-block-single-line-max-declarations': 1,
    'font-family-name-quotes': 'always-unless-keyword',
    'number-leading-zero': 'always',
    'string-quotes': 'double',
    'unit-case': 'lower',
    'custom-property-empty-line-before': 'never',
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'rule-empty-line-before': [
      'always', {
        ignore: [
          'first-nested',
          'after-comment',
        ],
      },
    ],
    'at-rule-no-unknown': [
      true, {
        ignoreAtRules: [
          'each',
          'extend',
          'if',
          'for',
          'else',
          'include',
          'mixin',
        ],
      },
    ],
    'comment-empty-line-before': 'always',
    'max-empty-lines': 1,
    'no-eol-whitespace': [
      true, {
        ignore: [
          'empty-lines',
        ],
      },
    ],
    'comment-whitespace-inside': 'always',
    'no-empty-first-line': true,
    'selector-pseudo-element-colon-notation': 'double',
  },
};
