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

export const AwsVpcIpamResourceDiscoveryInputSchema = TfMetaSchema.extend({
  operating_regions: resolvableValue(
    z.object({
      region_name: z.string(),
    }).array(),
  ),
  description: resolvableValue(z.string().optional()),
  organizational_unit_exclusion: resolvableValue(
    z.object({
      organizations_entity_path: z.string(),
    }).array().optional(),
  ),
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

export const AwsVpcIpamResourceDiscoveryOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ipam_resource_discovery_region: z.string().optional(),
  is_default: z.boolean().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpcIpamResourceDiscoveryInputProps =
  & z.input<typeof AwsVpcIpamResourceDiscoveryInputSchema>
  & NodeProps

export type AwsVpcIpamResourceDiscoveryOutputProps =
  & z.output<typeof AwsVpcIpamResourceDiscoveryOutputSchema>
  & z.output<typeof AwsVpcIpamResourceDiscoveryInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_resource_discovery

export function AwsVpcIpamResourceDiscovery(
  props: Partial<AwsVpcIpamResourceDiscoveryInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_resource_discovery'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamResourceDiscoveryInputSchema}
      _outputSchema={AwsVpcIpamResourceDiscoveryOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamResourceDiscovery = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamResourceDiscoveryOutputProps>(
    AwsVpcIpamResourceDiscovery,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpamResourceDiscoverys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamResourceDiscoveryOutputProps>(
    AwsVpcIpamResourceDiscovery,
    idFilter,
    baseNode,
    optional,
  )
