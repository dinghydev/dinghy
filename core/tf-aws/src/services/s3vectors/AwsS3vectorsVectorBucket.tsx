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
  vector_bucket_name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
      sse_type: z.string(),
    }).array().optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  creation_time: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vector_bucket_arn: z.string().optional(),
})

export const ImportSchema = z.object({
  vector_bucket_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_vector_bucket

export function AwsS3vectorsVectorBucket(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3vectors_vector_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3vectorsVectorBucket = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsS3vectorsVectorBucket,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3vectorsVectorBuckets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsS3vectorsVectorBucket,
    idFilter,
    baseNode,
    optional,
  )
