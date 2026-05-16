import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsKmsSecretsInputSchema = TfMetaSchema.extend({
  secret: resolvableValue(
    z.object({
      context: z.record(z.string(), z.string()).optional(),
      encryption_algorithm: z.string().optional(),
      grant_tokens: z.string().array().optional(),
      key_id: z.string().optional(),
      name: z.string(),
      payload: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsKmsSecretsOutputSchema = z.object({
  plaintext: z.record(z.string(), z.string()).optional(),
})

export type DataAwsKmsSecretsInputProps =
  & z.input<typeof DataAwsKmsSecretsInputSchema>
  & NodeProps

export type DataAwsKmsSecretsOutputProps =
  & z.output<typeof DataAwsKmsSecretsOutputSchema>
  & z.output<typeof DataAwsKmsSecretsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kms_secrets

export function DataAwsKmsSecrets(props: Partial<DataAwsKmsSecretsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_secrets'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKmsSecretsInputSchema}
      _outputSchema={DataAwsKmsSecretsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsKmsSecretss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKmsSecretsOutputProps>(
    DataAwsKmsSecrets,
    idFilter,
    baseNode,
    optional,
  )
