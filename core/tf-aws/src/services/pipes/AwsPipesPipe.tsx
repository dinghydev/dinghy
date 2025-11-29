import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/pipes_pipe

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
    }).optional(),
  ),
  kms_key_identifier: resolvableValue(z.string().optional()),
  log_configuration: resolvableValue(
    z.object({
      include_execution_data: z.string().array().optional(),
      level: z.string(),
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
      }).optional(),
      dynamodb_stream_parameters: z.object({
        batch_size: z.number().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        maximum_record_age_in_seconds: z.number().optional(),
        maximum_retry_attempts: z.number().optional(),
        on_partial_batch_item_failure: z.string().optional(),
        parallelization_factor: z.number().optional(),
        starting_position: z.string(),
      }).optional(),
      filter_criteria: z.object({
        filter: z.object({
          pattern: z.string(),
        }).optional(),
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
      }).optional(),
      managed_streaming_kafka_parameters: z.object({
        batch_size: z.number().optional(),
        consumer_group_id: z.string().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        starting_position: z.string().optional(),
        topic_name: z.string(),
      }).optional(),
      rabbitmq_broker_parameters: z.object({
        batch_size: z.number().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        queue_name: z.string(),
        virtual_host: z.string().optional(),
      }).optional(),
      self_managed_kafka_parameters: z.object({
        additional_bootstrap_servers: z.string().array().optional(),
        batch_size: z.number().optional(),
        consumer_group_id: z.string().optional(),
        maximum_batching_window_in_seconds: z.number().optional(),
        server_root_ca_certificate: z.string().optional(),
        starting_position: z.string().optional(),
        topic_name: z.string(),
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
    }).optional(),
  ),
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
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsPipesPipe(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsPipesPipe = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsPipesPipe, node, id)

export const useAwsPipesPipes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsPipesPipe, node, id)
