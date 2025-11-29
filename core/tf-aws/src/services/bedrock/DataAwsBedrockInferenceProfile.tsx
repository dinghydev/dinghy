import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBedrockInferenceProfile } from './AwsBedrockInferenceProfile.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/bedrock_inference_profile

export const InputSchema = z.object({
  created_at: resolvableValue(z.string()),
  description: resolvableValue(z.string()),
  inference_profile_arn: resolvableValue(z.string()),
  inference_profile_id: resolvableValue(z.string()),
  inference_profile_name: resolvableValue(z.string()),
  models: resolvableValue(
    z.object({
      model_arn: z.string(),
    }).array(),
  ),
  status: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  updated_at: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsBedrockInferenceProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsBedrockInferenceProfile
      _type='aws_bedrock_inference_profile'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBedrockInferenceProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsBedrockInferenceProfile, node, id)

export const useDataAwsBedrockInferenceProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsBedrockInferenceProfile, node, id)
