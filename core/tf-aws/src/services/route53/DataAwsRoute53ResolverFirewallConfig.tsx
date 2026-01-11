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

export const InputSchema = z.object({
  resource_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  firewall_fail_open: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_firewall_config

export function DataAwsRoute53ResolverFirewallConfig(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverFirewallConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsRoute53ResolverFirewallConfig,
    idFilter,
    baseNode,
    optional,
  )
