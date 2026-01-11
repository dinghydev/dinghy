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
  namespace_name: resolvableValue(z.string()),
  admin_password_secret_kms_key_id: resolvableValue(z.string().optional()),
  admin_user_password: resolvableValue(z.string().optional()),
  admin_user_password_wo: resolvableValue(z.string().optional()),
  admin_user_password_wo_version: resolvableValue(z.number().optional()),
  admin_username: resolvableValue(z.string().optional()),
  db_name: resolvableValue(z.string().optional()),
  default_iam_role_arn: resolvableValue(z.string().optional()),
  iam_roles: resolvableValue(z.string().array().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  log_exports: resolvableValue(z.string().array().optional()),
  manage_admin_password: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  admin_password_secret_arn: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  namespace_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/redshiftserverless_namespace

export function AwsRedshiftserverlessNamespace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRedshiftserverlessNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftserverlessNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRedshiftserverlessNamespace,
    idFilter,
    baseNode,
    optional,
  )
