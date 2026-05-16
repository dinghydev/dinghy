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

export const AwsS3BucketPublicAccessBlockInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  block_public_acls: resolvableValue(z.boolean().optional()),
  block_public_policy: resolvableValue(z.boolean().optional()),
  ignore_public_acls: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  restrict_public_buckets: resolvableValue(z.boolean().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
})

export const AwsS3BucketPublicAccessBlockOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsS3BucketPublicAccessBlockImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketPublicAccessBlockInputProps =
  & z.input<typeof AwsS3BucketPublicAccessBlockInputSchema>
  & z.input<typeof AwsS3BucketPublicAccessBlockImportSchema>
  & NodeProps

export type AwsS3BucketPublicAccessBlockOutputProps =
  & z.output<typeof AwsS3BucketPublicAccessBlockOutputSchema>
  & z.output<typeof AwsS3BucketPublicAccessBlockInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_public_access_block

export function AwsS3BucketPublicAccessBlock(
  props: Partial<AwsS3BucketPublicAccessBlockInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_public_access_block'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketPublicAccessBlockInputSchema}
      _outputSchema={AwsS3BucketPublicAccessBlockOutputSchema}
      _importSchema={AwsS3BucketPublicAccessBlockImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketPublicAccessBlock = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketPublicAccessBlockOutputProps>(
    AwsS3BucketPublicAccessBlock,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketPublicAccessBlocks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketPublicAccessBlockOutputProps>(
    AwsS3BucketPublicAccessBlock,
    idFilter,
    baseNode,
    optional,
  )
