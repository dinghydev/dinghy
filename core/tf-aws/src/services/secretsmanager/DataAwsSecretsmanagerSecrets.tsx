import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSecretsmanagerSecretsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSecretsmanagerSecretsOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsSecretsmanagerSecretsInputProps =
  & z.input<typeof DataAwsSecretsmanagerSecretsInputSchema>
  & NodeProps

export type DataAwsSecretsmanagerSecretsOutputProps =
  & z.output<typeof DataAwsSecretsmanagerSecretsOutputSchema>
  & z.output<typeof DataAwsSecretsmanagerSecretsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/secretsmanager_secrets

export function DataAwsSecretsmanagerSecrets(
  props: Partial<DataAwsSecretsmanagerSecretsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secrets'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSecretsmanagerSecretsInputSchema}
      _outputSchema={DataAwsSecretsmanagerSecretsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSecretsmanagerSecretss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSecretsmanagerSecretsOutputProps>(
    DataAwsSecretsmanagerSecrets,
    idFilter,
    baseNode,
    optional,
  )
