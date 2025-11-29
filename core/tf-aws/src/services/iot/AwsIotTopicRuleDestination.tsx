import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_topic_rule_destination

export const InputSchema = z.object({
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_configuration: resolvableValue(z.object({
    role_arn: z.string(),
    security_groups: z.string().array().optional(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  })),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotTopicRuleDestination(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_topic_rule_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotTopicRuleDestination = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotTopicRuleDestination, node, id)

export const useAwsIotTopicRuleDestinations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotTopicRuleDestination, node, id)
