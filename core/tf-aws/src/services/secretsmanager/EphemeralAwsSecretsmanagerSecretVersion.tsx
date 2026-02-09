import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSecretsmanagerSecretVersion } from './AwsSecretsmanagerSecretVersion.tsx'

export const InputSchema = TfMetaSchema.extend({
  secret_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  version_id: resolvableValue(z.string().optional()),
  version_stage: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  secret_binary: z.string().optional(),
  secret_string: z.string().optional(),
  version_id: z.string().optional(),
  version_stages: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/ephemeral-resources/secretsmanager_secret_version

export function EphemeralAwsSecretsmanagerSecretVersion(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSecretsmanagerSecretVersion
      _type='aws_secretsmanager_secret_version'
      _category='ephemeral'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useEphemeralAwsSecretsmanagerSecretVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    EphemeralAwsSecretsmanagerSecretVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useEphemeralAwsSecretsmanagerSecretVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    EphemeralAwsSecretsmanagerSecretVersion,
    idFilter,
    baseNode,
    optional,
  )
