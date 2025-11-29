import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/globalaccelerator_custom_routing_endpoint_group

export const InputSchema = z.object({
  destination_configuration: resolvableValue(
    z.object({
      from_port: z.number(),
      protocols: z.string().array(),
      to_port: z.number(),
    }).array(),
  ),
  listener_arn: resolvableValue(z.string()),
  endpoint_configuration: resolvableValue(
    z.object({
      endpoint_id: z.string().optional(),
    }).array().optional(),
  ),
  endpoint_group_region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlobalacceleratorCustomRoutingEndpointGroup(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_custom_routing_endpoint_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorCustomRoutingEndpointGroup = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsGlobalacceleratorCustomRoutingEndpointGroup,
    node,
    id,
  )

export const useAwsGlobalacceleratorCustomRoutingEndpointGroups = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsGlobalacceleratorCustomRoutingEndpointGroup,
    node,
    id,
  )
