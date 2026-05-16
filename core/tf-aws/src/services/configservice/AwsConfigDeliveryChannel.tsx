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

export const AwsConfigDeliveryChannelInputSchema = TfMetaSchema.extend({
  s3_bucket_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  s3_key_prefix: resolvableValue(z.string().optional()),
  s3_kms_key_arn: resolvableValue(z.string().optional()),
  snapshot_delivery_properties: resolvableValue(
    z.object({
      delivery_frequency: z.string().optional(),
    }).optional(),
  ),
  sns_topic_arn: resolvableValue(z.string().optional()),
})

export const AwsConfigDeliveryChannelOutputSchema = z.object({})

export const AwsConfigDeliveryChannelImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsConfigDeliveryChannelInputProps =
  & z.input<typeof AwsConfigDeliveryChannelInputSchema>
  & z.input<typeof AwsConfigDeliveryChannelImportSchema>
  & NodeProps

export type AwsConfigDeliveryChannelOutputProps =
  & z.output<typeof AwsConfigDeliveryChannelOutputSchema>
  & z.output<typeof AwsConfigDeliveryChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/config_delivery_channel

export function AwsConfigDeliveryChannel(
  props: Partial<AwsConfigDeliveryChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_delivery_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConfigDeliveryChannelInputSchema}
      _outputSchema={AwsConfigDeliveryChannelOutputSchema}
      _importSchema={AwsConfigDeliveryChannelImportSchema}
      {...props}
    />
  )
}

export const useAwsConfigDeliveryChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConfigDeliveryChannelOutputProps>(
    AwsConfigDeliveryChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConfigDeliveryChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConfigDeliveryChannelOutputProps>(
    AwsConfigDeliveryChannel,
    idFilter,
    baseNode,
    optional,
  )
