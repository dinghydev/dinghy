export const renderOptions = {
  collect: ["format", "view", "stage"],
  boolean: [
    "tf-generateImport",
    "diagram-png",
    "diagram-createMd",
    "diagram-saveView",
    "debug",
  ],
  string: ["output"],
  description: {
    output: "Output folder",
    format: "Formats to render",
    view: "Views to render",
    stage: "Stages to render",
    "tf-generateImport": "Generate import statements for tf",
    "diagram-png": "Generate png file for diagram",
    "diagram-createMd": "Create markdown file for diagram",
    "diagram-saveView": "Save view to stack-info.json",
  },
  default: {
    "diagram-createMd": true,
    "diagram-png": true,
  },
  arguments: {
    stack: {
      description: "Stack name or tsx file name",
      required: false,
    },
  },
};
