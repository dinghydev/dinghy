import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcIpamPreviewNextCidr } from './AwsVpcIpamPreviewNextCidr.tsx'

export const DataAwsVpcIpamPreviewNextCidrInputSchema = TfMetaSchema.extend({
  ipam_pool_id: resolvableValue(z.string()),
  disallowed_cidrs: resolvableValue(z.string().array().optional()),
  netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsVpcIpamPreviewNextCidrOutputSchema = z.object({
  cidr: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsVpcIpamPreviewNextCidrInputProps =
  & z.input<typeof DataAwsVpcIpamPreviewNextCidrInputSchema>
  & NodeProps

export type DataAwsVpcIpamPreviewNextCidrOutputProps =
  & z.output<typeof DataAwsVpcIpamPreviewNextCidrOutputSchema>
  & z.output<typeof DataAwsVpcIpamPreviewNextCidrInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_ipam_preview_next_cidr

export function DataAwsVpcIpamPreviewNextCidr(
  props: Partial<DataAwsVpcIpamPreviewNextCidrInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpcIpamPreviewNextCidr
      _type='aws_vpc_ipam_preview_next_cidr'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcIpamPreviewNextCidrInputSchema}
      _outputSchema={DataAwsVpcIpamPreviewNextCidrOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcIpamPreviewNextCidr = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpcIpamPreviewNextCidrOutputProps>(
    DataAwsVpcIpamPreviewNextCidr,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpcIpamPreviewNextCidrs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcIpamPreviewNextCidrOutputProps>(
    DataAwsVpcIpamPreviewNextCidr,
    idFilter,
    baseNode,
    optional,
  )
