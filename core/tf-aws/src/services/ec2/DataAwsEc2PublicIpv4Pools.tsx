import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2PublicIpv4PoolsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsEc2PublicIpv4PoolsOutputSchema = z.object({
  pool_ids: z.string().array().optional(),
})

export type DataAwsEc2PublicIpv4PoolsInputProps =
  & z.input<typeof DataAwsEc2PublicIpv4PoolsInputSchema>
  & NodeProps

export type DataAwsEc2PublicIpv4PoolsOutputProps =
  & z.output<typeof DataAwsEc2PublicIpv4PoolsOutputSchema>
  & z.output<typeof DataAwsEc2PublicIpv4PoolsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_public_ipv4_pools

export function DataAwsEc2PublicIpv4Pools(
  props: Partial<DataAwsEc2PublicIpv4PoolsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_public_ipv4_pools'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2PublicIpv4PoolsInputSchema}
      _outputSchema={DataAwsEc2PublicIpv4PoolsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2PublicIpv4Poolss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2PublicIpv4PoolsOutputProps>(
    DataAwsEc2PublicIpv4Pools,
    idFilter,
    baseNode,
    optional,
  )
