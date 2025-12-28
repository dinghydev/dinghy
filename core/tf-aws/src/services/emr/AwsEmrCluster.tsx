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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  cluster_state: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  release_label: resolvableValue(z.string()),
  service_role: resolvableValue(z.string()),
  additional_info: resolvableValue(z.string().optional()),
  applications: resolvableValue(z.string().array().optional()),
  auto_termination_policy: resolvableValue(
    z.object({
      idle_timeout: z.number().optional(),
    }).optional(),
  ),
  autoscaling_role: resolvableValue(z.string().optional()),
  bootstrap_action: resolvableValue(
    z.object({
      args: z.string().array().optional(),
      name: z.string(),
      path: z.string(),
    }).array().optional(),
  ),
  configurations: resolvableValue(z.string().optional()),
  configurations_json: resolvableValue(z.string().optional()),
  core_instance_fleet: resolvableValue(
    z.object({
      id: z.string(),
      name: z.string().optional(),
      provisioned_on_demand_capacity: z.number(),
      provisioned_spot_capacity: z.number(),
      target_on_demand_capacity: z.number().optional(),
      target_spot_capacity: z.number().optional(),
      instance_type_configs: z.object({
        bid_price: z.string().optional(),
        bid_price_as_percentage_of_on_demand_price: z.number().optional(),
        instance_type: z.string(),
        weighted_capacity: z.number().optional(),
        configurations: z.object({
          classification: z.string().optional(),
          properties: z.record(z.string(), z.string()).optional(),
        }).array().optional(),
        ebs_config: z.object({
          iops: z.number().optional(),
          size: z.number(),
          type: z.string(),
          volumes_per_instance: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
      launch_specifications: z.object({
        on_demand_specification: z.object({
          allocation_strategy: z.string(),
        }).array().optional(),
        spot_specification: z.object({
          allocation_strategy: z.string(),
          block_duration_minutes: z.number().optional(),
          timeout_action: z.string(),
          timeout_duration_minutes: z.number(),
        }).array().optional(),
      }).optional(),
    }).optional(),
  ),
  core_instance_group: resolvableValue(
    z.object({
      autoscaling_policy: z.string().optional(),
      bid_price: z.string().optional(),
      id: z.string(),
      instance_count: z.number().optional(),
      instance_type: z.string(),
      name: z.string().optional(),
      ebs_config: z.object({
        iops: z.number().optional(),
        size: z.number(),
        throughput: z.number().optional(),
        type: z.string(),
        volumes_per_instance: z.number().optional(),
      }).array().optional(),
    }).optional(),
  ),
  custom_ami_id: resolvableValue(z.string().optional()),
  ebs_root_volume_size: resolvableValue(z.number().optional()),
  ec2_attributes: resolvableValue(
    z.object({
      additional_master_security_groups: z.string().optional(),
      additional_slave_security_groups: z.string().optional(),
      emr_managed_master_security_group: z.string().optional(),
      emr_managed_slave_security_group: z.string().optional(),
      instance_profile: z.string(),
      key_name: z.string().optional(),
      service_access_security_group: z.string().optional(),
      subnet_id: z.string().optional(),
      subnet_ids: z.string().array().optional(),
    }).optional(),
  ),
  keep_job_flow_alive_when_no_steps: resolvableValue(z.boolean().optional()),
  kerberos_attributes: resolvableValue(
    z.object({
      ad_domain_join_password: z.string().optional(),
      ad_domain_join_user: z.string().optional(),
      cross_realm_trust_principal_password: z.string().optional(),
      kdc_admin_password: z.string(),
      realm: z.string(),
    }).optional(),
  ),
  list_steps_states: resolvableValue(z.string().array().optional()),
  log_encryption_kms_key_id: resolvableValue(z.string().optional()),
  log_uri: resolvableValue(z.string().optional()),
  master_instance_fleet: resolvableValue(
    z.object({
      id: z.string(),
      name: z.string().optional(),
      provisioned_on_demand_capacity: z.number(),
      provisioned_spot_capacity: z.number(),
      target_on_demand_capacity: z.number().optional(),
      target_spot_capacity: z.number().optional(),
      instance_type_configs: z.object({
        bid_price: z.string().optional(),
        bid_price_as_percentage_of_on_demand_price: z.number().optional(),
        instance_type: z.string(),
        weighted_capacity: z.number().optional(),
        configurations: z.object({
          classification: z.string().optional(),
          properties: z.record(z.string(), z.string()).optional(),
        }).array().optional(),
        ebs_config: z.object({
          iops: z.number().optional(),
          size: z.number(),
          type: z.string(),
          volumes_per_instance: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
      launch_specifications: z.object({
        on_demand_specification: z.object({
          allocation_strategy: z.string(),
        }).array().optional(),
        spot_specification: z.object({
          allocation_strategy: z.string(),
          block_duration_minutes: z.number().optional(),
          timeout_action: z.string(),
          timeout_duration_minutes: z.number(),
        }).array().optional(),
      }).optional(),
    }).optional(),
  ),
  master_instance_group: resolvableValue(
    z.object({
      bid_price: z.string().optional(),
      id: z.string(),
      instance_count: z.number().optional(),
      instance_type: z.string(),
      name: z.string().optional(),
      ebs_config: z.object({
        iops: z.number().optional(),
        size: z.number(),
        throughput: z.number().optional(),
        type: z.string(),
        volumes_per_instance: z.number().optional(),
      }).array().optional(),
    }).optional(),
  ),
  os_release_label: resolvableValue(z.string().optional()),
  placement_group_config: resolvableValue(
    z.object({
      instance_role: z.string(),
      placement_strategy: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scale_down_behavior: resolvableValue(z.string().optional()),
  security_configuration: resolvableValue(z.string().optional()),
  step: resolvableValue(
    z.object({
      action_on_failure: z.string(),
      hadoop_jar_step: z.object({
        args: z.string().array(),
        jar: z.string(),
        main_class: z.string(),
        properties: z.record(z.string(), z.string()),
      }).array(),
      name: z.string(),
    }).array().optional(),
  ),
  step_concurrency_level: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  termination_protection: resolvableValue(z.boolean().optional()),
  unhealthy_node_replacement: resolvableValue(z.boolean().optional()),
  visible_to_all_users: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  applications: z.set(z.string()).optional(),
  bootstrap_action: z.object({
    args: z.string().array().optional(),
    name: z.string(),
    path: z.string(),
  }).array().optional().optional(),
  configurations: z.string().optional(),
  ec2_attributes: z.object({
    additional_master_security_groups: z.string().optional(),
    additional_slave_security_groups: z.string().optional(),
    emr_managed_master_security_group: z.string().optional(),
    emr_managed_slave_security_group: z.string().optional(),
    instance_profile: z.string(),
    key_name: z.string().optional(),
    service_access_security_group: z.string().optional(),
    subnet_id: z.string().optional(),
    subnet_ids: z.set(z.string()).optional(),
  }).optional().optional(),
  id: z.string().optional(),
  log_uri: z.string().optional(),
  master_public_dns: z.string().optional(),
  name: z.string().optional(),
  release_label: z.string().optional(),
  service_role: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emr_cluster

export function AwsEmrCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEmrCluster, idFilter, baseNode, optional)

export const useAwsEmrClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEmrCluster, idFilter, baseNode, optional)
