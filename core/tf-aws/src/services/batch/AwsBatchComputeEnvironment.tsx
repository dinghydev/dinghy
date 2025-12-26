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
  type: resolvableValue(z.string()),
  compute_resources: resolvableValue(
    z.object({
      allocation_strategy: z.string().optional(),
      bid_percentage: z.number().optional(),
      desired_vcpus: z.number().optional(),
      ec2_key_pair: z.string().optional(),
      image_id: z.string().optional(),
      instance_role: z.string().optional(),
      instance_type: z.string().array().optional(),
      max_vcpus: z.number(),
      min_vcpus: z.number().optional(),
      placement_group: z.string().optional(),
      security_group_ids: z.string().array().optional(),
      spot_iam_fleet_role: z.string().optional(),
      subnets: z.string().array(),
      tags: z.record(z.string(), z.string()).optional(),
      type: z.string(),
      ec2_configuration: z.object({
        image_id_override: z.string().optional(),
        image_kubernetes_version: z.string().optional(),
        image_type: z.string().optional(),
      }).array().optional(),
      launch_template: z.object({
        launch_template_id: z.string().optional(),
        launch_template_name: z.string().optional(),
        version: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  eks_configuration: resolvableValue(
    z.object({
      eks_cluster_arn: z.string(),
      kubernetes_namespace: z.string(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  service_role: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  update_policy: resolvableValue(
    z.object({
      job_execution_timeout_minutes: z.number().optional(),
      terminate_jobs_on_update: z.boolean().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  ecs_cluster_arn: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/batch_compute_environment

export function AwsBatchComputeEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_batch_compute_environment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBatchComputeEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBatchComputeEnvironment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBatchComputeEnvironments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBatchComputeEnvironment,
    idFilter,
    baseNode,
    optional,
  )
