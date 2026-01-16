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

export const InputSchema = TfMetaSchema.extend({
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
    }).array().optional(),
  ),
  column_level_permission_rules: resolvableValue(
    z.object({
      column_names: z.string().array().optional(),
      principals: z.string().array().optional(),
    }).array().optional(),
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
      data_transforms: z.object({
        cast_column_type_operation: z.object({
          column_name: z.string(),
          format: z.string().optional(),
          new_column_type: z.string(),
        }).optional(),
        create_columns_operation: z.object({
          columns: z.object({
            column_id: z.string(),
            column_name: z.string(),
            expression: z.string(),
          }).array(),
        }).optional(),
        filter_operation: z.object({
          condition_expression: z.string(),
        }).optional(),
        project_operation: z.object({
          projected_columns: z.string().array(),
        }).optional(),
        rename_column_operation: z.object({
          column_name: z.string(),
          new_column_name: z.string(),
        }).optional(),
        tag_column_operation: z.object({
          column_name: z.string(),
          tags: z.object({
            column_geographic_role: z.string().optional(),
            column_description: z.object({
              text: z.string().optional(),
            }).optional(),
          }).array(),
        }).optional(),
        untag_column_operation: z.object({
          column_name: z.string(),
          tag_names: z.string().array(),
        }).optional(),
      }).array().optional(),
      source: z.object({
        data_set_arn: z.string().optional(),
        physical_table_id: z.string().optional(),
        join_instruction: z.object({
          left_operand: z.string(),
          on_clause: z.string(),
          right_operand: z.string(),
          type: z.string(),
          left_join_key_properties: z.object({
            unique_key: z.boolean().optional(),
          }).optional(),
          right_join_key_properties: z.object({
            unique_key: z.boolean().optional(),
          }).optional(),
        }).optional(),
      }),
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
      custom_sql: z.object({
        data_source_arn: z.string(),
        name: z.string(),
        sql_query: z.string(),
        columns: z.object({
          name: z.string(),
          type: z.string(),
        }).array().optional(),
      }).optional(),
      relational_table: z.object({
        catalog: z.string().optional(),
        data_source_arn: z.string(),
        name: z.string(),
        schema: z.string().optional(),
        input_columns: z.object({
          name: z.string(),
          type: z.string(),
        }).array(),
      }).optional(),
      s3_source: z.object({
        data_source_arn: z.string(),
        input_columns: z.object({
          name: z.string(),
          type: z.string(),
        }).array(),
        upload_settings: z.object({
          contains_header: z.boolean().optional(),
          delimiter: z.string().optional(),
          format: z.string().optional(),
          start_from_row: z.number().optional(),
          text_qualifier: z.string().optional(),
        }),
      }).optional(),
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
      tag_rules: z.object({
        column_name: z.string(),
        match_all_value: z.string().optional(),
        tag_key: z.string(),
        tag_multi_value_delimiter: z.string().optional(),
      }).array(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/quicksight_data_set

export function AwsQuicksightDataSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsQuicksightDataSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsQuicksightDataSet, idFilter, baseNode, optional)

export const useAwsQuicksightDataSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsQuicksightDataSet, idFilter, baseNode, optional)
