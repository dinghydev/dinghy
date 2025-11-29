import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_core_network

export const InputSchema = z.object({
  global_network_id: resolvableValue(z.string()),
  base_policy_document: resolvableValue(z.string().optional()),
  base_policy_regions: resolvableValue(z.string().array().optional()),
  create_base_policy: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  edges: z.object({
    asn: z.number(),
    edge_location: z.string(),
    inside_cidr_blocks: z.string().array(),
  }).array().optional(),
  id: z.string().optional(),
  segments: z.object({
    edge_locations: z.string().array(),
    name: z.string(),
    shared_segments: z.string().array(),
  }).array().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerCoreNetwork(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_core_network'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerCoreNetwork = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNetworkmanagerCoreNetwork, node, id)

export const useAwsNetworkmanagerCoreNetworks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNetworkmanagerCoreNetwork, node, id)
