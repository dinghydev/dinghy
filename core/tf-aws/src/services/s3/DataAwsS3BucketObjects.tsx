import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  bucket: resolvableValue(z.string()),
  delimiter: resolvableValue(z.string().optional()),
  encoding_type: resolvableValue(z.string().optional()),
  fetch_owner: resolvableValue(z.boolean().optional()),
  max_keys: resolvableValue(z.number().optional()),
  prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_after: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  common_prefixes: z.string().array().optional(),
  id: z.string().optional(),
  keys: z.string().array().optional(),
  owners: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/s3_bucket_objects

export function DataAwsS3BucketObjects(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3_bucket_objects'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsS3BucketObjectss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsS3BucketObjects,
    idFilter,
    baseNode,
    optional,
  )
