import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cleanrooms_configured_table

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  id: z.string().optional(),
  update_time: z.string().optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCleanroomsConfiguredTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cleanrooms_configured_table'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCleanroomsConfiguredTable = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCleanroomsConfiguredTable, node, id)

export const useAwsCleanroomsConfiguredTables = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCleanroomsConfiguredTable, node, id)
