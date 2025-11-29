import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmonitor_monitor

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  monitor_name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  aggregation_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmonitorMonitor(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmonitor_monitor'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmonitorMonitor = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNetworkmonitorMonitor, node, id)

export const useAwsNetworkmonitorMonitors = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNetworkmonitorMonitor, node, id)
