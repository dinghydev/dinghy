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
  cluster_id: resolvableValue(z.string()),
  compute_limits: resolvableValue(
    z.object({
      maximum_capacity_units: z.number(),
      maximum_core_capacity_units: z.number().optional(),
      maximum_ondemand_capacity_units: z.number().optional(),
      minimum_capacity_units: z.number(),
      unit_type: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scaling_strategy: resolvableValue(z.string().optional()),
  utilization_performance_index: resolvableValue(z.number().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/emr_managed_scaling_policy

export function AwsEmrManagedScalingPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_managed_scaling_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrManagedScalingPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEmrManagedScalingPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEmrManagedScalingPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEmrManagedScalingPolicy,
    idFilter,
    baseNode,
    optional,
  )
