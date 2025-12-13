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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  created_at: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  models: resolvableValue(
    z.object({
      model_arn: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  type: resolvableValue(z.string()),
  updated_at: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrock_inference_profile

export function AwsBedrockInferenceProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_inference_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockInferenceProfile = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsBedrockInferenceProfile, idFilter, baseNode)

export const useAwsBedrockInferenceProfiles = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsBedrockInferenceProfile, idFilter, baseNode)
