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

export const AwsSagemakerPipelineInputSchema = TfMetaSchema.extend({
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

export const AwsSagemakerPipelineOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerPipelineInputProps =
  & z.input<typeof AwsSagemakerPipelineInputSchema>
  & NodeProps

export type AwsSagemakerPipelineOutputProps =
  & z.output<typeof AwsSagemakerPipelineOutputSchema>
  & z.output<typeof AwsSagemakerPipelineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_pipeline

export function AwsSagemakerPipeline(
  props: Partial<AwsSagemakerPipelineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_pipeline'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerPipelineInputSchema}
      _outputSchema={AwsSagemakerPipelineOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerPipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerPipelineOutputProps>(
    AwsSagemakerPipeline,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerPipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerPipelineOutputProps>(
    AwsSagemakerPipeline,
    idFilter,
    baseNode,
    optional,
  )
