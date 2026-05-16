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

export const AwsSecurityGroupRuleInputSchema = TfMetaSchema.extend({
  from_port: resolvableValue(z.number()),
  protocol: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  to_port: resolvableValue(z.number()),
  type: resolvableValue(z.string()),
  cidr_blocks: resolvableValue(z.string().array().optional()),
  description: resolvableValue(z.string().optional()),
  ipv6_cidr_blocks: resolvableValue(z.string().array().optional()),
  prefix_list_ids: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  self: resolvableValue(z.boolean().optional()),
  source_security_group_id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSecurityGroupRuleOutputSchema = z.object({
  id: z.string().optional(),
  security_group_rule_id: z.string().optional(),
})

export type AwsSecurityGroupRuleInputProps =
  & z.input<typeof AwsSecurityGroupRuleInputSchema>
  & NodeProps

export type AwsSecurityGroupRuleOutputProps =
  & z.output<typeof AwsSecurityGroupRuleOutputSchema>
  & z.output<typeof AwsSecurityGroupRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/security_group_rule

export function AwsSecurityGroupRule(
  props: Partial<AwsSecurityGroupRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_security_group_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityGroupRuleInputSchema}
      _outputSchema={AwsSecurityGroupRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityGroupRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityGroupRuleOutputProps>(
    AwsSecurityGroupRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityGroupRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityGroupRuleOutputProps>(
    AwsSecurityGroupRule,
    idFilter,
    baseNode,
    optional,
  )
