import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLexSlotType } from './AwsLexSlotType.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lex_slot_type

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  enumeration_value: z.object({
    synonyms: z.string().array(),
    value: z.string(),
  }).array().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
  value_selection_strategy: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLexSlotType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLexSlotType
      _type='aws_lex_slot_type'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLexSlotType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLexSlotType, node, id)

export const useDataAwsLexSlotTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLexSlotType, node, id)
