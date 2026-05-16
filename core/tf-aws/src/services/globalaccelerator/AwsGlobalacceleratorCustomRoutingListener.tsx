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

export const AwsGlobalacceleratorCustomRoutingListenerInputSchema = TfMetaSchema
  .extend({
    accelerator_arn: resolvableValue(z.string()),
    port_range: resolvableValue(
      z.object({
        from_port: z.number().optional(),
        to_port: z.number().optional(),
      }).array(),
    ),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsGlobalacceleratorCustomRoutingListenerOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const AwsGlobalacceleratorCustomRoutingListenerImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsGlobalacceleratorCustomRoutingListenerInputProps =
  & z.input<typeof AwsGlobalacceleratorCustomRoutingListenerInputSchema>
  & z.input<typeof AwsGlobalacceleratorCustomRoutingListenerImportSchema>
  & NodeProps

export type AwsGlobalacceleratorCustomRoutingListenerOutputProps =
  & z.output<typeof AwsGlobalacceleratorCustomRoutingListenerOutputSchema>
  & z.output<typeof AwsGlobalacceleratorCustomRoutingListenerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/globalaccelerator_custom_routing_listener

export function AwsGlobalacceleratorCustomRoutingListener(
  props: Partial<AwsGlobalacceleratorCustomRoutingListenerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_custom_routing_listener'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlobalacceleratorCustomRoutingListenerInputSchema}
      _outputSchema={AwsGlobalacceleratorCustomRoutingListenerOutputSchema}
      _importSchema={AwsGlobalacceleratorCustomRoutingListenerImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorCustomRoutingListener = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlobalacceleratorCustomRoutingListenerOutputProps>(
    AwsGlobalacceleratorCustomRoutingListener,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlobalacceleratorCustomRoutingListeners = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlobalacceleratorCustomRoutingListenerOutputProps>(
    AwsGlobalacceleratorCustomRoutingListener,
    idFilter,
    baseNode,
    optional,
  )
