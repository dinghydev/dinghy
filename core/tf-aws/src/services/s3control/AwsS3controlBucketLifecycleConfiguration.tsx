import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3control_bucket_lifecycle_configuration

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      id: z.string(),
      status: z.string().optional(),
    }).array(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3controlBucketLifecycleConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3control_bucket_lifecycle_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3controlBucketLifecycleConfiguration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsS3controlBucketLifecycleConfiguration, node, id)

export const useAwsS3controlBucketLifecycleConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsS3controlBucketLifecycleConfiguration, node, id)
