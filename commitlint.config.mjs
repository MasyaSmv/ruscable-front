/**
 * Commit style: one short conventional line, no multi-line essays.
 * Details belong in docs/decisions, not in the commit body.
 *
 * Examples:
 *   feat(catalog): add product filter by cable section
 *   fix(cart): keep quantity in sync after removal
 */
const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 100],
    "subject-case": [2, "never", ["upper-case", "start-case", "pascal-case"]],
    "scope-case": [2, "always", "kebab-case"],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "perf", "test", "docs", "build", "ci", "chore", "revert"],
    ],
  },
};

export default config;
