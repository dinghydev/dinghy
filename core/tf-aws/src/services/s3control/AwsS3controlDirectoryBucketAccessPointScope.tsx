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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3control_directory_bucket_access_point_scope

export function AwsS3controlDirectoryBucketAccessPointScope(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlDirectoryBucketAccessPointScope = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsS3controlDirectoryBucketAccessPointScope,
    idFilter,
    baseNode,
    optional,
  )
