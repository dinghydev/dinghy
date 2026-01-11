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

export const InputSchema = z.object({
  arn_suffix: resolvableValue(z.string()),
  connection_termination: resolvableValue(z.boolean()),
  deregistration_delay: resolvableValue(z.string()),
  health_check: resolvableValue(
    z.object({
      enabled: z.boolean(),
      healthy_threshold: z.number(),
      interval: z.number(),
      matcher: z.string(),
      path: z.string(),
      port: z.string(),
      protocol: z.string(),
      timeout: z.number(),
      unhealthy_threshold: z.number(),
    }).array(),
  ),
  lambda_multi_value_headers_enabled: resolvableValue(z.boolean()),
  load_balancer_arns: resolvableValue(z.string().array()),
  load_balancing_algorithm_type: resolvableValue(z.string()),
  load_balancing_cross_zone_enabled: resolvableValue(z.string()),
  port: resolvableValue(z.number()),
  preserve_client_ip: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  protocol_version: resolvableValue(z.string()),
  proxy_protocol_v2: resolvableValue(z.boolean()),
  slow_start: resolvableValue(z.number()),
  stickiness: resolvableValue(
    z.object({
      cookie_duration: z.number(),
      cookie_name: z.string(),
      enabled: z.boolean(),
      type: z.string(),
    }).array(),
  ),
  target_control_port: resolvableValue(z.number()),
  target_type: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

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
