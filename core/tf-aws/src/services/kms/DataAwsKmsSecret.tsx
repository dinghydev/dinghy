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

export const DataAwsKmsSecretInputSchema = TfMetaSchema.extend({
  secret: resolvableValue(
    z.object({
      context: z.record(z.string(), z.string()).optional(),
      grant_tokens: z.string().array().optional(),
      name: z.string(),
      payload: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsKmsSecretOutputSchema = z.object({})

export type DataAwsKmsSecretInputProps =
  & z.input<typeof DataAwsKmsSecretInputSchema>
  & NodeProps

export type DataAwsKmsSecretOutputProps =
  & z.output<typeof DataAwsKmsSecretOutputSchema>
  & z.output<typeof DataAwsKmsSecretInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kms_secret

export function DataAwsKmsSecret(props: Partial<DataAwsKmsSecretInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_secret'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKmsSecretInputSchema}
      _outputSchema={DataAwsKmsSecretOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsKmsSecret = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKmsSecretOutputProps>(
    DataAwsKmsSecret,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKmsSecrets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKmsSecretOutputProps>(
    DataAwsKmsSecret,
    idFilter,
    baseNode,
    optional,
  )
