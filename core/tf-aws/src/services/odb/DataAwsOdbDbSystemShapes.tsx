import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_db_system_shapes

export const InputSchema = z.object({
  availability_zone_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  db_system_shapes: z.object({
    available_core_count: z.number(),
    available_core_count_per_node: z.number(),
    available_data_storage_in_tbs: z.number(),
    available_data_storage_per_server_in_tbs: z.number(),
    available_db_node_per_node_in_gbs: z.number(),
    available_db_node_storage_in_gbs: z.number(),
    available_memory_in_gbs: z.number(),
    available_memory_per_node_in_gbs: z.number(),
    core_count_increment: z.number(),
    max_storage_count: z.number(),
    maximum_node_count: z.number(),
    min_core_count_per_node: z.number(),
    min_data_storage_in_tbs: z.number(),
    min_db_node_storage_per_node_in_gbs: z.number(),
    min_memory_per_node_in_gbs: z.number(),
    min_storage_count: z.number(),
    minimum_core_count: z.number(),
    minimum_node_count: z.number(),
    name: z.string(),
    runtime_minimum_core_count: z.number(),
    shape_family: z.string(),
    shape_type: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOdbDbSystemShapes(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_db_system_shapes'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbDbSystemShapess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsOdbDbSystemShapes, node, id)
