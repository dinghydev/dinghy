import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEcsService } from './AwsEcsService.tsx'

export const InputSchema = z.object({
  cluster_arn: resolvableValue(z.string()),
  service_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone_rebalancing: z.string().optional(),
  capacity_provider_strategy: z.set(z.object({
    base: z.number(),
    capacity_provider: z.string(),
    weight: z.number(),
  })).optional(),
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  deployment_configuration: z.object({
    alarms: z.object({
      alarm_names: z.string().array(),
      enable: z.boolean(),
      rollback: z.boolean(),
    }).array(),
    bake_time_in_minutes: z.string(),
    canary_configuration: z.object({
      canary_bake_time_in_minutes: z.string(),
      canary_percent: z.number(),
    }).array(),
    deployment_circuit_breaker: z.object({
      enable: z.boolean(),
      rollback: z.boolean(),
    }).array(),
    lifecycle_hook: z.set(z.object({
      hook_details: z.string(),
      hook_target_arn: z.string(),
      lifecycle_stages: z.string().array(),
      role_arn: z.string(),
    })),
    linear_configuration: z.object({
      step_bake_time_in_minutes: z.string(),
      step_percent: z.number(),
    }).array(),
    maximum_percent: z.number(),
    minimum_healthy_percent: z.number(),
    strategy: z.string(),
  }).array().optional(),
  deployment_controller: z.object({
    type: z.string(),
  }).array().optional(),
  deployments: z.object({
    created_at: z.string(),
    desired_count: z.number(),
    id: z.string(),
    pending_count: z.number(),
    running_count: z.number(),
    status: z.string(),
    task_definition: z.string(),
    updated_at: z.string(),
  }).array().optional(),
  desired_count: z.number().optional(),
  enable_ecs_managed_tags: z.boolean().optional(),
  enable_execute_command: z.boolean().optional(),
  events: z.object({
    created_at: z.string(),
    id: z.string(),
    message: z.string(),
  }).array().optional(),
  health_check_grace_period_seconds: z.number().optional(),
  iam_role: z.string().optional(),
  launch_type: z.string().optional(),
  load_balancer: z.set(z.object({
    advanced_configuration: z.object({
      alternate_target_group_arn: z.string(),
      production_listener_rule: z.string(),
      role_arn: z.string(),
      test_listener_rule: z.string(),
    }).array(),
    container_name: z.string(),
    container_port: z.number(),
    elb_name: z.string(),
    target_group_arn: z.string(),
  })).optional(),
  network_configuration: z.object({
    assign_public_ip: z.boolean(),
    security_groups: z.set(z.string()),
    subnets: z.set(z.string()),
  }).array().optional(),
  ordered_placement_strategy: z.object({
    field: z.string(),
    type: z.string(),
  }).array().optional(),
  pending_count: z.number().optional(),
  placement_constraints: z.set(z.object({
    expression: z.string(),
    type: z.string(),
  })).optional(),
  platform_family: z.string().optional(),
  platform_version: z.string().optional(),
  propagate_tags: z.string().optional(),
  running_count: z.number().optional(),
  scheduling_strategy: z.string().optional(),
  service_registries: z.object({
    container_name: z.string(),
    container_port: z.number(),
    port: z.number(),
    registry_arn: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  task_definition: z.string().optional(),
  task_sets: z.object({
    arn: z.string(),
    created_at: z.string(),
    id: z.string(),
    pending_count: z.number(),
    running_count: z.number(),
    stability_status: z.string(),
    status: z.string(),
    task_definition: z.string(),
    updated_at: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ecs_service

export function DataAwsEcsService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEcsService
      _type='aws_ecs_service'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEcsService = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsEcsService, idFilter, baseNode)

export const useDataAwsEcsServices = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsEcsService, idFilter, baseNode)
