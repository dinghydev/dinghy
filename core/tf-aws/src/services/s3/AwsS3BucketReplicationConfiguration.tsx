import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_bucket_replication_configuration

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  role: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(z.object({
    id: z.string().optional(),
    prefix: z.string().optional(),
    priority: z.number().optional(),
    status: z.string(),
  })),
  token: resolvableValue(z.string().optional()),
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

export function AwsS3BucketReplicationConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_replication_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3BucketReplicationConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsS3BucketReplicationConfiguration, node, id)

export const useAwsS3BucketReplicationConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsS3BucketReplicationConfiguration, node, id)
