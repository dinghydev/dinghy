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

export const AwsCodepipelineCustomActionTypeInputSchema = TfMetaSchema.extend({
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
    }).array().optional(),
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

export const AwsCodepipelineCustomActionTypeOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCodepipelineCustomActionTypeInputProps =
  & z.input<typeof AwsCodepipelineCustomActionTypeInputSchema>
  & NodeProps

export type AwsCodepipelineCustomActionTypeOutputProps =
  & z.output<typeof AwsCodepipelineCustomActionTypeOutputSchema>
  & z.output<typeof AwsCodepipelineCustomActionTypeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codepipeline_custom_action_type

export function AwsCodepipelineCustomActionType(
  props: Partial<AwsCodepipelineCustomActionTypeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codepipeline_custom_action_type'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodepipelineCustomActionTypeInputSchema}
      _outputSchema={AwsCodepipelineCustomActionTypeOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodepipelineCustomActionType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodepipelineCustomActionTypeOutputProps>(
    AwsCodepipelineCustomActionType,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodepipelineCustomActionTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodepipelineCustomActionTypeOutputProps>(
    AwsCodepipelineCustomActionType,
    idFilter,
    baseNode,
    optional,
  )
