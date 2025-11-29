import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/keyspaces_table

export const InputSchema = z.object({
  keyspace_name: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  capacity_specification: resolvableValue(
    z.object({
      read_capacity_units: z.number().optional(),
      throughput_mode: z.string().optional(),
      write_capacity_units: z.number().optional(),
    }).optional(),
  ),
  client_side_timestamps: resolvableValue(
    z.object({
      status: z.string(),
    }).optional(),
  ),
  comment: resolvableValue(
    z.object({
      message: z.string().optional(),
    }).optional(),
  ),
  default_time_to_live: resolvableValue(z.number().optional()),
  encryption_specification: resolvableValue(
    z.object({
      kms_key_identifier: z.string().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  point_in_time_recovery: resolvableValue(
    z.object({
      status: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schema_definition: resolvableValue(z.object({
    clustering_key: z.object({
      name: z.string(),
      order_by: z.string(),
    }).optional(),
    column: z.object({
      name: z.string(),
      type: z.string(),
    }).array(),
    partition_key: z.object({
      name: z.string(),
    }),
    static_column: z.object({
      name: z.string(),
    }).array().optional(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  ttl: resolvableValue(
    z.object({
      status: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKeyspacesTable(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_keyspaces_table'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKeyspacesTable = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKeyspacesTable, node, id)

export const useAwsKeyspacesTables = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKeyspacesTable, node, id)
