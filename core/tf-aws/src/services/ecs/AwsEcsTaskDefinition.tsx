import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecs_task_definition

export const InputSchema = z.object({
  container_definitions: resolvableValue(z.string()),
  family: resolvableValue(z.string()),
  cpu: resolvableValue(z.string().optional()),
  enable_fault_injection: resolvableValue(z.boolean().optional()),
  ephemeral_storage: resolvableValue(
    z.object({
      size_in_gib: z.number(),
    }).optional(),
  ),
  execution_role_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  ipc_mode: resolvableValue(z.string().optional()),
  memory: resolvableValue(z.string().optional()),
  network_mode: resolvableValue(z.string().optional()),
  pid_mode: resolvableValue(z.string().optional()),
  placement_constraints: resolvableValue(
    z.object({
      expression: z.string().optional(),
      type: z.string(),
    }).array().optional(),
  ),
  proxy_configuration: resolvableValue(
    z.object({
      container_name: z.string(),
      properties: z.record(z.string(), z.string()).optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  requires_compatibilities: resolvableValue(z.string().array().optional()),
  runtime_platform: resolvableValue(
    z.object({
      cpu_architecture: z.string().optional(),
      operating_system_family: z.string().optional(),
    }).optional(),
  ),
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  task_role_arn: resolvableValue(z.string().optional()),
  track_latest: resolvableValue(z.boolean().optional()),
  volume: resolvableValue(
    z.object({
      configure_at_launch: z.boolean().optional(),
      host_path: z.string().optional(),
      name: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  arn_without_revision: z.string().optional(),
  revision: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEcsTaskDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_task_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsTaskDefinition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEcsTaskDefinition, node, id)

export const useAwsEcsTaskDefinitions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcsTaskDefinition, node, id)
