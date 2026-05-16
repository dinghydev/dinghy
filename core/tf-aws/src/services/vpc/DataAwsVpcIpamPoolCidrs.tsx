import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsVpcIpamPoolCidrsInputSchema = TfMetaSchema.extend({
  ipam_pool_id: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsVpcIpamPoolCidrsOutputSchema = z.object({
  ipam_pool_cidrs: z.set(z.object({
    cidr: z.string(),
    state: z.string(),
  })).optional(),
})

export type DataAwsVpcIpamPoolCidrsInputProps =
  & z.input<typeof DataAwsVpcIpamPoolCidrsInputSchema>
  & NodeProps

export type DataAwsVpcIpamPoolCidrsOutputProps =
  & z.output<typeof DataAwsVpcIpamPoolCidrsOutputSchema>
  & z.output<typeof DataAwsVpcIpamPoolCidrsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_ipam_pool_cidrs

export function DataAwsVpcIpamPoolCidrs(
  props: Partial<DataAwsVpcIpamPoolCidrsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_pool_cidrs'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcIpamPoolCidrsInputSchema}
      _outputSchema={DataAwsVpcIpamPoolCidrsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcIpamPoolCidrss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcIpamPoolCidrsOutputProps>(
    DataAwsVpcIpamPoolCidrs,
    idFilter,
    baseNode,
    optional,
  )
