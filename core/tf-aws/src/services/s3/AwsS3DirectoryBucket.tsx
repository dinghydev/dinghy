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

export const AwsS3DirectoryBucketInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  data_redundancy: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  location: resolvableValue(
    z.object({
      name: z.string(),
      type: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const AwsS3DirectoryBucketOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsS3DirectoryBucketImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3DirectoryBucketInputProps =
  & z.input<typeof AwsS3DirectoryBucketInputSchema>
  & z.input<typeof AwsS3DirectoryBucketImportSchema>
  & NodeProps

export type AwsS3DirectoryBucketOutputProps =
  & z.output<typeof AwsS3DirectoryBucketOutputSchema>
  & z.output<typeof AwsS3DirectoryBucketInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_directory_bucket

export function AwsS3DirectoryBucket(
  props: Partial<AwsS3DirectoryBucketInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_directory_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3DirectoryBucketInputSchema}
      _outputSchema={AwsS3DirectoryBucketOutputSchema}
      _importSchema={AwsS3DirectoryBucketImportSchema}
      {...props}
    />
  )
}

export const useAwsS3DirectoryBucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3DirectoryBucketOutputProps>(
    AwsS3DirectoryBucket,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3DirectoryBuckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3DirectoryBucketOutputProps>(
    AwsS3DirectoryBucket,
    idFilter,
    baseNode,
    optional,
  )
