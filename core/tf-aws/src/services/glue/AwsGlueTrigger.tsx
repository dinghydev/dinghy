import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_trigger

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  actions: resolvableValue(z.object({
    arguments: z.record(z.string(), z.string()).optional(),
    crawler_name: z.string().optional(),
    job_name: z.string().optional(),
    security_configuration: z.string().optional(),
    timeout: z.number().optional(),
  })),
  description: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  event_batching_condition: resolvableValue(
    z.object({
      batch_size: z.number(),
      batch_window: z.number().optional(),
    }).optional(),
  ),
  predicate: resolvableValue(
    z.object({
      logical: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schedule: resolvableValue(z.string().optional()),
  start_on_creation: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  workflow_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueTrigger(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_trigger'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueTrigger = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueTrigger, node, id)

export const useAwsGlueTriggers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueTrigger, node, id)
