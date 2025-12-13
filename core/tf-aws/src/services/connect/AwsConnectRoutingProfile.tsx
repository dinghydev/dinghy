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
      queue_arn: z.string(),
      queue_id: z.string(),
      queue_name: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  queue_configs: z.object({
    channel: z.string(),
    delay: z.number(),
    priority: z.number(),
    queue_arn: z.string(),
    queue_id: z.string(),
    queue_name: z.string(),
  }).array().optional().optional(),
  routing_profile_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_routing_profile

export function AwsConnectRoutingProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_routing_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectRoutingProfile = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsConnectRoutingProfile, idFilter, baseNode)

export const useAwsConnectRoutingProfiles = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsConnectRoutingProfile, idFilter, baseNode)
