import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkfirewall_logging_configuration

export const InputSchema = z.object({
  firewall_arn: resolvableValue(z.string()),
  logging_configuration: resolvableValue(z.object({
    log_destination_config: z.object({
      log_destination: z.record(z.string(), z.string()),
      log_destination_type: z.string(),
      log_type: z.string(),
    }).array(),
  })),
  enable_monitoring_dashboard: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
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

export function AwsNetworkfirewallLoggingConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallLoggingConfiguration = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsNetworkfirewallLoggingConfiguration, node, id)

export const useAwsNetworkfirewallLoggingConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsNetworkfirewallLoggingConfiguration, node, id)
