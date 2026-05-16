import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsLexv2modelsBotLocaleInputSchema = TfMetaSchema.extend({
  bot_id: resolvableValue(z.string()),
  bot_version: resolvableValue(z.string()),
  locale_id: resolvableValue(z.string()),
  n_lu_intent_confidence_threshold: resolvableValue(z.number()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  voice_settings: resolvableValue(
    z.object({
      engine: z.string().optional(),
      voice_id: z.string(),
    }).array().optional(),
  ),
})

export const AwsLexv2modelsBotLocaleOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
})

export type AwsLexv2modelsBotLocaleInputProps =
  & z.input<typeof AwsLexv2modelsBotLocaleInputSchema>
  & NodeProps

export type AwsLexv2modelsBotLocaleOutputProps =
  & z.output<typeof AwsLexv2modelsBotLocaleOutputSchema>
  & z.output<typeof AwsLexv2modelsBotLocaleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lexv2models_bot_locale

export function AwsLexv2modelsBotLocale(
  props: Partial<AwsLexv2modelsBotLocaleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_bot_locale'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLexv2modelsBotLocaleInputSchema}
      _outputSchema={AwsLexv2modelsBotLocaleOutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsBotLocale = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLexv2modelsBotLocaleOutputProps>(
    AwsLexv2modelsBotLocale,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLexv2modelsBotLocales = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLexv2modelsBotLocaleOutputProps>(
    AwsLexv2modelsBotLocale,
    idFilter,
    baseNode,
    optional,
  )
