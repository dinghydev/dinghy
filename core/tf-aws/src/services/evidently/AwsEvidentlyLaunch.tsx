import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/evidently_launch

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  project: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  groups: resolvableValue(z.object({
    description: z.string().optional(),
    feature: z.string(),
    name: z.string(),
    variation: z.string(),
  })),
  metric_monitors: resolvableValue(
    z.object({
      metric_definition: z.object({
        entity_id_key: z.string(),
        event_pattern: z.string().optional(),
        name: z.string(),
        unit_label: z.string().optional(),
        value_key: z.string(),
      }),
    }).optional(),
  ),
  randomization_salt: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scheduled_splits_config: resolvableValue(
    z.object({
      steps: z.object({
        group_weights: z.record(z.string(), z.number()),
        start_time: z.string(),
      }),
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

export function AwsEvidentlyLaunch(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsEvidentlyLaunch = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEvidentlyLaunch, node, id)

export const useAwsEvidentlyLaunchs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEvidentlyLaunch, node, id)
