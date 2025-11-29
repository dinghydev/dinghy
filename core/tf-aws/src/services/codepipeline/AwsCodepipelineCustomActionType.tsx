import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codepipeline_custom_action_type

export const InputSchema = z.object({
  category: resolvableValue(z.string()),
  input_artifact_details: resolvableValue(z.object({
    maximum_count: z.number(),
    minimum_count: z.number(),
  })),
  output_artifact_details: resolvableValue(z.object({
    maximum_count: z.number(),
    minimum_count: z.number(),
  })),
  provider_name: resolvableValue(z.string()),
  version: resolvableValue(z.string()),
  configuration_property: resolvableValue(
    z.object({
      description: z.string().optional(),
      key: z.boolean(),
      name: z.string(),
      queryable: z.boolean().optional(),
      required: z.boolean(),
      secret: z.boolean(),
      type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  settings: resolvableValue(
    z.object({
      entity_url_template: z.string().optional(),
      execution_url_template: z.string().optional(),
      revision_url_template: z.string().optional(),
      third_party_configuration_url: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodepipelineCustomActionType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codepipeline_custom_action_type'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodepipelineCustomActionType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodepipelineCustomActionType, node, id)

export const useAwsCodepipelineCustomActionTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodepipelineCustomActionType, node, id)
