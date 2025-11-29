import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcsTaskDefinition } from './AwsEcsTaskDefinition.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecs_task_definition

export const InputSchema = z.object({
  task_definition: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  arn_without_revision: z.string().optional(),
  container_definitions: z.string().optional(),
  cpu: z.string().optional(),
  enable_fault_injection: z.boolean().optional(),
  ephemeral_storage: z.object({
    size_in_gib: z.number(),
  }).array().optional(),
  execution_role_arn: z.string().optional(),
  family: z.string().optional(),
  ipc_mode: z.string().optional(),
  memory: z.string().optional(),
  network_mode: z.string().optional(),
  pid_mode: z.string().optional(),
  placement_constraints: z.object({
    expression: z.string(),
    type: z.string(),
  }).array().optional(),
  proxy_configuration: z.object({
    container_name: z.string(),
    properties: z.record(z.string(), z.string()),
    type: z.string(),
  }).array().optional(),
  requires_compatibilities: z.string().array().optional(),
  revision: z.number().optional(),
  runtime_platform: z.object({
    cpu_architecture: z.string(),
    operating_system_family: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  task_role_arn: z.string().optional(),
  volume: z.object({
    configure_at_launch: z.boolean(),
    docker_volume_configuration: z.object({
      autoprovision: z.boolean(),
      driver: z.string(),
      driver_opts: z.record(z.string(), z.string()),
      labels: z.record(z.string(), z.string()),
      scope: z.string(),
    }).array(),
    efs_volume_configuration: z.object({
      authorization_config: z.object({
        access_point_id: z.string(),
        iam: z.string(),
      }).array(),
      file_system_id: z.string(),
      root_directory: z.string(),
      transit_encryption: z.string(),
      transit_encryption_port: z.number(),
    }).array(),
    fsx_windows_file_server_volume_configuration: z.object({
      authorization_config: z.object({
        credentials_parameter: z.string(),
        domain: z.string(),
      }).array(),
      file_system_id: z.string(),
      root_directory: z.string(),
    }).array(),
    host_path: z.string(),
    name: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEcsTaskDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEcsTaskDefinition
      _type='aws_ecs_task_definition'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcsTaskDefinition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEcsTaskDefinition, node, id)

export const useDataAwsEcsTaskDefinitions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEcsTaskDefinition, node, id)
