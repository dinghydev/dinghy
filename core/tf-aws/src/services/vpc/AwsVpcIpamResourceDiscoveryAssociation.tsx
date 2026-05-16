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

export const AwsVpcIpamResourceDiscoveryAssociationInputSchema = TfMetaSchema
  .extend({
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

export const AwsVpcIpamResourceDiscoveryAssociationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ipam_arn: z.string().optional(),
  ipam_region: z.string().optional(),
  is_default: z.boolean().optional(),
  owner_id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpcIpamResourceDiscoveryAssociationInputProps =
  & z.input<typeof AwsVpcIpamResourceDiscoveryAssociationInputSchema>
  & NodeProps

export type AwsVpcIpamResourceDiscoveryAssociationOutputProps =
  & z.output<typeof AwsVpcIpamResourceDiscoveryAssociationOutputSchema>
  & z.output<typeof AwsVpcIpamResourceDiscoveryAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_resource_discovery_association

export function AwsVpcIpamResourceDiscoveryAssociation(
  props: Partial<AwsVpcIpamResourceDiscoveryAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_resource_discovery_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamResourceDiscoveryAssociationInputSchema}
      _outputSchema={AwsVpcIpamResourceDiscoveryAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamResourceDiscoveryAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamResourceDiscoveryAssociationOutputProps>(
    AwsVpcIpamResourceDiscoveryAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpamResourceDiscoveryAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamResourceDiscoveryAssociationOutputProps>(
    AwsVpcIpamResourceDiscoveryAssociation,
    idFilter,
    baseNode,
    optional,
  )
