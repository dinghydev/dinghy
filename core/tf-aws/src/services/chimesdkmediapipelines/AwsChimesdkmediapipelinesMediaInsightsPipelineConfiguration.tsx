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
  elements: resolvableValue(
    z.object({
      type: z.string(),
      amazon_transcribe_call_analytics_processor_configuration: z.object({
        call_analytics_stream_categories: z.string().array().optional(),
        content_identification_type: z.string().optional(),
        content_redaction_type: z.string().optional(),
        enable_partial_results_stabilization: z.boolean().optional(),
        filter_partial_results: z.boolean().optional(),
        language_code: z.string(),
        language_model_name: z.string().optional(),
        partial_results_stability: z.string().optional(),
        pii_entity_types: z.string().optional(),
        vocabulary_filter_method: z.string().optional(),
        vocabulary_filter_name: z.string().optional(),
        vocabulary_name: z.string().optional(),
        post_call_analytics_settings: z.object({
          content_redaction_output: z.string().optional(),
          data_access_role_arn: z.string(),
          output_encryption_kms_key_id: z.string().optional(),
          output_location: z.string(),
        }).optional(),
      }).optional(),
      amazon_transcribe_processor_configuration: z.object({
        content_identification_type: z.string().optional(),
        content_redaction_type: z.string().optional(),
        enable_partial_results_stabilization: z.boolean().optional(),
        filter_partial_results: z.boolean().optional(),
        language_code: z.string(),
        language_model_name: z.string().optional(),
        partial_results_stability: z.string().optional(),
        pii_entity_types: z.string().optional(),
        show_speaker_label: z.boolean().optional(),
        vocabulary_filter_method: z.string().optional(),
        vocabulary_filter_name: z.string().optional(),
        vocabulary_name: z.string().optional(),
      }).optional(),
      kinesis_data_stream_sink_configuration: z.object({
        insights_target: z.string(),
      }).optional(),
      lambda_function_sink_configuration: z.object({
        insights_target: z.string(),
      }).optional(),
      s3_recording_sink_configuration: z.object({
        destination: z.string().optional(),
      }).optional(),
      sns_topic_sink_configuration: z.object({
        insights_target: z.string(),
      }).optional(),
      sqs_queue_sink_configuration: z.object({
        insights_target: z.string(),
      }).optional(),
      voice_analytics_processor_configuration: z.object({
        speaker_search_status: z.string(),
        voice_tone_analysis_status: z.string(),
      }).optional(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  resource_access_role_arn: resolvableValue(z.string()),
  real_time_alert_configuration: resolvableValue(
    z.object({
      disabled: z.boolean().optional(),
      rules: z.object({
        type: z.string(),
        issue_detection_configuration: z.object({
          rule_name: z.string(),
        }).optional(),
        keyword_match_configuration: z.object({
          keywords: z.string().array(),
          negate: z.boolean().optional(),
          rule_name: z.string(),
        }).optional(),
        sentiment_configuration: z.object({
          rule_name: z.string(),
          sentiment_type: z.string(),
          time_period: z.number(),
        }).optional(),
      }).array(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration

export function AwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkmediapipelines_media_insights_pipeline_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimesdkmediapipelinesMediaInsightsPipelineConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration,
    idFilter,
    baseNode,
    optional,
  )
