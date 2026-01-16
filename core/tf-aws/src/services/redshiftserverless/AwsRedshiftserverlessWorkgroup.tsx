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

export const InputSchema = TfMetaSchema.extend({
  namespace_name: resolvableValue(z.string()),
  workgroup_name: resolvableValue(z.string()),
  base_capacity: resolvableValue(z.number().optional()),
  config_parameter: resolvableValue(
    z.object({
      parameter_key: z.string(),
      parameter_value: z.string(),
    }).array().optional(),
  ),
  enhanced_vpc_routing: resolvableValue(z.boolean().optional()),
  max_capacity: resolvableValue(z.number().optional()),
  port: resolvableValue(z.number().optional()),
  price_performance_target: resolvableValue(
    z.object({
      enabled: z.boolean(),
      level: z.number().optional(),
    }).optional(),
  ),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  track_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.object({
    address: z.string(),
    port: z.number(),
    vpc_endpoint: z.object({
      network_interface: z.object({
        availability_zone: z.string(),
        network_interface_id: z.string(),
        private_ip_address: z.string(),
        subnet_id: z.string(),
      }).array(),
      vpc_endpoint_id: z.string(),
      vpc_id: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  workgroup_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/redshiftserverless_workgroup

export function AwsRedshiftserverlessWorkgroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_workgroup'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessWorkgroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRedshiftserverlessWorkgroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftserverlessWorkgroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRedshiftserverlessWorkgroup,
    idFilter,
    baseNode,
    optional,
  )
