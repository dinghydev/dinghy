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

export const InputSchema = z.object({
  destination_flow_config: resolvableValue(
    z.object({
      api_version: z.string().optional(),
      connector_profile_name: z.string().optional(),
      connector_type: z.string(),
      destination_connector_properties: z.object({
        custom_connector: z.object({
          custom_properties: z.record(z.string(), z.string()).optional(),
          entity_name: z.string(),
          id_field_names: z.string().array().optional(),
          write_operation_type: z.string().optional(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
        customer_profiles: z.object({
          domain_name: z.string(),
          object_type_name: z.string().optional(),
        }).optional(),
        event_bridge: z.object({
          object: z.string(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
        honeycode: z.object({
          object: z.string(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
        lookout_metrics: z.object({}).optional(),
        marketo: z.object({
          object: z.string(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
        redshift: z.object({
          bucket_prefix: z.string().optional(),
          intermediate_bucket_name: z.string(),
          object: z.string(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
        s3: z.object({
          bucket_name: z.string(),
          bucket_prefix: z.string().optional(),
          s3_output_format_config: z.object({
            file_type: z.string().optional(),
            preserve_source_data_typing: z.boolean().optional(),
            aggregation_config: z.object({
              aggregation_type: z.string().optional(),
              target_file_size: z.number().optional(),
            }).optional(),
            prefix_config: z.object({
              prefix_format: z.string().optional(),
              prefix_hierarchy: z.string().array().optional(),
              prefix_type: z.string().optional(),
            }).optional(),
          }).optional(),
        }).optional(),
        salesforce: z.object({
          data_transfer_api: z.string().optional(),
          id_field_names: z.string().array().optional(),
          object: z.string(),
          write_operation_type: z.string().optional(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
        sapo_data: z.object({
          id_field_names: z.string().array().optional(),
          object_path: z.string(),
          write_operation_type: z.string().optional(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
          success_response_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
          }).optional(),
        }).optional(),
        snowflake: z.object({
          bucket_prefix: z.string().optional(),
          intermediate_bucket_name: z.string(),
          object: z.string(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
        upsolver: z.object({
          bucket_name: z.string(),
          bucket_prefix: z.string().optional(),
          s3_output_format_config: z.object({
            file_type: z.string().optional(),
            aggregation_config: z.object({
              aggregation_type: z.string().optional(),
            }).optional(),
            prefix_config: z.object({
              prefix_format: z.string().optional(),
              prefix_hierarchy: z.string().array().optional(),
              prefix_type: z.string(),
            }),
          }),
        }).optional(),
        zendesk: z.object({
          id_field_names: z.string().array().optional(),
          object: z.string(),
          write_operation_type: z.string().optional(),
          error_handling_config: z.object({
            bucket_name: z.string().optional(),
            bucket_prefix: z.string().optional(),
            fail_on_first_destination_error: z.boolean().optional(),
          }).optional(),
        }).optional(),
      }),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  source_flow_config: resolvableValue(z.object({
    api_version: z.string().optional(),
    connector_profile_name: z.string().optional(),
    connector_type: z.string(),
    incremental_pull_config: z.object({
      datetime_type_field_name: z.string().optional(),
    }).optional(),
    source_connector_properties: z.object({
      amplitude: z.object({
        object: z.string(),
      }).optional(),
      custom_connector: z.object({
        custom_properties: z.record(z.string(), z.string()).optional(),
        entity_name: z.string(),
      }).optional(),
      datadog: z.object({
        object: z.string(),
      }).optional(),
      dynatrace: z.object({
        object: z.string(),
      }).optional(),
      google_analytics: z.object({
        object: z.string(),
      }).optional(),
      infor_nexus: z.object({
        object: z.string(),
      }).optional(),
      marketo: z.object({
        object: z.string(),
      }).optional(),
      s3: z.object({
        bucket_name: z.string(),
        bucket_prefix: z.string(),
        s3_input_format_config: z.object({
          s3_input_file_type: z.string().optional(),
        }).optional(),
      }).optional(),
      salesforce: z.object({
        data_transfer_api: z.string().optional(),
        enable_dynamic_field_update: z.boolean().optional(),
        include_deleted_records: z.boolean().optional(),
        object: z.string(),
      }).optional(),
      sapo_data: z.object({
        object_path: z.string(),
        pagination_config: z.object({
          max_page_size: z.number(),
        }).optional(),
        parallelism_config: z.object({
          max_page_size: z.number(),
        }).optional(),
      }).optional(),
      service_now: z.object({
        object: z.string(),
      }).optional(),
      singular: z.object({
        object: z.string(),
      }).optional(),
      slack: z.object({
        object: z.string(),
      }).optional(),
      trendmicro: z.object({
        object: z.string(),
      }).optional(),
      veeva: z.object({
        document_type: z.string().optional(),
        include_all_versions: z.boolean().optional(),
        include_renditions: z.boolean().optional(),
        include_source_files: z.boolean().optional(),
        object: z.string(),
      }).optional(),
      zendesk: z.object({
        object: z.string(),
      }).optional(),
    }),
  })),
  task: resolvableValue(
    z.object({
      destination_field: z.string().optional(),
      source_fields: z.string().array().optional(),
      task_properties: z.record(z.string(), z.string()).optional(),
      task_type: z.string(),
      connector_operator: z.object({
        amplitude: z.string().optional(),
        custom_connector: z.string().optional(),
        datadog: z.string().optional(),
        dynatrace: z.string().optional(),
        google_analytics: z.string().optional(),
        infor_nexus: z.string().optional(),
        marketo: z.string().optional(),
        s3: z.string().optional(),
        salesforce: z.string().optional(),
        sapo_data: z.string().optional(),
        service_now: z.string().optional(),
        singular: z.string().optional(),
        slack: z.string().optional(),
        trendmicro: z.string().optional(),
        veeva: z.string().optional(),
        zendesk: z.string().optional(),
      }).array().optional(),
    }).array(),
  ),
  trigger_config: resolvableValue(z.object({
    trigger_type: z.string(),
    trigger_properties: z.object({
      scheduled: z.object({
        data_pull_mode: z.string().optional(),
        first_execution_from: z.string().optional(),
        schedule_end_time: z.string().optional(),
        schedule_expression: z.string(),
        schedule_offset: z.number().optional(),
        schedule_start_time: z.string().optional(),
        timezone: z.string().optional(),
      }).optional(),
    }).optional(),
  })),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_arn: resolvableValue(z.string().optional()),
  metadata_catalog_config: resolvableValue(
    z.object({
      glue_data_catalog: z.object({
        database_name: z.string(),
        role_arn: z.string(),
        table_prefix: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  flow_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appflow_flow

export function AwsAppflowFlow(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appflow_flow'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsAppflowFlow = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsAppflowFlow, idFilter, baseNode)

export const useAwsAppflowFlows = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsAppflowFlow, idFilter, baseNode)
