import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpclattice_resource_configuration

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  allow_association_to_shareable_service_network: resolvableValue(
    z.boolean().optional(),
  ),
  custom_domain_name: resolvableValue(z.string().optional()),
  domain_verification_id: resolvableValue(z.string().optional()),
  port_ranges: resolvableValue(z.string().array().optional()),
  protocol: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_configuration_definition: resolvableValue(
    z.object({
      arn_resource: z.object({
        arn: z.string(),
      }).optional(),
      dns_resource: z.object({
        domain_name: z.string(),
        ip_address_type: z.string(),
      }).optional(),
      ip_resource: z.object({
        ip_address: z.string(),
      }).optional(),
    }).optional(),
  ),
  resource_configuration_group_id: resolvableValue(z.string().optional()),
  resource_gateway_identifier: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  domain_verification_arn: z.string().optional(),
  domain_verification_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpclatticeResourceConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_resource_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeResourceConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsVpclatticeResourceConfiguration, node, id)

export const useAwsVpclatticeResourceConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsVpclatticeResourceConfiguration, node, id)
