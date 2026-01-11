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
  listener: resolvableValue(
    z.object({
      instance_port: z.number(),
      instance_protocol: z.string(),
      lb_port: z.number(),
      lb_protocol: z.string(),
      ssl_certificate_id: z.string().optional(),
    }).array(),
  ),
  access_logs: resolvableValue(
    z.object({
      bucket: z.string(),
      bucket_prefix: z.string().optional(),
      enabled: z.boolean().optional(),
      interval: z.number().optional(),
    }).optional(),
  ),
  availability_zones: resolvableValue(z.string().array().optional()),
  connection_draining: resolvableValue(z.boolean().optional()),
  connection_draining_timeout: resolvableValue(z.number().optional()),
  cross_zone_load_balancing: resolvableValue(z.boolean().optional()),
  desync_mitigation_mode: resolvableValue(z.string().optional()),
  health_check: resolvableValue(
    z.object({
      healthy_threshold: z.number(),
      interval: z.number(),
      target: z.string(),
      timeout: z.number(),
      unhealthy_threshold: z.number(),
    }).optional(),
  ),
  idle_timeout: resolvableValue(z.number().optional()),
  instances: resolvableValue(z.string().array().optional()),
  internal: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_groups: resolvableValue(z.string().array().optional()),
  subnets: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  instances: z.set(z.string()).optional(),
  name: z.string().optional(),
  source_security_group: z.string().optional(),
  source_security_group_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  zone_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elb

export function AwsElb(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elb'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElb = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsElb, idFilter, baseNode, optional)

export const useAwsElbs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsElb, idFilter, baseNode, optional)
