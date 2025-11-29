import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_usage_limit

export const InputSchema = z.object({
  amount: resolvableValue(z.number()),
  cluster_identifier: resolvableValue(z.string()),
  feature_type: resolvableValue(z.string()),
  limit_type: resolvableValue(z.string()),
  breach_action: resolvableValue(z.string().optional()),
  period: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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

export function AwsRedshiftUsageLimit(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_usage_limit'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftUsageLimit = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftUsageLimit, node, id)

export const useAwsRedshiftUsageLimits = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftUsageLimit, node, id)
