import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_directory_bucket_access_point_scope

export const InputSchema = z.object({
  account_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(
    z.object({
      permissions: z.string().array().optional(),
      prefixes: z.string().array().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlDirectoryBucketAccessPointScope(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsS3controlDirectoryBucketAccessPointScope,
    node,
    id,
  )

export const useAwsS3controlDirectoryBucketAccessPointScopes = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsS3controlDirectoryBucketAccessPointScope,
    node,
    id,
  )
