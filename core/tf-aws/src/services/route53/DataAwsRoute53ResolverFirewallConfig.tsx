import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverFirewallConfig } from './AwsRoute53ResolverFirewallConfig.tsx'

export const DataAwsRoute53ResolverFirewallConfigInputSchema = TfMetaSchema
  .extend({
    resource_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsRoute53ResolverFirewallConfigOutputSchema = z.object({
  firewall_fail_open: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type DataAwsRoute53ResolverFirewallConfigInputProps =
  & z.input<typeof DataAwsRoute53ResolverFirewallConfigInputSchema>
  & NodeProps

export type DataAwsRoute53ResolverFirewallConfigOutputProps =
  & z.output<typeof DataAwsRoute53ResolverFirewallConfigOutputSchema>
  & z.output<typeof DataAwsRoute53ResolverFirewallConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_resolver_firewall_config

export function DataAwsRoute53ResolverFirewallConfig(
  props: Partial<DataAwsRoute53ResolverFirewallConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverFirewallConfig
      _type='aws_route53_resolver_firewall_config'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ResolverFirewallConfigInputSchema}
      _outputSchema={DataAwsRoute53ResolverFirewallConfigOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRoute53ResolverFirewallConfigOutputProps>(
    DataAwsRoute53ResolverFirewallConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53ResolverFirewallConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ResolverFirewallConfigOutputProps>(
    DataAwsRoute53ResolverFirewallConfig,
    idFilter,
    baseNode,
    optional,
  )
