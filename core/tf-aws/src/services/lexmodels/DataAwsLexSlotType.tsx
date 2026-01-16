import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLexSlotType } from './AwsLexSlotType.tsx'

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  enumeration_value: z.set(z.object({
    synonyms: z.string().array(),
    value: z.string(),
  })).optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/lex_slot_type

export function DataAwsLexSlotType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsLexSlotType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsLexSlotType, idFilter, baseNode, optional)

export const useDataAwsLexSlotTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsLexSlotType, idFilter, baseNode, optional)
