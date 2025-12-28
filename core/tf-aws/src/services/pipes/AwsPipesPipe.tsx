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
  role_arn: resolvableValue(z.string()),
  source: resolvableValue(z.string()),
  target: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  desired_state: resolvableValue(z.string().optional()),
  enrichment: resolvableValue(z.string().optional()),
  enrichment_parameters: resolvableValue(
    z.object({
      input_template: z.string().optional(),
      http_parameters: z.object({
        header_parameters: z.record(z.string(), z.string()).optional(),
        path_parameter_values: z.string().array().optional(),
        query_string_parameters: z.record(z.string(), z.string()).optional(),
      }).optional(),
    }).optional(),
  ),
  kms_key_identifier: resolvableValue(z.string().optional()),
  log_configuration: resolvableValue(
    z.object({
      include_execution_data: z.string().array().optional(),
      level: z.string(),
      cloudwatch_logs_log_destination: z.object({
        log_group_arn: z.string(),
      }).optional(),
      firehose_log_destination: z.object({
        delivery_stream_arn: z.string(),
      }).optional(),
      s3_log_destination: z.object({
        bucket_name: z.string(),
        bucket_owner: z.string(),
        output_format: z.string().optional(),
        prefix: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_parameters: resolvableValue(
    z.object({
      activemq_broker_parameters: z.object({
        batch_size: z.number().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        queue_name: z.string(),
        credentials: z.object({
          basic_auth: z.string(),
        }),
      }).optional(),
      dynamodb_stream_parameters: z.object({
        batch_size: z.number().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        maximum_record_age_in_seconds: z.number().optional(),
        maximum_retry_attempts: z.number().optional(),
        on_partial_batch_item_failure: z.string().optional(),
        parallelization_factor: z.number().optional(),
        starting_position: z.string(),
        dead_letter_config: z.object({
          arn: z.string().optional(),
        }).optional(),
      }).optional(),
      filter_criteria: z.object({
        filter: z.object({
          pattern: z.string(),
        }).array().optional(),
      }).optional(),
      kinesis_stream_parameters: z.object({
        batch_size: z.number().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        maximum_record_age_in_seconds: z.number().optional(),
        maximum_retry_attempts: z.number().optional(),
        on_partial_batch_item_failure: z.string().optional(),
        parallelization_factor: z.number().optional(),
        starting_position: z.string(),
        starting_position_timestamp: z.string().optional(),
        dead_letter_config: z.object({
          arn: z.string().optional(),
        }).optional(),
      }).optional(),
      managed_streaming_kafka_parameters: z.object({
        batch_size: z.number().optional(),
        consumer_group_id: z.string().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        starting_position: z.string().optional(),
        topic_name: z.string(),
        credentials: z.object({
          client_certificate_tls_auth: z.string().optional(),
          sasl_scram_512_auth: z.string().optional(),
        }).optional(),
      }).optional(),
      rabbitmq_broker_parameters: z.object({
        batch_size: z.number().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        queue_name: z.string(),
        virtual_host: z.string().optional(),
        credentials: z.object({
          basic_auth: z.string(),
        }),
      }).optional(),
      self_managed_kafka_parameters: z.object({
        additional_bootstrap_servers: z.string().array().optional(),
        batch_size: z.number().optional(),
        consumer_group_id: z.string().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        server_root_ca_certificate: z.string().optional(),
        starting_position: z.string().optional(),
        topic_name: z.string(),
        credentials: z.object({
          basic_auth: z.string().optional(),
          client_certificate_tls_auth: z.string().optional(),
          sasl_scram_256_auth: z.string().optional(),
          sasl_scram_512_auth: z.string().optional(),
        }).optional(),
        vpc: z.object({
          security_groups: z.string().array().optional(),
          subnets: z.string().array().optional(),
        }).optional(),
      }).optional(),
      sqs_queue_parameters: z.object({
        batch_size: z.number().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_parameters: resolvableValue(
    z.object({
      input_template: z.string().optional(),
      batch_job_parameters: z.object({
        job_definition: z.string(),
        job_name: z.string(),
        parameters: z.record(z.string(), z.string()).optional(),
        array_properties: z.object({
          size: z.number().optional(),
        }).optional(),
        container_overrides: z.object({
          command: z.string().array().optional(),
          instance_type: z.string().optional(),
          environment: z.object({
            name: z.string().optional(),
            value: z.string().optional(),
          }).array().optional(),
          resource_requirement: z.object({
            type: z.string(),
            value: z.string(),
          }).array().optional(),
        }).optional(),
        depends_on: z.object({
          job_id: z.string().optional(),
          type: z.string().optional(),
        }).array().optional(),
        retry_strategy: z.object({
          attempts: z.number().optional(),
        }).optional(),
      }).optional(),
      cloudwatch_logs_parameters: z.object({
        log_stream_name: z.string().optional(),
        timestamp: z.string().optional(),
      }).optional(),
      ecs_task_parameters: z.object({
        enable_ecs_managed_tags: z.boolean().optional(),
        enable_execute_command: z.boolean().optional(),
        group: z.string().optional(),
        launch_type: z.string().optional(),
        platform_version: z.string().optional(),
        propagate_tags: z.string().optional(),
        reference_id: z.string().optional(),
        tags: z.record(z.string(), z.string()).optional(),
        task_count: z.number().optional(),
        task_definition_arn: z.string(),
        capacity_provider_strategy: z.object({
          base: z.number().optional(),
          capacity_provider: z.string(),
          weight: z.number().optional(),
        }).array().optional(),
        network_configuration: z.object({
          aws_vpc_configuration: z.object({
            assign_public_ip: z.string().optional(),
            security_groups: z.string().array().optional(),
            subnets: z.string().array().optional(),
          }).optional(),
        }).optional(),
        overrides: z.object({
          cpu: z.string().optional(),
          execution_role_arn: z.string().optional(),
          memory: z.string().optional(),
          task_role_arn: z.string().optional(),
          container_override: z.object({
            command: z.string().array().optional(),
            cpu: z.number().optional(),
            memory: z.number().optional(),
            memory_reservation: z.number().optional(),
            name: z.string().optional(),
            environment: z.object({
              name: z.string().optional(),
              value: z.string().optional(),
            }).array().optional(),
            environment_file: z.object({
              type: z.string(),
              value: z.string(),
            }).array().optional(),
            resource_requirement: z.object({
              type: z.string(),
              value: z.string(),
            }).array().optional(),
          }).array().optional(),
          ephemeral_storage: z.object({
            size_in_gib: z.number(),
          }).optional(),
          inference_accelerator_override: z.object({
            device_name: z.string().optional(),
            device_type: z.string().optional(),
          }).array().optional(),
        }).optional(),
        placement_constraint: z.object({
          expression: z.string().optional(),
          type: z.string().optional(),
        }).array().optional(),
        placement_strategy: z.object({
          field: z.string().optional(),
          type: z.string().optional(),
        }).array().optional(),
      }).optional(),
      eventbridge_event_bus_parameters: z.object({
        detail_type: z.string().optional(),
        endpoint_id: z.string().optional(),
        resources: z.string().array().optional(),
        source: z.string().optional(),
        time: z.string().optional(),
      }).optional(),
      http_parameters: z.object({
        header_parameters: z.record(z.string(), z.string()).optional(),
        path_parameter_values: z.string().array().optional(),
        query_string_parameters: z.record(z.string(), z.string()).optional(),
      }).optional(),
      kinesis_stream_parameters: z.object({
        partition_key: z.string(),
      }).optional(),
      lambda_function_parameters: z.object({
        invocation_type: z.string(),
      }).optional(),
      redshift_data_parameters: z.object({
        database: z.string(),
        db_user: z.string().optional(),
        secret_manager_arn: z.string().optional(),
        sqls: z.string().array(),
        statement_name: z.string().optional(),
        with_event: z.boolean().optional(),
      }).optional(),
      sagemaker_pipeline_parameters: z.object({
        pipeline_parameter: z.object({
          name: z.string(),
          value: z.string(),
        }).array().optional(),
      }).optional(),
      sqs_queue_parameters: z.object({
        message_deduplication_id: z.string().optional(),
        message_group_id: z.string().optional(),
      }).optional(),
      step_function_state_machine_parameters: z.object({
        invocation_type: z.string(),
      }).optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/pipes_pipe

export function AwsPipesPipe(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pipes_pipe'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPipesPipe = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsPipesPipe, idFilter, baseNode, optional)

export const useAwsPipesPipes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsPipesPipe, idFilter, baseNode, optional)
