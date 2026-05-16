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

export const AwsKmsCiphertextInputSchema = TfMetaSchema.extend({
  key_id: resolvableValue(z.string()),
  context: resolvableValue(z.record(z.string(), z.string()).optional()),
  id: resolvableValue(z.string().optional()),
  plaintext: resolvableValue(z.string().optional()),
  plaintext_wo: resolvableValue(z.string().optional()),
  plaintext_wo_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsKmsCiphertextOutputSchema = z.object({
  ciphertext_blob: z.string().optional(),
})

export type AwsKmsCiphertextInputProps =
  & z.input<typeof AwsKmsCiphertextInputSchema>
  & NodeProps

export type AwsKmsCiphertextOutputProps =
  & z.output<typeof AwsKmsCiphertextOutputSchema>
  & z.output<typeof AwsKmsCiphertextInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kms_ciphertext

export function AwsKmsCiphertext(props: Partial<AwsKmsCiphertextInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_ciphertext'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKmsCiphertextInputSchema}
      _outputSchema={AwsKmsCiphertextOutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsCiphertext = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKmsCiphertextOutputProps>(
    AwsKmsCiphertext,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKmsCiphertexts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKmsCiphertextOutputProps>(
    AwsKmsCiphertext,
    idFilter,
    baseNode,
    optional,
  )
