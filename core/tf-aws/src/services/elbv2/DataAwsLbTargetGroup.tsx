import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLbTargetGroup } from './AwsLbTargetGroup.tsx'

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  load_balancing_anomaly_mitigation: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn_suffix: z.string().optional(),
  connection_termination: z.boolean().optional(),
  deregistration_delay: z.string().optional(),
  health_check: z.object({
    enabled: z.boolean(),
    healthy_threshold: z.number(),
    interval: z.number(),
    matcher: z.string(),
    path: z.string(),
    port: z.string(),
    protocol: z.string(),
    timeout: z.number(),
    unhealthy_threshold: z.number(),
  }).array().optional(),
  lambda_multi_value_headers_enabled: z.boolean().optional(),
  load_balancer_arns: z.set(z.string()).optional(),
  load_balancing_algorithm_type: z.string().optional(),
  load_balancing_cross_zone_enabled: z.string().optional(),
  port: z.number().optional(),
  preserve_client_ip: z.string().optional(),
  protocol: z.string().optional(),
  protocol_version: z.string().optional(),
  proxy_protocol_v2: z.boolean().optional(),
  slow_start: z.number().optional(),
  stickiness: z.object({
    cookie_duration: z.number(),
    cookie_name: z.string(),
    enabled: z.boolean(),
    type: z.string(),
  }).array().optional(),
  target_control_port: z.number().optional(),
  target_type: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/lb_target_group

export function DataAwsLbTargetGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLbTargetGroup
      _type='aws_lb_target_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLbTargetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsLbTargetGroup, idFilter, baseNode, optional)

export const useDataAwsLbTargetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsLbTargetGroup, idFilter, baseNode, optional)
