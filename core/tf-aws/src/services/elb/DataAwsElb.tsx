import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElb } from './AwsElb.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elb

export const InputSchema = z.object({
  access_logs: resolvableValue(
    z.object({
      bucket: z.string(),
      bucket_prefix: z.string(),
      enabled: z.boolean(),
      interval: z.number(),
    }).array(),
  ),
  arn: resolvableValue(z.string()),
  availability_zones: resolvableValue(z.string().array()),
  connection_draining: resolvableValue(z.boolean()),
  connection_draining_timeout: resolvableValue(z.number()),
  cross_zone_load_balancing: resolvableValue(z.boolean()),
  desync_mitigation_mode: resolvableValue(z.string()),
  dns_name: resolvableValue(z.string()),
  health_check: resolvableValue(
    z.object({
      healthy_threshold: z.number(),
      interval: z.number(),
      target: z.string(),
      timeout: z.number(),
      unhealthy_threshold: z.number(),
    }).array(),
  ),
  idle_timeout: resolvableValue(z.number()),
  instances: resolvableValue(z.string().array()),
  internal: resolvableValue(z.boolean()),
  listener: resolvableValue(
    z.object({
      instance_port: z.number(),
      instance_protocol: z.string(),
      lb_port: z.number(),
      lb_protocol: z.string(),
      ssl_certificate_id: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  security_groups: resolvableValue(z.string().array()),
  source_security_group: resolvableValue(z.string()),
  source_security_group_id: resolvableValue(z.string()),
  subnets: resolvableValue(z.string().array()),
  zone_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsElb(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsElb
      _type='aws_elb'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElb = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsElb, node, id)

export const useDataAwsElbs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsElb, node, id)
