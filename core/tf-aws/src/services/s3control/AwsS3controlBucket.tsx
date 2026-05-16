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

export const AwsS3controlBucketInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  outpost_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsS3controlBucketOutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  id: z.string().optional(),
  public_access_block_enabled: z.boolean().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsS3controlBucketImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsS3controlBucketInputProps =
  & z.input<typeof AwsS3controlBucketInputSchema>
  & z.input<typeof AwsS3controlBucketImportSchema>
  & NodeProps

export type AwsS3controlBucketOutputProps =
  & z.output<typeof AwsS3controlBucketOutputSchema>
  & z.output<typeof AwsS3controlBucketInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_bucket

export function AwsS3controlBucket(
  props: Partial<AwsS3controlBucketInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlBucketInputSchema}
      _outputSchema={AwsS3controlBucketOutputSchema}
      _importSchema={AwsS3controlBucketImportSchema}
      {...props}
    />
  )
}

export const useAwsS3controlBucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlBucketOutputProps>(
    AwsS3controlBucket,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlBuckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlBucketOutputProps>(
    AwsS3controlBucket,
    idFilter,
    baseNode,
    optional,
  )
