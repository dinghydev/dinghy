import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodeguruprofilerProfilingGroup } from './AwsCodeguruprofilerProfilingGroup.tsx'

export const InputSchema = TfMetaSchema.extend({
  created_at: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  agent_orchestration_config: z.object({
    profiling_enabled: z.boolean(),
  }).array().optional(),
  arn: z.string().optional(),
  compute_platform: z.string().optional(),
  profiling_status: z.object({
    latest_agent_orchestrated_at: z.string(),
    latest_agent_profile_reported_at: z.string(),
    latest_aggregated_profile: z.object({
      period: z.string(),
      start: z.string(),
    }).array(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/codeguruprofiler_profiling_group

export function DataAwsCodeguruprofilerProfilingGroup(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCodeguruprofilerProfilingGroup
      _type='aws_codeguruprofiler_profiling_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodeguruprofilerProfilingGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCodeguruprofilerProfilingGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCodeguruprofilerProfilingGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCodeguruprofilerProfilingGroup,
    idFilter,
    baseNode,
    optional,
  )
