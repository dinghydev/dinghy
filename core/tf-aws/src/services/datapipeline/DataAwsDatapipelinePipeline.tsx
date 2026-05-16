import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDatapipelinePipeline } from './AwsDatapipelinePipeline.tsx'

export const DataAwsDatapipelinePipelineInputSchema = TfMetaSchema.extend({
  pipeline_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDatapipelinePipelineOutputSchema = z.object({
  description: z.string().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsDatapipelinePipelineInputProps =
  & z.input<typeof DataAwsDatapipelinePipelineInputSchema>
  & NodeProps

export type DataAwsDatapipelinePipelineOutputProps =
  & z.output<typeof DataAwsDatapipelinePipelineOutputSchema>
  & z.output<typeof DataAwsDatapipelinePipelineInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/datapipeline_pipeline

export function DataAwsDatapipelinePipeline(
  props: Partial<DataAwsDatapipelinePipelineInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDatapipelinePipeline
      _type='aws_datapipeline_pipeline'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDatapipelinePipelineInputSchema}
      _outputSchema={DataAwsDatapipelinePipelineOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDatapipelinePipeline = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDatapipelinePipelineOutputProps>(
    DataAwsDatapipelinePipeline,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDatapipelinePipelines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDatapipelinePipelineOutputProps>(
    DataAwsDatapipelinePipeline,
    idFilter,
    baseNode,
    optional,
  )
