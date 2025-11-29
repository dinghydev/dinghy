import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53recoverycontrolconfig_routing_control

export const InputSchema = z.object({
  cluster_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  control_panel_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53recoverycontrolconfigRoutingControl(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoverycontrolconfig_routing_control'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoverycontrolconfigRoutingControl = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsRoute53recoverycontrolconfigRoutingControl,
    node,
    id,
  )

export const useAwsRoute53recoverycontrolconfigRoutingControls = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsRoute53recoverycontrolconfigRoutingControl,
    node,
    id,
  )
