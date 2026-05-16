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

export const AwsSecretsmanagerSecretRotationInputSchema = TfMetaSchema.extend({
  rotation_rules: resolvableValue(z.object({
    automatically_after_days: z.number().optional(),
    duration: z.string().optional(),
    schedule_expression: z.string().optional(),
  })),
  secret_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rotate_immediately: resolvableValue(z.boolean().optional()),
  rotation_lambda_arn: resolvableValue(z.string().optional()),
})

export const AwsSecretsmanagerSecretRotationOutputSchema = z.object({
  id: z.string().optional(),
  rotation_enabled: z.boolean().optional(),
})

export const AwsSecretsmanagerSecretRotationImportSchema = z.object({
  secret_id: resolvableValue(z.string()),
})

export type AwsSecretsmanagerSecretRotationInputProps =
  & z.input<typeof AwsSecretsmanagerSecretRotationInputSchema>
  & z.input<typeof AwsSecretsmanagerSecretRotationImportSchema>
  & NodeProps

export type AwsSecretsmanagerSecretRotationOutputProps =
  & z.output<typeof AwsSecretsmanagerSecretRotationOutputSchema>
  & z.output<typeof AwsSecretsmanagerSecretRotationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/secretsmanager_secret_rotation

export function AwsSecretsmanagerSecretRotation(
  props: Partial<AwsSecretsmanagerSecretRotationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret_rotation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecretsmanagerSecretRotationInputSchema}
      _outputSchema={AwsSecretsmanagerSecretRotationOutputSchema}
      _importSchema={AwsSecretsmanagerSecretRotationImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecretRotation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecretsmanagerSecretRotationOutputProps>(
    AwsSecretsmanagerSecretRotation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecretsmanagerSecretRotations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecretsmanagerSecretRotationOutputProps>(
    AwsSecretsmanagerSecretRotation,
    idFilter,
    baseNode,
    optional,
  )
