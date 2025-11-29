import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3_directory_bucket

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  data_redundancy: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  location: resolvableValue(
    z.object({
      name: z.string(),
      type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3DirectoryBucket(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_directory_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsS3DirectoryBucket = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3DirectoryBucket, node, id)

export const useAwsS3DirectoryBuckets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3DirectoryBucket, node, id)
