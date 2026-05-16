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

export const AwsCloudwatchLogDeliveryDestinationPolicyInputSchema = TfMetaSchema
  .extend({
    delivery_destination_name: resolvableValue(z.string()),
    delivery_destination_policy: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsCloudwatchLogDeliveryDestinationPolicyOutputSchema = z.object(
  {},
)

export type AwsCloudwatchLogDeliveryDestinationPolicyInputProps =
  & z.input<typeof AwsCloudwatchLogDeliveryDestinationPolicyInputSchema>
  & NodeProps

export type AwsCloudwatchLogDeliveryDestinationPolicyOutputProps =
  & z.output<typeof AwsCloudwatchLogDeliveryDestinationPolicyOutputSchema>
  & z.output<typeof AwsCloudwatchLogDeliveryDestinationPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery_destination_policy

export function AwsCloudwatchLogDeliveryDestinationPolicy(
  props: Partial<AwsCloudwatchLogDeliveryDestinationPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_delivery_destination_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogDeliveryDestinationPolicyInputSchema}
      _outputSchema={AwsCloudwatchLogDeliveryDestinationPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDeliveryDestinationPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogDeliveryDestinationPolicyOutputProps>(
    AwsCloudwatchLogDeliveryDestinationPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogDeliveryDestinationPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogDeliveryDestinationPolicyOutputProps>(
    AwsCloudwatchLogDeliveryDestinationPolicy,
    idFilter,
    baseNode,
    optional,
  )
