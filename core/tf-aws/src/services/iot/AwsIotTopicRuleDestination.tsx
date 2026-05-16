import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsIotTopicRuleDestinationInputSchema = TfMetaSchema.extend({
  vpc_configuration: resolvableValue(z.object({
    role_arn: z.string(),
    security_groups: z.string().array().optional(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  })),
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
})

export const AwsIotTopicRuleDestinationOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsIotTopicRuleDestinationInputProps =
  & z.input<typeof AwsIotTopicRuleDestinationInputSchema>
  & NodeProps

export type AwsIotTopicRuleDestinationOutputProps =
  & z.output<typeof AwsIotTopicRuleDestinationOutputSchema>
  & z.output<typeof AwsIotTopicRuleDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_topic_rule_destination

export function AwsIotTopicRuleDestination(
  props: Partial<AwsIotTopicRuleDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_topic_rule_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotTopicRuleDestinationInputSchema}
      _outputSchema={AwsIotTopicRuleDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotTopicRuleDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotTopicRuleDestinationOutputProps>(
    AwsIotTopicRuleDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotTopicRuleDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotTopicRuleDestinationOutputProps>(
    AwsIotTopicRuleDestination,
    idFilter,
    baseNode,
    optional,
  )
