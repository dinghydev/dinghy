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
  blocked_input_messaging: resolvableValue(z.string()),
  blocked_outputs_messaging: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  content_policy_config: resolvableValue(
    z.object({
      tier_config: z.object({
        tier_name: z.string(),
      }).array().optional(),
      filters_config: z.object({
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        input_modalities: z.string().array().optional(),
        input_strength: z.string(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        output_modalities: z.string().array().optional(),
        output_strength: z.string(),
        type: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  contextual_grounding_policy_config: resolvableValue(
    z.object({
      filters_config: z.object({
        threshold: z.number(),
        type: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  cross_region_config: resolvableValue(
    z.object({
      guardrail_profile_identifier: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sensitive_information_policy_config: resolvableValue(
    z.object({
      pii_entities_config: z.object({
        action: z.string(),
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        type: z.string(),
      }).array().optional(),
      regexes_config: z.object({
        action: z.string(),
        description: z.string().optional(),
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        name: z.string(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        pattern: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  topic_policy_config: resolvableValue(
    z.object({
      tier_config: z.object({
        tier_name: z.string(),
      }).array().optional(),
      topics_config: z.object({
        definition: z.string(),
        examples: z.string().array().optional(),
        name: z.string(),
        type: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  word_policy_config: resolvableValue(
    z.object({
      managed_word_lists_config: z.object({
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        type: z.string(),
      }).array().optional(),
      words_config: z.object({
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        text: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  guardrail_arn: z.string().optional(),
  guardrail_id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrock_guardrail

export function AwsBedrockGuardrail(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_guardrail'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockGuardrail = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsBedrockGuardrail, idFilter, baseNode, optional)

export const useAwsBedrockGuardrails = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsBedrockGuardrail, idFilter, baseNode, optional)
