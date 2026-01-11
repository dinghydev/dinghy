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
  function_name: resolvableValue(z.string()),
  amazon_managed_kafka_event_source_config: resolvableValue(
    z.object({
      consumer_group_id: z.string().optional(),
      schema_registry_config: z.object({
        event_record_format: z.string().optional(),
        schema_registry_uri: z.string().optional(),
        access_config: z.object({
          type: z.string().optional(),
          uri: z.string().optional(),
        }).array().optional(),
        schema_validation_config: z.object({
          attribute: z.string().optional(),
        }).array().optional(),
      }).optional(),
    }).optional(),
  ),
  batch_size: resolvableValue(z.number().optional()),
  bisect_batch_on_function_error: resolvableValue(z.boolean().optional()),
  destination_config: resolvableValue(
    z.object({
      on_failure: z.object({
        destination_arn: z.string(),
      }).optional(),
    }).optional(),
  ),
  document_db_event_source_config: resolvableValue(
    z.object({
      collection_name: z.string().optional(),
      database_name: z.string(),
      full_document: z.string().optional(),
    }).optional(),
  ),
  enabled: resolvableValue(z.boolean().optional()),
  event_source_arn: resolvableValue(z.string().optional()),
  filter_criteria: resolvableValue(
    z.object({
      filter: z.object({
        pattern: z.string().optional(),
      }).array().optional(),
    }).optional(),
  ),
  function_response_types: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  maximum_batching_window_in_seconds: resolvableValue(z.number().optional()),
  maximum_record_age_in_seconds: resolvableValue(z.number().optional()),
  maximum_retry_attempts: resolvableValue(z.number().optional()),
  metrics_config: resolvableValue(
    z.object({
      metrics: z.string().array(),
    }).optional(),
  ),
  parallelization_factor: resolvableValue(z.number().optional()),
  provisioned_poller_config: resolvableValue(
    z.object({
      maximum_pollers: z.number().optional(),
      minimum_pollers: z.number().optional(),
      poller_group_name: z.string().optional(),
    }).optional(),
  ),
  queues: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  scaling_config: resolvableValue(
    z.object({
      maximum_concurrency: z.number().optional(),
    }).optional(),
  ),
  self_managed_event_source: resolvableValue(
    z.object({
      endpoints: z.record(z.string(), z.string()),
    }).optional(),
  ),
  self_managed_kafka_event_source_config: resolvableValue(
    z.object({
      consumer_group_id: z.string().optional(),
      schema_registry_config: z.object({
        event_record_format: z.string().optional(),
        schema_registry_uri: z.string().optional(),
        access_config: z.object({
          type: z.string().optional(),
          uri: z.string().optional(),
        }).array().optional(),
        schema_validation_config: z.object({
          attribute: z.string().optional(),
        }).array().optional(),
      }).optional(),
    }).optional(),
  ),
  source_access_configuration: resolvableValue(
    z.object({
      type: z.string(),
      uri: z.string(),
    }).array().optional(),
  ),
  starting_position: resolvableValue(z.string().optional()),
  starting_position_timestamp: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  topics: resolvableValue(z.string().array().optional()),
  tumbling_window_in_seconds: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  function_arn: z.string().optional(),
  last_modified: z.string().optional(),
  last_processing_result: z.string().optional(),
  state: z.string().optional(),
  state_transition_reason: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uuid: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lambda_event_source_mapping

export function AwsLambdaEventSourceMapping(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lambda_event_source_mapping'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLambdaEventSourceMapping = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsLambdaEventSourceMapping,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLambdaEventSourceMappings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsLambdaEventSourceMapping,
    idFilter,
    baseNode,
    optional,
  )
