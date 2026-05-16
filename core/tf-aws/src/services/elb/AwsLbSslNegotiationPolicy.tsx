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

export const AwsLbSslNegotiationPolicyInputSchema = TfMetaSchema.extend({
  lb_port: resolvableValue(z.number()),
  load_balancer: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  attribute: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  triggers: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLbSslNegotiationPolicyOutputSchema = z.object({
  attribute: z.object({
    name: z.string(),
    value: z.string(),
  }).array().optional().optional(),
  id: z.string().optional(),
  lb_port: z.number().optional(),
  load_balancer: z.string().optional(),
  name: z.string().optional(),
})

export type AwsLbSslNegotiationPolicyInputProps =
  & z.input<typeof AwsLbSslNegotiationPolicyInputSchema>
  & NodeProps

export type AwsLbSslNegotiationPolicyOutputProps =
  & z.output<typeof AwsLbSslNegotiationPolicyOutputSchema>
  & z.output<typeof AwsLbSslNegotiationPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lb_ssl_negotiation_policy

export function AwsLbSslNegotiationPolicy(
  props: Partial<AwsLbSslNegotiationPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_ssl_negotiation_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLbSslNegotiationPolicyInputSchema}
      _outputSchema={AwsLbSslNegotiationPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsLbSslNegotiationPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLbSslNegotiationPolicyOutputProps>(
    AwsLbSslNegotiationPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLbSslNegotiationPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLbSslNegotiationPolicyOutputProps>(
    AwsLbSslNegotiationPolicy,
    idFilter,
    baseNode,
    optional,
  )
