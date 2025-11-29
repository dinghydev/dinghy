import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRedshiftserverlessNamespace } from './AwsRedshiftserverlessNamespace.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/redshiftserverless_namespace

export const InputSchema = z.object({
  namespace_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  admin_username: z.string().optional(),
  arn: z.string().optional(),
  db_name: z.string().optional(),
  default_iam_role_arn: z.string().optional(),
  iam_roles: z.string().array().optional(),
  kms_key_id: z.string().optional(),
  log_exports: z.string().array().optional(),
  namespace_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRedshiftserverlessNamespace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRedshiftserverlessNamespace
      _type='aws_redshiftserverless_namespace'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRedshiftserverlessNamespace = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsRedshiftserverlessNamespace, node, id)

export const useDataAwsRedshiftserverlessNamespaces = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsRedshiftserverlessNamespace, node, id)
