import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLexIntent } from './AwsLexIntent.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lex_intent

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
  parent_intent_signature: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLexIntent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLexIntent
      _type='aws_lex_intent'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLexIntent = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsLexIntent, node, id)

export const useDataAwsLexIntents = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLexIntent, node, id)
