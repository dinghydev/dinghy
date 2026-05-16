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

export const AwsS3vectorsIndexInputSchema = TfMetaSchema.extend({
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

export const AwsS3vectorsIndexOutputSchema = z.object({
  creation_time: z.string().optional(),
  index_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsS3vectorsIndexImportSchema = z.object({
  index_arn: resolvableValue(z.string()),
})

export type AwsS3vectorsIndexInputProps =
  & z.input<typeof AwsS3vectorsIndexInputSchema>
  & z.input<typeof AwsS3vectorsIndexImportSchema>
  & NodeProps

export type AwsS3vectorsIndexOutputProps =
  & z.output<typeof AwsS3vectorsIndexOutputSchema>
  & z.output<typeof AwsS3vectorsIndexInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/s3vectors_index

export function AwsS3vectorsIndex(props: Partial<AwsS3vectorsIndexInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3vectors_index'
      _category='resource'
      _title={_title}
      _inputSchema={AwsS3vectorsIndexInputSchema}
      _outputSchema={AwsS3vectorsIndexOutputSchema}
      _importSchema={AwsS3vectorsIndexImportSchema}
      {...props}
    />
  )
}

export const useAwsS3vectorsIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsS3vectorsIndexOutputProps>(
    AwsS3vectorsIndex,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsS3vectorsIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsS3vectorsIndexOutputProps>(
    AwsS3vectorsIndex,
    idFilter,
    baseNode,
    optional,
  )
