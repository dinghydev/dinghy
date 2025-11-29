import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fis_experiment_template

export const InputSchema = z.object({
  description: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  action: resolvableValue(
    z.object({
      action_id: z.string(),
      description: z.string().optional(),
      name: z.string(),
      start_after: z.string().array().optional(),
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
    }).optional(),
  ),
  log_configuration: resolvableValue(
    z.object({
      log_schema_version: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  stop_condition: resolvableValue(
    z.object({
      source: z.string(),
      value: z.string().optional(),
    }).array(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  target: resolvableValue(
    z.object({
      name: z.string(),
      parameters: z.record(z.string(), z.string()).optional(),
      resource_arns: z.string().array().optional(),
      resource_type: z.string(),
      selection_mode: z.string(),
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

export function AwsFisExperimentTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsFisExperimentTemplate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsFisExperimentTemplate, node, id)

export const useAwsFisExperimentTemplates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsFisExperimentTemplate, node, id)
