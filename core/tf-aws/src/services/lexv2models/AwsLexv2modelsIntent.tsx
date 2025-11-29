import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lexv2models_intent

export const InputSchema = z.object({
  bot_id: resolvableValue(z.string()),
  bot_version: resolvableValue(z.string()),
  locale_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  closing_setting: resolvableValue(
    z.object({
      active: z.boolean().optional(),
    }).optional(),
  ),
  confirmation_setting: resolvableValue(
    z.object({
      active: z.boolean().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  dialog_code_hook: resolvableValue(
    z.object({
      enabled: z.boolean(),
    }).optional(),
  ),
  fulfillment_code_hook: resolvableValue(
    z.object({
      active: z.boolean().optional(),
      enabled: z.boolean(),
    }).optional(),
  ),
  initial_response_setting: resolvableValue(
    z.object({
      code_hook: z.object({
        active: z.boolean(),
        enable_code_hook_invocation: z.boolean(),
        invocation_label: z.string().optional(),
      }).optional(),
      conditional: z.object({
        active: z.boolean(),
      }).optional(),
      initial_response: z.object({
        allow_interrupt: z.boolean().optional(),
      }).optional(),
      next_step: z.object({
        session_attributes: z.record(z.string(), z.string()).optional(),
      }).optional(),
    }).optional(),
  ),
  input_context: resolvableValue(
    z.object({
      name: z.string(),
    }).optional(),
  ),
  kendra_configuration: resolvableValue(
    z.object({
      kendra_index: z.string(),
      query_filter_string: z.string().optional(),
      query_filter_string_enabled: z.boolean().optional(),
    }).optional(),
  ),
  output_context: resolvableValue(
    z.object({
      name: z.string(),
      time_to_live_in_seconds: z.number(),
      turns_to_live: z.number(),
    }).optional(),
  ),
  parent_intent_signature: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sample_utterance: resolvableValue(
    z.object({
      utterance: z.string(),
    }).optional(),
  ),
  slot_priority: resolvableValue(
    z.object({
      priority: z.number(),
      slot_id: z.string(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  creation_date_time: z.string().optional(),
  id: z.string().optional(),
  intent_id: z.string().optional(),
  last_updated_date_time: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLexv2modelsIntent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_intent'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsIntent = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLexv2modelsIntent, node, id)

export const useAwsLexv2modelsIntents = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsIntent, node, id)
