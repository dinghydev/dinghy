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

export const AwsCleanroomsConfiguredTableInputSchema = TfMetaSchema.extend({
  allowed_columns: resolvableValue(z.string().array()),
  analysis_method: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  table_reference: resolvableValue(z.object({
    database_name: z.string(),
    table_name: z.string(),
  })),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCleanroomsConfiguredTableOutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  id: z.string().optional(),
  update_time: z.string().optional(),
})

export const AwsCleanroomsConfiguredTableImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCleanroomsConfiguredTableInputProps =
  & z.input<typeof AwsCleanroomsConfiguredTableInputSchema>
  & z.input<typeof AwsCleanroomsConfiguredTableImportSchema>
  & NodeProps

export type AwsCleanroomsConfiguredTableOutputProps =
  & z.output<typeof AwsCleanroomsConfiguredTableOutputSchema>
  & z.output<typeof AwsCleanroomsConfiguredTableInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cleanrooms_configured_table

export function AwsCleanroomsConfiguredTable(
  props: Partial<AwsCleanroomsConfiguredTableInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cleanrooms_configured_table'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCleanroomsConfiguredTableInputSchema}
      _outputSchema={AwsCleanroomsConfiguredTableOutputSchema}
      _importSchema={AwsCleanroomsConfiguredTableImportSchema}
      {...props}
    />
  )
}

export const useAwsCleanroomsConfiguredTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCleanroomsConfiguredTableOutputProps>(
    AwsCleanroomsConfiguredTable,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCleanroomsConfiguredTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCleanroomsConfiguredTableOutputProps>(
    AwsCleanroomsConfiguredTable,
    idFilter,
    baseNode,
    optional,
  )
