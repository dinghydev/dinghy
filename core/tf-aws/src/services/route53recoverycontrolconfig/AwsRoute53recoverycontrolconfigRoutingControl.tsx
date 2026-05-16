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

export const AwsRoute53recoverycontrolconfigRoutingControlInputSchema =
  TfMetaSchema.extend({
    cluster_arn: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    control_panel_arn: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
  })

export const AwsRoute53recoverycontrolconfigRoutingControlOutputSchema = z
  .object({
    arn: z.string().optional(),
    status: z.string().optional(),
  })

export type AwsRoute53recoverycontrolconfigRoutingControlInputProps =
  & z.input<typeof AwsRoute53recoverycontrolconfigRoutingControlInputSchema>
  & NodeProps

export type AwsRoute53recoverycontrolconfigRoutingControlOutputProps =
  & z.output<typeof AwsRoute53recoverycontrolconfigRoutingControlOutputSchema>
  & z.output<typeof AwsRoute53recoverycontrolconfigRoutingControlInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53recoverycontrolconfig_routing_control

export function AwsRoute53recoverycontrolconfigRoutingControl(
  props: Partial<AwsRoute53recoverycontrolconfigRoutingControlInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53recoverycontrolconfig_routing_control'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53recoverycontrolconfigRoutingControlInputSchema}
      _outputSchema={AwsRoute53recoverycontrolconfigRoutingControlOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53recoverycontrolconfigRoutingControl = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53recoverycontrolconfigRoutingControlOutputProps>(
    AwsRoute53recoverycontrolconfigRoutingControl,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53recoverycontrolconfigRoutingControls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53recoverycontrolconfigRoutingControlOutputProps>(
    AwsRoute53recoverycontrolconfigRoutingControl,
    idFilter,
    baseNode,
    optional,
  )
