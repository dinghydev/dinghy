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
  outpost_identifier: resolvableValue(z.string()),
  asset_id: resolvableValue(z.string().optional()),
  instance_pool: resolvableValue(
    z.object({
      count: z.number(),
      instance_type: z.string(),
    }).array().optional(),
  ),
  instances_to_exclude: resolvableValue(
    z.object({
      instances: z.string().array(),
    }).array().optional(),
  ),
  order_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  task_action_on_blocking_instances: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  capacity_task_id: z.string().optional(),
  completion_date: z.string().optional(),
  creation_date: z.string().optional(),
  failure_reason: z.string().optional(),
  status: z.string().optional(),
})

export const ImportSchema = z.object({
  capacity_task_id: resolvableValue(z.string()),
  outpost_identifier: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/outposts_capacity_task

export function AwsOutpostsCapacityTask(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_capacity_task'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsOutpostsCapacityTask = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsOutpostsCapacityTask,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOutpostsCapacityTasks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsOutpostsCapacityTask,
    idFilter,
    baseNode,
    optional,
  )
