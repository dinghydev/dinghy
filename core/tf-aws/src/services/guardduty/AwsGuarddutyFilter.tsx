import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/guardduty_filter

export const InputSchema = z.object({
  action: resolvableValue(z.string()),
  detector_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  rank: resolvableValue(z.number()),
  description: resolvableValue(z.string().optional()),
  finding_criteria: resolvableValue(z.object({
    criterion: z.object({
      equals: z.string().array().optional(),
      field: z.string(),
      greater_than: z.string().optional(),
      greater_than_or_equal: z.string().optional(),
      less_than: z.string().optional(),
      less_than_or_equal: z.string().optional(),
      not_equals: z.string().array().optional(),
    }).array(),
  })),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGuarddutyFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_guardduty_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGuarddutyFilter = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGuarddutyFilter, node, id)

export const useAwsGuarddutyFilters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGuarddutyFilter, node, id)
