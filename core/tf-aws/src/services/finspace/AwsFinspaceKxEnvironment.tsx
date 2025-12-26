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

export const InputSchema = z.object({
  kms_key_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  custom_dns_configuration: resolvableValue(
    z.object({
      custom_dns_server_ip: z.string(),
      custom_dns_server_name: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_configuration: resolvableValue(
    z.object({
      routable_cidr_space: z.string(),
      transit_gateway_id: z.string(),
      attachment_network_acl_configuration: z.object({
        cidr_block: z.string(),
        protocol: z.string(),
        rule_action: z.string(),
        rule_number: z.number(),
        icmp_type_code: z.object({
          code: z.number(),
          type: z.number(),
        }).optional(),
        port_range: z.object({
          from: z.number(),
          to: z.number(),
        }).optional(),
      }).array().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zones: z.string().array().optional(),
  created_timestamp: z.string().optional(),
  id: z.string().optional(),
  infrastructure_account_id: z.string().optional(),
  last_modified_timestamp: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/finspace_kx_environment

export function AwsFinspaceKxEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_finspace_kx_environment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFinspaceKxEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsFinspaceKxEnvironment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFinspaceKxEnvironments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFinspaceKxEnvironment,
    idFilter,
    baseNode,
    optional,
  )
