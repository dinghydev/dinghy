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
  attachment_type: resolvableValue(z.string()),
  endpoint_type: resolvableValue(z.string()),
  verified_access_group_id: resolvableValue(z.string()),
  verified_access_instance_id: resolvableValue(z.string()),
  application_domain: resolvableValue(z.string().optional()),
  cidr_options: resolvableValue(
    z.object({
      cidr: z.string(),
      protocol: z.string().optional(),
      subnet_ids: z.string().array().optional(),
      port_range: z.object({
        from_port: z.number(),
        to_port: z.number(),
      }).array(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  domain_certificate_arn: resolvableValue(z.string().optional()),
  endpoint_domain_prefix: resolvableValue(z.string().optional()),
  load_balancer_options: resolvableValue(
    z.object({
      load_balancer_arn: z.string().optional(),
      port: z.number().optional(),
      protocol: z.string().optional(),
      subnet_ids: z.string().array().optional(),
      port_range: z.object({
        from_port: z.number(),
        to_port: z.number(),
      }).array().optional(),
    }).optional(),
  ),
  network_interface_options: resolvableValue(
    z.object({
      network_interface_id: z.string().optional(),
      port: z.number().optional(),
      protocol: z.string().optional(),
      port_range: z.object({
        from_port: z.number(),
        to_port: z.number(),
      }).array().optional(),
    }).optional(),
  ),
  policy_document: resolvableValue(z.string().optional()),
  rds_options: resolvableValue(
    z.object({
      port: z.number().optional(),
      protocol: z.string().optional(),
      rds_db_cluster_arn: z.string().optional(),
      rds_db_instance_arn: z.string().optional(),
      rds_db_proxy_arn: z.string().optional(),
      rds_endpoint: z.string().optional(),
      subnet_ids: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  sse_specification: resolvableValue(
    z.object({
      customer_managed_key_enabled: z.boolean().optional(),
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  device_validation_domain: z.string().optional(),
  endpoint_domain: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedaccess_endpoint

export function AwsVerifiedaccessEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVerifiedaccessEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedaccessEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVerifiedaccessEndpoint,
    idFilter,
    baseNode,
    optional,
  )
