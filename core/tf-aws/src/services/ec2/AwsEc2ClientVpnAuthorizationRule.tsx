import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_client_vpn_authorization_rule

export const InputSchema = z.object({
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

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2ClientVpnAuthorizationRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_client_vpn_authorization_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ClientVpnAuthorizationRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2ClientVpnAuthorizationRule, node, id)

export const useAwsEc2ClientVpnAuthorizationRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2ClientVpnAuthorizationRule, node, id)
