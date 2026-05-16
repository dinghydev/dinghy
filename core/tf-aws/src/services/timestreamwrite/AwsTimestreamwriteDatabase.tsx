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

export const AwsTimestreamwriteDatabaseInputSchema = TfMetaSchema.extend({
  database_name: resolvableValue(z.string()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsTimestreamwriteDatabaseOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  table_count: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsTimestreamwriteDatabaseInputProps =
  & z.input<typeof AwsTimestreamwriteDatabaseInputSchema>
  & NodeProps

export type AwsTimestreamwriteDatabaseOutputProps =
  & z.output<typeof AwsTimestreamwriteDatabaseOutputSchema>
  & z.output<typeof AwsTimestreamwriteDatabaseInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/timestreamwrite_database

export function AwsTimestreamwriteDatabase(
  props: Partial<AwsTimestreamwriteDatabaseInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_timestreamwrite_database'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTimestreamwriteDatabaseInputSchema}
      _outputSchema={AwsTimestreamwriteDatabaseOutputSchema}
      {...props}
    />
  )
}

export const useAwsTimestreamwriteDatabase = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTimestreamwriteDatabaseOutputProps>(
    AwsTimestreamwriteDatabase,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTimestreamwriteDatabases = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTimestreamwriteDatabaseOutputProps>(
    AwsTimestreamwriteDatabase,
    idFilter,
    baseNode,
    optional,
  )
