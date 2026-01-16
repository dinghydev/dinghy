import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcEndpointService } from './AwsVpcEndpointService.tsx'

export const InputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  service: resolvableValue(z.string().optional()),
  service_name: resolvableValue(z.string().optional()),
  service_regions: resolvableValue(z.string().array().optional()),
  service_type: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  acceptance_required: z.boolean().optional(),
  arn: z.string().optional(),
  availability_zones: z.set(z.string()).optional(),
  base_endpoint_dns_names: z.set(z.string()).optional(),
  manages_vpc_endpoints: z.boolean().optional(),
  owner: z.string().optional(),
  private_dns_name: z.string().optional(),
  private_dns_names: z.set(z.string()).optional(),
  region: z.string().optional(),
  service_id: z.string().optional(),
  service_region: z.string().optional(),
  supported_ip_address_types: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_endpoint_policy_supported: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/vpc_endpoint_service

export function DataAwsVpcEndpointService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpcEndpointService
      _type='aws_vpc_endpoint_service'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcEndpointService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsVpcEndpointService,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpcEndpointServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsVpcEndpointService,
    idFilter,
    baseNode,
    optional,
  )
