import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  plaintext: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/ephemeral-resources/kms_secrets

export function EphemeralAwsKmsSecrets(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_secrets'
      _category='ephemeral'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useEphemeralAwsKmsSecretss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    EphemeralAwsKmsSecrets,
    idFilter,
    baseNode,
    optional,
  )
