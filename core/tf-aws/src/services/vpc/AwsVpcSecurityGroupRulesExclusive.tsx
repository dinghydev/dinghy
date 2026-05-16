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

export const AwsVpcSecurityGroupRulesExclusiveInputSchema = TfMetaSchema.extend(
  {
    egress_rule_ids: resolvableValue(z.string().array()),
    ingress_rule_ids: resolvableValue(z.string().array()),
    security_group_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsVpcSecurityGroupRulesExclusiveOutputSchema = z.object({})

export type AwsVpcSecurityGroupRulesExclusiveInputProps =
  & z.input<typeof AwsVpcSecurityGroupRulesExclusiveInputSchema>
  & NodeProps

export type AwsVpcSecurityGroupRulesExclusiveOutputProps =
  & z.output<typeof AwsVpcSecurityGroupRulesExclusiveOutputSchema>
  & z.output<typeof AwsVpcSecurityGroupRulesExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_security_group_rules_exclusive

export function AwsVpcSecurityGroupRulesExclusive(
  props: Partial<AwsVpcSecurityGroupRulesExclusiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_security_group_rules_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcSecurityGroupRulesExclusiveInputSchema}
      _outputSchema={AwsVpcSecurityGroupRulesExclusiveOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcSecurityGroupRulesExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcSecurityGroupRulesExclusiveOutputProps>(
    AwsVpcSecurityGroupRulesExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcSecurityGroupRulesExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcSecurityGroupRulesExclusiveOutputProps>(
    AwsVpcSecurityGroupRulesExclusive,
    idFilter,
    baseNode,
    optional,
  )
