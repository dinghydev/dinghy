import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codedeploy_deployment_group

export const InputSchema = z.object({
  app_name: resolvableValue(z.string()),
  deployment_group_name: resolvableValue(z.string()),
  service_role_arn: resolvableValue(z.string()),
  alarm_configuration: resolvableValue(
    z.object({
      alarms: z.string().array().optional(),
      enabled: z.boolean().optional(),
      ignore_poll_alarm_failure: z.boolean().optional(),
    }).optional(),
  ),
  auto_rollback_configuration: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      events: z.string().array().optional(),
    }).optional(),
  ),
  autoscaling_groups: resolvableValue(z.string().array().optional()),
  blue_green_deployment_config: resolvableValue(
    z.object({
      deployment_ready_option: z.object({
        action_on_timeout: z.string().optional(),
        wait_time_in_minutes: z.number().optional(),
      }).optional(),
      green_fleet_provisioning_option: z.object({
        action: z.string().optional(),
      }).optional(),
      terminate_blue_instances_on_deployment_success: z.object({
        action: z.string().optional(),
        termination_wait_time_in_minutes: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  deployment_config_name: resolvableValue(z.string().optional()),
  deployment_style: resolvableValue(
    z.object({
      deployment_option: z.string().optional(),
      deployment_type: z.string().optional(),
    }).optional(),
  ),
  ec2_tag_filter: resolvableValue(
    z.object({
      key: z.string().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  ec2_tag_set: resolvableValue(
    z.object({
      ec2_tag_filter: z.object({
        key: z.string().optional(),
        type: z.string().optional(),
        value: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  ecs_service: resolvableValue(
    z.object({
      cluster_name: z.string(),
      service_name: z.string(),
    }).optional(),
  ),
  load_balancer_info: resolvableValue(
    z.object({
      elb_info: z.object({
        name: z.string().optional(),
      }).array().optional(),
      target_group_info: z.object({
        name: z.string().optional(),
      }).array().optional(),
      target_group_pair_info: z.object({
        prod_traffic_route: z.object({
          listener_arns: z.string().array(),
        }),
        target_group: z.object({
          name: z.string(),
        }),
        test_traffic_route: z.object({
          listener_arns: z.string().array(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  on_premises_instance_tag_filter: resolvableValue(
    z.object({
      key: z.string().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
    }).array().optional(),
  ),
  outdated_instances_strategy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  termination_hook_enabled: resolvableValue(z.boolean().optional()),
  trigger_configuration: resolvableValue(
    z.object({
      trigger_events: z.string().array(),
      trigger_name: z.string(),
      trigger_target_arn: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  compute_platform: z.string().optional(),
  deployment_group_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodedeployDeploymentGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codedeploy_deployment_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodedeployDeploymentGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodedeployDeploymentGroup, node, id)

export const useAwsCodedeployDeploymentGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodedeployDeploymentGroup, node, id)
