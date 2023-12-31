/**
 * Custom config base for test projects using jest.
 */

module.exports = {
    extends: require.resolve('./base.js'),
    overrides: [
        {
            env: {
                es2024: true,
                node: true,
                jest: true,
            },

            // Jest rules are specific to jest tests and extending base.js is not needed as other config will cover them
            extends: ['plugin:jest/recommended'],

            // For performance run jest/recommended on test files, not regular code
            files: ['*.{test,spec}.{j,t}s?(x)'],

            plugins: ['jest'],
            rules: {},
        },
    ],
}
