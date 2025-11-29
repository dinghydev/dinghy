import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/secretsmanager_secret_version

export const InputSchema = z.object({
  has_secret_string_wo: resolvableValue(z.boolean()),
  secret_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  secret_binary: resolvableValue(z.string().optional()),
  secret_string: resolvableValue(z.string().optional()),
  secret_string_wo: resolvableValue(z.string().optional()),
  secret_string_wo_version: resolvableValue(z.number().optional()),
  version_stages: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  version_id: z.string().optional(),
})

export const ImportSchema = z.object({
  secret_id: resolvableValue(z.string()),
  version_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSecretsmanagerSecretVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecretVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSecretsmanagerSecretVersion, node, id)

export const useAwsSecretsmanagerSecretVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSecretsmanagerSecretVersion, node, id)
