import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsS3BucketObjectsInputSchema = TfMetaSchema.extend({
  bucket: resolvableValue(z.string()),
  delimiter: resolvableValue(z.string().optional()),
  encoding_type: resolvableValue(z.string().optional()),
  fetch_owner: resolvableValue(z.boolean().optional()),
  max_keys: resolvableValue(z.number().optional()),
  prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_after: resolvableValue(z.string().optional()),
})

export const DataAwsS3BucketObjectsOutputSchema = z.object({
  common_prefixes: z.string().array().optional(),
  id: z.string().optional(),
  keys: z.string().array().optional(),
  owners: z.string().array().optional(),
})

export type DataAwsS3BucketObjectsInputProps =
  & z.input<typeof DataAwsS3BucketObjectsInputSchema>
  & NodeProps

export type DataAwsS3BucketObjectsOutputProps =
  & z.output<typeof DataAwsS3BucketObjectsOutputSchema>
  & z.output<typeof DataAwsS3BucketObjectsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/s3_bucket_objects

export function DataAwsS3BucketObjects(
  props: Partial<DataAwsS3BucketObjectsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_objects'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsS3BucketObjectsInputSchema}
      _outputSchema={DataAwsS3BucketObjectsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsS3BucketObjectss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsS3BucketObjectsOutputProps>(
    DataAwsS3BucketObjects,
    idFilter,
    baseNode,
    optional,
  )
