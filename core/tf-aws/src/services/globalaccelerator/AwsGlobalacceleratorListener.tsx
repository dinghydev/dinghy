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

export const AwsGlobalacceleratorListenerInputSchema = TfMetaSchema.extend({
  accelerator_arn: resolvableValue(z.string()),
  port_range: resolvableValue(
    z.object({
      from_port: z.number().optional(),
      to_port: z.number().optional(),
    }).array(),
  ),
  protocol: resolvableValue(z.string()),
  client_affinity: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsGlobalacceleratorListenerOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const AwsGlobalacceleratorListenerImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsGlobalacceleratorListenerInputProps =
  & z.input<typeof AwsGlobalacceleratorListenerInputSchema>
  & z.input<typeof AwsGlobalacceleratorListenerImportSchema>
  & NodeProps

export type AwsGlobalacceleratorListenerOutputProps =
  & z.output<typeof AwsGlobalacceleratorListenerOutputSchema>
  & z.output<typeof AwsGlobalacceleratorListenerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/globalaccelerator_listener

export function AwsGlobalacceleratorListener(
  props: Partial<AwsGlobalacceleratorListenerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_globalaccelerator_listener'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlobalacceleratorListenerInputSchema}
      _outputSchema={AwsGlobalacceleratorListenerOutputSchema}
      _importSchema={AwsGlobalacceleratorListenerImportSchema}
      {...props}
    />
  )
}

export const useAwsGlobalacceleratorListener = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlobalacceleratorListenerOutputProps>(
    AwsGlobalacceleratorListener,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlobalacceleratorListeners = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlobalacceleratorListenerOutputProps>(
    AwsGlobalacceleratorListener,
    idFilter,
    baseNode,
    optional,
  )
