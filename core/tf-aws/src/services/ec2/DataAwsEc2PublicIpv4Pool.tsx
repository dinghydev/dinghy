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

export const DataAwsEc2PublicIpv4PoolInputSchema = TfMetaSchema.extend({
  pool_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsEc2PublicIpv4PoolOutputSchema = z.object({
  description: z.string().optional(),
  network_border_group: z.string().optional(),
  pool_address_ranges: z.object({
    address_count: z.number(),
    available_address_count: z.number(),
    first_address: z.string(),
    last_address: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  total_address_count: z.number().optional(),
  total_available_address_count: z.number().optional(),
})

export type DataAwsEc2PublicIpv4PoolInputProps =
  & z.input<typeof DataAwsEc2PublicIpv4PoolInputSchema>
  & NodeProps

export type DataAwsEc2PublicIpv4PoolOutputProps =
  & z.output<typeof DataAwsEc2PublicIpv4PoolOutputSchema>
  & z.output<typeof DataAwsEc2PublicIpv4PoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_public_ipv4_pool

export function DataAwsEc2PublicIpv4Pool(
  props: Partial<DataAwsEc2PublicIpv4PoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_public_ipv4_pool'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2PublicIpv4PoolInputSchema}
      _outputSchema={DataAwsEc2PublicIpv4PoolOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2PublicIpv4Pool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2PublicIpv4PoolOutputProps>(
    DataAwsEc2PublicIpv4Pool,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2PublicIpv4Pools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2PublicIpv4PoolOutputProps>(
    DataAwsEc2PublicIpv4Pool,
    idFilter,
    baseNode,
    optional,
  )
