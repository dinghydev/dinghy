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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lex_slot_type

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

export const useDataAwsLexSlotType = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsLexSlotType, idFilter, baseNode)

export const useDataAwsLexSlotTypes = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsLexSlotType, idFilter, baseNode)
