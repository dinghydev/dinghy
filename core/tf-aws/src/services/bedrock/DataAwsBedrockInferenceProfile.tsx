import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBedrockInferenceProfile } from './AwsBedrockInferenceProfile.tsx'

export const DataAwsBedrockInferenceProfileInputSchema = TfMetaSchema.extend({
  inference_profile_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBedrockInferenceProfileOutputSchema = z.object({
  created_at: z.string().optional(),
  description: z.string().optional(),
  inference_profile_arn: z.string().optional(),
  inference_profile_name: z.string().optional(),
  models: z.object({
    model_arn: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  type: z.string().optional(),
  updated_at: z.string().optional(),
})

export type DataAwsBedrockInferenceProfileInputProps =
  & z.input<typeof DataAwsBedrockInferenceProfileInputSchema>
  & NodeProps

export type DataAwsBedrockInferenceProfileOutputProps =
  & z.output<typeof DataAwsBedrockInferenceProfileOutputSchema>
  & z.output<typeof DataAwsBedrockInferenceProfileInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/bedrock_inference_profile

export function DataAwsBedrockInferenceProfile(
  props: Partial<DataAwsBedrockInferenceProfileInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBedrockInferenceProfile
      _type='aws_bedrock_inference_profile'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBedrockInferenceProfileInputSchema}
      _outputSchema={DataAwsBedrockInferenceProfileOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBedrockInferenceProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBedrockInferenceProfileOutputProps>(
    DataAwsBedrockInferenceProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBedrockInferenceProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBedrockInferenceProfileOutputProps>(
    DataAwsBedrockInferenceProfile,
    idFilter,
    baseNode,
    optional,
  )
