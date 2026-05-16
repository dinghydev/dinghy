import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRedshiftserverlessNamespace } from './AwsRedshiftserverlessNamespace.tsx'

export const DataAwsRedshiftserverlessNamespaceInputSchema = TfMetaSchema
  .extend({
    namespace_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsRedshiftserverlessNamespaceOutputSchema = z.object({
  admin_username: z.string().optional(),
  arn: z.string().optional(),
  db_name: z.string().optional(),
  default_iam_role_arn: z.string().optional(),
  iam_roles: z.set(z.string()).optional(),
  kms_key_id: z.string().optional(),
  log_exports: z.set(z.string()).optional(),
  namespace_id: z.string().optional(),
})

export type DataAwsRedshiftserverlessNamespaceInputProps =
  & z.input<typeof DataAwsRedshiftserverlessNamespaceInputSchema>
  & NodeProps

export type DataAwsRedshiftserverlessNamespaceOutputProps =
  & z.output<typeof DataAwsRedshiftserverlessNamespaceOutputSchema>
  & z.output<typeof DataAwsRedshiftserverlessNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/redshiftserverless_namespace

export function DataAwsRedshiftserverlessNamespace(
  props: Partial<DataAwsRedshiftserverlessNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRedshiftserverlessNamespace
      _type='aws_redshiftserverless_namespace'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRedshiftserverlessNamespaceInputSchema}
      _outputSchema={DataAwsRedshiftserverlessNamespaceOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRedshiftserverlessNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRedshiftserverlessNamespaceOutputProps>(
    DataAwsRedshiftserverlessNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRedshiftserverlessNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRedshiftserverlessNamespaceOutputProps>(
    DataAwsRedshiftserverlessNamespace,
    idFilter,
    baseNode,
    optional,
  )
