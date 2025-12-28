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

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  access_control_policy: resolvableValue(
    z.object({
      grant: z.object({
        permission: z.string(),
        grantee: z.object({
          display_name: z.string(),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  bucket: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  acl: resolvableValue(z.string().optional()),
  expected_bucket_owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_acl

export function AwsS3BucketAcl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_acl'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketAcl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsS3BucketAcl, idFilter, baseNode, optional)

export const useAwsS3BucketAcls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsS3BucketAcl, idFilter, baseNode, optional)
