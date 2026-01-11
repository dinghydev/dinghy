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
  monitor_name: resolvableValue(z.string()),
  scope_arn: resolvableValue(z.string()),
  local_resource: resolvableValue(
    z.object({
      identifier: z.string(),
      type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  remote_resource: resolvableValue(
    z.object({
      identifier: z.string(),
      type: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  monitor_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkflowmonitor_monitor

export function AwsNetworkflowmonitorMonitor(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkflowmonitor_monitor'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkflowmonitorMonitor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkflowmonitorMonitor,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkflowmonitorMonitors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkflowmonitorMonitor,
    idFilter,
    baseNode,
    optional,
  )
