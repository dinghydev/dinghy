import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lexv2models_slot

export const InputSchema = z.object({
  bot_id: resolvableValue(z.string()),
  bot_version: resolvableValue(z.string()),
  intent_id: resolvableValue(z.string()),
  locale_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  multiple_values_setting: resolvableValue(
    z.object({
      allow_multiple_values: z.boolean().optional(),
    }).optional(),
  ),
  obfuscation_setting: resolvableValue(
    z.object({
      obfuscation_setting_type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  slot_type_id: resolvableValue(z.string().optional()),
  sub_slot_setting: resolvableValue(
    z.object({
      expression: z.string().optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  value_elicitation_setting: resolvableValue(
    z.object({
      slot_constraint: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  slot_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLexv2modelsSlot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_slot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsSlot = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLexv2modelsSlot, node, id)

export const useAwsLexv2modelsSlots = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsSlot, node, id)
