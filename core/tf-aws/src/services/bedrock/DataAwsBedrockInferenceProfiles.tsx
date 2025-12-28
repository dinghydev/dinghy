import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  inference_profile_summaries: resolvableValue(
    z.object({
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
    }).array(),
  ),
  region: resolvableValue(z.string().optional()),
  type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/bedrock_inference_profiles

export function DataAwsBedrockInferenceProfiles(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_inference_profiles'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockInferenceProfiless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsBedrockInferenceProfiles,
    idFilter,
    baseNode,
    optional,
  )
