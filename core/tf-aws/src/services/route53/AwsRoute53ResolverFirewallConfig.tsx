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

export const AwsRoute53ResolverFirewallConfigInputSchema = TfMetaSchema.extend({
  resource_id: resolvableValue(z.string()),
  firewall_fail_open: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRoute53ResolverFirewallConfigOutputSchema = z.object({
  id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type AwsRoute53ResolverFirewallConfigInputProps =
  & z.input<typeof AwsRoute53ResolverFirewallConfigInputSchema>
  & NodeProps

export type AwsRoute53ResolverFirewallConfigOutputProps =
  & z.output<typeof AwsRoute53ResolverFirewallConfigOutputSchema>
  & z.output<typeof AwsRoute53ResolverFirewallConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_firewall_config

export function AwsRoute53ResolverFirewallConfig(
  props: Partial<AwsRoute53ResolverFirewallConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_firewall_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverFirewallConfigInputSchema}
      _outputSchema={AwsRoute53ResolverFirewallConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverFirewallConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverFirewallConfigOutputProps>(
    AwsRoute53ResolverFirewallConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverFirewallConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverFirewallConfigOutputProps>(
    AwsRoute53ResolverFirewallConfig,
    idFilter,
    baseNode,
    optional,
  )
