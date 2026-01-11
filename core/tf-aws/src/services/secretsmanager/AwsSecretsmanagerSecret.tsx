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

export const InputSchema = z.object({
  description: resolvableValue(z.string().optional()),
  force_overwrite_replica_secret: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  recovery_window_in_days: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  replica: resolvableValue(
    z.object({
      kms_key_id: z.string().optional(),
      last_accessed_date: z.string(),
      region: z.string(),
      status: z.string(),
      status_message: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  replica: z.object({
    kms_key_id: z.string().optional(),
    last_accessed_date: z.string(),
    region: z.string(),
    status: z.string(),
    status_message: z.string(),
  }).array().optional().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/secretsmanager_secret

export function AwsSecretsmanagerSecret(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_secretsmanager_secret'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecretsmanagerSecret = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSecretsmanagerSecret,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecretsmanagerSecrets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSecretsmanagerSecret,
    idFilter,
    baseNode,
    optional,
  )
