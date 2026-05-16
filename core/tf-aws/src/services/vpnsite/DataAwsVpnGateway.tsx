import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpnGateway } from './AwsVpnGateway.tsx'

export const DataAwsVpnGatewayInputSchema = TfMetaSchema.extend({
  amazon_side_asn: resolvableValue(z.string().optional()),
  attached_vpc_id: resolvableValue(z.string().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsVpnGatewayOutputSchema = z.object({
  arn: z.string().optional(),
})

export type DataAwsVpnGatewayInputProps =
  & z.input<typeof DataAwsVpnGatewayInputSchema>
  & NodeProps

export type DataAwsVpnGatewayOutputProps =
  & z.output<typeof DataAwsVpnGatewayOutputSchema>
  & z.output<typeof DataAwsVpnGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpn_gateway

export function DataAwsVpnGateway(props: Partial<DataAwsVpnGatewayInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpnGateway
      _type='aws_vpn_gateway'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpnGatewayInputSchema}
      _outputSchema={DataAwsVpnGatewayOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpnGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpnGatewayOutputProps>(
    DataAwsVpnGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpnGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpnGatewayOutputProps>(
    DataAwsVpnGateway,
    idFilter,
    baseNode,
    optional,
  )
