import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export default [
  // your own configurations.
  {
    // recommended configuration included in the plugin
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    rules: {
      ...html.configs["flat/recommended"].rules, // Must be defined. If not, all recommended rules will be lost
      "@html-eslint/indent": ["error", 2]
    },
    plugins: {
      "@html-eslint": html,
    },
    languageOptions: {
      parser: htmlParser,
    },
  },
];