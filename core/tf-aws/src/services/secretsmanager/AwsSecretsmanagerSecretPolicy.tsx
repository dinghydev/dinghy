import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/secretsmanager_secret_policy

export const InputSchema = z.object({
  policy: resolvableValue(z.string()),
  secret_arn: resolvableValue(z.string()),
  block_public_policy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  secret_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSecretsmanagerSecretPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecretPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSecretsmanagerSecretPolicy, node, id)

export const useAwsSecretsmanagerSecretPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSecretsmanagerSecretPolicy, node, id)
