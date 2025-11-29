import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecs_task_execution

export const InputSchema = z.object({
  cluster: resolvableValue(z.string()),
  task_definition: resolvableValue(z.string()),
  capacity_provider_strategy: resolvableValue(
    z.object({
      base: z.number().optional(),
      capacity_provider: z.string(),
      weight: z.number().optional(),
    }).array().optional(),
  ),
  client_token: resolvableValue(z.string().optional()),
  desired_count: resolvableValue(z.number().optional()),
  enable_ecs_managed_tags: resolvableValue(z.boolean().optional()),
  enable_execute_command: resolvableValue(z.boolean().optional()),
  group: resolvableValue(z.string().optional()),
  launch_type: resolvableValue(z.string().optional()),
  network_configuration: resolvableValue(
    z.object({
      assign_public_ip: z.boolean().optional(),
      security_groups: z.string().array().optional(),
      subnets: z.string().array(),
    }).optional(),
  ),
  overrides: resolvableValue(
    z.object({
      cpu: z.string().optional(),
      execution_role_arn: z.string().optional(),
      memory: z.string().optional(),
      task_role_arn: z.string().optional(),
    }).optional(),
  ),
  placement_constraints: resolvableValue(
    z.object({
      expression: z.string().optional(),
      type: z.string(),
    }).array().optional(),
  ),
  placement_strategy: resolvableValue(
    z.object({
      field: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  platform_version: resolvableValue(z.string().optional()),
  propagate_tags: resolvableValue(z.string().optional()),
  reference_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  started_by: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  task_arns: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcsTaskExecution(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_task_execution'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEcsTaskExecution = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEcsTaskExecution, node, id)

export const useDataAwsEcsTaskExecutions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEcsTaskExecution, node, id)
