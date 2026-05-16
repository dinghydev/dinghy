import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBatchSchedulingPolicy } from './AwsBatchSchedulingPolicy.tsx'

export const DataAwsBatchSchedulingPolicyInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBatchSchedulingPolicyOutputSchema = z.object({
  fair_share_policy: z.object({
    compute_reservation: z.number(),
    share_decay_seconds: z.number(),
    share_distribution: z.set(z.object({
      share_identifier: z.string(),
      weight_factor: z.number(),
    })),
  }).array().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsBatchSchedulingPolicyInputProps =
  & z.input<typeof DataAwsBatchSchedulingPolicyInputSchema>
  & NodeProps

export type DataAwsBatchSchedulingPolicyOutputProps =
  & z.output<typeof DataAwsBatchSchedulingPolicyOutputSchema>
  & z.output<typeof DataAwsBatchSchedulingPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/batch_scheduling_policy

export function DataAwsBatchSchedulingPolicy(
  props: Partial<DataAwsBatchSchedulingPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBatchSchedulingPolicy
      _type='aws_batch_scheduling_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBatchSchedulingPolicyInputSchema}
      _outputSchema={DataAwsBatchSchedulingPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBatchSchedulingPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBatchSchedulingPolicyOutputProps>(
    DataAwsBatchSchedulingPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBatchSchedulingPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBatchSchedulingPolicyOutputProps>(
    DataAwsBatchSchedulingPolicy,
    idFilter,
    baseNode,
    optional,
  )
