import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codepipeline

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  artifact_store: resolvableValue(
    z.object({
      location: z.string(),
      region: z.string().optional(),
      type: z.string(),
    }).array(),
  ),
  execution_mode: resolvableValue(z.string().optional()),
  pipeline_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  stage: resolvableValue(
    z.object({
      name: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  trigger: resolvableValue(
    z.object({
      provider_type: z.string(),
    }).optional(),
  ),
  variable: resolvableValue(
    z.object({
      default_value: z.string().optional(),
      description: z.string().optional(),
      name: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  trigger_all: z.object({
    git_configuration: z.object({
      pull_request: z.object({
        branches: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
        events: z.string().array(),
        file_paths: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
      }).array(),
      push: z.object({
        branches: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
        file_paths: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
        tags: z.object({
          excludes: z.string().array(),
          includes: z.string().array(),
        }).array(),
      }).array(),
      source_action_name: z.string(),
    }).array(),
    provider_type: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodepipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codepipeline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodepipeline = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodepipeline, node, id)

export const useAwsCodepipelines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodepipeline, node, id)
