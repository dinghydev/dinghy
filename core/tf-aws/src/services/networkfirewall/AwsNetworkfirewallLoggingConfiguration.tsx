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

export const AwsNetworkfirewallLoggingConfigurationInputSchema = TfMetaSchema
  .extend({
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

export const AwsNetworkfirewallLoggingConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsNetworkfirewallLoggingConfigurationInputProps =
  & z.input<typeof AwsNetworkfirewallLoggingConfigurationInputSchema>
  & NodeProps

export type AwsNetworkfirewallLoggingConfigurationOutputProps =
  & z.output<typeof AwsNetworkfirewallLoggingConfigurationOutputSchema>
  & z.output<typeof AwsNetworkfirewallLoggingConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkfirewall_logging_configuration

export function AwsNetworkfirewallLoggingConfiguration(
  props: Partial<AwsNetworkfirewallLoggingConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkfirewallLoggingConfigurationInputSchema}
      _outputSchema={AwsNetworkfirewallLoggingConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallLoggingConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkfirewallLoggingConfigurationOutputProps>(
    AwsNetworkfirewallLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkfirewallLoggingConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkfirewallLoggingConfigurationOutputProps>(
    AwsNetworkfirewallLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
