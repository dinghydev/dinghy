import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsTimestreamwriteDatabase } from './AwsTimestreamwriteDatabase.tsx'

export const DataAwsTimestreamwriteDatabaseInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsTimestreamwriteDatabaseOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  kms_key_id: z.string().optional(),
  last_updated_time: z.string().optional(),
  table_count: z.number().optional(),
})

export type DataAwsTimestreamwriteDatabaseInputProps =
  & z.input<typeof DataAwsTimestreamwriteDatabaseInputSchema>
  & NodeProps

export type DataAwsTimestreamwriteDatabaseOutputProps =
  & z.output<typeof DataAwsTimestreamwriteDatabaseOutputSchema>
  & z.output<typeof DataAwsTimestreamwriteDatabaseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/timestreamwrite_database

export function DataAwsTimestreamwriteDatabase(
  props: Partial<DataAwsTimestreamwriteDatabaseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsTimestreamwriteDatabase
      _type='aws_timestreamwrite_database'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsTimestreamwriteDatabaseInputSchema}
      _outputSchema={DataAwsTimestreamwriteDatabaseOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsTimestreamwriteDatabase = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsTimestreamwriteDatabaseOutputProps>(
    DataAwsTimestreamwriteDatabase,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsTimestreamwriteDatabases = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsTimestreamwriteDatabaseOutputProps>(
    DataAwsTimestreamwriteDatabase,
    idFilter,
    baseNode,
    optional,
  )
