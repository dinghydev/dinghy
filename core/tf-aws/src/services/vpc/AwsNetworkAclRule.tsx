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

export const AwsNetworkAclRuleInputSchema = TfMetaSchema.extend({
  network_acl_id: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  rule_action: resolvableValue(z.string()),
  rule_number: resolvableValue(z.number()),
  cidr_block: resolvableValue(z.string().optional()),
  egress: resolvableValue(z.boolean().optional()),
  from_port: resolvableValue(z.number().optional()),
  icmp_code: resolvableValue(z.number().optional()),
  icmp_type: resolvableValue(z.number().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  to_port: resolvableValue(z.number().optional()),
})

export const AwsNetworkAclRuleOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsNetworkAclRuleImportSchema = z.object({
  egress: resolvableValue(z.boolean()),
  network_acl_id: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  rule_number: resolvableValue(z.number()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsNetworkAclRuleInputProps =
  & z.input<typeof AwsNetworkAclRuleInputSchema>
  & z.input<typeof AwsNetworkAclRuleImportSchema>
  & NodeProps

export type AwsNetworkAclRuleOutputProps =
  & z.output<typeof AwsNetworkAclRuleOutputSchema>
  & z.output<typeof AwsNetworkAclRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/network_acl_rule

export function AwsNetworkAclRule(props: Partial<AwsNetworkAclRuleInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_acl_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkAclRuleInputSchema}
      _outputSchema={AwsNetworkAclRuleOutputSchema}
      _importSchema={AwsNetworkAclRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsNetworkAclRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkAclRuleOutputProps>(
    AwsNetworkAclRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkAclRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkAclRuleOutputProps>(
    AwsNetworkAclRule,
    idFilter,
    baseNode,
    optional,
  )
