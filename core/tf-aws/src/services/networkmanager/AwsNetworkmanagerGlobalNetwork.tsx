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

export const AwsNetworkmanagerGlobalNetworkInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkmanagerGlobalNetworkOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerGlobalNetworkInputProps =
  & z.input<typeof AwsNetworkmanagerGlobalNetworkInputSchema>
  & NodeProps

export type AwsNetworkmanagerGlobalNetworkOutputProps =
  & z.output<typeof AwsNetworkmanagerGlobalNetworkOutputSchema>
  & z.output<typeof AwsNetworkmanagerGlobalNetworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_global_network

export function AwsNetworkmanagerGlobalNetwork(
  props: Partial<AwsNetworkmanagerGlobalNetworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_global_network'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerGlobalNetworkInputSchema}
      _outputSchema={AwsNetworkmanagerGlobalNetworkOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerGlobalNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerGlobalNetworkOutputProps>(
    AwsNetworkmanagerGlobalNetwork,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerGlobalNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerGlobalNetworkOutputProps>(
    AwsNetworkmanagerGlobalNetwork,
    idFilter,
    baseNode,
    optional,
  )
