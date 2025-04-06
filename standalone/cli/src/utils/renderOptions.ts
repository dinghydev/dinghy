export const renderOptions = {
  collect: ['format', 'view', 'stage'],
  string: ['output'],
  description: {
    output: 'Output folder',
    format: 'Formats to render',
    view: 'Views to render',
    stage: 'Stages to render',
  },
  default: {
    output: 'output',
  },
  arguments: {
    stack: {
      description: 'Stack name',
      required: false,
    },
  },
}
