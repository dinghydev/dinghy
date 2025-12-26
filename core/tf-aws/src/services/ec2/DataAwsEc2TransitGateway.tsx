import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGateway } from './AwsEc2TransitGateway.tsx'

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  amazon_side_asn: z.number().optional(),
  arn: z.string().optional(),
  association_default_route_table_id: z.string().optional(),
  auto_accept_shared_attachments: z.string().optional(),
  default_route_table_association: z.string().optional(),
  default_route_table_propagation: z.string().optional(),
  description: z.string().optional(),
  dns_support: z.string().optional(),
  id: z.string().optional(),
  multicast_support: z.string().optional(),
  owner_id: z.string().optional(),
  propagation_default_route_table_id: z.string().optional(),
  security_group_referencing_support: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_cidr_blocks: z.string().array().optional(),
  vpn_ecmp_support: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_transit_gateway

export function DataAwsEc2TransitGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEc2TransitGateway
      _type='aws_ec2_transit_gateway'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2TransitGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2TransitGateway,
    idFilter,
    baseNode,
    optional,
  )
