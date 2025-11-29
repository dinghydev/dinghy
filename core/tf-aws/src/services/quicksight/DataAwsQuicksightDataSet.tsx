import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsQuicksightDataSet } from './AwsQuicksightDataSet.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/quicksight_data_set

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  column_groups: resolvableValue(
    z.object({
      geo_spatial_column_group: z.object({
        columns: z.string().array(),
        country_code: z.string(),
        name: z.string(),
      }).array(),
    }).array(),
  ),
  column_level_permission_rules: resolvableValue(
    z.object({
      column_names: z.string().array(),
      principals: z.string().array(),
    }).array(),
  ),
  data_set_id: resolvableValue(z.string()),
  data_set_usage_configuration: resolvableValue(
    z.object({
      disable_use_as_direct_query_source: z.boolean(),
      disable_use_as_imported_source: z.boolean(),
    }).array(),
  ),
  field_folders: resolvableValue(
    z.object({
      columns: z.string().array(),
      description: z.string(),
      field_folders_id: z.string(),
    }).array(),
  ),
  import_mode: resolvableValue(z.string()),
  logical_table_map: resolvableValue(
    z.object({
      alias: z.string(),
      data_transforms: z.object({
        cast_column_type_operation: z.object({
          column_name: z.string(),
          format: z.string(),
          new_column_type: z.string(),
        }).array(),
        create_columns_operation: z.object({
          columns: z.object({
            column_id: z.string(),
            column_name: z.string(),
            expression: z.string(),
          }).array(),
        }).array(),
        filter_operation: z.object({
          condition_expression: z.string(),
        }).array(),
        project_operation: z.object({
          projected_columns: z.string().array(),
        }).array(),
        rename_column_operation: z.object({
          column_name: z.string(),
          new_column_name: z.string(),
        }).array(),
        tag_column_operation: z.object({
          column_name: z.string(),
          tags: z.object({
            column_description: z.object({
              text: z.string(),
            }).array(),
            column_geographic_role: z.string(),
          }).array(),
        }).array(),
        untag_column_operation: z.object({
          column_name: z.string(),
          tag_names: z.string().array(),
        }).array(),
      }).array(),
      logical_table_map_id: z.string(),
      source: z.object({
        data_set_arn: z.string(),
        join_instruction: z.object({
          left_join_key_properties: z.object({
            unique_key: z.boolean(),
          }).array(),
          left_operand: z.string(),
          on_clause: z.string(),
          right_join_key_properties: z.object({
            unique_key: z.boolean(),
          }).array(),
          right_operand: z.string(),
          type: z.string(),
        }).array(),
        physical_table_id: z.string(),
      }).array(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  permissions: resolvableValue(
    z.object({
      actions: z.string().array(),
      principal: z.string(),
    }).array(),
  ),
  physical_table_map: resolvableValue(
    z.object({
      custom_sql: z.object({
        columns: z.object({
          name: z.string(),
          type: z.string(),
        }).array(),
        data_source_arn: z.string(),
        name: z.string(),
        sql_query: z.string(),
      }).array(),
      physical_table_map_id: z.string(),
      relational_table: z.object({
        catalog: z.string(),
        data_source_arn: z.string(),
        input_columns: z.object({
          name: z.string(),
          type: z.string(),
        }).array(),
        name: z.string(),
        schema: z.string(),
      }).array(),
      s3_source: z.object({
        data_source_arn: z.string(),
        input_columns: z.object({
          name: z.string(),
          type: z.string(),
        }).array(),
        upload_settings: z.object({
          contains_header: z.boolean(),
          delimiter: z.string(),
          format: z.string(),
          start_from_row: z.number(),
          text_qualifier: z.string(),
        }).array(),
      }).array(),
    }).array(),
  ),
  row_level_permission_data_set: resolvableValue(
    z.object({
      arn: z.string(),
      format_version: z.string(),
      namespace: z.string(),
      permission_policy: z.string(),
      status: z.string(),
    }).array(),
  ),
  row_level_permission_tag_configuration: resolvableValue(
    z.object({
      status: z.string(),
      tag_rules: z.object({
        column_name: z.string(),
        match_all_value: z.string(),
        tag_key: z.string(),
        tag_multi_value_delimiter: z.string(),
      }).array(),
    }).array(),
  ),
  aws_account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsQuicksightDataSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsQuicksightDataSet
      _type='aws_quicksight_data_set'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsQuicksightDataSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsQuicksightDataSet, node, id)

export const useDataAwsQuicksightDataSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsQuicksightDataSet, node, id)
