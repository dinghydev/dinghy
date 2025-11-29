import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecs_capacity_provider

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  auto_scaling_group_provider: resolvableValue(
    z.object({
      auto_scaling_group_arn: z.string(),
      managed_draining: z.string().optional(),
      managed_termination_protection: z.string().optional(),
    }).optional(),
  ),
  cluster: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  managed_instances_provider: resolvableValue(
    z.object({
      infrastructure_role_arn: z.string(),
      propagate_tags: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
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

export function AwsEcsCapacityProvider(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_capacity_provider'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsEcsCapacityProvider = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEcsCapacityProvider, node, id)

export const useAwsEcsCapacityProviders = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcsCapacityProvider, node, id)
