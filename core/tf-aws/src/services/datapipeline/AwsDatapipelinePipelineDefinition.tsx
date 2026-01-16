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

export const InputSchema = TfMetaSchema.extend({
  pipeline_id: resolvableValue(z.string()),
  pipeline_object: resolvableValue(
    z.object({
      id: z.string(),
      name: z.string(),
      field: z.object({
        key: z.string(),
        ref_value: z.string().optional(),
        string_value: z.string().optional(),
      }).array().optional(),
    }).array(),
  ),
  parameter_object: resolvableValue(
    z.object({
      id: z.string(),
      attribute: z.object({
        key: z.string(),
        string_value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  parameter_value: resolvableValue(
    z.object({
      id: z.string(),
      string_value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/datapipeline_pipeline_definition

export function AwsDatapipelinePipelineDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datapipeline_pipeline_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatapipelinePipelineDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDatapipelinePipelineDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatapipelinePipelineDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDatapipelinePipelineDefinition,
    idFilter,
    baseNode,
    optional,
  )
