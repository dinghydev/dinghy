import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsS3DirectoryBucketsInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3DirectoryBucketsOutputSchema = z.object({
  arns: z.string().array().optional(),
  buckets: z.string().array().optional(),
  id: z.string().optional(),
})

export type DataAwsS3DirectoryBucketsInputProps =
  & z.input<typeof DataAwsS3DirectoryBucketsInputSchema>
  & NodeProps

export type DataAwsS3DirectoryBucketsOutputProps =
  & z.output<typeof DataAwsS3DirectoryBucketsOutputSchema>
  & z.output<typeof DataAwsS3DirectoryBucketsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_directory_buckets

export function DataAwsS3DirectoryBuckets(
  props: Partial<DataAwsS3DirectoryBucketsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_directory_buckets'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3DirectoryBucketsInputSchema}
      _outputSchema={DataAwsS3DirectoryBucketsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsS3DirectoryBucketss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3DirectoryBucketsOutputProps>(
    DataAwsS3DirectoryBuckets,
    idFilter,
    baseNode,
    optional,
  )
