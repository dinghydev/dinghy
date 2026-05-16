import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmcontactsContact } from './AwsSsmcontactsContact.tsx'

export const DataAwsSsmcontactsContactInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmcontactsContactOutputSchema = z.object({
  alias: z.string().optional(),
  display_name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type DataAwsSsmcontactsContactInputProps =
  & z.input<typeof DataAwsSsmcontactsContactInputSchema>
  & NodeProps

export type DataAwsSsmcontactsContactOutputProps =
  & z.output<typeof DataAwsSsmcontactsContactOutputSchema>
  & z.output<typeof DataAwsSsmcontactsContactInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssmcontacts_contact

export function DataAwsSsmcontactsContact(
  props: Partial<DataAwsSsmcontactsContactInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmcontactsContact
      _type='aws_ssmcontacts_contact'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmcontactsContactInputSchema}
      _outputSchema={DataAwsSsmcontactsContactOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmcontactsContact = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsmcontactsContactOutputProps>(
    DataAwsSsmcontactsContact,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmcontactsContacts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmcontactsContactOutputProps>(
    DataAwsSsmcontactsContact,
    idFilter,
    baseNode,
    optional,
  )
