import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_cookie_stickiness_policy

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  cookie_expiration_period: z.number().optional(),
  id: z.string().optional(),
  lb_port: z.number().optional(),
  load_balancer: z.string().optional(),
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLbCookieStickinessPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_cookie_stickiness_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLbCookieStickinessPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLbCookieStickinessPolicy, node, id)

export const useAwsLbCookieStickinessPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLbCookieStickinessPolicy, node, id)
