import {
  CommandContext,
  Commands,
  commands as cliCommands,
  OPTIONS_SYMBOL,
  projectRoot,
  showHelpInMarkdown,
} from '@dinghy/cli'
import engineCommands from './commands/index.ts'
import { execa } from 'execa'
import { z } from 'zod'
import path from 'node:path'

const commandsDir = `${projectRoot}/sites/www/src/docs/references/commands`
console.log(`Generating commands docs to ${commandsDir} ...`)

const renderCommand = (context: CommandContext) => {
  context.options = context.commands[OPTIONS_SYMBOL]
  const { mdx, sections } = showHelpInMarkdown(context)
  const typeDir = context.isEngine ? 'engine' : 'cli'

  const outputDir = `${commandsDir}/${[typeDir, ...context.prefix].join('/')}`
  Deno.mkdirSync(outputDir, { recursive: true })
  const outputFile = `${outputDir}/README.mdx`

  Deno.writeTextFileSync(outputFile, mdx.join('\n'))
  console.log(`Generated ${outputFile}`)

  const subCommands = sections['Commands'].concat(sections['Cli Commands'])
  subCommands.map(({ name }) => {
    renderCommand({
      ...context,
      prefix: [...context.prefix, name],
      commands: context.commands[name] as Commands,
    })
  })
}

// https://tsdoc.org/play/
const renderDenoDoc = async (input: string, output: string) => {
  console.log(`Generating docs from ${input} ...`)
  const result = await execa('deno', [
    'doc',
    '--json',
    `${projectRoot}/${input}`,
  ], {
    stdio: 'pipe',
    shell: true,
  })
  const doc = JSON.parse(result.stdout)
  const mdx = [] as string[]
  const examples = [] as string[]
  const schemas = [] as string[]
  doc.nodes.map((node: any) => {
    const { doc, tags } = node.jsDoc || {}
    if (doc) {
      mdx.push(doc as string)
    }
    if (tags) {
      tags.map((tag: any) => {
        if (tag.kind === 'example') {
          examples.push(tag.doc as string)
        }
      })
    }
    if (node.name.endsWith('Schema')) {
      schemas.push(node.name)
    }
  })
  if (schemas.length > 0) {
    mdx.push('## Schemas\n')
    const definitions = await import(`${projectRoot}/${input}`)
    const shapes = {} as any
    schemas.map((schema) => {
      const definition = definitions[schema] as any
      shapes[Object.keys(definition.shape).join(',')] = schema
    })
    console.log(definitions)
    const resolveObjectType = (obj: any): string => {
      if (obj.type === 'array') {
        return `[ ${resolveObjectType(obj.items)} ]`
      } else if (obj.properties) {
        const key = Object.keys(obj.properties).join(',')
        const refSchema = shapes[key]
        if (refSchema) {
          return `[${refSchema}](#${refSchema.toLowerCase()})`
        }
      } else if (obj.propertyNames) {
        return `&lt; ${obj.propertyNames.type}, ${
          resolveObjectType(obj.additionalProperties)
        } &gt;`
      }
      return obj.type || ''
    }
    schemas.map((schema) => {
      const definition = definitions[schema] as z.ZodSchema
      mdx.push(`### ${schema}`)
      if (definition.description) {
        mdx.push(definition.description)
      }
      //   mdx.push('| Name | Type | Description | Required | Default |')
      //   mdx.push('| ---- | ---- | ----------- | -------- | ------- |')
      mdx.push(`<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Required</th>
<th>Default</th>
</tr>
</thead>
<tbody>`)
      const { properties, required } = z.toJSONSchema(definition)
      console.log('json', z.toJSONSchema(definition))
      console.log('meta', definition.meta())
      Object.entries(properties as any).map(([name, p]) => {
        const prop = p as any
        const typeValue = resolveObjectType(prop)
        // mdx.push(
        //   `| \`${name}\` | ${typeValue} | ${prop.description || ''} | ${
        //     (required || [])!.includes(name) ? '✅' : '❌'
        //   } | ${
        //     prop.default !== undefined &&
        //       !['object', 'array'].includes(prop.type)
        //       ? `\`${prop.default}\``
        //       : ''
        //   } |`,
        // )
        if (prop.hidden) {
          return
        }
        const defaultValue = prop.default !== undefined
          ? ['object', 'array'].includes(prop.type)
            ? `\`\`\`json
${JSON.stringify(prop.default, null, 2)}
\`\`\``
            : `\`${prop.default}\``
          : ''
        mdx.push(`<tr>
<td>\`${name}\`</td>
<td>
${typeValue}
</td>
<td style={{"min-width":"200px"}}>
${prop.description || ''}
</td>
<td align="center">${(required || [])!.includes(name) ? '✅' : '❌'}</td>
<td>
${defaultValue}
</td>
</tr>`)
      })
      mdx.push(`</tbody>`)
      mdx.push(`</table>\n`)
    })
  }
  if (examples.length > 0) {
    mdx.push('## Examples\n')
    mdx.push(examples.join('\n'))
  }
  if (mdx.length === 0) {
    throw new Error(`No docs found in ${input}`)
  }
  const editUrl =
    `edit_url: https://github.com/dinghydev/dinghy/blob/main/${input}`
  if (mdx[0].startsWith('---')) {
    mdx[0] = `---\n${editUrl}` + mdx[0].substring(3)
  } else {
    mdx.unshift('---', editUrl, '---')
  }

  const outputFile = `${projectRoot}/${output}`
  const outputParentDir = path.dirname(outputFile)
  Deno.mkdirSync(outputParentDir, { recursive: true })
  Deno.writeTextFileSync(outputFile, mdx.join('\n'))

  console.log(`Generated ${outputFile}`)
}

const jsDocs = {
  'core/diagrams/src/composites/sequence-diagram/types.tsx':
    'sites/www/src/docs/references/diagrams/composites/sequence-diagram/README.mdx',
}
Object.entries(jsDocs).forEach(([input, output]) => {
  renderDenoDoc(input, output)
})

renderCommand({
  isEngine: false,
  prefix: [],
  commands: cliCommands,
  rootCommands: cliCommands,
} as any)

renderCommand({
  isEngine: true,
  prefix: [],
  commands: engineCommands,
  rootCommands: engineCommands,
} as any)
