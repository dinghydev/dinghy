import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../../../cli/src/types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../../../cli/src/types.ts'
import Debug from 'debug'
import { loadTfJsonFile } from '../../utils/loadTfJsonFile.ts'
const debug = Debug('init')

const options: CommandOptions = {
  string: ['json-file', 'output-folder'],
  boolean: ['exclude-identifier'],
  required: ['json-file'],
  description: {
    'json-file': 'Path to the terraform json file',
    'exclude-identifier': 'Exclude identifier lines from the output',
    'output-folder': 'Path to the output folder of the normalised file',
  },
  alias: {
    f: 'json-file',
  },
  cmdDescription:
    'Normalise terraform json or state file to be comparable text',
}

function sortJson(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(sortJson)
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj)
      .sort()
      .reduce((result: any, key) => {
        result[key] = sortJson(obj[key])
        return result
      }, {})
  }
  return obj
}

function sortByArn(resources: any[]) {
  return resources.sort((a, b) => {
    const aValue = a.instances[0].attributes.arn ||
      a.instances[0].attributes.id || a.name
    const bValue = b.instances[0].attributes.arn ||
      b.instances[0].attributes.id || b.name
    return aValue.localeCompare(bValue)
  })
}

function removeResourceAttributes(resources: any[]) {
  return resources.map((resource) => {
    delete resource.instances[0].private
    delete resource.instances[0].dependencies
    delete resource.name
    return resource
  })
}

function removeTfMetadata(tf: any) {
  if (Array.isArray(tf)) {
    tf.forEach((t) => {
      Object.values(t).map((v) => {
        removeTfMetadata(v)
      })
    })
  } else {
    tf['//'] = undefined
  }
}

function markTfIdentifer(resources: any[]) {
  resources.forEach((t) => {
    Object.entries(t).map(([key, value]) => {
      t[`IDENTIFIER_${key}`] = value
      delete t[key]
    })
  })
}

function sortPolicy(policy: any): any {
  policy.Statement.map((s: any) => {
    s.Action.sort((a: any, b: any) => {
      return a.localeCompare(b)
    })
    s.Resource.sort((a: any, b: any) => {
      return a.localeCompare(b)
    })
  })
  policy.Statement.sort((a: any, b: any) => {
    return a.Action.join(',').localeCompare(b.Action.join(','))
  })
  return policy
}

function collectPolicy(policies: string[], prefix: string, policy: any): any {
  let policyText = JSON.parse(policy.policy)
  policyText = sortJson(policyText)
  policyText = sortPolicy(policyText)
  policyText.Statement.map((s: any) => {
    delete s.Sid
  })
  policy.policy = 'EXTRACTED'
  policies.push(
    JSON.stringify(policyText, null, 2).replace(
      /^/g,
      `\nIDENTIFIER_${prefix}.${policy.name}\n`,
    ).replace(/\n/g, `\n${policy.name} >>> `),
  )
}

function extractPolicies(resources: any[]) {
  const policies: string[] = []
  resources.forEach((resource) => {
    if (Array.isArray(resource)) {
      const [name, actualResource] = resource
      if (actualResource.policy && actualResource.policy.includes('{')) {
        policies.push(`\n\nIDENTIFIER_${name}`)
        collectPolicy(policies, name, actualResource)
      }
    } else {
      const attributes = resource.instances[0].attributes
      if (attributes.inline_policy) {
        policies.push(`\n\nIDENTIFIER_${attributes.arn}`)
        attributes.inline_policy.sort((a, b) => {
          return a.name.localeCompare(b.name)
        }).map((p: any) => {
          collectPolicy(policies, attributes.arn, p)
        })
      }
      if (attributes.policy) {
        policies.push(`\n\nIDENTIFIER_${attributes.id}`)
        collectPolicy(policies, attributes.id, attributes)
      }
    }
  })
  return policies.join('\n')
}

function extractText(resources: any[]) {
  const text: string[] = []
  resources.forEach((resource) => {
    if (Array.isArray(resource)) {
      const [name, actualResource] = resource
      Object.entries(actualResource).map(([key, value]) => {
        if (typeof value === 'string') {
          if (value.includes('\n')) {
            text.push(
              value.replace(
                /^/g,
                `\nIDENTIFIER_${name}.${key}\n`,
              ).replace(/\n/g, `\n${key} >>> `),
            )
            actualResource[key] = 'EXTRACTED'
          } else if (value.startsWith('{')) {
            text.push(
              JSON.stringify(JSON.parse(value), null, 2).replace(
                /^/g,
                `\nIDENTIFIER_${name}.${key}\n`,
              ).replace(/\n/g, `\n${key} >>> `),
            )
            actualResource[key] = 'EXTRACTED'
          }
        }
      })
    } else {
      const attributes = resource.instances[0].attributes
      if (attributes.content && attributes.content.includes('\n')) {
        text.push(
          attributes.content.replace(
            /^/g,
            `\nIDENTIFIER_${attributes.bucket}/${attributes.key}\n`,
          ).replace(/\n/g, `\ncontent >>> `),
        )
        attributes.content = 'EXTRACTED'
      }
    }
  })
  return text.join('\n')
}

const run = async (_context: CommandContext, args: CommandArgs) => {
  const { json, filePath } = loadTfJsonFile(args)
  debug('loaded tf json file from', filePath)

  let policies = ''
  let multiLineText = ''

  const normalisedJson = sortJson(json)
  let { resources } = normalisedJson
  if (resources) {
    resources = sortByArn(resources)
    normalisedJson.resources = resources
    removeResourceAttributes(resources)

    policies = extractPolicies(resources)
    multiLineText = extractText(resources)
  } else {
    removeTfMetadata(normalisedJson)
    removeTfMetadata(Object.values(normalisedJson.data))
    const resources = Object.values(normalisedJson.resource)
    removeTfMetadata(resources)
    const resourceEntries = resources.flatMap((r: any) => Object.entries(r))
    policies = extractPolicies(resourceEntries)
    multiLineText = extractText(resourceEntries)
    markTfIdentifer(Object.values(normalisedJson.data))
    markTfIdentifer(resources)
  }

  const output: string[] = []
  output.push(`JSON:\n${JSON.stringify(normalisedJson, null, 2)}`)
  if (policies) {
    output.push(`POLICIES:\n${policies}`)
  }
  if (multiLineText) {
    output.push(`TEXT:\n${multiLineText}`)
  }
  let outputText = output.join('\n\n')
  if (args['exclude-identifier']) {
    outputText = outputText.split('\n').filter((line) => {
      return !line.includes('IDENTIFIER_')
    }).join('\n')
  }

  const outputFile = args['output-folder']
    ? `${args['output-folder']}/${filePath.split('/').pop()}.normalised.txt`
    : `${filePath}.normalised.txt`

  Deno.writeTextFileSync(outputFile, outputText)
  console.log(`Normalised file written to ${outputFile}`)
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
