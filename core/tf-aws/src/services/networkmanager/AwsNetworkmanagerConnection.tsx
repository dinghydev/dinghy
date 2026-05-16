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

export const AwsNetworkmanagerConnectionInputSchema = TfMetaSchema.extend({
  connected_device_id: resolvableValue(z.string()),
  device_id: resolvableValue(z.string()),
  global_network_id: resolvableValue(z.string()),
  connected_link_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  link_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkmanagerConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerConnectionInputProps =
  & z.input<typeof AwsNetworkmanagerConnectionInputSchema>
  & NodeProps

export type AwsNetworkmanagerConnectionOutputProps =
  & z.output<typeof AwsNetworkmanagerConnectionOutputSchema>
  & z.output<typeof AwsNetworkmanagerConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_connection

export function AwsNetworkmanagerConnection(
  props: Partial<AwsNetworkmanagerConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerConnectionInputSchema}
      _outputSchema={AwsNetworkmanagerConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerConnectionOutputProps>(
    AwsNetworkmanagerConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerConnectionOutputProps>(
    AwsNetworkmanagerConnection,
    idFilter,
    baseNode,
    optional,
  )
