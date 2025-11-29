import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_ipam_resource_discovery_association

export const InputSchema = z.object({
  ipam_id: resolvableValue(z.string()),
  ipam_resource_discovery_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
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
  ipam_arn: z.string().optional(),
  ipam_region: z.string().optional(),
  is_default: z.boolean().optional(),
  owner_id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcIpamResourceDiscoveryAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_resource_discovery_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamResourceDiscoveryAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsVpcIpamResourceDiscoveryAssociation, node, id)

export const useAwsVpcIpamResourceDiscoveryAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsVpcIpamResourceDiscoveryAssociation, node, id)
