export const tfGenerateOptions = {
  string: ["state-json-file", "app-tsx-file"],
  required: ["state-json-file"],
  description: {
    "state-json-file": "Path to the terraform state file",
    "app-tsx-file":
      "Path to the generated app.tsx file, if not provided, the generated code will be printed to the console",
  },
  alias: {
    f: "state-json-file",
  },
  cmdDescription: "Generate app.tsx from terraform state file",
  cmdAlias: ["generate-app-from-state"],
};
