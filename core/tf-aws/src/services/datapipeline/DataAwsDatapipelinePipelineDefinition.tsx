import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDatapipelinePipelineDefinition } from './AwsDatapipelinePipelineDefinition.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/datapipeline_pipeline_definition

export const InputSchema = z.object({
  pipeline_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  parameter_object: z.object({
    attribute: z.object({
      key: z.string(),
      string_value: z.string(),
    }).array(),
    id: z.string(),
  }).array().optional(),
  parameter_value: z.object({
    id: z.string(),
    string_value: z.string(),
  }).array().optional().optional(),
  pipeline_object: z.object({
    field: z.object({
      key: z.string(),
      ref_value: z.string(),
      string_value: z.string(),
    }).array(),
    id: z.string(),
    name: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

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
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsDatapipelinePipelineDefinition, node, id)

export const useDataAwsDatapipelinePipelineDefinitions = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsDatapipelinePipelineDefinition, node, id)
