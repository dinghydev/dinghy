import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datapipeline_pipeline_definition

export const InputSchema = z.object({
  pipeline_id: resolvableValue(z.string()),
  pipeline_object: resolvableValue(
    z.object({
      id: z.string(),
      name: z.string(),
    }).array(),
  ),
  parameter_object: resolvableValue(
    z.object({
      id: z.string(),
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

export function AwsDatapipelinePipelineDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsDatapipelinePipelineDefinition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatapipelinePipelineDefinition, node, id)

export const useAwsDatapipelinePipelineDefinitions = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsDatapipelinePipelineDefinition, node, id)
