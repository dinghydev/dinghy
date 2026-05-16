import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsS3Bucket } from './AwsS3Bucket.tsx'

export const DataAwsS3BucketInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsS3BucketOutputSchema = z.object({
  arn: z.string().optional(),
  bucket_domain_name: z.string().optional(),
  bucket_region: z.string().optional(),
  bucket_regional_domain_name: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  website_domain: z.string().optional(),
  website_endpoint: z.string().optional(),
})

export type DataAwsS3BucketInputProps =
  & z.input<typeof DataAwsS3BucketInputSchema>
  & NodeProps

export type DataAwsS3BucketOutputProps =
  & z.output<typeof DataAwsS3BucketOutputSchema>
  & z.output<typeof DataAwsS3BucketInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_bucket

export function DataAwsS3Bucket(props: Partial<DataAwsS3BucketInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsS3Bucket
      _type='aws_s3_bucket'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3BucketInputSchema}
      _outputSchema={DataAwsS3BucketOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsS3Bucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsS3BucketOutputProps>(
    DataAwsS3Bucket,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsS3Buckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3BucketOutputProps>(
    DataAwsS3Bucket,
    idFilter,
    baseNode,
    optional,
  )
