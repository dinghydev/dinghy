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

export const AwsS3vectorsVectorBucketInputSchema = TfMetaSchema.extend({
  vector_bucket_name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
      sse_type: z.string(),
    }).array().optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsS3vectorsVectorBucketOutputSchema = z.object({
  creation_time: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vector_bucket_arn: z.string().optional(),
})

export const AwsS3vectorsVectorBucketImportSchema = z.object({
  vector_bucket_arn: resolvableValue(z.string()),
})

export type AwsS3vectorsVectorBucketInputProps =
  & z.input<typeof AwsS3vectorsVectorBucketInputSchema>
  & z.input<typeof AwsS3vectorsVectorBucketImportSchema>
  & NodeProps

export type AwsS3vectorsVectorBucketOutputProps =
  & z.output<typeof AwsS3vectorsVectorBucketOutputSchema>
  & z.output<typeof AwsS3vectorsVectorBucketInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_vector_bucket

export function AwsS3vectorsVectorBucket(
  props: Partial<AwsS3vectorsVectorBucketInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3vectors_vector_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3vectorsVectorBucketInputSchema}
      _outputSchema={AwsS3vectorsVectorBucketOutputSchema}
      _importSchema={AwsS3vectorsVectorBucketImportSchema}
      {...props}
    />
  )
}

export const useAwsS3vectorsVectorBucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3vectorsVectorBucketOutputProps>(
    AwsS3vectorsVectorBucket,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3vectorsVectorBuckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3vectorsVectorBucketOutputProps>(
    AwsS3vectorsVectorBucket,
    idFilter,
    baseNode,
    optional,
  )
