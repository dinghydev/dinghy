import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSecretsmanagerSecretVersionsInputSchema = TfMetaSchema
  .extend({
    secret_id: resolvableValue(z.string()),
    include_deprecated: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsSecretsmanagerSecretVersionsOutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  versions: z.object({
    created_time: z.string(),
    last_accessed_date: z.string(),
    version_id: z.string(),
    version_stages: z.string().array(),
  }).array().optional(),
})

export type DataAwsSecretsmanagerSecretVersionsInputProps =
  & z.input<typeof DataAwsSecretsmanagerSecretVersionsInputSchema>
  & NodeProps

export type DataAwsSecretsmanagerSecretVersionsOutputProps =
  & z.output<typeof DataAwsSecretsmanagerSecretVersionsOutputSchema>
  & z.output<typeof DataAwsSecretsmanagerSecretVersionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/secretsmanager_secret_versions

export function DataAwsSecretsmanagerSecretVersions(
  props: Partial<DataAwsSecretsmanagerSecretVersionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret_versions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecretsmanagerSecretVersionsInputSchema}
      _outputSchema={DataAwsSecretsmanagerSecretVersionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecretsmanagerSecretVersionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecretsmanagerSecretVersionsOutputProps>(
    DataAwsSecretsmanagerSecretVersions,
    idFilter,
    baseNode,
    optional,
  )
