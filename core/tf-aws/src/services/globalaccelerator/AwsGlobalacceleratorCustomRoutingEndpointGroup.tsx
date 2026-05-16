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

export const AwsGlobalacceleratorCustomRoutingEndpointGroupInputSchema =
  TfMetaSchema.extend({
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

export const AwsGlobalacceleratorCustomRoutingEndpointGroupOutputSchema = z
  .object({
    arn: z.string().optional(),
    id: z.string().optional(),
  })

export const AwsGlobalacceleratorCustomRoutingEndpointGroupImportSchema = z
  .object({
    arn: resolvableValue(z.string()),
  })

export type AwsGlobalacceleratorCustomRoutingEndpointGroupInputProps =
  & z.input<typeof AwsGlobalacceleratorCustomRoutingEndpointGroupInputSchema>
  & z.input<typeof AwsGlobalacceleratorCustomRoutingEndpointGroupImportSchema>
  & NodeProps

export type AwsGlobalacceleratorCustomRoutingEndpointGroupOutputProps =
  & z.output<typeof AwsGlobalacceleratorCustomRoutingEndpointGroupOutputSchema>
  & z.output<typeof AwsGlobalacceleratorCustomRoutingEndpointGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/globalaccelerator_custom_routing_endpoint_group

export function AwsGlobalacceleratorCustomRoutingEndpointGroup(
  props: Partial<AwsGlobalacceleratorCustomRoutingEndpointGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_custom_routing_endpoint_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlobalacceleratorCustomRoutingEndpointGroupInputSchema}
      _outputSchema={AwsGlobalacceleratorCustomRoutingEndpointGroupOutputSchema}
      _importSchema={AwsGlobalacceleratorCustomRoutingEndpointGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorCustomRoutingEndpointGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlobalacceleratorCustomRoutingEndpointGroupOutputProps>(
    AwsGlobalacceleratorCustomRoutingEndpointGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlobalacceleratorCustomRoutingEndpointGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlobalacceleratorCustomRoutingEndpointGroupOutputProps>(
    AwsGlobalacceleratorCustomRoutingEndpointGroup,
    idFilter,
    baseNode,
    optional,
  )
