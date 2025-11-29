import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lex_slot_type

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  create_version: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  enumeration_value: resolvableValue(
    z.object({
      synonyms: z.string().array().optional(),
      value: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  value_selection_strategy: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  last_updated_date: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLexSlotType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lex_slot_type'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexSlotType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLexSlotType, node, id)

export const useAwsLexSlotTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLexSlotType, node, id)
