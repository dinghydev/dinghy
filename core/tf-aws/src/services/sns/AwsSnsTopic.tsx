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
  application_failure_feedback_role_arn: resolvableValue(z.string().optional()),
  application_success_feedback_role_arn: resolvableValue(z.string().optional()),
  application_success_feedback_sample_rate: resolvableValue(
    z.number().optional(),
  ),
  archive_policy: resolvableValue(z.string().optional()),
  content_based_deduplication: resolvableValue(z.boolean().optional()),
  delivery_policy: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  fifo_throughput_scope: resolvableValue(z.string().optional()),
  fifo_topic: resolvableValue(z.boolean().optional()),
  firehose_failure_feedback_role_arn: resolvableValue(z.string().optional()),
  firehose_success_feedback_role_arn: resolvableValue(z.string().optional()),
  firehose_success_feedback_sample_rate: resolvableValue(z.number().optional()),
  http_failure_feedback_role_arn: resolvableValue(z.string().optional()),
  http_success_feedback_role_arn: resolvableValue(z.string().optional()),
  http_success_feedback_sample_rate: resolvableValue(z.number().optional()),
  kms_master_key_id: resolvableValue(z.string().optional()),
  lambda_failure_feedback_role_arn: resolvableValue(z.string().optional()),
  lambda_success_feedback_role_arn: resolvableValue(z.string().optional()),
  lambda_success_feedback_sample_rate: resolvableValue(z.number().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  signature_version: resolvableValue(z.number().optional()),
  sqs_failure_feedback_role_arn: resolvableValue(z.string().optional()),
  sqs_success_feedback_role_arn: resolvableValue(z.string().optional()),
  sqs_success_feedback_sample_rate: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tracing_config: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  beginning_archive_time: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sns_topic

export function AwsSnsTopic(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_topic'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSnsTopic = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsSnsTopic, idFilter, baseNode, optional)

export const useAwsSnsTopics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsSnsTopic, idFilter, baseNode, optional)
