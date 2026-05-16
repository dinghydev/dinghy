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

export const AwsCloudwatchLogDeliveryDestinationInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    delivery_destination_configuration: resolvableValue(
      z.object({
        destination_resource_arn: z.string().optional(),
      }).array().optional(),
    ),
    delivery_destination_type: resolvableValue(z.string().optional()),
    output_format: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsCloudwatchLogDeliveryDestinationOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchLogDeliveryDestinationInputProps =
  & z.input<typeof AwsCloudwatchLogDeliveryDestinationInputSchema>
  & NodeProps

export type AwsCloudwatchLogDeliveryDestinationOutputProps =
  & z.output<typeof AwsCloudwatchLogDeliveryDestinationOutputSchema>
  & z.output<typeof AwsCloudwatchLogDeliveryDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery_destination

export function AwsCloudwatchLogDeliveryDestination(
  props: Partial<AwsCloudwatchLogDeliveryDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_delivery_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogDeliveryDestinationInputSchema}
      _outputSchema={AwsCloudwatchLogDeliveryDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDeliveryDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogDeliveryDestinationOutputProps>(
    AwsCloudwatchLogDeliveryDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogDeliveryDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogDeliveryDestinationOutputProps>(
    AwsCloudwatchLogDeliveryDestination,
    idFilter,
    baseNode,
    optional,
  )
