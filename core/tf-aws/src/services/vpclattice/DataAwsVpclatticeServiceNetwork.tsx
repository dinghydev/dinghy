import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpclatticeServiceNetwork } from './AwsVpclatticeServiceNetwork.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpclattice_service_network

export const InputSchema = z.object({
  service_network_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  auth_type: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  last_updated_at: z.string().optional(),
  name: z.string().optional(),
  number_of_associated_services: z.number().optional(),
  number_of_associated_vpcs: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsVpclatticeServiceNetwork(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsVpclatticeServiceNetwork
      _type='aws_vpclattice_service_network'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpclatticeServiceNetwork = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsVpclatticeServiceNetwork, node, id)

export const useDataAwsVpclatticeServiceNetworks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsVpclatticeServiceNetwork, node, id)
