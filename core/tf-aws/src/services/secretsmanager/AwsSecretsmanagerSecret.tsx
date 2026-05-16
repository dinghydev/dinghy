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

export const AwsSecretsmanagerSecretInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  force_overwrite_replica_secret: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  recovery_window_in_days: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  replica: resolvableValue(
    z.object({
      kms_key_id: z.string().optional(),
      last_accessed_date: z.string().optional(),
      region: z.string(),
      status: z.string().optional(),
      status_message: z.string().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSecretsmanagerSecretOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  replica: z.object({
    kms_key_id: z.string().optional(),
    last_accessed_date: z.string().optional(),
    region: z.string(),
    status: z.string().optional(),
    status_message: z.string().optional(),
  }).array().optional().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSecretsmanagerSecretImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSecretsmanagerSecretInputProps =
  & z.input<typeof AwsSecretsmanagerSecretInputSchema>
  & z.input<typeof AwsSecretsmanagerSecretImportSchema>
  & NodeProps

export type AwsSecretsmanagerSecretOutputProps =
  & z.output<typeof AwsSecretsmanagerSecretOutputSchema>
  & z.output<typeof AwsSecretsmanagerSecretInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/secretsmanager_secret

export function AwsSecretsmanagerSecret(
  props: Partial<AwsSecretsmanagerSecretInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecretsmanagerSecretInputSchema}
      _outputSchema={AwsSecretsmanagerSecretOutputSchema}
      _importSchema={AwsSecretsmanagerSecretImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecret = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecretsmanagerSecretOutputProps>(
    AwsSecretsmanagerSecret,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecretsmanagerSecrets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecretsmanagerSecretOutputProps>(
    AwsSecretsmanagerSecret,
    idFilter,
    baseNode,
    optional,
  )
