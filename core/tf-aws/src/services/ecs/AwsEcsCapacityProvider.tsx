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
  name: resolvableValue(z.string()),
  auto_scaling_group_provider: resolvableValue(
    z.object({
      auto_scaling_group_arn: z.string(),
      managed_draining: z.string().optional(),
      managed_termination_protection: z.string().optional(),
      managed_scaling: z.object({
        instance_warmup_period: z.number().optional(),
        maximum_scaling_step_size: z.number().optional(),
        minimum_scaling_step_size: z.number().optional(),
        status: z.string().optional(),
        target_capacity: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  cluster: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  managed_instances_provider: resolvableValue(
    z.object({
      infrastructure_role_arn: z.string(),
      propagate_tags: z.string().optional(),
      instance_launch_template: z.object({
        ec2_instance_profile_arn: z.string(),
        monitoring: z.string().optional(),
        instance_requirements: z.object({
          accelerator_manufacturers: z.string().array().optional(),
          accelerator_names: z.string().array().optional(),
          accelerator_types: z.string().array().optional(),
          allowed_instance_types: z.string().array().optional(),
          bare_metal: z.string().optional(),
          burstable_performance: z.string().optional(),
          cpu_manufacturers: z.string().array().optional(),
          excluded_instance_types: z.string().array().optional(),
          instance_generations: z.string().array().optional(),
          local_storage: z.string().optional(),
          local_storage_types: z.string().array().optional(),
          max_spot_price_as_percentage_of_optimal_on_demand_price: z.number()
            .optional(),
          on_demand_max_price_percentage_over_lowest_price: z.number()
            .optional(),
          require_hibernate_support: z.boolean().optional(),
          spot_max_price_percentage_over_lowest_price: z.number().optional(),
          accelerator_count: z.object({
            max: z.number().optional(),
            min: z.number().optional(),
          }).optional(),
          accelerator_total_memory_mib: z.object({
            max: z.number().optional(),
            min: z.number().optional(),
          }).optional(),
          baseline_ebs_bandwidth_mbps: z.object({
            max: z.number().optional(),
            min: z.number().optional(),
          }).optional(),
          memory_gib_per_vcpu: z.object({
            max: z.number().optional(),
            min: z.number().optional(),
          }).optional(),
          memory_mib: z.object({
            max: z.number().optional(),
            min: z.number(),
          }),
          network_bandwidth_gbps: z.object({
            max: z.number().optional(),
            min: z.number().optional(),
          }).optional(),
          network_interface_count: z.object({
            max: z.number().optional(),
            min: z.number().optional(),
          }).optional(),
          total_local_storage_gb: z.object({
            max: z.number().optional(),
            min: z.number().optional(),
          }).optional(),
          vcpu_count: z.object({
            max: z.number().optional(),
            min: z.number(),
          }),
        }).optional(),
        network_configuration: z.object({
          security_groups: z.string().array().optional(),
          subnets: z.string().array(),
        }),
        storage_configuration: z.object({
          storage_size_gib: z.number(),
        }).optional(),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecs_capacity_provider

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

export const useAwsEcsCapacityProvider = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsEcsCapacityProvider, idFilter, baseNode)

export const useAwsEcsCapacityProviders = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsEcsCapacityProvider, idFilter, baseNode)
