import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_lb_https_redirection_policy

export const InputSchema = z.object({
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

export function AwsLightsailLbHttpsRedirectionPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_lb_https_redirection_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailLbHttpsRedirectionPolicy = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsLightsailLbHttpsRedirectionPolicy, node, id)

export const useAwsLightsailLbHttpsRedirectionPolicys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsLightsailLbHttpsRedirectionPolicy, node, id)
