import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/app_cookie_stickiness_policy

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  cookie_name: z.string().optional(),
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

export function AwsAppCookieStickinessPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_app_cookie_stickiness_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppCookieStickinessPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppCookieStickinessPolicy, node, id)

export const useAwsAppCookieStickinessPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppCookieStickinessPolicy, node, id)
