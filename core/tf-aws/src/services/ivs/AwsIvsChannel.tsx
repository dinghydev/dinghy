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

export const AwsIvsChannelInputSchema = TfMetaSchema.extend({
  authorized: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  latency_mode: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  recording_configuration_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
})

export const AwsIvsChannelOutputSchema = z.object({
  arn: z.string().optional(),
  ingest_endpoint: z.string().optional(),
  playback_url: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsIvsChannelImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsIvsChannelInputProps =
  & z.input<typeof AwsIvsChannelInputSchema>
  & z.input<typeof AwsIvsChannelImportSchema>
  & NodeProps

export type AwsIvsChannelOutputProps =
  & z.output<typeof AwsIvsChannelOutputSchema>
  & z.output<typeof AwsIvsChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ivs_channel

export function AwsIvsChannel(props: Partial<AwsIvsChannelInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ivs_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIvsChannelInputSchema}
      _outputSchema={AwsIvsChannelOutputSchema}
      _importSchema={AwsIvsChannelImportSchema}
      {...props}
    />
  )
}

export const useAwsIvsChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIvsChannelOutputProps>(
    AwsIvsChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIvsChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIvsChannelOutputProps>(
    AwsIvsChannel,
    idFilter,
    baseNode,
    optional,
  )
