import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsLexBotAliasInputSchema = TfMetaSchema.extend({
  bot_name: resolvableValue(z.string()),
  bot_version: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  conversation_logs: resolvableValue(
    z.object({
      iam_role_arn: z.string(),
      log_settings: z.object({
        destination: z.string(),
        kms_key_arn: z.string().optional(),
        log_type: z.string(),
        resource_arn: z.string(),
        resource_prefix: z.string().optional(),
      }).array().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsLexBotAliasOutputSchema = z.object({
  arn: z.string().optional(),
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  last_updated_date: z.string().optional(),
})

export type AwsLexBotAliasInputProps =
  & z.input<typeof AwsLexBotAliasInputSchema>
  & NodeProps

export type AwsLexBotAliasOutputProps =
  & z.output<typeof AwsLexBotAliasOutputSchema>
  & z.output<typeof AwsLexBotAliasInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lex_bot_alias

export function AwsLexBotAlias(props: Partial<AwsLexBotAliasInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lex_bot_alias'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLexBotAliasInputSchema}
      _outputSchema={AwsLexBotAliasOutputSchema}
      {...props}
    />
  )
}

export const useAwsLexBotAliass = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLexBotAliasOutputProps>(
    AwsLexBotAlias,
    idFilter,
    baseNode,
    optional,
  )
