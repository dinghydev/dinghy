import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_ipam_pool

export const InputSchema = z.object({
  address_family: resolvableValue(z.string()),
  ipam_scope_id: resolvableValue(z.string()),
  ipam_scope_type: resolvableValue(z.string()),
  pool_depth: resolvableValue(z.number()),
  allocation_default_netmask_length: resolvableValue(z.number().optional()),
  allocation_max_netmask_length: resolvableValue(z.number().optional()),
  allocation_min_netmask_length: resolvableValue(z.number().optional()),
  allocation_resource_tags: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  auto_import: resolvableValue(z.boolean().optional()),
  aws_service: resolvableValue(z.string().optional()),
  cascade: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  locale: resolvableValue(z.string().optional()),
  public_ip_source: resolvableValue(z.string().optional()),
  publicly_advertisable: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  source_ipam_pool_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcIpamPool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_pool'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamPool = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcIpamPool, node, id)

export const useAwsVpcIpamPools = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcIpamPool, node, id)
