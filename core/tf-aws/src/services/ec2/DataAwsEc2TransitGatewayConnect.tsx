import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGatewayConnect } from './AwsEc2TransitGatewayConnect.tsx'

export const DataAwsEc2TransitGatewayConnectInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_connect_id: resolvableValue(z.string().optional()),
})

export const DataAwsEc2TransitGatewayConnectOutputSchema = z.object({
  protocol: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_id: z.string().optional(),
  transport_attachment_id: z.string().optional(),
})

export type DataAwsEc2TransitGatewayConnectInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayConnectInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayConnectOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayConnectOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayConnectInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_connect

export function DataAwsEc2TransitGatewayConnect(
  props: Partial<DataAwsEc2TransitGatewayConnectInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayConnect
      _type='aws_ec2_transit_gateway_connect'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayConnectInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayConnectOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayConnect = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2TransitGatewayConnectOutputProps>(
    DataAwsEc2TransitGatewayConnect,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayConnects = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayConnectOutputProps>(
    DataAwsEc2TransitGatewayConnect,
    idFilter,
    baseNode,
    optional,
  )
