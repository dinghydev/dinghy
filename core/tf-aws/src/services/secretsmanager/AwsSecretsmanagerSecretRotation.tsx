import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/secretsmanager_secret_rotation

export const InputSchema = z.object({
  secret_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rotate_immediately: resolvableValue(z.boolean().optional()),
  rotation_lambda_arn: resolvableValue(z.string().optional()),
  rotation_rules: resolvableValue(z.object({
    automatically_after_days: z.number().optional(),
    duration: z.string().optional(),
    schedule_expression: z.string().optional(),
  })),
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

export function AwsSecretsmanagerSecretRotation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsSecretsmanagerSecretRotation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSecretsmanagerSecretRotation, node, id)

export const useAwsSecretsmanagerSecretRotations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSecretsmanagerSecretRotation, node, id)
