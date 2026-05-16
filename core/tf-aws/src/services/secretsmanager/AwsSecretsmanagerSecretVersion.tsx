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

export const AwsSecretsmanagerSecretVersionInputSchema = TfMetaSchema.extend({
  secret_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  secret_binary: resolvableValue(z.string().optional()),
  secret_string: resolvableValue(z.string().optional()),
  secret_string_wo: resolvableValue(z.string().optional()),
  secret_string_wo_version: resolvableValue(z.number().optional()),
  version_stages: resolvableValue(z.string().array().optional()),
})

export const AwsSecretsmanagerSecretVersionOutputSchema = z.object({
  arn: z.string().optional(),
  has_secret_string_wo: z.boolean().optional(),
  id: z.string().optional(),
  version_id: z.string().optional(),
})

export const AwsSecretsmanagerSecretVersionImportSchema = z.object({
  secret_id: resolvableValue(z.string()),
  version_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSecretsmanagerSecretVersionInputProps =
  & z.input<typeof AwsSecretsmanagerSecretVersionInputSchema>
  & z.input<typeof AwsSecretsmanagerSecretVersionImportSchema>
  & NodeProps

export type AwsSecretsmanagerSecretVersionOutputProps =
  & z.output<typeof AwsSecretsmanagerSecretVersionOutputSchema>
  & z.output<typeof AwsSecretsmanagerSecretVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/secretsmanager_secret_version

export function AwsSecretsmanagerSecretVersion(
  props: Partial<AwsSecretsmanagerSecretVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecretsmanagerSecretVersionInputSchema}
      _outputSchema={AwsSecretsmanagerSecretVersionOutputSchema}
      _importSchema={AwsSecretsmanagerSecretVersionImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecretVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecretsmanagerSecretVersionOutputProps>(
    AwsSecretsmanagerSecretVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecretsmanagerSecretVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecretsmanagerSecretVersionOutputProps>(
    AwsSecretsmanagerSecretVersion,
    idFilter,
    baseNode,
    optional,
  )
