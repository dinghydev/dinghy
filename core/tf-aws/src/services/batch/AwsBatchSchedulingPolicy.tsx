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

export const AwsBatchSchedulingPolicyInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  fair_share_policy: resolvableValue(
    z.object({
      compute_reservation: z.number().optional(),
      share_decay_seconds: z.number().optional(),
      share_distribution: z.object({
        share_identifier: z.string(),
        weight_factor: z.number().optional(),
      }).array().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsBatchSchedulingPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBatchSchedulingPolicyInputProps =
  & z.input<typeof AwsBatchSchedulingPolicyInputSchema>
  & NodeProps

export type AwsBatchSchedulingPolicyOutputProps =
  & z.output<typeof AwsBatchSchedulingPolicyOutputSchema>
  & z.output<typeof AwsBatchSchedulingPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/batch_scheduling_policy

export function AwsBatchSchedulingPolicy(
  props: Partial<AwsBatchSchedulingPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_batch_scheduling_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBatchSchedulingPolicyInputSchema}
      _outputSchema={AwsBatchSchedulingPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsBatchSchedulingPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBatchSchedulingPolicyOutputProps>(
    AwsBatchSchedulingPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBatchSchedulingPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBatchSchedulingPolicyOutputProps>(
    AwsBatchSchedulingPolicy,
    idFilter,
    baseNode,
    optional,
  )
