import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_lb_stickiness_policy

export const InputSchema = z.object({
  cookie_duration: resolvableValue(z.number()),
  enabled: resolvableValue(z.boolean()),
  lb_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailLbStickinessPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_stickiness_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbStickinessPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLightsailLbStickinessPolicy, node, id)

export const useAwsLightsailLbStickinessPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLightsailLbStickinessPolicy, node, id)
