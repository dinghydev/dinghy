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

export const AwsCodeguruprofilerProfilingGroupInputSchema = TfMetaSchema.extend(
  {
    name: resolvableValue(z.string()),
    agent_orchestration_config: resolvableValue(
      z.object({
        profiling_enabled: z.boolean(),
      }).array().optional(),
    ),
    compute_platform: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  },
)

export const AwsCodeguruprofilerProfilingGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCodeguruprofilerProfilingGroupInputProps =
  & z.input<typeof AwsCodeguruprofilerProfilingGroupInputSchema>
  & NodeProps

export type AwsCodeguruprofilerProfilingGroupOutputProps =
  & z.output<typeof AwsCodeguruprofilerProfilingGroupOutputSchema>
  & z.output<typeof AwsCodeguruprofilerProfilingGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codeguruprofiler_profiling_group

export function AwsCodeguruprofilerProfilingGroup(
  props: Partial<AwsCodeguruprofilerProfilingGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeguruprofiler_profiling_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodeguruprofilerProfilingGroupInputSchema}
      _outputSchema={AwsCodeguruprofilerProfilingGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodeguruprofilerProfilingGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodeguruprofilerProfilingGroupOutputProps>(
    AwsCodeguruprofilerProfilingGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodeguruprofilerProfilingGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodeguruprofilerProfilingGroupOutputProps>(
    AwsCodeguruprofilerProfilingGroup,
    idFilter,
    baseNode,
    optional,
  )
