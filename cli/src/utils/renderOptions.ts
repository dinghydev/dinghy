export const renderOptions = {
  collect: ['format', 'view', 'stage'],
  boolean: [
    'tf-generate-import',
    'diagram-png',
    'diagram-create-md',
    'diagram-save-view',
    'watch',
    'debug',
  ],
  string: ['output'],
  negatable: ['diagram-png'],
  description: {
    output: 'Output folder',
    format: 'Formats to render',
    view: 'Views to render',
    stage: 'Stages to render',
    'tf-generate-import': 'Generate import statements for tf',
    'diagram-png': 'Generate png file for diagram',
    'diagram-create-md': 'Create markdown file for diagram',
    'diagram-save-view': 'Save view to stack-info.json',
    watch: 'Re-render when changes of yaml/ts/tsx files detected',
  },
  default: {
    'diagram-create-md': false,
    'diagram-png': true,
  },
  arguments: {
    stack: {
      description:
        'Stack name or tsx file name. If not specified, all stacks will be rendered',
      required: false,
    },
  },
  cmdDescription:
    'Render from `tsx` files to target formats e.g. `json`, `drawio` or `tf`',
}
