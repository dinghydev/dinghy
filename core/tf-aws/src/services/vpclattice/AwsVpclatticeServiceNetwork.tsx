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

export const AwsVpclatticeServiceNetworkInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  auth_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsVpclatticeServiceNetworkOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpclatticeServiceNetworkInputProps =
  & z.input<typeof AwsVpclatticeServiceNetworkInputSchema>
  & NodeProps

export type AwsVpclatticeServiceNetworkOutputProps =
  & z.output<typeof AwsVpclatticeServiceNetworkOutputSchema>
  & z.output<typeof AwsVpclatticeServiceNetworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_service_network

export function AwsVpclatticeServiceNetwork(
  props: Partial<AwsVpclatticeServiceNetworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_service_network'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeServiceNetworkInputSchema}
      _outputSchema={AwsVpclatticeServiceNetworkOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeServiceNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeServiceNetworkOutputProps>(
    AwsVpclatticeServiceNetwork,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeServiceNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeServiceNetworkOutputProps>(
    AwsVpclatticeServiceNetwork,
    idFilter,
    baseNode,
    optional,
  )
