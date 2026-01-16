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
  data_type: resolvableValue(z.string()),
  dimension: resolvableValue(z.number()),
  distance_metric: resolvableValue(z.string()),
  index_name: resolvableValue(z.string()),
  vector_bucket_name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
      sse_type: z.string(),
    }).array().optional(),
  ),
  metadata_configuration: resolvableValue(
    z.object({
      non_filterable_metadata_keys: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  creation_time: z.string().optional(),
  index_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  index_arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/s3vectors_index

export function AwsS3vectorsIndex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3vectors_index'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3vectorsIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsS3vectorsIndex, idFilter, baseNode, optional)

export const useAwsS3vectorsIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsS3vectorsIndex, idFilter, baseNode, optional)
