export const renderOptions = {
  collect: ["format", "view", "stage"],
  boolean: ["tf-generateImport"],
  string: ["output"],
  description: {
    output: "Output folder",
    format: "Formats to render",
    view: "Views to render",
    stage: "Stages to render",
    "tf-generateImport": "Generate import statements for tf",
  },
  default: {
    output: "output",
  },
  arguments: {
    stack: {
      description: "Stack name",
      required: false,
    },
  },
};
