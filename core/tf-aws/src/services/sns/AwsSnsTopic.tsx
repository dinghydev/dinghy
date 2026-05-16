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

export const AwsSnsTopicInputSchema = TfMetaSchema.extend({
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

export const AwsSnsTopicOutputSchema = z.object({
  arn: z.string().optional(),
  beginning_archive_time: z.string().optional(),
  id: z.string().optional(),
  owner: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSnsTopicImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSnsTopicInputProps =
  & z.input<typeof AwsSnsTopicInputSchema>
  & z.input<typeof AwsSnsTopicImportSchema>
  & NodeProps

export type AwsSnsTopicOutputProps =
  & z.output<typeof AwsSnsTopicOutputSchema>
  & z.output<typeof AwsSnsTopicInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sns_topic

export function AwsSnsTopic(props: Partial<AwsSnsTopicInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_topic'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSnsTopicInputSchema}
      _outputSchema={AwsSnsTopicOutputSchema}
      _importSchema={AwsSnsTopicImportSchema}
      {...props}
    />
  )
}

export const useAwsSnsTopic = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSnsTopicOutputProps>(
    AwsSnsTopic,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSnsTopics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSnsTopicOutputProps>(
    AwsSnsTopic,
    idFilter,
    baseNode,
    optional,
  )
