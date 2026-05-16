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

export const AwsMacie2CustomDataIdentifierInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  ignore_words: resolvableValue(z.string().array().optional()),
  keywords: resolvableValue(z.string().array().optional()),
  maximum_match_distance: resolvableValue(z.number().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  regex: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsMacie2CustomDataIdentifierOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMacie2CustomDataIdentifierInputProps =
  & z.input<typeof AwsMacie2CustomDataIdentifierInputSchema>
  & NodeProps

export type AwsMacie2CustomDataIdentifierOutputProps =
  & z.output<typeof AwsMacie2CustomDataIdentifierOutputSchema>
  & z.output<typeof AwsMacie2CustomDataIdentifierInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/macie2_custom_data_identifier

export function AwsMacie2CustomDataIdentifier(
  props: Partial<AwsMacie2CustomDataIdentifierInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_custom_data_identifier'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMacie2CustomDataIdentifierInputSchema}
      _outputSchema={AwsMacie2CustomDataIdentifierOutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2CustomDataIdentifier = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMacie2CustomDataIdentifierOutputProps>(
    AwsMacie2CustomDataIdentifier,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMacie2CustomDataIdentifiers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMacie2CustomDataIdentifierOutputProps>(
    AwsMacie2CustomDataIdentifier,
    idFilter,
    baseNode,
    optional,
  )
