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

export const AwsMediaPackagev2ChannelGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMediaPackagev2ChannelGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  egress_domain: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMediaPackagev2ChannelGroupInputProps =
  & z.input<typeof AwsMediaPackagev2ChannelGroupInputSchema>
  & NodeProps

export type AwsMediaPackagev2ChannelGroupOutputProps =
  & z.output<typeof AwsMediaPackagev2ChannelGroupOutputSchema>
  & z.output<typeof AwsMediaPackagev2ChannelGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_packagev2_channel_group

export function AwsMediaPackagev2ChannelGroup(
  props: Partial<AwsMediaPackagev2ChannelGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_media_packagev2_channel_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMediaPackagev2ChannelGroupInputSchema}
      _outputSchema={AwsMediaPackagev2ChannelGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsMediaPackagev2ChannelGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMediaPackagev2ChannelGroupOutputProps>(
    AwsMediaPackagev2ChannelGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMediaPackagev2ChannelGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMediaPackagev2ChannelGroupOutputProps>(
    AwsMediaPackagev2ChannelGroup,
    idFilter,
    baseNode,
    optional,
  )
