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

export const AwsLbCookieStickinessPolicyInputSchema = TfMetaSchema.extend({
  lb_port: resolvableValue(z.number()),
  load_balancer: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  cookie_expiration_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLbCookieStickinessPolicyOutputSchema = z.object({
  cookie_expiration_period: z.number().optional(),
  id: z.string().optional(),
  lb_port: z.number().optional(),
  load_balancer: z.string().optional(),
  name: z.string().optional(),
})

export type AwsLbCookieStickinessPolicyInputProps =
  & z.input<typeof AwsLbCookieStickinessPolicyInputSchema>
  & NodeProps

export type AwsLbCookieStickinessPolicyOutputProps =
  & z.output<typeof AwsLbCookieStickinessPolicyOutputSchema>
  & z.output<typeof AwsLbCookieStickinessPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lb_cookie_stickiness_policy

export function AwsLbCookieStickinessPolicy(
  props: Partial<AwsLbCookieStickinessPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_cookie_stickiness_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLbCookieStickinessPolicyInputSchema}
      _outputSchema={AwsLbCookieStickinessPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsLbCookieStickinessPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLbCookieStickinessPolicyOutputProps>(
    AwsLbCookieStickinessPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLbCookieStickinessPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLbCookieStickinessPolicyOutputProps>(
    AwsLbCookieStickinessPolicy,
    idFilter,
    baseNode,
    optional,
  )
