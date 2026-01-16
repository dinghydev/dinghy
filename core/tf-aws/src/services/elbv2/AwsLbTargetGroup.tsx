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
  connection_termination: resolvableValue(z.boolean().optional()),
  deregistration_delay: resolvableValue(z.string().optional()),
  health_check: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      healthy_threshold: z.number().optional(),
      interval: z.number().optional(),
      matcher: z.string().optional(),
      path: z.string().optional(),
      port: z.string().optional(),
      protocol: z.string().optional(),
      timeout: z.number().optional(),
      unhealthy_threshold: z.number().optional(),
    }).optional(),
  ),
  ip_address_type: resolvableValue(z.string().optional()),
  lambda_multi_value_headers_enabled: resolvableValue(z.boolean().optional()),
  load_balancing_algorithm_type: resolvableValue(z.string().optional()),
  load_balancing_anomaly_mitigation: resolvableValue(z.string().optional()),
  load_balancing_cross_zone_enabled: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  preserve_client_ip: resolvableValue(z.string().optional()),
  protocol: resolvableValue(z.string().optional()),
  protocol_version: resolvableValue(z.string().optional()),
  proxy_protocol_v2: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  slow_start: resolvableValue(z.number().optional()),
  stickiness: resolvableValue(
    z.object({
      cookie_duration: z.number().optional(),
      cookie_name: z.string().optional(),
      enabled: z.boolean().optional(),
      type: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_control_port: resolvableValue(z.number().optional()),
  target_failover: resolvableValue(
    z.object({
      on_deregistration: z.string(),
      on_unhealthy: z.string(),
    }).array().optional(),
  ),
  target_group_health: resolvableValue(
    z.object({
      dns_failover: z.object({
        minimum_healthy_targets_count: z.string().optional(),
        minimum_healthy_targets_percentage: z.string().optional(),
      }).optional(),
      unhealthy_state_routing: z.object({
        minimum_healthy_targets_count: z.number().optional(),
        minimum_healthy_targets_percentage: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  target_health_state: resolvableValue(
    z.object({
      enable_unhealthy_connection_termination: z.boolean(),
      unhealthy_draining_interval: z.number().optional(),
    }).array().optional(),
  ),
  target_type: resolvableValue(z.string().optional()),
  vpc_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  arn_suffix: z.string().optional(),
  id: z.string().optional(),
  load_balancer_arns: z.set(z.string()).optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lb_target_group

export function AwsLbTargetGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_target_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsLbTargetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsLbTargetGroup, idFilter, baseNode, optional)

export const useAwsLbTargetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsLbTargetGroup, idFilter, baseNode, optional)
