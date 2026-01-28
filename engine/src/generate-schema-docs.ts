import { projectRoot } from '@dinghy/cli'
import { execa } from 'execa'
import { z } from 'zod'
import path from 'node:path'

/**
 * We generate schema docs from engine projects as it has access to all modules
 */

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
  const schemas = [] as string[]
  doc.nodes.map((node: any) => {
    if (node.jsDoc?.doc && node.name.endsWith('Schema')) {
      schemas.push(node.name)
    }
  })

  const definitions = await import(`${projectRoot}/${input}`)
  const shapes = {} as any
  schemas.map((schema) => {
    const definition = definitions[schema] as any
    shapes[Object.keys(definition.shape || definition.enum || {}).join(',')] =
      schema
  })

  const resolveObjectType = (obj: any): string => {
    if (obj.anyOf) {
      obj = obj.anyOf[0]
    }
    if (obj.typeText) {
      return obj.typeText
    }
    if (obj.type === 'array') {
      return `[ ${resolveObjectType(obj.items)} ]`
    } else if (obj.properties) {
      const key = Object.keys(obj.properties).join(',')
      const refSchema = shapes[key]
      if (refSchema) {
        return `[${refSchema}](#${refSchema.toLowerCase()})`
      }
    } else if (obj.enum) {
      const key = obj.enum.join(',')
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
  const schemaAttributes = (schema: string) => {
    if (!schema.endsWith('Schema')) {
      return
    }
    const attributes = [] as string[]

    const definition = definitions[schema] as z.ZodSchema
    const {
      properties,
      required,
      hideRequired,
      hideDefault,
      enum: enumValues,
    } = z
      .toJSONSchema(definition, { unrepresentable: 'any' })
    if (definition.description) {
      attributes.push(`${definition.description}.`)
    }
    if (enumValues) {
      attributes.push('\n**ENUM VALUES**')
      const enumDescription: any = definition.meta()?.enumDescription || {}
      enumValues.forEach((v: any) => {
        attributes.push(`- \`${v}\` ${enumDescription[v] || ''}`)
      })
      return attributes.join('\n')
    }
    if (!properties) {
      return
    }

    attributes.push(`<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
${hideRequired ? '' : '<th>Required</th>'}
${hideDefault ? '' : '<th>Default</th>'}
</tr>
</thead>
<tbody>`)
    Object.entries(properties).map(([name, p]) => {
      const prop = p as any
      const typeValue = resolveObjectType(prop)
      if (prop.hidden) {
        return
      }
      let defaultValue = prop.defaultText as string
      if (!defaultValue) {
        defaultValue = prop.default !== undefined
          ? ['object', 'array'].includes(prop.type)
            ? `\`\`\`json
${JSON.stringify(prop.default, null, 2)}
\`\`\``
            : `\`${prop.default}\``
          : ''
      }
      const propDescription = prop.description ||
        (prop.anyOf ? (prop.anyOf[0].description || '') : '')
      attributes.push(`<tr>
<td>\`${name}\`</td>
<td>
${typeValue}
</td>
<td style={{"min-width":"200px"}}>
${propDescription}
</td>
${
        hideRequired
          ? ''
          : `<td align="center">${
            (required || [])!.includes(name) ? '✅' : '❌'
          }</td>`
      }
${
        hideDefault ? '' : `<td>
${defaultValue}
</td>`
      }
</tr>`)
    })
    attributes.push(`</tbody>`)
    attributes.push(`</table>\n`)
    return attributes.join('\n')
  }

  doc.nodes.map((node: any) => {
    let doc = node.jsDoc?.doc as string | undefined
    if (doc) {
      const attributes = schemaAttributes(node.name)
      if (attributes) {
        if (doc.includes('SCHEMA_ATTIBUTES')) {
          doc = doc.replace('SCHEMA_ATTIBUTES', attributes)
        } else {
          doc = doc + '\n' + attributes
        }
      }
      mdx.push(doc)
    }
  })
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

await renderDenoDoc(
  'core/base-components/src/types/diagrams.ts',
  'sites/www/src/docs/references/attributes/diagrams/README.mdx',
)

const jsDocs = {
  'core/diagrams/src/composites/sequence-diagram/types.tsx':
    'sites/references-diagrams/docs/composites/sequence-diagram/README.mdx',
  'core/base-components/src/types/base.ts':
    'sites/www/src/docs/references/attributes/base/README.mdx',
  'core/base-components/src/types/diagrams.ts':
    'sites/www/src/docs/references/attributes/diagrams/README.mdx',
  'core/base-components/src/types/iac.ts':
    'sites/www/src/docs/references/attributes/iac/README.mdx',
}
Object.entries(jsDocs).forEach(async ([input, output]) => {
  await renderDenoDoc(input, output)
})
