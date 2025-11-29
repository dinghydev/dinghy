import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_web_acl_rule_group_association

export const InputSchema = z.object({
  priority: resolvableValue(z.number()),
  rule_name: resolvableValue(z.string()),
  web_acl_arn: resolvableValue(z.string()),
  managed_rule_group: resolvableValue(
    z.object({
      name: z.string(),
      vendor_name: z.string(),
      version: z.string().optional(),
    }).optional(),
  ),
  override_action: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rule_group_reference: resolvableValue(
    z.object({
      arn: z.string(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafv2WebAclRuleGroupAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_web_acl_rule_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2WebAclRuleGroupAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsWafv2WebAclRuleGroupAssociation, node, id)

export const useAwsWafv2WebAclRuleGroupAssociations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsWafv2WebAclRuleGroupAssociation, node, id)
