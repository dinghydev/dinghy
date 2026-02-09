import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElb } from './AwsElb.tsx'

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  access_logs: z.object({
    bucket: z.string(),
    bucket_prefix: z.string(),
    enabled: z.boolean(),
    interval: z.number(),
  }).array().optional(),
  arn: z.string().optional(),
  availability_zones: z.set(z.string()).optional(),
  connection_draining: z.boolean().optional(),
  connection_draining_timeout: z.number().optional(),
  cross_zone_load_balancing: z.boolean().optional(),
  desync_mitigation_mode: z.string().optional(),
  dns_name: z.string().optional(),
  health_check: z.object({
    healthy_threshold: z.number(),
    interval: z.number(),
    target: z.string(),
    timeout: z.number(),
    unhealthy_threshold: z.number(),
  }).array().optional(),
  idle_timeout: z.number().optional(),
  instances: z.set(z.string()).optional(),
  internal: z.boolean().optional(),
  listener: z.set(z.object({
    instance_port: z.number(),
    instance_protocol: z.string(),
    lb_port: z.number(),
    lb_protocol: z.string(),
    ssl_certificate_id: z.string(),
  })).optional(),
  security_groups: z.set(z.string()).optional(),
  source_security_group: z.string().optional(),
  source_security_group_id: z.string().optional(),
  subnets: z.set(z.string()).optional(),
  zone_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/elb

export function DataAwsElb(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsElb = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsElb, idFilter, baseNode, optional)

export const useDataAwsElbs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsElb, idFilter, baseNode, optional)
