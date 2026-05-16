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

export const AwsS3BucketVersioningInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  versioning_configuration: resolvableValue(z.object({
    mfa_delete: z.string().optional(),
    status: z.string(),
  })),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  mfa: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3BucketVersioningOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsS3BucketVersioningImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketVersioningInputProps =
  & z.input<typeof AwsS3BucketVersioningInputSchema>
  & z.input<typeof AwsS3BucketVersioningImportSchema>
  & NodeProps

export type AwsS3BucketVersioningOutputProps =
  & z.output<typeof AwsS3BucketVersioningOutputSchema>
  & z.output<typeof AwsS3BucketVersioningInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_versioning

export function AwsS3BucketVersioning(
  props: Partial<AwsS3BucketVersioningInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_versioning'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketVersioningInputSchema}
      _outputSchema={AwsS3BucketVersioningOutputSchema}
      _importSchema={AwsS3BucketVersioningImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketVersioning = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketVersioningOutputProps>(
    AwsS3BucketVersioning,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketVersionings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketVersioningOutputProps>(
    AwsS3BucketVersioning,
    idFilter,
    baseNode,
    optional,
  )
