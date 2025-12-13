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

export const InputSchema = z.object({
  pipeline_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  parameter_object: z.set(z.object({
    attribute: z.set(z.object({
      key: z.string(),
      string_value: z.string(),
    })),
    id: z.string(),
  })).optional(),
  parameter_value: z.object({
    id: z.string(),
    string_value: z.string(),
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/datapipeline_pipeline_definition

export function DataAwsDatapipelinePipelineDefinition(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDatapipelinePipelineDefinition
      _type='aws_datapipeline_pipeline_definition'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDatapipelinePipelineDefinition = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsDatapipelinePipelineDefinition,
    idFilter,
    baseNode,
  )

export const useDataAwsDatapipelinePipelineDefinitions = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsDatapipelinePipelineDefinition,
    idFilter,
    baseNode,
  )
