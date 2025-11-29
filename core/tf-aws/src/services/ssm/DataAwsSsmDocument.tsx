import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmDocument } from './AwsSsmDocument.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssm_document

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  document_format: resolvableValue(z.string().optional()),
  document_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  content: z.string().optional(),
  document_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSsmDocument(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsmDocument
      _type='aws_ssm_document'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmDocument = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSsmDocument, node, id)

export const useDataAwsSsmDocuments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSsmDocument, node, id)
