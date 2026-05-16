import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsVpcEndpointAssociationsInputSchema = TfMetaSchema.extend({
  vpc_endpoint_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsVpcEndpointAssociationsOutputSchema = z.object({
  associations: z.object({
    associated_resource_accessibility: z.string(),
    associated_resource_arn: z.string(),
    dns_entry: z.object({
      dns_name: z.string(),
      hosted_zone_id: z.string(),
    }).array(),
    id: z.string(),
    private_dns_entry: z.object({
      dns_name: z.string(),
      hosted_zone_id: z.string(),
    }).array(),
    resource_configuration_group_arn: z.string(),
    service_network_arn: z.string(),
    service_network_name: z.string(),
    tags: z.record(z.string(), z.string()),
  }).array().optional(),
})

export type DataAwsVpcEndpointAssociationsInputProps =
  & z.input<typeof DataAwsVpcEndpointAssociationsInputSchema>
  & NodeProps

export type DataAwsVpcEndpointAssociationsOutputProps =
  & z.output<typeof DataAwsVpcEndpointAssociationsOutputSchema>
  & z.output<typeof DataAwsVpcEndpointAssociationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_endpoint_associations

export function DataAwsVpcEndpointAssociations(
  props: Partial<DataAwsVpcEndpointAssociationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_associations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcEndpointAssociationsInputSchema}
      _outputSchema={DataAwsVpcEndpointAssociationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcEndpointAssociationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcEndpointAssociationsOutputProps>(
    DataAwsVpcEndpointAssociations,
    idFilter,
    baseNode,
    optional,
  )
