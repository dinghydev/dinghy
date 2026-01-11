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

export const InputSchema = z.object({
  s3_bucket_name: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/config_delivery_channel

export function AwsConfigDeliveryChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_config_delivery_channel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConfigDeliveryChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsConfigDeliveryChannel,
    idFilter,
    baseNode,
    optional,
  )
