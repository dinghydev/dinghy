import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcIpamPool } from './AwsVpcIpamPool.tsx'

export const DataAwsVpcIpamPoolInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  ipam_pool_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsVpcIpamPoolOutputSchema = z.object({
  address_family: z.string().optional(),
  allocation_default_netmask_length: z.number().optional(),
  allocation_max_netmask_length: z.number().optional(),
  allocation_min_netmask_length: z.number().optional(),
  allocation_resource_tags: z.record(z.string(), z.string()).optional(),
  arn: z.string().optional(),
  auto_import: z.boolean().optional(),
  aws_service: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  ipam_scope_id: z.string().optional(),
  ipam_scope_type: z.string().optional(),
  locale: z.string().optional(),
  pool_depth: z.number().optional(),
  publicly_advertisable: z.boolean().optional(),
  source_ipam_pool_id: z.string().optional(),
  source_resource: z.object({
    resource_id: z.string(),
    resource_owner: z.string(),
    resource_region: z.string(),
    resource_type: z.string(),
  }).array().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsVpcIpamPoolInputProps =
  & z.input<typeof DataAwsVpcIpamPoolInputSchema>
  & NodeProps

export type DataAwsVpcIpamPoolOutputProps =
  & z.output<typeof DataAwsVpcIpamPoolOutputSchema>
  & z.output<typeof DataAwsVpcIpamPoolInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_ipam_pool

export function DataAwsVpcIpamPool(
  props: Partial<DataAwsVpcIpamPoolInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpcIpamPool
      _type='aws_vpc_ipam_pool'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcIpamPoolInputSchema}
      _outputSchema={DataAwsVpcIpamPoolOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcIpamPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpcIpamPoolOutputProps>(
    DataAwsVpcIpamPool,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpcIpamPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcIpamPoolOutputProps>(
    DataAwsVpcIpamPool,
    idFilter,
    baseNode,
    optional,
  )
