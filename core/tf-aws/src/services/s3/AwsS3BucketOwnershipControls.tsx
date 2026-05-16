import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsS3BucketOwnershipControlsInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  rule: resolvableValue(z.object({
    object_ownership: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3BucketOwnershipControlsOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsS3BucketOwnershipControlsImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketOwnershipControlsInputProps =
  & z.input<typeof AwsS3BucketOwnershipControlsInputSchema>
  & z.input<typeof AwsS3BucketOwnershipControlsImportSchema>
  & NodeProps

export type AwsS3BucketOwnershipControlsOutputProps =
  & z.output<typeof AwsS3BucketOwnershipControlsOutputSchema>
  & z.output<typeof AwsS3BucketOwnershipControlsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_ownership_controls

export function AwsS3BucketOwnershipControls(
  props: Partial<AwsS3BucketOwnershipControlsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_ownership_controls'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketOwnershipControlsInputSchema}
      _outputSchema={AwsS3BucketOwnershipControlsOutputSchema}
      _importSchema={AwsS3BucketOwnershipControlsImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketOwnershipControlss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketOwnershipControlsOutputProps>(
    AwsS3BucketOwnershipControls,
    idFilter,
    baseNode,
    optional,
  )
