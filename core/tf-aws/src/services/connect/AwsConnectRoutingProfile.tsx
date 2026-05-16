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

export const AwsConnectRoutingProfileInputSchema = TfMetaSchema.extend({
  default_outbound_queue_id: resolvableValue(z.string()),
  description: resolvableValue(z.string()),
  instance_id: resolvableValue(z.string()),
  media_concurrencies: resolvableValue(
    z.object({
      channel: z.string(),
      concurrency: z.number(),
      cross_channel_behavior: z.object({
        behavior_type: z.string(),
      }).optional(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  queue_configs: resolvableValue(
    z.object({
      channel: z.string(),
      delay: z.number(),
      priority: z.number(),
      queue_arn: z.string().optional(),
      queue_id: z.string(),
      queue_name: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsConnectRoutingProfileOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  queue_configs: z.object({
    channel: z.string(),
    delay: z.number(),
    priority: z.number(),
    queue_arn: z.string().optional(),
    queue_id: z.string(),
    queue_name: z.string().optional(),
  }).array().optional().optional(),
  routing_profile_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsConnectRoutingProfileInputProps =
  & z.input<typeof AwsConnectRoutingProfileInputSchema>
  & NodeProps

export type AwsConnectRoutingProfileOutputProps =
  & z.output<typeof AwsConnectRoutingProfileOutputSchema>
  & z.output<typeof AwsConnectRoutingProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_routing_profile

export function AwsConnectRoutingProfile(
  props: Partial<AwsConnectRoutingProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_routing_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectRoutingProfileInputSchema}
      _outputSchema={AwsConnectRoutingProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectRoutingProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectRoutingProfileOutputProps>(
    AwsConnectRoutingProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectRoutingProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectRoutingProfileOutputProps>(
    AwsConnectRoutingProfile,
    idFilter,
    baseNode,
    optional,
  )
