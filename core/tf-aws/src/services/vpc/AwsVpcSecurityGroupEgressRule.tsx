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

export const AwsVpcSecurityGroupEgressRuleInputSchema = TfMetaSchema.extend({
  ip_protocol: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  cidr_ipv4: resolvableValue(z.string().optional()),
  cidr_ipv6: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  from_port: resolvableValue(z.number().optional()),
  prefix_list_id: resolvableValue(z.string().optional()),
  referenced_security_group_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  to_port: resolvableValue(z.number().optional()),
})

export const AwsVpcSecurityGroupEgressRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  security_group_rule_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsVpcSecurityGroupEgressRuleImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsVpcSecurityGroupEgressRuleInputProps =
  & z.input<typeof AwsVpcSecurityGroupEgressRuleInputSchema>
  & z.input<typeof AwsVpcSecurityGroupEgressRuleImportSchema>
  & NodeProps

export type AwsVpcSecurityGroupEgressRuleOutputProps =
  & z.output<typeof AwsVpcSecurityGroupEgressRuleOutputSchema>
  & z.output<typeof AwsVpcSecurityGroupEgressRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_security_group_egress_rule

export function AwsVpcSecurityGroupEgressRule(
  props: Partial<AwsVpcSecurityGroupEgressRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_security_group_egress_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcSecurityGroupEgressRuleInputSchema}
      _outputSchema={AwsVpcSecurityGroupEgressRuleOutputSchema}
      _importSchema={AwsVpcSecurityGroupEgressRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsVpcSecurityGroupEgressRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcSecurityGroupEgressRuleOutputProps>(
    AwsVpcSecurityGroupEgressRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcSecurityGroupEgressRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcSecurityGroupEgressRuleOutputProps>(
    AwsVpcSecurityGroupEgressRule,
    idFilter,
    baseNode,
    optional,
  )
