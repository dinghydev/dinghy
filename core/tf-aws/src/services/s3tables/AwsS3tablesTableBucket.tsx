import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/s3tables_table_bucket

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string(),
      sse_algorithm: z.string(),
    }).optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  maintenance_configuration: resolvableValue(
    z.object({
      iceberg_unreferenced_file_removal: z.object({
        settings: z.object({
          non_current_days: z.number(),
          unreferenced_days: z.number(),
        }),
        status: z.string(),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsS3tablesTableBucket(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_s3tables_table_bucket'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsS3tablesTableBucket = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsS3tablesTableBucket, node, id)

export const useAwsS3tablesTableBuckets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsS3tablesTableBucket, node, id)
