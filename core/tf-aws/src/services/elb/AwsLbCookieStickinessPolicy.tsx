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

export const InputSchema = z.object({
  lb_port: resolvableValue(z.number()),
  load_balancer: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  cookie_expiration_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_cookie_stickiness_policy

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

export const useAwsLbCookieStickinessPolicy = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsLbCookieStickinessPolicy, idFilter, baseNode)

export const useAwsLbCookieStickinessPolicys = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsLbCookieStickinessPolicy, idFilter, baseNode)
