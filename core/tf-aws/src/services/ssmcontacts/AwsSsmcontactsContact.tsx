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

export const AwsSsmcontactsContactInputSchema = TfMetaSchema.extend({
  alias: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  display_name: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSsmcontactsContactOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsSsmcontactsContactImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSsmcontactsContactInputProps =
  & z.input<typeof AwsSsmcontactsContactInputSchema>
  & z.input<typeof AwsSsmcontactsContactImportSchema>
  & NodeProps

export type AwsSsmcontactsContactOutputProps =
  & z.output<typeof AwsSsmcontactsContactOutputSchema>
  & z.output<typeof AwsSsmcontactsContactInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssmcontacts_contact

export function AwsSsmcontactsContact(
  props: Partial<AwsSsmcontactsContactInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssmcontacts_contact'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmcontactsContactInputSchema}
      _outputSchema={AwsSsmcontactsContactOutputSchema}
      _importSchema={AwsSsmcontactsContactImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmcontactsContact = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmcontactsContactOutputProps>(
    AwsSsmcontactsContact,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmcontactsContacts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmcontactsContactOutputProps>(
    AwsSsmcontactsContact,
    idFilter,
    baseNode,
    optional,
  )
