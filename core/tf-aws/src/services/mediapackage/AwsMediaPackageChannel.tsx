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

export const AwsMediaPackageChannelInputSchema = TfMetaSchema.extend({
  channel_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMediaPackageChannelOutputSchema = z.object({
  arn: z.string().optional(),
  hls_ingest: z.object({
    ingest_endpoints: z.object({
      password: z.string(),
      url: z.string(),
      username: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMediaPackageChannelInputProps =
  & z.input<typeof AwsMediaPackageChannelInputSchema>
  & NodeProps

export type AwsMediaPackageChannelOutputProps =
  & z.output<typeof AwsMediaPackageChannelOutputSchema>
  & z.output<typeof AwsMediaPackageChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_package_channel

export function AwsMediaPackageChannel(
  props: Partial<AwsMediaPackageChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_media_package_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMediaPackageChannelInputSchema}
      _outputSchema={AwsMediaPackageChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsMediaPackageChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMediaPackageChannelOutputProps>(
    AwsMediaPackageChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMediaPackageChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMediaPackageChannelOutputProps>(
    AwsMediaPackageChannel,
    idFilter,
    baseNode,
    optional,
  )
