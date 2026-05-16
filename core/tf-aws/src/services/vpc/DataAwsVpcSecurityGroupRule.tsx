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

export const DataAwsVpcSecurityGroupRuleInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  security_group_rule_id: resolvableValue(z.string().optional()),
})

export const DataAwsVpcSecurityGroupRuleOutputSchema = z.object({
  arn: z.string().optional(),
  cidr_ipv4: z.string().optional(),
  cidr_ipv6: z.string().optional(),
  description: z.string().optional(),
  from_port: z.number().optional(),
  id: z.string().optional(),
  ip_protocol: z.string().optional(),
  is_egress: z.boolean().optional(),
  prefix_list_id: z.string().optional(),
  referenced_security_group_id: z.string().optional(),
  security_group_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  to_port: z.number().optional(),
})

export type DataAwsVpcSecurityGroupRuleInputProps =
  & z.input<typeof DataAwsVpcSecurityGroupRuleInputSchema>
  & NodeProps

export type DataAwsVpcSecurityGroupRuleOutputProps =
  & z.output<typeof DataAwsVpcSecurityGroupRuleOutputSchema>
  & z.output<typeof DataAwsVpcSecurityGroupRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_security_group_rule

export function DataAwsVpcSecurityGroupRule(
  props: Partial<DataAwsVpcSecurityGroupRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_security_group_rule'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcSecurityGroupRuleInputSchema}
      _outputSchema={DataAwsVpcSecurityGroupRuleOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcSecurityGroupRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpcSecurityGroupRuleOutputProps>(
    DataAwsVpcSecurityGroupRule,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpcSecurityGroupRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcSecurityGroupRuleOutputProps>(
    DataAwsVpcSecurityGroupRule,
    idFilter,
    baseNode,
    optional,
  )
