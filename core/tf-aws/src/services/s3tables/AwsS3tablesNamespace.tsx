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

export const AwsS3tablesNamespaceInputSchema = TfMetaSchema.extend({
  namespace: resolvableValue(z.string()),
  table_bucket_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3tablesNamespaceOutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  owner_account_id: z.string().optional(),
})

export type AwsS3tablesNamespaceInputProps =
  & z.input<typeof AwsS3tablesNamespaceInputSchema>
  & NodeProps

export type AwsS3tablesNamespaceOutputProps =
  & z.output<typeof AwsS3tablesNamespaceOutputSchema>
  & z.output<typeof AwsS3tablesNamespaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3tables_namespace

export function AwsS3tablesNamespace(
  props: Partial<AwsS3tablesNamespaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_namespace'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3tablesNamespaceInputSchema}
      _outputSchema={AwsS3tablesNamespaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesNamespace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3tablesNamespaceOutputProps>(
    AwsS3tablesNamespace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3tablesNamespaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3tablesNamespaceOutputProps>(
    AwsS3tablesNamespace,
    idFilter,
    baseNode,
    optional,
  )
