module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-multi-spaces': ['error'],
        'vue/no-multiple-template-root': 'off',
        'no-use-before-define': 'off',
        'no-unused-vars': 'off',
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ]
    }
}
