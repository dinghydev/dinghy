import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  backup_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  table_name: resolvableValue(z.string().optional()),
  time_range_lower_bound: resolvableValue(z.string().optional()),
  time_range_upper_bound: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  backup_summaries: z.object({
    backup_arn: z.string(),
    backup_creation_date_time: z.string(),
    backup_expiry_date_time: z.string(),
    backup_name: z.string(),
    backup_size_bytes: z.number(),
    backup_status: z.string(),
    backup_type: z.string(),
    table_arn: z.string(),
    table_id: z.string(),
    table_name: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dynamodb_backups

export function DataAwsDynamodbBackups(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_backups'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDynamodbBackupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsDynamodbBackups,
    idFilter,
    baseNode,
    optional,
  )
