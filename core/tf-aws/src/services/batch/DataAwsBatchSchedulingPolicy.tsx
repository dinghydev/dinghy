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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  fair_share_policy: resolvableValue(
    z.object({
      compute_reservation: z.number(),
      share_decay_seconds: z.number(),
      share_distribution: z.object({
        share_identifier: z.string(),
        weight_factor: z.number(),
      }).array(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/batch_scheduling_policy

export function DataAwsBatchSchedulingPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBatchSchedulingPolicy
      _type='aws_batch_scheduling_policy'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBatchSchedulingPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsBatchSchedulingPolicy,
    idFilter,
    baseNode,
    optional,
  )
