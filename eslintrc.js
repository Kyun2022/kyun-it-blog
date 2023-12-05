module.exports = {
  root: true, // ルートディレクトリを指定
  env: {
    browser: true, // ブラウザのグローバル変数を有効化
    es2022: true, // ES2022のグローバル変数を有効化
    node: true, // Node.jsのグローバル変数を有効化
  },
  extends: [
    "eslint:recommended", // ESLintの推奨ルールを有効化
    "plugin:react/recommended", // Reactの推奨ルールを有効化
    "plugin:@typescript-eslint/recommended", // TypeScriptの推奨ルールを有効化
    "plugin:react-hooks/recommended", // React Hooksのルールを有効化
    "plugin:jsx-a11y/recommended", // アクセシビリティ
    "prettier", // Prettierとの競合を解消
  ],
  overrides: [],
  parser: "@typescript-eslint/parser", // TypeScriptを解析
  parserOptions: {
    ecmaVersion: "latest", // ESのバージョンを自動検出
    sourceType: "module", // importを有効化
  },
  plugins: [
    "sort-keys-custom-order", // オブジェクトのキーをソート
    "react", // Reactのルールを有効化
    "@typescript-eslint", // TypeScriptのルールを有効化
    "simple-import-sort", // importをソート
    "import", // importのルールを有効化
    "unused-imports", // 未使用のimportをエラー
  ],
  rules: {
    "react/jsx-uses-react": "off", // Reactを使用していることを明示
    "react/react-in-jsx-scope": "off", // Reactを使用していることを明示
    "sort-keys-custom-order/object-keys": [
      // オブジェクトのキーをソート
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "sort-keys-custom-order/type-keys": [
      // オブジェクトのキーをソート
      "error",
      { orderedKeys: ["id", "name", "title"] },
    ],
    "simple-import-sort/imports": "error", // importをソート
    "simple-import-sort/exports": "error", // exportをソート
    "import/first": "error", // importはファイルの先頭
    "import/newline-after-import": "error", // import後に改行
    "import/no-duplicates": "error", // 同じファイルのimportをマージ
    "unused-imports/no-unused-imports": "error", // 未使用のimportをエラー
    "react/prop-types": "off", // prop-typesを無効化
    "no-undef": "error", // 未定義の変数をエラー
    "no-var": "error", // varをエラー
  },
  settings: {
    react: {
      // Reactのバージョンを自動検出
      version: "detect",
    },
  },
};
