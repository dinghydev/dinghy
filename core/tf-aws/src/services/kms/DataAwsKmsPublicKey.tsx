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

export const DataAwsKmsPublicKeyInputSchema = TfMetaSchema.extend({
  key_id: resolvableValue(z.string()),
  grant_tokens: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsKmsPublicKeyOutputSchema = z.object({
  arn: z.string().optional(),
  customer_master_key_spec: z.string().optional(),
  encryption_algorithms: z.string().array().optional(),
  id: z.string().optional(),
  key_usage: z.string().optional(),
  public_key: z.string().optional(),
  public_key_pem: z.string().optional(),
  signing_algorithms: z.string().array().optional(),
})

export type DataAwsKmsPublicKeyInputProps =
  & z.input<typeof DataAwsKmsPublicKeyInputSchema>
  & NodeProps

export type DataAwsKmsPublicKeyOutputProps =
  & z.output<typeof DataAwsKmsPublicKeyOutputSchema>
  & z.output<typeof DataAwsKmsPublicKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kms_public_key

export function DataAwsKmsPublicKey(
  props: Partial<DataAwsKmsPublicKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_public_key'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKmsPublicKeyInputSchema}
      _outputSchema={DataAwsKmsPublicKeyOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsKmsPublicKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKmsPublicKeyOutputProps>(
    DataAwsKmsPublicKey,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKmsPublicKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKmsPublicKeyOutputProps>(
    DataAwsKmsPublicKey,
    idFilter,
    baseNode,
    optional,
  )
