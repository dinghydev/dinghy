export const renderOptions = {
  collect: ["format", "view", "stage"],
  boolean: ["tf-generateImport", "diagram-saveView"],
  string: ["output"],
  description: {
    output: "Output folder",
    format: "Formats to render",
    view: "Views to render",
    stage: "Stages to render",
    "tf-generateImport": "Generate import statements for tf",
    "diagram-saveView": "Save view to stack-info.json",
  },
  arguments: {
    stack: {
      description: "Stack name",
      required: false,
    },
  },
};
