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
  actions: resolvableValue(
    z.object({
      arguments: z.record(z.string(), z.string()).optional(),
      crawler_name: z.string().optional(),
      job_name: z.string().optional(),
      security_configuration: z.string().optional(),
      timeout: z.number().optional(),
      notification_property: z.object({
        notify_delay_after: z.number().optional(),
      }).optional(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  event_batching_condition: resolvableValue(
    z.object({
      batch_size: z.number(),
      batch_window: z.number().optional(),
    }).array().optional(),
  ),
  predicate: resolvableValue(
    z.object({
      logical: z.string().optional(),
      conditions: z.object({
        crawl_state: z.string().optional(),
        crawler_name: z.string().optional(),
        job_name: z.string().optional(),
        logical_operator: z.string().optional(),
        state: z.string().optional(),
      }).array(),
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_trigger

export function AwsGlueTrigger(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsGlueTrigger = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsGlueTrigger, idFilter, baseNode, optional)

export const useAwsGlueTriggers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsGlueTrigger, idFilter, baseNode, optional)
