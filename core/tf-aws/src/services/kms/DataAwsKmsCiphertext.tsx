import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsCiphertext } from './AwsKmsCiphertext.tsx'

export const DataAwsKmsCiphertextInputSchema = TfMetaSchema.extend({
  key_id: resolvableValue(z.string()),
  plaintext: resolvableValue(z.string()),
  context: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsKmsCiphertextOutputSchema = z.object({
  ciphertext_blob: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsKmsCiphertextInputProps =
  & z.input<typeof DataAwsKmsCiphertextInputSchema>
  & NodeProps

export type DataAwsKmsCiphertextOutputProps =
  & z.output<typeof DataAwsKmsCiphertextOutputSchema>
  & z.output<typeof DataAwsKmsCiphertextInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kms_ciphertext

export function DataAwsKmsCiphertext(
  props: Partial<DataAwsKmsCiphertextInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKmsCiphertext
      _type='aws_kms_ciphertext'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKmsCiphertextInputSchema}
      _outputSchema={DataAwsKmsCiphertextOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKmsCiphertext = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKmsCiphertextOutputProps>(
    DataAwsKmsCiphertext,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKmsCiphertexts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKmsCiphertextOutputProps>(
    DataAwsKmsCiphertext,
    idFilter,
    baseNode,
    optional,
  )
