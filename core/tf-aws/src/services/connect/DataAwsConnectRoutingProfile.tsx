import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectRoutingProfile } from './AwsConnectRoutingProfile.tsx'

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  routing_profile_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_outbound_queue_id: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  media_concurrencies: z.set(z.object({
    channel: z.string(),
    concurrency: z.number(),
    cross_channel_behavior: z.object({
      behavior_type: z.string(),
    }).array(),
  })).optional(),
  queue_configs: z.set(z.object({
    channel: z.string(),
    delay: z.number(),
    priority: z.number(),
    queue_arn: z.string(),
    queue_id: z.string(),
    queue_name: z.string(),
  })).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_routing_profile

export function DataAwsConnectRoutingProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectRoutingProfile
      _type='aws_connect_routing_profile'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectRoutingProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsConnectRoutingProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectRoutingProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsConnectRoutingProfile,
    idFilter,
    baseNode,
    optional,
  )
