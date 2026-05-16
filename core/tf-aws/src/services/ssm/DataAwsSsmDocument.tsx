import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmDocument } from './AwsSsmDocument.tsx'

export const DataAwsSsmDocumentInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  document_format: resolvableValue(z.string().optional()),
  document_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmDocumentOutputSchema = z.object({
  arn: z.string().optional(),
  content: z.string().optional(),
  document_type: z.string().optional(),
})

export type DataAwsSsmDocumentInputProps =
  & z.input<typeof DataAwsSsmDocumentInputSchema>
  & NodeProps

export type DataAwsSsmDocumentOutputProps =
  & z.output<typeof DataAwsSsmDocumentOutputSchema>
  & z.output<typeof DataAwsSsmDocumentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssm_document

export function DataAwsSsmDocument(
  props: Partial<DataAwsSsmDocumentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSsmDocument
      _type='aws_ssm_document'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmDocumentInputSchema}
      _outputSchema={DataAwsSsmDocumentOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmDocument = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSsmDocumentOutputProps>(
    DataAwsSsmDocument,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSsmDocuments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmDocumentOutputProps>(
    DataAwsSsmDocument,
    idFilter,
    baseNode,
    optional,
  )
