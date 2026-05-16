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

export const AwsBedrockInferenceProfileInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  model_source: resolvableValue(
    z.object({
      copy_from: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBedrockInferenceProfileOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  models: z.object({
    model_arn: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  updated_at: z.string().optional(),
})

export type AwsBedrockInferenceProfileInputProps =
  & z.input<typeof AwsBedrockInferenceProfileInputSchema>
  & NodeProps

export type AwsBedrockInferenceProfileOutputProps =
  & z.output<typeof AwsBedrockInferenceProfileOutputSchema>
  & z.output<typeof AwsBedrockInferenceProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/bedrock_inference_profile

export function AwsBedrockInferenceProfile(
  props: Partial<AwsBedrockInferenceProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_inference_profile'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBedrockInferenceProfileInputSchema}
      _outputSchema={AwsBedrockInferenceProfileOutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockInferenceProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBedrockInferenceProfileOutputProps>(
    AwsBedrockInferenceProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockInferenceProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBedrockInferenceProfileOutputProps>(
    AwsBedrockInferenceProfile,
    idFilter,
    baseNode,
    optional,
  )
