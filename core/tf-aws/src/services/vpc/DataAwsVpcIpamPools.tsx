import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  ipam_pools: z.set(z.object({
    address_family: z.string(),
    allocation_default_netmask_length: z.number(),
    allocation_max_netmask_length: z.number(),
    allocation_min_netmask_length: z.number(),
    allocation_resource_tags: z.record(z.string(), z.string()),
    arn: z.string(),
    auto_import: z.boolean(),
    aws_service: z.string(),
    description: z.string(),
    id: z.string(),
    ipam_scope_id: z.string(),
    ipam_scope_type: z.string(),
    locale: z.string(),
    pool_depth: z.number(),
    publicly_advertisable: z.boolean(),
    source_ipam_pool_id: z.string(),
    state: z.string(),
    tags: z.record(z.string(), z.string()),
  })).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/vpc_ipam_pools

export function DataAwsVpcIpamPools(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_pools'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcIpamPoolss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsVpcIpamPools, idFilter, baseNode, optional)
