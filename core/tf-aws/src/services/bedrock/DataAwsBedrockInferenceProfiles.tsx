import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsBedrockInferenceProfilesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().optional()),
})

export const DataAwsBedrockInferenceProfilesOutputSchema = z.object({
  inference_profile_summaries: z.object({
    created_at: z.string(),
    description: z.string(),
    inference_profile_arn: z.string(),
    inference_profile_id: z.string(),
    inference_profile_name: z.string(),
    models: z.object({
      model_arn: z.string(),
    }).array(),
    status: z.string(),
    type: z.string(),
    updated_at: z.string(),
  }).array().optional(),
})

export type DataAwsBedrockInferenceProfilesInputProps =
  & z.input<typeof DataAwsBedrockInferenceProfilesInputSchema>
  & NodeProps

export type DataAwsBedrockInferenceProfilesOutputProps =
  & z.output<typeof DataAwsBedrockInferenceProfilesOutputSchema>
  & z.output<typeof DataAwsBedrockInferenceProfilesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/bedrock_inference_profiles

export function DataAwsBedrockInferenceProfiles(
  props: Partial<DataAwsBedrockInferenceProfilesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_inference_profiles'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBedrockInferenceProfilesInputSchema}
      _outputSchema={DataAwsBedrockInferenceProfilesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockInferenceProfiless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBedrockInferenceProfilesOutputProps>(
    DataAwsBedrockInferenceProfiles,
    idFilter,
    baseNode,
    optional,
  )
