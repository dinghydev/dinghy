import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDatapipelinePipelineDefinition } from './AwsDatapipelinePipelineDefinition.tsx'

export const DataAwsDatapipelinePipelineDefinitionInputSchema = TfMetaSchema
  .extend({
    pipeline_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsDatapipelinePipelineDefinitionOutputSchema = z.object({
  parameter_object: z.set(z.object({
    attribute: z.set(z.object({
      key: z.string(),
      string_value: z.string(),
    })),
    id: z.string(),
  })).optional(),
  parameter_value: z.object({
    id: z.string().optional(),
    string_value: z.string().optional(),
  }).array().optional().optional(),
  pipeline_object: z.set(z.object({
    field: z.set(z.object({
      key: z.string(),
      ref_value: z.string(),
      string_value: z.string(),
    })),
    id: z.string(),
    name: z.string(),
  })).optional(),
})

export type DataAwsDatapipelinePipelineDefinitionInputProps =
  & z.input<typeof DataAwsDatapipelinePipelineDefinitionInputSchema>
  & NodeProps

export type DataAwsDatapipelinePipelineDefinitionOutputProps =
  & z.output<typeof DataAwsDatapipelinePipelineDefinitionOutputSchema>
  & z.output<typeof DataAwsDatapipelinePipelineDefinitionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/datapipeline_pipeline_definition

export function DataAwsDatapipelinePipelineDefinition(
  props: Partial<DataAwsDatapipelinePipelineDefinitionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDatapipelinePipelineDefinition
      _type='aws_datapipeline_pipeline_definition'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDatapipelinePipelineDefinitionInputSchema}
      _outputSchema={DataAwsDatapipelinePipelineDefinitionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDatapipelinePipelineDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDatapipelinePipelineDefinitionOutputProps>(
    DataAwsDatapipelinePipelineDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDatapipelinePipelineDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDatapipelinePipelineDefinitionOutputProps>(
    DataAwsDatapipelinePipelineDefinition,
    idFilter,
    baseNode,
    optional,
  )
