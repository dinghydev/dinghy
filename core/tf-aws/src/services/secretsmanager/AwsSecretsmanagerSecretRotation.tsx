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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({
  id: z.string().optional(),
  rotation_enabled: z.boolean().optional(),
})

export const ImportSchema = z.object({
  secret_id: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/secretsmanager_secret_rotation

export function AwsSecretsmanagerSecretRotation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret_rotation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecretRotation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSecretsmanagerSecretRotation,
    idFilter,
    baseNode,
    optional,
  )
