import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_pipeline

export const InputSchema = z.object({
  pipeline_display_name: resolvableValue(z.string()),
  pipeline_name: resolvableValue(z.string()),
  parallelism_configuration: resolvableValue(
    z.object({
      max_parallel_execution_steps: z.number(),
    }).optional(),
  ),
  pipeline_definition: resolvableValue(z.string().optional()),
  pipeline_definition_s3_location: resolvableValue(
    z.object({
      bucket: z.string(),
      object_key: z.string(),
      version_id: z.string().optional(),
    }).optional(),
  ),
  pipeline_description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
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

export function AwsSagemakerPipeline(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_pipeline'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerPipeline = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerPipeline, node, id)

export const useAwsSagemakerPipelines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerPipeline, node, id)
