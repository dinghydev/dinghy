import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLexBotAlias } from './AwsLexBotAlias.tsx'

export const DataAwsLexBotAliasInputSchema = TfMetaSchema.extend({
  bot_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLexBotAliasOutputSchema = z.object({
  arn: z.string().optional(),
  bot_name: z.string().optional(),
  bot_version: z.string().optional(),
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
})

export type DataAwsLexBotAliasInputProps =
  & z.input<typeof DataAwsLexBotAliasInputSchema>
  & NodeProps

export type DataAwsLexBotAliasOutputProps =
  & z.output<typeof DataAwsLexBotAliasOutputSchema>
  & z.output<typeof DataAwsLexBotAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lex_bot_alias

export function DataAwsLexBotAlias(
  props: Partial<DataAwsLexBotAliasInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLexBotAlias
      _type='aws_lex_bot_alias'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLexBotAliasInputSchema}
      _outputSchema={DataAwsLexBotAliasOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLexBotAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLexBotAliasOutputProps>(
    DataAwsLexBotAlias,
    idFilter,
    baseNode,
    optional,
  )
