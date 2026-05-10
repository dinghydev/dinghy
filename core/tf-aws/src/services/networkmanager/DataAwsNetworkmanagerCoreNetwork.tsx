import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkmanagerCoreNetwork } from './AwsNetworkmanagerCoreNetwork.tsx'

export const InputSchema = TfMetaSchema.extend({
  core_network_id: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  description: z.string().optional(),
  edges: z.object({
    asn: z.number(),
    edge_location: z.string(),
    inside_cidr_blocks: z.string().array(),
  }).array().optional(),
  global_network_id: z.string().optional(),
  network_function_groups: z.object({
    edge_locations: z.string().array(),
    name: z.string(),
    segments: z.object({
      send_to: z.string().array(),
      send_via: z.string().array(),
    }).array(),
  }).array().optional(),
  segments: z.object({
    edge_locations: z.string().array(),
    name: z.string(),
    shared_segments: z.string().array(),
  }).array().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkmanager_core_network

export function DataAwsNetworkmanagerCoreNetwork(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerCoreNetwork
      _type='aws_networkmanager_core_network'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerCoreNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsNetworkmanagerCoreNetwork,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkmanagerCoreNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNetworkmanagerCoreNetwork,
    idFilter,
    baseNode,
    optional,
  )
