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

export const InputSchema = z.object({
  ipam_scope_type: resolvableValue(z.string()),
  pool_depth: resolvableValue(z.number()),
  state: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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
  locale: z.string().optional(),
  publicly_advertisable: z.boolean().optional(),
  source_ipam_pool_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpc_ipam_pool

export function DataAwsVpcIpamPool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsVpcIpamPool
      _type='aws_vpc_ipam_pool'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcIpamPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsVpcIpamPool, idFilter, baseNode, optional)

export const useDataAwsVpcIpamPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsVpcIpamPool, idFilter, baseNode, optional)
