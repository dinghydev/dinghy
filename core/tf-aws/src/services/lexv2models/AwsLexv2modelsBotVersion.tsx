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

export const AwsLexv2modelsBotVersionInputSchema = TfMetaSchema.extend({
  bot_id: resolvableValue(z.string()),
  locale_specification: resolvableValue(z.record(
    z.string(),
    z.object({
      source_bot_version: z.string(),
    }),
  )),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsLexv2modelsBotVersionOutputSchema = z.object({
  bot_version: z.string().optional(),
  id: z.string().optional(),
})

export type AwsLexv2modelsBotVersionInputProps =
  & z.input<typeof AwsLexv2modelsBotVersionInputSchema>
  & NodeProps

export type AwsLexv2modelsBotVersionOutputProps =
  & z.output<typeof AwsLexv2modelsBotVersionOutputSchema>
  & z.output<typeof AwsLexv2modelsBotVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lexv2models_bot_version

export function AwsLexv2modelsBotVersion(
  props: Partial<AwsLexv2modelsBotVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_bot_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLexv2modelsBotVersionInputSchema}
      _outputSchema={AwsLexv2modelsBotVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsBotVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLexv2modelsBotVersionOutputProps>(
    AwsLexv2modelsBotVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLexv2modelsBotVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLexv2modelsBotVersionOutputProps>(
    AwsLexv2modelsBotVersion,
    idFilter,
    baseNode,
    optional,
  )
