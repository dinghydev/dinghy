import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codeguruprofiler_profiling_group

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  agent_orchestration_config: resolvableValue(
    z.object({
      profiling_enabled: z.boolean(),
    }).optional(),
  ),
  compute_platform: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodeguruprofilerProfilingGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeguruprofiler_profiling_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodeguruprofilerProfilingGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodeguruprofilerProfilingGroup, node, id)

export const useAwsCodeguruprofilerProfilingGroups = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCodeguruprofilerProfilingGroup, node, id)
