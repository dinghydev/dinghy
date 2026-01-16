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
  enabled: resolvableValue(z.boolean()),
  name: resolvableValue(z.string()),
  sql: resolvableValue(z.string()),
  sql_version: resolvableValue(z.string()),
  cloudwatch_alarm: resolvableValue(
    z.object({
      alarm_name: z.string(),
      role_arn: z.string(),
      state_reason: z.string(),
      state_value: z.string(),
    }).array().optional(),
  ),
  cloudwatch_logs: resolvableValue(
    z.object({
      batch_mode: z.boolean().optional(),
      log_group_name: z.string(),
      role_arn: z.string(),
    }).array().optional(),
  ),
  cloudwatch_metric: resolvableValue(
    z.object({
      metric_name: z.string(),
      metric_namespace: z.string(),
      metric_timestamp: z.string().optional(),
      metric_unit: z.string(),
      metric_value: z.string(),
      role_arn: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  dynamodb: resolvableValue(
    z.object({
      hash_key_field: z.string(),
      hash_key_type: z.string().optional(),
      hash_key_value: z.string(),
      operation: z.string().optional(),
      payload_field: z.string().optional(),
      range_key_field: z.string().optional(),
      range_key_type: z.string().optional(),
      range_key_value: z.string().optional(),
      role_arn: z.string(),
      table_name: z.string(),
    }).array().optional(),
  ),
  dynamodbv2: resolvableValue(
    z.object({
      role_arn: z.string(),
      put_item: z.object({
        table_name: z.string(),
      }).optional(),
    }).array().optional(),
  ),
  elasticsearch: resolvableValue(
    z.object({
      endpoint: z.string(),
      id: z.string(),
      index: z.string(),
      role_arn: z.string(),
      type: z.string(),
    }).array().optional(),
  ),
  error_action: resolvableValue(
    z.object({
      cloudwatch_alarm: z.object({
        alarm_name: z.string(),
        role_arn: z.string(),
        state_reason: z.string(),
        state_value: z.string(),
      }).optional(),
      cloudwatch_logs: z.object({
        batch_mode: z.boolean().optional(),
        log_group_name: z.string(),
        role_arn: z.string(),
      }).optional(),
      cloudwatch_metric: z.object({
        metric_name: z.string(),
        metric_namespace: z.string(),
        metric_timestamp: z.string().optional(),
        metric_unit: z.string(),
        metric_value: z.string(),
        role_arn: z.string(),
      }).optional(),
      dynamodb: z.object({
        hash_key_field: z.string(),
        hash_key_type: z.string().optional(),
        hash_key_value: z.string(),
        operation: z.string().optional(),
        payload_field: z.string().optional(),
        range_key_field: z.string().optional(),
        range_key_type: z.string().optional(),
        range_key_value: z.string().optional(),
        role_arn: z.string(),
        table_name: z.string(),
      }).optional(),
      dynamodbv2: z.object({
        role_arn: z.string(),
        put_item: z.object({
          table_name: z.string(),
        }).optional(),
      }).optional(),
      elasticsearch: z.object({
        endpoint: z.string(),
        id: z.string(),
        index: z.string(),
        role_arn: z.string(),
        type: z.string(),
      }).optional(),
      firehose: z.object({
        batch_mode: z.boolean().optional(),
        delivery_stream_name: z.string(),
        role_arn: z.string(),
        separator: z.string().optional(),
      }).optional(),
      http: z.object({
        confirmation_url: z.string().optional(),
        url: z.string(),
        http_header: z.object({
          key: z.string(),
          value: z.string(),
        }).array().optional(),
      }).optional(),
      iot_analytics: z.object({
        batch_mode: z.boolean().optional(),
        channel_name: z.string(),
        role_arn: z.string(),
      }).optional(),
      iot_events: z.object({
        batch_mode: z.boolean().optional(),
        input_name: z.string(),
        message_id: z.string().optional(),
        role_arn: z.string(),
      }).optional(),
      kafka: z.object({
        client_properties: z.record(z.string(), z.string()),
        destination_arn: z.string(),
        key: z.string().optional(),
        partition: z.string().optional(),
        topic: z.string(),
        header: z.object({
          key: z.string(),
          value: z.string(),
        }).array().optional(),
      }).optional(),
      kinesis: z.object({
        partition_key: z.string().optional(),
        role_arn: z.string(),
        stream_name: z.string(),
      }).optional(),
      lambda: z.object({
        function_arn: z.string(),
      }).optional(),
      republish: z.object({
        qos: z.number().optional(),
        role_arn: z.string(),
        topic: z.string(),
      }).optional(),
      s3: z.object({
        bucket_name: z.string(),
        canned_acl: z.string().optional(),
        key: z.string(),
        role_arn: z.string(),
      }).optional(),
      sns: z.object({
        message_format: z.string().optional(),
        role_arn: z.string(),
        target_arn: z.string(),
      }).optional(),
      sqs: z.object({
        queue_url: z.string(),
        role_arn: z.string(),
        use_base64: z.boolean(),
      }).optional(),
      step_functions: z.object({
        execution_name_prefix: z.string().optional(),
        role_arn: z.string(),
        state_machine_name: z.string(),
      }).optional(),
      timestream: z.object({
        database_name: z.string(),
        role_arn: z.string(),
        table_name: z.string(),
        dimension: z.object({
          name: z.string(),
          value: z.string(),
        }).array(),
        timestamp: z.object({
          unit: z.string(),
          value: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  firehose: resolvableValue(
    z.object({
      batch_mode: z.boolean().optional(),
      delivery_stream_name: z.string(),
      role_arn: z.string(),
      separator: z.string().optional(),
    }).array().optional(),
  ),
  http: resolvableValue(
    z.object({
      confirmation_url: z.string().optional(),
      url: z.string(),
      http_header: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  iot_analytics: resolvableValue(
    z.object({
      batch_mode: z.boolean().optional(),
      channel_name: z.string(),
      role_arn: z.string(),
    }).array().optional(),
  ),
  iot_events: resolvableValue(
    z.object({
      batch_mode: z.boolean().optional(),
      input_name: z.string(),
      message_id: z.string().optional(),
      role_arn: z.string(),
    }).array().optional(),
  ),
  kafka: resolvableValue(
    z.object({
      client_properties: z.record(z.string(), z.string()),
      destination_arn: z.string(),
      key: z.string().optional(),
      partition: z.string().optional(),
      topic: z.string(),
      header: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  kinesis: resolvableValue(
    z.object({
      partition_key: z.string().optional(),
      role_arn: z.string(),
      stream_name: z.string(),
    }).array().optional(),
  ),
  lambda: resolvableValue(
    z.object({
      function_arn: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  republish: resolvableValue(
    z.object({
      qos: z.number().optional(),
      role_arn: z.string(),
      topic: z.string(),
    }).array().optional(),
  ),
  s3: resolvableValue(
    z.object({
      bucket_name: z.string(),
      canned_acl: z.string().optional(),
      key: z.string(),
      role_arn: z.string(),
    }).array().optional(),
  ),
  sns: resolvableValue(
    z.object({
      message_format: z.string().optional(),
      role_arn: z.string(),
      target_arn: z.string(),
    }).array().optional(),
  ),
  sqs: resolvableValue(
    z.object({
      queue_url: z.string(),
      role_arn: z.string(),
      use_base64: z.boolean(),
    }).array().optional(),
  ),
  step_functions: resolvableValue(
    z.object({
      execution_name_prefix: z.string().optional(),
      role_arn: z.string(),
      state_machine_name: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timestream: resolvableValue(
    z.object({
      database_name: z.string(),
      role_arn: z.string(),
      table_name: z.string(),
      dimension: z.object({
        name: z.string(),
        value: z.string(),
      }).array(),
      timestamp: z.object({
        unit: z.string(),
        value: z.string(),
      }).optional(),
    }).array().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iot_topic_rule

export function AwsIotTopicRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_topic_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotTopicRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsIotTopicRule, idFilter, baseNode, optional)

export const useAwsIotTopicRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsIotTopicRule, idFilter, baseNode, optional)
