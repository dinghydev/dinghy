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

export const AwsDatapipelinePipelineInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDatapipelinePipelineOutputSchema = z.object({
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDatapipelinePipelineInputProps =
  & z.input<typeof AwsDatapipelinePipelineInputSchema>
  & NodeProps

export type AwsDatapipelinePipelineOutputProps =
  & z.output<typeof AwsDatapipelinePipelineOutputSchema>
  & z.output<typeof AwsDatapipelinePipelineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datapipeline_pipeline

export function AwsDatapipelinePipeline(
  props: Partial<AwsDatapipelinePipelineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datapipeline_pipeline'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatapipelinePipelineInputSchema}
      _outputSchema={AwsDatapipelinePipelineOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatapipelinePipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatapipelinePipelineOutputProps>(
    AwsDatapipelinePipeline,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatapipelinePipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatapipelinePipelineOutputProps>(
    AwsDatapipelinePipeline,
    idFilter,
    baseNode,
    optional,
  )
