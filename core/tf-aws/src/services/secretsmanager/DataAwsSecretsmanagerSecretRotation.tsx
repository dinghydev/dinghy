import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSecretsmanagerSecretRotation } from './AwsSecretsmanagerSecretRotation.tsx'

export const InputSchema = z.object({
  secret_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  rotation_enabled: z.boolean().optional(),
  rotation_lambda_arn: z.string().optional(),
  rotation_rules: z.object({
    automatically_after_days: z.number(),
    duration: z.string(),
    schedule_expression: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/secretsmanager_secret_rotation

export function DataAwsSecretsmanagerSecretRotation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSecretsmanagerSecretRotation
      _type='aws_secretsmanager_secret_rotation'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSecretsmanagerSecretRotation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsSecretsmanagerSecretRotation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSecretsmanagerSecretRotations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSecretsmanagerSecretRotation,
    idFilter,
    baseNode,
    optional,
  )
