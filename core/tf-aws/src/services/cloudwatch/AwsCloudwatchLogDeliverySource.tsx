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

export const AwsCloudwatchLogDeliverySourceInputSchema = TfMetaSchema.extend({
  log_type: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudwatchLogDeliverySourceOutputSchema = z.object({
  arn: z.string().optional(),
  service: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchLogDeliverySourceInputProps =
  & z.input<typeof AwsCloudwatchLogDeliverySourceInputSchema>
  & NodeProps

export type AwsCloudwatchLogDeliverySourceOutputProps =
  & z.output<typeof AwsCloudwatchLogDeliverySourceOutputSchema>
  & z.output<typeof AwsCloudwatchLogDeliverySourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_delivery_source

export function AwsCloudwatchLogDeliverySource(
  props: Partial<AwsCloudwatchLogDeliverySourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_delivery_source'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogDeliverySourceInputSchema}
      _outputSchema={AwsCloudwatchLogDeliverySourceOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDeliverySource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogDeliverySourceOutputProps>(
    AwsCloudwatchLogDeliverySource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogDeliverySources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogDeliverySourceOutputProps>(
    AwsCloudwatchLogDeliverySource,
    idFilter,
    baseNode,
    optional,
  )
