import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/macie2_findings_filter

export const InputSchema = z.object({
  action: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  finding_criteria: resolvableValue(z.object({
    criterion: z.object({
      eq: z.string().array().optional(),
      eq_exact_match: z.string().array().optional(),
      field: z.string(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      neq: z.string().array().optional(),
    }).array().optional(),
  })),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  position: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMacie2FindingsFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_findings_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2FindingsFilter = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMacie2FindingsFilter, node, id)

export const useAwsMacie2FindingsFilters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMacie2FindingsFilter, node, id)
