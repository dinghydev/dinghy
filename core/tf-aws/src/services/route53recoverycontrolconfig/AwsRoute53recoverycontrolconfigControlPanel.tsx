import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53recoverycontrolconfig_control_panel

export const InputSchema = z.object({
  cluster_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_control_panel: z.boolean().optional(),
  routing_control_count: z.number().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53recoverycontrolconfigControlPanel(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoverycontrolconfig_control_panel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoverycontrolconfigControlPanel = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsRoute53recoverycontrolconfigControlPanel,
    node,
    id,
  )

export const useAwsRoute53recoverycontrolconfigControlPanels = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsRoute53recoverycontrolconfigControlPanel,
    node,
    id,
  )
