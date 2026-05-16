import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSecretsmanagerSecret } from './AwsSecretsmanagerSecret.tsx'

export const DataAwsSecretsmanagerSecretInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSecretsmanagerSecretOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  last_changed_date: z.string().optional(),
  policy: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsSecretsmanagerSecretInputProps =
  & z.input<typeof DataAwsSecretsmanagerSecretInputSchema>
  & NodeProps

export type DataAwsSecretsmanagerSecretOutputProps =
  & z.output<typeof DataAwsSecretsmanagerSecretOutputSchema>
  & z.output<typeof DataAwsSecretsmanagerSecretInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/secretsmanager_secret

export function DataAwsSecretsmanagerSecret(
  props: Partial<DataAwsSecretsmanagerSecretInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSecretsmanagerSecret
      _type='aws_secretsmanager_secret'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecretsmanagerSecretInputSchema}
      _outputSchema={DataAwsSecretsmanagerSecretOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSecretsmanagerSecret = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSecretsmanagerSecretOutputProps>(
    DataAwsSecretsmanagerSecret,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSecretsmanagerSecrets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecretsmanagerSecretOutputProps>(
    DataAwsSecretsmanagerSecret,
    idFilter,
    baseNode,
    optional,
  )
