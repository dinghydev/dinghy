import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  time_period: resolvableValue(z.object({
    end: z.string(),
    start: z.string(),
  })),
  filter: resolvableValue(
    z.object({
      and: z.object({
        cost_category: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimension: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).array().optional(),
      cost_category: z.object({
        key: z.string().optional(),
        match_options: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      dimension: z.object({
        key: z.string().optional(),
        match_options: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      not: z.object({
        cost_category: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimension: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).optional(),
      or: z.object({
        cost_category: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimension: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).array().optional(),
      tags: z.object({
        key: z.string().optional(),
        match_options: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
    }).optional(),
  ),
  search_string: resolvableValue(z.string().optional()),
  sort_by: resolvableValue(
    z.object({
      key: z.string().optional(),
      sort_order: z.string().optional(),
    }).array().optional(),
  ),
  tag_key: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  tags: z.set(z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ce_tags

export function DataAwsCeTags(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_tags'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCeTagss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsCeTags, idFilter, baseNode, optional)
