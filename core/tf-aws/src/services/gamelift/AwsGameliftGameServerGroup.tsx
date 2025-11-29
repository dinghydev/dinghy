import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/gamelift_game_server_group

export const InputSchema = z.object({
  game_server_group_name: resolvableValue(z.string()),
  max_size: resolvableValue(z.number()),
  min_size: resolvableValue(z.number()),
  role_arn: resolvableValue(z.string()),
  auto_scaling_policy: resolvableValue(
    z.object({
      estimated_instance_warmup: z.number().optional(),
    }).optional(),
  ),
  balancing_strategy: resolvableValue(z.string().optional()),
  game_server_protection_policy: resolvableValue(z.string().optional()),
  instance_definition: resolvableValue(
    z.object({
      instance_type: z.string(),
      weighted_capacity: z.string().optional(),
    }).array().optional(),
  ),
  launch_template: resolvableValue(z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    version: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  vpc_subnets: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  auto_scaling_group_arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGameliftGameServerGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_gamelift_game_server_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGameliftGameServerGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGameliftGameServerGroup, node, id)

export const useAwsGameliftGameServerGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGameliftGameServerGroup, node, id)
