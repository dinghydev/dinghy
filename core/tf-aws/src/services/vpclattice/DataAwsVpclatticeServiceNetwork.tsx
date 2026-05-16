import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpclatticeServiceNetwork } from './AwsVpclatticeServiceNetwork.tsx'

export const DataAwsVpclatticeServiceNetworkInputSchema = TfMetaSchema.extend({
  service_network_identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsVpclatticeServiceNetworkOutputSchema = z.object({
  arn: z.string().optional(),
  auth_type: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  last_updated_at: z.string().optional(),
  name: z.string().optional(),
  number_of_associated_services: z.number().optional(),
  number_of_associated_vpcs: z.number().optional(),
})

export type DataAwsVpclatticeServiceNetworkInputProps =
  & z.input<typeof DataAwsVpclatticeServiceNetworkInputSchema>
  & NodeProps

export type DataAwsVpclatticeServiceNetworkOutputProps =
  & z.output<typeof DataAwsVpclatticeServiceNetworkOutputSchema>
  & z.output<typeof DataAwsVpclatticeServiceNetworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpclattice_service_network

export function DataAwsVpclatticeServiceNetwork(
  props: Partial<DataAwsVpclatticeServiceNetworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpclatticeServiceNetwork
      _type='aws_vpclattice_service_network'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpclatticeServiceNetworkInputSchema}
      _outputSchema={DataAwsVpclatticeServiceNetworkOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpclatticeServiceNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpclatticeServiceNetworkOutputProps>(
    DataAwsVpclatticeServiceNetwork,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpclatticeServiceNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpclatticeServiceNetworkOutputProps>(
    DataAwsVpclatticeServiceNetwork,
    idFilter,
    baseNode,
    optional,
  )
