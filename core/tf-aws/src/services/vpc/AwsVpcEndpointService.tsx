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

export const AwsVpcEndpointServiceInputSchema = TfMetaSchema.extend({
  acceptance_required: resolvableValue(z.boolean()),
  allowed_principals: resolvableValue(z.string().array().optional()),
  gateway_load_balancer_arns: resolvableValue(z.string().array().optional()),
  network_load_balancer_arns: resolvableValue(z.string().array().optional()),
  private_dns_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  supported_ip_address_types: resolvableValue(z.string().array().optional()),
  supported_regions: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcEndpointServiceOutputSchema = z.object({
  arn: z.string().optional(),
  availability_zones: z.set(z.string()).optional(),
  base_endpoint_dns_names: z.set(z.string()).optional(),
  id: z.string().optional(),
  manages_vpc_endpoints: z.boolean().optional(),
  private_dns_name_configuration: z.object({
    name: z.string(),
    state: z.string(),
    type: z.string(),
    value: z.string(),
  }).array().optional(),
  service_name: z.string().optional(),
  service_type: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpcEndpointServiceInputProps =
  & z.input<typeof AwsVpcEndpointServiceInputSchema>
  & NodeProps

export type AwsVpcEndpointServiceOutputProps =
  & z.output<typeof AwsVpcEndpointServiceOutputSchema>
  & z.output<typeof AwsVpcEndpointServiceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_service

export function AwsVpcEndpointService(
  props: Partial<AwsVpcEndpointServiceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_service'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointServiceInputSchema}
      _outputSchema={AwsVpcEndpointServiceOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointServiceOutputProps>(
    AwsVpcEndpointService,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointServiceOutputProps>(
    AwsVpcEndpointService,
    idFilter,
    baseNode,
    optional,
  )
