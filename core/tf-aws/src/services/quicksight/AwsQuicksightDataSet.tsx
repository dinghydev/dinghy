import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_data_set

export const InputSchema = z.object({
  data_set_id: resolvableValue(z.string()),
  import_mode: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  column_groups: resolvableValue(
    z.object({
      geo_spatial_column_group: z.object({
        columns: z.string().array(),
        country_code: z.string(),
        name: z.string(),
      }).optional(),
    }).optional(),
  ),
  column_level_permission_rules: resolvableValue(
    z.object({
      column_names: z.string().array().optional(),
      principals: z.string().array().optional(),
    }).optional(),
  ),
  data_set_usage_configuration: resolvableValue(
    z.object({
      disable_use_as_direct_query_source: z.boolean().optional(),
      disable_use_as_imported_source: z.boolean().optional(),
    }).optional(),
  ),
  field_folders: resolvableValue(
    z.object({
      columns: z.string().array().optional(),
      description: z.string().optional(),
      field_folders_id: z.string(),
    }).array().optional(),
  ),
  logical_table_map: resolvableValue(
    z.object({
      alias: z.string(),
      logical_table_map_id: z.string(),
    }).array().optional(),
  ),
  permissions: resolvableValue(
    z.object({
      actions: z.string().array(),
      principal: z.string(),
    }).array().optional(),
  ),
  physical_table_map: resolvableValue(
    z.object({
      physical_table_map_id: z.string(),
    }).array().optional(),
  ),
  refresh_properties: resolvableValue(
    z.object({
      refresh_configuration: z.object({
        incremental_refresh: z.object({
          lookback_window: z.object({
            column_name: z.string(),
            size: z.number(),
            size_unit: z.string(),
          }),
        }),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  row_level_permission_data_set: resolvableValue(
    z.object({
      arn: z.string(),
      format_version: z.string().optional(),
      namespace: z.string().optional(),
      permission_policy: z.string(),
      status: z.string().optional(),
    }).optional(),
  ),
  row_level_permission_tag_configuration: resolvableValue(
    z.object({
      status: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  output_columns: z.object({
    description: z.string(),
    name: z.string(),
    type: z.string(),
  }).array().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightDataSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_data_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightDataSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightDataSet, node, id)

export const useAwsQuicksightDataSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightDataSet, node, id)
