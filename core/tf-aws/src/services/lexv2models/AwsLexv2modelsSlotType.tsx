import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lexv2models_slot_type

export const InputSchema = z.object({
  bot_id: resolvableValue(z.string()),
  bot_version: resolvableValue(z.string()),
  locale_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  composite_slot_type_setting: resolvableValue(
    z.object({
      sub_slots: z.object({
        name: z.string(),
        slot_type_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  external_source_setting: resolvableValue(
    z.object({
      grammar_slot_type_setting: z.object({
        source: z.object({
          kms_key_arn: z.string(),
          s3_bucket_name: z.string(),
          s3_object_key: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  parent_slot_type_signature: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  slot_type_values: resolvableValue(
    z.object({
      sample_value: z.object({
        value: z.string(),
      }).optional(),
      synonyms: z.object({
        value: z.string(),
      }).optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  value_selection_setting: resolvableValue(
    z.object({
      resolution_strategy: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  slot_type_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLexv2modelsSlotType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_slot_type'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsSlotType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLexv2modelsSlotType, node, id)

export const useAwsLexv2modelsSlotTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsSlotType, node, id)
