import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLexIntent } from './AwsLexIntent.tsx'

export const DataAwsLexIntentInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const DataAwsLexIntentOutputSchema = z.object({
  arn: z.string().optional(),
  checksum: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
  parent_intent_signature: z.string().optional(),
  version: z.string().optional(),
})

export type DataAwsLexIntentInputProps =
  & z.input<typeof DataAwsLexIntentInputSchema>
  & NodeProps

export type DataAwsLexIntentOutputProps =
  & z.output<typeof DataAwsLexIntentOutputSchema>
  & z.output<typeof DataAwsLexIntentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/lex_intent

export function DataAwsLexIntent(props: Partial<DataAwsLexIntentInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLexIntent
      _type='aws_lex_intent'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLexIntentInputSchema}
      _outputSchema={DataAwsLexIntentOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLexIntent = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLexIntentOutputProps>(
    DataAwsLexIntent,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLexIntents = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLexIntentOutputProps>(
    DataAwsLexIntent,
    idFilter,
    baseNode,
    optional,
  )
