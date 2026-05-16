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

export const AwsS3vectorsVectorBucketPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  vector_bucket_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3vectorsVectorBucketPolicyOutputSchema = z.object({})

export const AwsS3vectorsVectorBucketPolicyImportSchema = z.object({
  vector_bucket_arn: resolvableValue(z.string()),
})

export type AwsS3vectorsVectorBucketPolicyInputProps =
  & z.input<typeof AwsS3vectorsVectorBucketPolicyInputSchema>
  & z.input<typeof AwsS3vectorsVectorBucketPolicyImportSchema>
  & NodeProps

export type AwsS3vectorsVectorBucketPolicyOutputProps =
  & z.output<typeof AwsS3vectorsVectorBucketPolicyOutputSchema>
  & z.output<typeof AwsS3vectorsVectorBucketPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket_policy

export function AwsS3vectorsVectorBucketPolicy(
  props: Partial<AwsS3vectorsVectorBucketPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3vectors_vector_bucket_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3vectorsVectorBucketPolicyInputSchema}
      _outputSchema={AwsS3vectorsVectorBucketPolicyOutputSchema}
      _importSchema={AwsS3vectorsVectorBucketPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsS3vectorsVectorBucketPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3vectorsVectorBucketPolicyOutputProps>(
    AwsS3vectorsVectorBucketPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3vectorsVectorBucketPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3vectorsVectorBucketPolicyOutputProps>(
    AwsS3vectorsVectorBucketPolicy,
    idFilter,
    baseNode,
    optional,
  )
