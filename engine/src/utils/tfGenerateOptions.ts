export const tfGenerateOptions = {
  string: ['json-file', 'app-tsx-file'],
  required: ['json-file'],
  description: {
    'json-file': 'Path to the terraform state json file',
    'app-file': 'Path to the generated iac.tsx file',
  },
  default: {
    'app-file': 'generated.tsx',
  },
  alias: {
    f: 'json-file',
  },
  cmdDescription: 'Generate app from terraform state file',
  cmdAlias: ['generate-app-from-state'],
}
