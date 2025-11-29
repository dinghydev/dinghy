import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshiftserverless_usage_limit

export const InputSchema = z.object({
  amount: resolvableValue(z.number()),
  resource_arn: resolvableValue(z.string()),
  usage_type: resolvableValue(z.string()),
  breach_action: resolvableValue(z.string().optional()),
  period: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftserverlessUsageLimit(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_usage_limit'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessUsageLimit = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftserverlessUsageLimit, node, id)

export const useAwsRedshiftserverlessUsageLimits = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftserverlessUsageLimit, node, id)
