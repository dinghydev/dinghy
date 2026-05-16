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

export const AwsSagemakerLabelingJobInputSchema = TfMetaSchema.extend({
  label_attribute_name: resolvableValue(z.string()),
  labeling_job_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  human_task_config: resolvableValue(
    z.object({
      max_concurrent_task_count: z.number().optional(),
      number_of_human_workers_per_data_object: z.number(),
      pre_human_task_lambda_arn: z.string().optional(),
      task_availability_lifetime_in_seconds: z.number().optional(),
      task_description: z.string(),
      task_keywords: z.string().array().optional(),
      task_time_limit_in_seconds: z.number(),
      task_title: z.string(),
      workteam_arn: z.string(),
      annotation_consolidation_config: z.object({
        annotation_consolidation_lambda_arn: z.string(),
      }).array().optional(),
      public_workforce_task_price: z.object({
        amount_in_usd: z.object({
          cents: z.number().optional(),
          dollars: z.number().optional(),
          tenth_fractions_of_a_cent: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
      ui_config: z.object({
        human_task_ui_arn: z.string().optional(),
        ui_template_s3_uri: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  input_config: resolvableValue(
    z.object({
      data_attributes: z.object({
        content_classifiers: z.string().array().optional(),
      }).array().optional(),
      data_source: z.object({
        s3_data_source: z.object({
          manifest_s3_uri: z.string(),
        }).array().optional(),
        sns_data_source: z.object({
          sns_topic_arn: z.string(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  label_category_config_s3_uri: resolvableValue(z.string().optional()),
  labeling_job_algorithms_config: resolvableValue(
    z.object({
      initial_active_learning_model_arn: z.string().optional(),
      labeling_job_algorithm_specification_arn: z.string(),
      labeling_job_resource_config: z.object({
        volume_kms_key_id: z.string().optional(),
        vpc_config: z.object({
          security_group_ids: z.string().array(),
          subnets: z.string().array(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  output_config: resolvableValue(
    z.object({
      kms_key_id: z.string().optional(),
      s3_output_path: z.string(),
      sns_topic_arn: z.string().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  stopping_conditions: resolvableValue(
    z.object({
      max_human_labeled_object_count: z.number(),
      max_percentage_of_input_dataset_labeled: z.number(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSagemakerLabelingJobOutputSchema = z.object({
  failure_reason: z.string().optional(),
  job_reference_code: z.string().optional(),
  label_counters: z.object({
    failed_non_retryable_error: z.number(),
    human_labeled: z.number(),
    machine_labeled: z.number(),
    total_labeled: z.number(),
    unlabeled: z.number(),
  }).array().optional(),
  labeling_job_arn: z.string().optional(),
  labeling_job_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsSagemakerLabelingJobInputProps =
  & z.input<typeof AwsSagemakerLabelingJobInputSchema>
  & NodeProps

export type AwsSagemakerLabelingJobOutputProps =
  & z.output<typeof AwsSagemakerLabelingJobOutputSchema>
  & z.output<typeof AwsSagemakerLabelingJobInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_labeling_job

export function AwsSagemakerLabelingJob(
  props: Partial<AwsSagemakerLabelingJobInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_labeling_job'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerLabelingJobInputSchema}
      _outputSchema={AwsSagemakerLabelingJobOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerLabelingJob = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerLabelingJobOutputProps>(
    AwsSagemakerLabelingJob,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerLabelingJobs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerLabelingJobOutputProps>(
    AwsSagemakerLabelingJob,
    idFilter,
    baseNode,
    optional,
  )
