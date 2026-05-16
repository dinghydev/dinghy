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

export const AwsDynamodbTableExportInputSchema = TfMetaSchema.extend({
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

export const AwsDynamodbTableExportOutputSchema = z.object({
  arn: z.string().optional(),
  billed_size_in_bytes: z.number().optional(),
  end_time: z.string().optional(),
  export_status: z.string().optional(),
  item_count: z.number().optional(),
  manifest_files_s3_key: z.string().optional(),
  start_time: z.string().optional(),
})

export const AwsDynamodbTableExportImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsDynamodbTableExportInputProps =
  & z.input<typeof AwsDynamodbTableExportInputSchema>
  & z.input<typeof AwsDynamodbTableExportImportSchema>
  & NodeProps

export type AwsDynamodbTableExportOutputProps =
  & z.output<typeof AwsDynamodbTableExportOutputSchema>
  & z.output<typeof AwsDynamodbTableExportInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dynamodb_table_export

export function AwsDynamodbTableExport(
  props: Partial<AwsDynamodbTableExportInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_table_export'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDynamodbTableExportInputSchema}
      _outputSchema={AwsDynamodbTableExportOutputSchema}
      _importSchema={AwsDynamodbTableExportImportSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbTableExport = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDynamodbTableExportOutputProps>(
    AwsDynamodbTableExport,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbTableExports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDynamodbTableExportOutputProps>(
    AwsDynamodbTableExport,
    idFilter,
    baseNode,
    optional,
  )
