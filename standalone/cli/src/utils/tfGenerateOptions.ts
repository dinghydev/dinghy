export const tfGenerateOptions = {
  string: ["state-file", "app-tsx-file"],
  required: ["state-file"],
  description: {
    "state-file": "Path to the terraform state file",
    "app-tsx-file":
      "Path to the generated app.tsx file, if not provided, the generated code will be printed to the console",
  },
  alias: {
    f: "state-file",
  },
  cmdDescription: "Generate app.tsx from terraform state file",
  cmdAlias: ["generate-app-from-state"],
};
