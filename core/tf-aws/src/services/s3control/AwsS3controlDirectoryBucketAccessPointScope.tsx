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

export const AwsS3controlDirectoryBucketAccessPointScopeInputSchema =
  TfMetaSchema.extend({
    account_id: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    scope: resolvableValue(
      z.object({
        permissions: z.string().array().optional(),
        prefixes: z.string().array().optional(),
      }).array().optional(),
    ),
  })

export const AwsS3controlDirectoryBucketAccessPointScopeOutputSchema = z.object(
  {},
)

export type AwsS3controlDirectoryBucketAccessPointScopeInputProps =
  & z.input<typeof AwsS3controlDirectoryBucketAccessPointScopeInputSchema>
  & NodeProps

export type AwsS3controlDirectoryBucketAccessPointScopeOutputProps =
  & z.output<typeof AwsS3controlDirectoryBucketAccessPointScopeOutputSchema>
  & z.output<typeof AwsS3controlDirectoryBucketAccessPointScopeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3control_directory_bucket_access_point_scope

export function AwsS3controlDirectoryBucketAccessPointScope(
  props: Partial<AwsS3controlDirectoryBucketAccessPointScopeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_directory_bucket_access_point_scope'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3controlDirectoryBucketAccessPointScopeInputSchema}
      _outputSchema={AwsS3controlDirectoryBucketAccessPointScopeOutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlDirectoryBucketAccessPointScope = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3controlDirectoryBucketAccessPointScopeOutputProps>(
    AwsS3controlDirectoryBucketAccessPointScope,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3controlDirectoryBucketAccessPointScopes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3controlDirectoryBucketAccessPointScopeOutputProps>(
    AwsS3controlDirectoryBucketAccessPointScope,
    idFilter,
    baseNode,
    optional,
  )
