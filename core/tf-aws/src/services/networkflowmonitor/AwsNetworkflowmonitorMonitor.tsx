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

export const AwsNetworkflowmonitorMonitorInputSchema = TfMetaSchema.extend({
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
})

export const AwsNetworkflowmonitorMonitorOutputSchema = z.object({
  monitor_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkflowmonitorMonitorInputProps =
  & z.input<typeof AwsNetworkflowmonitorMonitorInputSchema>
  & NodeProps

export type AwsNetworkflowmonitorMonitorOutputProps =
  & z.output<typeof AwsNetworkflowmonitorMonitorOutputSchema>
  & z.output<typeof AwsNetworkflowmonitorMonitorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkflowmonitor_monitor

export function AwsNetworkflowmonitorMonitor(
  props: Partial<AwsNetworkflowmonitorMonitorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkflowmonitor_monitor'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkflowmonitorMonitorInputSchema}
      _outputSchema={AwsNetworkflowmonitorMonitorOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkflowmonitorMonitor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkflowmonitorMonitorOutputProps>(
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
  useTypedNodes<AwsNetworkflowmonitorMonitorOutputProps>(
    AwsNetworkflowmonitorMonitor,
    idFilter,
    baseNode,
    optional,
  )
