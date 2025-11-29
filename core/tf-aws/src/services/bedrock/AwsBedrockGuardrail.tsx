import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrock_guardrail

export const InputSchema = z.object({
  blocked_input_messaging: resolvableValue(z.string()),
  blocked_outputs_messaging: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  content_policy_config: resolvableValue(
    z.object({
      tier_config: z.object({
        tier_name: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  contextual_grounding_policy_config: resolvableValue(
    z.object({
      filters_config: z.object({
        threshold: z.number(),
        type: z.string(),
      }).optional(),
    }).optional(),
  ),
  cross_region_config: resolvableValue(
    z.object({
      guardrail_profile_identifier: z.string(),
    }).optional(),
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
      }).optional(),
      regexes_config: z.object({
        action: z.string(),
        description: z.string().optional(),
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        name: z.string(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        pattern: z.string(),
      }).optional(),
    }).optional(),
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
    }).optional(),
  ),
  word_policy_config: resolvableValue(
    z.object({
      managed_word_lists_config: z.object({
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        type: z.string(),
      }).optional(),
      words_config: z.object({
        input_action: z.string().optional(),
        input_enabled: z.boolean().optional(),
        output_action: z.string().optional(),
        output_enabled: z.boolean().optional(),
        text: z.string(),
      }).optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  guardrail_arn: z.string().optional(),
  guardrail_id: z.string().optional(),
  status: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockGuardrail(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsBedrockGuardrail = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockGuardrail, node, id)

export const useAwsBedrockGuardrails = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockGuardrail, node, id)
