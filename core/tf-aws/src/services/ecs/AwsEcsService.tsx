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
  name: resolvableValue(z.string()),
  alarms: resolvableValue(
    z.object({
      alarm_names: z.string().array(),
      enable: z.boolean(),
      rollback: z.boolean(),
    }).optional(),
  ),
  availability_zone_rebalancing: resolvableValue(z.string().optional()),
  capacity_provider_strategy: resolvableValue(
    z.object({
      base: z.number().optional(),
      capacity_provider: z.string(),
      weight: z.number().optional(),
    }).array().optional(),
  ),
  cluster: resolvableValue(z.string().optional()),
  deployment_circuit_breaker: resolvableValue(
    z.object({
      enable: z.boolean(),
      rollback: z.boolean(),
    }).optional(),
  ),
  deployment_configuration: resolvableValue(
    z.object({
      bake_time_in_minutes: z.string().optional(),
      strategy: z.string().optional(),
      canary_configuration: z.object({
        canary_bake_time_in_minutes: z.string().optional(),
        canary_percent: z.number().optional(),
      }).optional(),
      lifecycle_hook: z.object({
        hook_details: z.string().optional(),
        hook_target_arn: z.string(),
        lifecycle_stages: z.string().array(),
        role_arn: z.string(),
      }).array().optional(),
      linear_configuration: z.object({
        step_bake_time_in_minutes: z.string().optional(),
        step_percent: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  deployment_controller: resolvableValue(
    z.object({
      type: z.string().optional(),
    }).optional(),
  ),
  deployment_maximum_percent: resolvableValue(z.number().optional()),
  deployment_minimum_healthy_percent: resolvableValue(z.number().optional()),
  desired_count: resolvableValue(z.number().optional()),
  enable_ecs_managed_tags: resolvableValue(z.boolean().optional()),
  enable_execute_command: resolvableValue(z.boolean().optional()),
  force_delete: resolvableValue(z.boolean().optional()),
  force_new_deployment: resolvableValue(z.boolean().optional()),
  health_check_grace_period_seconds: resolvableValue(z.number().optional()),
  iam_role: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  launch_type: resolvableValue(z.string().optional()),
  load_balancer: resolvableValue(
    z.object({
      container_name: z.string(),
      container_port: z.number(),
      elb_name: z.string().optional(),
      target_group_arn: z.string().optional(),
      advanced_configuration: z.object({
        alternate_target_group_arn: z.string(),
        production_listener_rule: z.string(),
        role_arn: z.string(),
        test_listener_rule: z.string().optional(),
      }).optional(),
    }).array().optional(),
  ),
  network_configuration: resolvableValue(
    z.object({
      assign_public_ip: z.boolean().optional(),
      security_groups: z.string().array().optional(),
      subnets: z.string().array(),
    }).optional(),
  ),
  ordered_placement_strategy: resolvableValue(
    z.object({
      field: z.string().optional(),
      type: z.string(),
    }).array().optional(),
  ),
  placement_constraints: resolvableValue(
    z.object({
      expression: z.string().optional(),
      type: z.string(),
    }).array().optional(),
  ),
  platform_version: resolvableValue(z.string().optional()),
  propagate_tags: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scheduling_strategy: resolvableValue(z.string().optional()),
  service_connect_configuration: resolvableValue(
    z.object({
      enabled: z.boolean(),
      namespace: z.string().optional(),
      log_configuration: z.object({
        log_driver: z.string(),
        options: z.record(z.string(), z.string()).optional(),
        secret_option: z.object({
          name: z.string(),
          value_from: z.string(),
        }).array().optional(),
      }).optional(),
      service: z.object({
        discovery_name: z.string().optional(),
        ingress_port_override: z.number().optional(),
        port_name: z.string(),
        client_alias: z.object({
          dns_name: z.string().optional(),
          port: z.number(),
          test_traffic_rules: z.object({
            header: z.object({
              name: z.string(),
              value: z.object({
                exact: z.string(),
              }),
            }).optional(),
          }).array().optional(),
        }).optional(),
        timeout: z.object({
          idle_timeout_seconds: z.number().optional(),
          per_request_timeout_seconds: z.number().optional(),
        }).optional(),
        tls: z.object({
          kms_key: z.string().optional(),
          role_arn: z.string().optional(),
          issuer_cert_authority: z.object({
            aws_pca_authority_arn: z.string(),
          }),
        }).optional(),
      }).array().optional(),
    }).optional(),
  ),
  service_registries: resolvableValue(
    z.object({
      container_name: z.string().optional(),
      container_port: z.number().optional(),
      port: z.number().optional(),
      registry_arn: z.string(),
    }).optional(),
  ),
  sigint_rollback: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  task_definition: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
  volume_configuration: resolvableValue(
    z.object({
      name: z.string(),
      managed_ebs_volume: z.object({
        encrypted: z.boolean().optional(),
        file_system_type: z.string().optional(),
        iops: z.number().optional(),
        kms_key_id: z.string().optional(),
        role_arn: z.string(),
        size_in_gb: z.number().optional(),
        snapshot_id: z.string().optional(),
        throughput: z.number().optional(),
        volume_initialization_rate: z.number().optional(),
        volume_type: z.string().optional(),
        tag_specifications: z.object({
          propagate_tags: z.string().optional(),
          resource_type: z.string(),
          tags: z.record(z.string(), z.string()).optional(),
        }).array().optional(),
      }),
    }).optional(),
  ),
  vpc_lattice_configurations: resolvableValue(
    z.object({
      port_name: z.string(),
      role_arn: z.string(),
      target_group_arn: z.string(),
    }).array().optional(),
  ),
  wait_for_steady_state: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecs_service

export function AwsEcsService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_service'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEcsService, idFilter, baseNode, optional)

export const useAwsEcsServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEcsService, idFilter, baseNode, optional)
