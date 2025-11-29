import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elb

export const InputSchema = z.object({
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
  internal: resolvableValue(z.boolean().optional()),
  listener: resolvableValue(
    z.object({
      instance_port: z.number(),
      instance_protocol: z.string(),
      lb_port: z.number(),
      lb_protocol: z.string(),
      ssl_certificate_id: z.string().optional(),
    }).array(),
  ),
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
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dns_name: z.string().optional(),
  id: z.string().optional(),
  instances: z.string().array().optional(),
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

export function AwsElb(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsElb = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsElb, node, id)

export const useAwsElbs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsElb, node, id)
