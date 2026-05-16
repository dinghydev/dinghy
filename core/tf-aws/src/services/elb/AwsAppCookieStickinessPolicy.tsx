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

export const AwsAppCookieStickinessPolicyInputSchema = TfMetaSchema.extend({
  cookie_name: resolvableValue(z.string()),
  lb_port: resolvableValue(z.number()),
  load_balancer: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAppCookieStickinessPolicyOutputSchema = z.object({
  cookie_name: z.string().optional(),
  id: z.string().optional(),
  lb_port: z.number().optional(),
  load_balancer: z.string().optional(),
  name: z.string().optional(),
})

export type AwsAppCookieStickinessPolicyInputProps =
  & z.input<typeof AwsAppCookieStickinessPolicyInputSchema>
  & NodeProps

export type AwsAppCookieStickinessPolicyOutputProps =
  & z.output<typeof AwsAppCookieStickinessPolicyOutputSchema>
  & z.output<typeof AwsAppCookieStickinessPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/app_cookie_stickiness_policy

export function AwsAppCookieStickinessPolicy(
  props: Partial<AwsAppCookieStickinessPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_app_cookie_stickiness_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppCookieStickinessPolicyInputSchema}
      _outputSchema={AwsAppCookieStickinessPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppCookieStickinessPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppCookieStickinessPolicyOutputProps>(
    AwsAppCookieStickinessPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppCookieStickinessPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppCookieStickinessPolicyOutputProps>(
    AwsAppCookieStickinessPolicy,
    idFilter,
    baseNode,
    optional,
  )
