import z, { type ZodType } from 'zod'

// export const CallableSchema = z.function({
//   input: z.tuple([]).rest(z.any()),
//   output: z.any(),
// })
export const CallableSchema = z.function()
export type CallableType = z.output<typeof CallableSchema>

export const ResolvableAttributeSchema = z.function({
  input: z.tuple([]).rest(z.any()),
  output: z.any(),
})
export type ResolvableAttributeType = z.output<typeof ResolvableAttributeSchema>

export const resolvable = <T extends ZodType>(_schema: T): ZodType<T> =>
  z.function({
    input: [z.any()],
    output: z.any(),
  }) as unknown as ZodType<T>

// export const resolvableValue = <T extends z.ZodType>(schema: T) =>
//   z.union([
//     schema,
//     CallableSchema,
//   ])

export const resolvableValue = <T extends z.ZodType>(schema: T) =>
  z.union([
    schema,
    CallableSchema,
  ]).transform((val) => val as z.output<T>)

export const StringSchema = z.string()
export const ResolvableStringSchema = resolvableValue(z.string()).meta({
  typeText: 'string',
})

// export const ResolvableStringSchema = z.codec(
//   resolvableValue(z.string()),
//   z.string(),
//   {
//     decode: (raw) => raw as any,
//     encode: (raw) => raw as any,
//   }
// );

// export const ResolvableStringArraySchema = z.union([
//   z.string().array(),
//   ResolvableStringSchema.array(),
//   resolvable(ResolvableStringSchema.array()),
// ]).meta({ typeText: '[string]' })
export const ResolvableStringArraySchema = resolvableValue(z.string().array())
  .meta({ typeText: '[string]' })
export const StringOrArraySchema = z.union([z.string(), z.string().array()])
  .meta({ typeText: 'string|[string]' })

export const ResolvableNumberSchema = resolvableValue(z.number())

// export const ResolvableNumberSchema = z.union([
//     z.number(),
//     z.function({/''
//       input: [z.any()],
//       output: z.any(),
//     }),
//   ])

export const ResolvableBooleanSchema = resolvableValue(z.boolean())

export const RecordSchema = z.record(z.string(), z.unknown()).meta({
  typeText: '&lt;string:any&gt;',
})

export const ResolvableArraySchema = resolvableValue(
  z.any().array(),
)

export const ResolvableRecordSchema = resolvableValue(
  z.record(z.string(), z.any()),
)

/**

# Base

Used by base renderer to build the node tree

## BaseAttributesSchema

The base attributes are resolved in following sequence from the table below. All values could be actual value or resolvable function. The function will take current `node` as first parameter.

SCHEMA_ATTIBUTES

### Base Attributes Example

import CodeBlock from "@theme/CodeBlock";
import TagsTsx from "!!raw-loader!../../../get-started/diagram-as-code/tags.tsx";

Given example below,

<CodeBlock language="tsx" title="tags.tsx">
  {TagsTsx}
</CodeBlock>

The `TagLevel2` component has
1. `_tags` = `[TagLevel2, TagLevel1, Shape]`
1. `_type` = `tag_level2`
1. `_title` = `Tag Level2`
1. `_name` = `tag-level2`
1. `_id` = `taglevel2`

### Fallback Resolution

`_title`, `_name`, and `_id` will fallback to their respective `title`, `name`, and `id` attributes if they are not provided explicitly.

The same resolution logic applies reversely as well e.g. `name` will fallback to `_name` if not provided explicitly.
*/

export const BaseAttributesSchema = z.object({
  // internal populated by default
  _level: ResolvableNumberSchema.optional().meta({ hidden: true }),
  _isDependency: ResolvableBooleanSchema.optional().meta({ hidden: true }),

  _tags: ResolvableStringArraySchema.optional().describe(
    `Names of the shape's React component. It will be used to construct other attributes if those are not provided explicitly.`,
  ),
  _type: ResolvableStringSchema.optional().describe(
    `Type of the component. Default to first of the tags value if not provided. Primarily used for Infrastructure as Code \`IaC\``,
  ),
  _title: ResolvableStringSchema.optional().describe(
    `Displayed title of the shape`,
  ),
  _name: ResolvableStringSchema.optional().describe(
    `Name of the shape for identification.  \`IaC\``,
  ),
  _version: ResolvableStringSchema.optional().describe(
    `Version of the shape if applicable. Parent version are passed down to children automatically.  \`IaC\``,
  ),
  _id: ResolvableStringSchema.optional().describe(
    `An unique identifier for the component.  \`IaC\``,
  ),
  title: ResolvableStringSchema.optional().meta({ hidden: true }),
  name: ResolvableStringSchema.optional().meta({ hidden: true }),
  id: ResolvableStringSchema.optional().meta({ hidden: true }),
}).meta({ hideRequired: true, hideDefault: true })

/**
## LifecycleSchema

Events been invoked during lifecycle of the node
*/
export const LifecycleSchema = z.object({
  _afterDataBind: CallableSchema.optional().meta({
    description: 'Invoked after all attributes resolved to the node tree',
    typeText: 'function(node)',
  }),
  _beforeGenerate: CallableSchema.optional().meta({
    description: 'Invoked before the node is generated to target format',
    typeText: 'function(node)',
  }),
}).meta({ hideRequired: true, hideDefault: true })

export type BaseNodeType =
  & z.input<typeof BaseAttributesSchema>
  & z.input<typeof LifecycleSchema>
