import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/gamelift_fleet

export const InputSchema = z.object({
  ec2_instance_type: resolvableValue(z.string()),
  log_paths: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  build_id: resolvableValue(z.string().optional()),
  certificate_configuration: resolvableValue(
    z.object({
      certificate_type: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  ec2_inbound_permission: resolvableValue(
    z.object({
      from_port: z.number(),
      ip_range: z.string(),
      protocol: z.string(),
      to_port: z.number(),
    }).array().optional(),
  ),
  fleet_type: resolvableValue(z.string().optional()),
  instance_role_arn: resolvableValue(z.string().optional()),
  metric_groups: resolvableValue(z.string().array().optional()),
  new_game_session_protection_policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_creation_limit_policy: resolvableValue(
    z.object({
      new_game_sessions_per_creator: z.number().optional(),
      policy_period_in_minutes: z.number().optional(),
    }).optional(),
  ),
  runtime_configuration: resolvableValue(
    z.object({
      game_session_activation_timeout_seconds: z.number().optional(),
      max_concurrent_game_session_activations: z.number().optional(),
    }).optional(),
  ),
  script_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  build_arn: z.string().optional(),
  id: z.string().optional(),
  operating_system: z.string().optional(),
  script_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGameliftFleet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_gamelift_fleet'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGameliftFleet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGameliftFleet, node, id)

export const useAwsGameliftFleets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGameliftFleet, node, id)
