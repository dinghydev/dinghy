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

export const AwsRoute53recoverycontrolconfigControlPanelInputSchema =
  TfMetaSchema.extend({
    cluster_arn: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsRoute53recoverycontrolconfigControlPanelOutputSchema = z.object(
  {
    arn: z.string().optional(),
    default_control_panel: z.boolean().optional(),
    routing_control_count: z.number().optional(),
    status: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
  },
)

export type AwsRoute53recoverycontrolconfigControlPanelInputProps =
  & z.input<typeof AwsRoute53recoverycontrolconfigControlPanelInputSchema>
  & NodeProps

export type AwsRoute53recoverycontrolconfigControlPanelOutputProps =
  & z.output<typeof AwsRoute53recoverycontrolconfigControlPanelOutputSchema>
  & z.output<typeof AwsRoute53recoverycontrolconfigControlPanelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53recoverycontrolconfig_control_panel

export function AwsRoute53recoverycontrolconfigControlPanel(
  props: Partial<AwsRoute53recoverycontrolconfigControlPanelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoverycontrolconfig_control_panel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53recoverycontrolconfigControlPanelInputSchema}
      _outputSchema={AwsRoute53recoverycontrolconfigControlPanelOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoverycontrolconfigControlPanel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53recoverycontrolconfigControlPanelOutputProps>(
    AwsRoute53recoverycontrolconfigControlPanel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoverycontrolconfigControlPanels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53recoverycontrolconfigControlPanelOutputProps>(
    AwsRoute53recoverycontrolconfigControlPanel,
    idFilter,
    baseNode,
    optional,
  )
