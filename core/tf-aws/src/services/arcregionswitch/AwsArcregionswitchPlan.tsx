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

export const AwsArcregionswitchPlanInputSchema = TfMetaSchema.extend({
  execution_role: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  recovery_approach: resolvableValue(z.string()),
  regions: resolvableValue(z.string().array()),
  associated_alarms: resolvableValue(
    z.object({
      alarm_type: z.string(),
      cross_account_role: z.string().optional(),
      external_id: z.string().optional(),
      map_block_key: z.string(),
      resource_identifier: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  primary_region: resolvableValue(z.string().optional()),
  recovery_time_objective_minutes: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  triggers: resolvableValue(
    z.object({
      action: z.string(),
      description: z.string().optional(),
      min_delay_minutes_between_executions: z.number(),
      target_region: z.string(),
      conditions: z.object({
        associated_alarm_name: z.string(),
        condition: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  workflow: resolvableValue(
    z.object({
      workflow_description: z.string().optional(),
      workflow_target_action: z.string(),
      workflow_target_region: z.string().optional(),
      step: z.object({
        description: z.string().optional(),
        execution_block_type: z.string(),
        name: z.string(),
        arc_routing_control_config: z.object({
          cross_account_role: z.string().optional(),
          external_id: z.string().optional(),
          timeout_minutes: z.number().optional(),
          region_and_routing_controls: z.object({
            region: z.string(),
            routing_control: z.object({
              routing_control_arn: z.string(),
              state: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        custom_action_lambda_config: z.object({
          region_to_run: z.string(),
          retry_interval_minutes: z.number(),
          timeout_minutes: z.number().optional(),
          lambda: z.object({
            arn: z.string(),
            cross_account_role: z.string().optional(),
            external_id: z.string().optional(),
          }).array().optional(),
          ungraceful: z.object({
            behavior: z.string(),
          }).array().optional(),
        }).array().optional(),
        document_db_config: z.object({
          behavior: z.string(),
          cross_account_role: z.string().optional(),
          database_cluster_arns: z.string().array(),
          external_id: z.string().optional(),
          global_cluster_identifier: z.string(),
          timeout_minutes: z.number().optional(),
          ungraceful: z.object({
            ungraceful: z.string(),
          }).array().optional(),
        }).array().optional(),
        ec2_asg_capacity_increase_config: z.object({
          capacity_monitoring_approach: z.string(),
          target_percent: z.number().optional(),
          timeout_minutes: z.number().optional(),
          asg: z.object({
            arn: z.string(),
            cross_account_role: z.string().optional(),
            external_id: z.string().optional(),
          }).array().optional(),
          ungraceful: z.object({
            minimum_success_percentage: z.number(),
          }).array().optional(),
        }).array().optional(),
        ecs_capacity_increase_config: z.object({
          capacity_monitoring_approach: z.string(),
          target_percent: z.number().optional(),
          timeout_minutes: z.number().optional(),
          service: z.object({
            cluster_arn: z.string(),
            cross_account_role: z.string().optional(),
            external_id: z.string().optional(),
            service_arn: z.string(),
          }).array().optional(),
          ungraceful: z.object({
            minimum_success_percentage: z.number(),
          }).array().optional(),
        }).array().optional(),
        eks_resource_scaling_config: z.object({
          capacity_monitoring_approach: z.string(),
          target_percent: z.number(),
          timeout_minutes: z.number().optional(),
          eks_clusters: z.object({
            cluster_arn: z.string(),
            cross_account_role: z.string().optional(),
            external_id: z.string().optional(),
          }).array().optional(),
          kubernetes_resource_type: z.object({
            api_version: z.string(),
            kind: z.string(),
          }).array().optional(),
          scaling_resources: z.object({
            namespace: z.string(),
            resources: z.object({
              hpa_name: z.string().optional(),
              name: z.string(),
              namespace: z.string(),
              resource_name: z.string(),
            }).array().optional(),
          }).array().optional(),
          ungraceful: z.object({
            minimum_success_percentage: z.number(),
          }).array().optional(),
        }).array().optional(),
        execution_approval_config: z.object({
          approval_role: z.string(),
          timeout_minutes: z.number().optional(),
        }).array().optional(),
        global_aurora_config: z.object({
          behavior: z.string(),
          cross_account_role: z.string().optional(),
          database_cluster_arns: z.string().array(),
          external_id: z.string().optional(),
          global_cluster_identifier: z.string(),
          timeout_minutes: z.number().optional(),
          ungraceful: z.object({
            ungraceful: z.string(),
          }).array().optional(),
        }).array().optional(),
        parallel_config: z.object({
          step: z.object({
            description: z.string().optional(),
            execution_block_type: z.string(),
            name: z.string(),
            arc_routing_control_config: z.object({
              cross_account_role: z.string().optional(),
              external_id: z.string().optional(),
              timeout_minutes: z.number().optional(),
              region_and_routing_controls: z.object({
                region: z.string(),
                routing_control: z.object({
                  routing_control_arn: z.string(),
                  state: z.string(),
                }).array().optional(),
              }).array().optional(),
            }).array().optional(),
            custom_action_lambda_config: z.object({
              region_to_run: z.string(),
              retry_interval_minutes: z.number(),
              timeout_minutes: z.number().optional(),
              lambda: z.object({
                arn: z.string(),
                cross_account_role: z.string().optional(),
                external_id: z.string().optional(),
              }).array().optional(),
              ungraceful: z.object({
                behavior: z.string(),
              }).array().optional(),
            }).array().optional(),
            document_db_config: z.object({
              behavior: z.string(),
              cross_account_role: z.string().optional(),
              database_cluster_arns: z.string().array(),
              external_id: z.string().optional(),
              global_cluster_identifier: z.string(),
              timeout_minutes: z.number().optional(),
              ungraceful: z.object({
                ungraceful: z.string(),
              }).array().optional(),
            }).array().optional(),
            ec2_asg_capacity_increase_config: z.object({
              capacity_monitoring_approach: z.string(),
              target_percent: z.number().optional(),
              timeout_minutes: z.number().optional(),
              asg: z.object({
                arn: z.string(),
                cross_account_role: z.string().optional(),
                external_id: z.string().optional(),
              }).array().optional(),
              ungraceful: z.object({
                minimum_success_percentage: z.number(),
              }).array().optional(),
            }).array().optional(),
            ecs_capacity_increase_config: z.object({
              capacity_monitoring_approach: z.string(),
              target_percent: z.number().optional(),
              timeout_minutes: z.number().optional(),
              service: z.object({
                cluster_arn: z.string(),
                cross_account_role: z.string().optional(),
                external_id: z.string().optional(),
                service_arn: z.string(),
              }).array().optional(),
              ungraceful: z.object({
                minimum_success_percentage: z.number(),
              }).array().optional(),
            }).array().optional(),
            eks_resource_scaling_config: z.object({
              capacity_monitoring_approach: z.string(),
              target_percent: z.number(),
              timeout_minutes: z.number().optional(),
              eks_clusters: z.object({
                cluster_arn: z.string(),
                cross_account_role: z.string().optional(),
                external_id: z.string().optional(),
              }).array().optional(),
              kubernetes_resource_type: z.object({
                api_version: z.string(),
                kind: z.string(),
              }).array().optional(),
              scaling_resources: z.object({
                namespace: z.string(),
                resources: z.object({
                  hpa_name: z.string().optional(),
                  name: z.string(),
                  namespace: z.string(),
                  resource_name: z.string(),
                }).array().optional(),
              }).array().optional(),
              ungraceful: z.object({
                minimum_success_percentage: z.number(),
              }).array().optional(),
            }).array().optional(),
            execution_approval_config: z.object({
              approval_role: z.string(),
              timeout_minutes: z.number().optional(),
            }).array().optional(),
            global_aurora_config: z.object({
              behavior: z.string(),
              cross_account_role: z.string().optional(),
              database_cluster_arns: z.string().array(),
              external_id: z.string().optional(),
              global_cluster_identifier: z.string(),
              timeout_minutes: z.number().optional(),
              ungraceful: z.object({
                ungraceful: z.string(),
              }).array().optional(),
            }).array().optional(),
            region_switch_plan_config: z.object({
              arn: z.string(),
              cross_account_role: z.string().optional(),
              external_id: z.string().optional(),
            }).array().optional(),
            route53_health_check_config: z.object({
              cross_account_role: z.string().optional(),
              external_id: z.string().optional(),
              hosted_zone_id: z.string(),
              record_name: z.string(),
              timeout_minutes: z.number().optional(),
              record_set: z.object({
                record_set_identifier: z.string(),
                region: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        region_switch_plan_config: z.object({
          arn: z.string(),
          cross_account_role: z.string().optional(),
          external_id: z.string().optional(),
        }).array().optional(),
        route53_health_check_config: z.object({
          cross_account_role: z.string().optional(),
          external_id: z.string().optional(),
          hosted_zone_id: z.string(),
          record_name: z.string(),
          timeout_minutes: z.number().optional(),
          record_set: z.object({
            record_set_identifier: z.string(),
            region: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const AwsArcregionswitchPlanOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsArcregionswitchPlanImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsArcregionswitchPlanInputProps =
  & z.input<typeof AwsArcregionswitchPlanInputSchema>
  & z.input<typeof AwsArcregionswitchPlanImportSchema>
  & NodeProps

export type AwsArcregionswitchPlanOutputProps =
  & z.output<typeof AwsArcregionswitchPlanOutputSchema>
  & z.output<typeof AwsArcregionswitchPlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/arcregionswitch_plan

export function AwsArcregionswitchPlan(
  props: Partial<AwsArcregionswitchPlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_arcregionswitch_plan'
      _category='resource'
      _title={_title}
      _inputSchema={AwsArcregionswitchPlanInputSchema}
      _outputSchema={AwsArcregionswitchPlanOutputSchema}
      _importSchema={AwsArcregionswitchPlanImportSchema}
      {...props}
    />
  )
}

export const useAwsArcregionswitchPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsArcregionswitchPlanOutputProps>(
    AwsArcregionswitchPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsArcregionswitchPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsArcregionswitchPlanOutputProps>(
    AwsArcregionswitchPlan,
    idFilter,
    baseNode,
    optional,
  )
