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

export const AwsS3tablesTableBucketPolicyInputSchema = TfMetaSchema.extend({
  resource_policy: resolvableValue(z.string()),
  table_bucket_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3tablesTableBucketPolicyOutputSchema = z.object({})

export const AwsS3tablesTableBucketPolicyImportSchema = z.object({
  table_bucket_arn: resolvableValue(z.string()),
})

export type AwsS3tablesTableBucketPolicyInputProps =
  & z.input<typeof AwsS3tablesTableBucketPolicyInputSchema>
  & z.input<typeof AwsS3tablesTableBucketPolicyImportSchema>
  & NodeProps

export type AwsS3tablesTableBucketPolicyOutputProps =
  & z.output<typeof AwsS3tablesTableBucketPolicyOutputSchema>
  & z.output<typeof AwsS3tablesTableBucketPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3tables_table_bucket_policy

export function AwsS3tablesTableBucketPolicy(
  props: Partial<AwsS3tablesTableBucketPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_bucket_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3tablesTableBucketPolicyInputSchema}
      _outputSchema={AwsS3tablesTableBucketPolicyOutputSchema}
      _importSchema={AwsS3tablesTableBucketPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTableBucketPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3tablesTableBucketPolicyOutputProps>(
    AwsS3tablesTableBucketPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3tablesTableBucketPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3tablesTableBucketPolicyOutputProps>(
    AwsS3tablesTableBucketPolicy,
    idFilter,
    baseNode,
    optional,
  )
