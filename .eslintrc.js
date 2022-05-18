module.exports = {
    // 指定根配置,停止在父级目录查找配置
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    // 解析器
    parser: "vue-eslint-parser",
    // 规则继承
    extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
        jsxPragma: "React",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "vue/script-setup-uses-vars": "error",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-empty-function": "off",
        "vue/custom-event-name-casing": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
        "no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
        // 同步配置
        "prettier/prettier": [
            "error",
            {
                printWidth: 140,
            },
        ],
        "space-before-function-paren": "off",
        "vue/attributes-order": "off",
        "vue/one-component-per-file": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/max-attributes-per-line": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/attribute-hyphenation": "off",
        "vue/require-default-prop": "off",
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "always",
                    normal: "never",
                    component: "always",
                },
                svg: "always",
                math: "always",
            },
        ],
        "vue/v-on-event-hyphenation": "off",
        "vue/no-v-html": "off",
        "vue/no-textarea-mustache": "off",
    },
};

