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

export const AwsEc2ClientVpnAuthorizationRuleInputSchema = TfMetaSchema.extend({
  client_vpn_endpoint_id: resolvableValue(z.string()),
  target_network_cidr: resolvableValue(z.string()),
  access_group_id: resolvableValue(z.string().optional()),
  authorize_all_groups: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEc2ClientVpnAuthorizationRuleOutputSchema = z.object({})

export type AwsEc2ClientVpnAuthorizationRuleInputProps =
  & z.input<typeof AwsEc2ClientVpnAuthorizationRuleInputSchema>
  & NodeProps

export type AwsEc2ClientVpnAuthorizationRuleOutputProps =
  & z.output<typeof AwsEc2ClientVpnAuthorizationRuleOutputSchema>
  & z.output<typeof AwsEc2ClientVpnAuthorizationRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_client_vpn_authorization_rule

export function AwsEc2ClientVpnAuthorizationRule(
  props: Partial<AwsEc2ClientVpnAuthorizationRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_client_vpn_authorization_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2ClientVpnAuthorizationRuleInputSchema}
      _outputSchema={AwsEc2ClientVpnAuthorizationRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ClientVpnAuthorizationRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2ClientVpnAuthorizationRuleOutputProps>(
    AwsEc2ClientVpnAuthorizationRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2ClientVpnAuthorizationRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2ClientVpnAuthorizationRuleOutputProps>(
    AwsEc2ClientVpnAuthorizationRule,
    idFilter,
    baseNode,
    optional,
  )
