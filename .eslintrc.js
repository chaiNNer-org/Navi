module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'prettier',
        '@typescript-eslint',
        'prefer-arrow-functions',
        'eslint-comments',
        'unused-imports',
    ],
    parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    rules: {
        'max-classes-per-file': 'off',
        'no-restricted-syntax': 'off',
        'no-use-before-define': 'off',
        'eslint-comments/no-unused-enable': 'warn',
        'eslint-comments/no-unused-disable': 'warn',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
        'import/order': [
            'error',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'prefer-arrow-functions/prefer-arrow-functions': [
            'warn',
            {
                classPropertiesAllowed: false,
                disallowPrototype: false,
                returnStyle: 'unchanged',
                singleReturnOnly: false,
            },
        ],
        '@typescript-eslint/no-unnecessary-condition': 'warn',
    },
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
        },
    },

    ignorePatterns: ['**/antlr4/*.js'],
};
