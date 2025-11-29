import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLexBotAlias } from './AwsLexBotAlias.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/lex_bot_alias

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bot_name: z.string().optional(),
  bot_version: z.string().optional(),
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsLexBotAlias(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsLexBotAlias
      _type='aws_lex_bot_alias'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLexBotAliass = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsLexBotAlias, node, id)
