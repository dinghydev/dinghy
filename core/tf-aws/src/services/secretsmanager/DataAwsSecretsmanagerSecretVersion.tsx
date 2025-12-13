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

export const InputSchema = z.object({
  secret_id: resolvableValue(z.string()),
  version_stages: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
  version_id: resolvableValue(z.string().optional()),
  version_stage: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  secret_binary: z.string().optional(),
  secret_string: z.string().optional(),
  version_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/secretsmanager_secret_version

export function DataAwsSecretsmanagerSecretVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSecretsmanagerSecretVersion
      _type='aws_secretsmanager_secret_version'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSecretsmanagerSecretVersion = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    DataAwsSecretsmanagerSecretVersion,
    idFilter,
    baseNode,
  )

export const useDataAwsSecretsmanagerSecretVersions = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    DataAwsSecretsmanagerSecretVersion,
    idFilter,
    baseNode,
  )
