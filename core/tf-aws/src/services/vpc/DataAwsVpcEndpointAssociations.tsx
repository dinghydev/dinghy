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
  vpc_endpoint_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpc_endpoint_associations

export function DataAwsVpcEndpointAssociations(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_associations'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcEndpointAssociationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsVpcEndpointAssociations,
    idFilter,
    baseNode,
    optional,
  )
