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
  action: resolvableValue(
    z.object({
      action_id: z.string(),
      description: z.string().optional(),
      name: z.string(),
      start_after: z.string().array().optional(),
      parameter: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      target: z.object({
        key: z.string(),
        value: z.string(),
      }).optional(),
    }).array(),
  ),
  description: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  stop_condition: resolvableValue(
    z.object({
      source: z.string(),
      value: z.string().optional(),
    }).array(),
  ),
  experiment_options: resolvableValue(
    z.object({
      account_targeting: z.string().optional(),
      empty_target_resolution_mode: z.string().optional(),
    }).optional(),
  ),
  experiment_report_configuration: resolvableValue(
    z.object({
      post_experiment_duration: z.string().optional(),
      pre_experiment_duration: z.string().optional(),
      data_sources: z.object({
        cloudwatch_dashboard: z.object({
          dashboard_arn: z.string().optional(),
        }).array().optional(),
      }).optional(),
      outputs: z.object({
        s3_configuration: z.object({
          bucket_name: z.string(),
          prefix: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  log_configuration: resolvableValue(
    z.object({
      log_schema_version: z.number(),
      cloudwatch_logs_configuration: z.object({
        log_group_arn: z.string(),
      }).optional(),
      s3_configuration: z.object({
        bucket_name: z.string(),
        prefix: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  target: resolvableValue(
    z.object({
      name: z.string(),
      parameters: z.record(z.string(), z.string()).optional(),
      resource_arns: z.string().array().optional(),
      resource_type: z.string(),
      selection_mode: z.string(),
      filter: z.object({
        path: z.string(),
        values: z.string().array(),
      }).array().optional(),
      resource_tag: z.object({
        key: z.string(),
        value: z.string(),
      }).array().optional(),
    }).array().optional(),
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
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/fis_experiment_template

export function AwsFisExperimentTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fis_experiment_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFisExperimentTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsFisExperimentTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFisExperimentTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFisExperimentTemplate,
    idFilter,
    baseNode,
    optional,
  )
