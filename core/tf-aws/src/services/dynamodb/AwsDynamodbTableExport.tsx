import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dynamodb_table_export

export const InputSchema = z.object({
  s3_bucket: resolvableValue(z.string()),
  table_arn: resolvableValue(z.string()),
  export_format: resolvableValue(z.string().optional()),
  export_time: resolvableValue(z.string().optional()),
  export_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  incremental_export_specification: resolvableValue(
    z.object({
      export_from_time: z.string().optional(),
      export_to_time: z.string().optional(),
      export_view_type: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  s3_bucket_owner: resolvableValue(z.string().optional()),
  s3_prefix: resolvableValue(z.string().optional()),
  s3_sse_algorithm: resolvableValue(z.string().optional()),
  s3_sse_kms_key_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  billed_size_in_bytes: z.number().optional(),
  end_time: z.string().optional(),
  export_status: z.string().optional(),
  item_count: z.number().optional(),
  manifest_files_s3_key: z.string().optional(),
  start_time: z.string().optional(),
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

export function AwsDynamodbTableExport(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_table_export'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbTableExport = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDynamodbTableExport, node, id)

export const useAwsDynamodbTableExports = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDynamodbTableExport, node, id)
