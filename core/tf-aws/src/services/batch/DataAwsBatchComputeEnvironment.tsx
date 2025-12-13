import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBatchComputeEnvironment } from './AwsBatchComputeEnvironment.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  ecs_cluster_arn: z.string().optional(),
  service_role: z.string().optional(),
  state: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  update_policy: z.object({
    job_execution_timeout_minutes: z.number(),
    terminate_jobs_on_update: z.boolean(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/batch_compute_environment

export function DataAwsBatchComputeEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsBatchComputeEnvironment
      _type='aws_batch_compute_environment'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBatchComputeEnvironment = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(DataAwsBatchComputeEnvironment, idFilter, baseNode)

export const useDataAwsBatchComputeEnvironments = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(DataAwsBatchComputeEnvironment, idFilter, baseNode)
