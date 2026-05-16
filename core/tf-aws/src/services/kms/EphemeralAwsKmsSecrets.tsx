import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const EphemeralAwsKmsSecretsInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  secret: resolvableValue(
    z.object({
      context: z.record(z.string(), z.string()).optional(),
      encryption_algorithm: z.string().optional(),
      grant_tokens: z.string().array().optional(),
      key_id: z.string().optional(),
      name: z.string(),
      payload: z.string(),
    }).array().optional(),
  ),
})

export const EphemeralAwsKmsSecretsOutputSchema = z.object({
  plaintext: z.record(z.string(), z.string()).optional(),
})

export type EphemeralAwsKmsSecretsInputProps =
  & z.input<typeof EphemeralAwsKmsSecretsInputSchema>
  & NodeProps

export type EphemeralAwsKmsSecretsOutputProps =
  & z.output<typeof EphemeralAwsKmsSecretsOutputSchema>
  & z.output<typeof EphemeralAwsKmsSecretsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/ephemeral-resources/kms_secrets

export function EphemeralAwsKmsSecrets(
  props: Partial<EphemeralAwsKmsSecretsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_secrets'
      _category='ephemeral'
      _title={_title}
      _inputSchema={EphemeralAwsKmsSecretsInputSchema}
      _outputSchema={EphemeralAwsKmsSecretsOutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsKmsSecretss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<EphemeralAwsKmsSecretsOutputProps>(
    EphemeralAwsKmsSecrets,
    idFilter,
    baseNode,
    optional,
  )
