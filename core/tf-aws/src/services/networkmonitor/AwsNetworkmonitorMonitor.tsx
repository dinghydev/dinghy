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

export const AwsNetworkmonitorMonitorInputSchema = TfMetaSchema.extend({
  monitor_name: resolvableValue(z.string()),
  aggregation_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsNetworkmonitorMonitorOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmonitorMonitorInputProps =
  & z.input<typeof AwsNetworkmonitorMonitorInputSchema>
  & NodeProps

export type AwsNetworkmonitorMonitorOutputProps =
  & z.output<typeof AwsNetworkmonitorMonitorOutputSchema>
  & z.output<typeof AwsNetworkmonitorMonitorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmonitor_monitor

export function AwsNetworkmonitorMonitor(
  props: Partial<AwsNetworkmonitorMonitorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmonitor_monitor'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmonitorMonitorInputSchema}
      _outputSchema={AwsNetworkmonitorMonitorOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmonitorMonitor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmonitorMonitorOutputProps>(
    AwsNetworkmonitorMonitor,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmonitorMonitors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmonitorMonitorOutputProps>(
    AwsNetworkmonitorMonitor,
    idFilter,
    baseNode,
    optional,
  )
