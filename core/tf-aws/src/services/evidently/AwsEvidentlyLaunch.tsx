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
  groups: resolvableValue(
    z.object({
      description: z.string().optional(),
      feature: z.string(),
      name: z.string(),
      variation: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  project: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  metric_monitors: resolvableValue(
    z.object({
      metric_definition: z.object({
        entity_id_key: z.string(),
        event_pattern: z.string().optional(),
        name: z.string(),
        unit_label: z.string().optional(),
        value_key: z.string(),
      }),
    }).array().optional(),
  ),
  randomization_salt: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scheduled_splits_config: resolvableValue(
    z.object({
      steps: z.object({
        group_weights: z.record(z.string(), z.number()),
        start_time: z.string(),
        segment_overrides: z.object({
          evaluation_order: z.number(),
          segment: z.string(),
          weights: z.record(z.string(), z.number()),
        }).array().optional(),
      }).array(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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
  created_time: z.string().optional(),
  execution: z.object({
    ended_time: z.string(),
    started_time: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/evidently_launch

export function AwsEvidentlyLaunch(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_evidently_launch'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEvidentlyLaunch = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEvidentlyLaunch, idFilter, baseNode, optional)

export const useAwsEvidentlyLaunchs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsEvidentlyLaunch, idFilter, baseNode, optional)
