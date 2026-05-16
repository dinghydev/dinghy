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

export const AwsS3BucketAclInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  access_control_policy: resolvableValue(
    z.object({
      grant: z.object({
        permission: z.string(),
        grantee: z.object({
          display_name: z.string().optional(),
          email_address: z.string().optional(),
          id: z.string().optional(),
          type: z.string(),
          uri: z.string().optional(),
        }).optional(),
      }).array().optional(),
      owner: z.object({
        display_name: z.string().optional(),
        id: z.string(),
      }),
    }).optional(),
  ),
  acl: resolvableValue(z.string().optional()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsS3BucketAclOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsS3BucketAclImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsS3BucketAclInputProps =
  & z.input<typeof AwsS3BucketAclInputSchema>
  & z.input<typeof AwsS3BucketAclImportSchema>
  & NodeProps

export type AwsS3BucketAclOutputProps =
  & z.output<typeof AwsS3BucketAclOutputSchema>
  & z.output<typeof AwsS3BucketAclInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3_bucket_acl

export function AwsS3BucketAcl(props: Partial<AwsS3BucketAclInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_acl'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3BucketAclInputSchema}
      _outputSchema={AwsS3BucketAclOutputSchema}
      _importSchema={AwsS3BucketAclImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3BucketAclOutputProps>(
    AwsS3BucketAcl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3BucketAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3BucketAclOutputProps>(
    AwsS3BucketAcl,
    idFilter,
    baseNode,
    optional,
  )
