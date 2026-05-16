import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOdbNetworksInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOdbNetworksOutputSchema = z.object({
  odb_networks: z.object({
    arn: z.string(),
    display_name: z.string(),
    id: z.string(),
    oci_network_anchor_id: z.string(),
    oci_vcn_id: z.string(),
    oci_vcn_url: z.string(),
  }).array().optional(),
})

export type DataAwsOdbNetworksInputProps =
  & z.input<typeof DataAwsOdbNetworksInputSchema>
  & NodeProps

export type DataAwsOdbNetworksOutputProps =
  & z.output<typeof DataAwsOdbNetworksOutputSchema>
  & z.output<typeof DataAwsOdbNetworksInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_networks

export function DataAwsOdbNetworks(
  props: Partial<DataAwsOdbNetworksInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_networks'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOdbNetworksInputSchema}
      _outputSchema={DataAwsOdbNetworksOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbNetworkss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOdbNetworksOutputProps>(
    DataAwsOdbNetworks,
    idFilter,
    baseNode,
    optional,
  )
