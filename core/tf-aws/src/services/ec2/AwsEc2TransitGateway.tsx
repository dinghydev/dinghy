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

export const InputSchema = z.object({
  amazon_side_asn: resolvableValue(z.number().optional()),
  auto_accept_shared_attachments: resolvableValue(z.string().optional()),
  default_route_table_association: resolvableValue(z.string().optional()),
  default_route_table_propagation: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  dns_support: resolvableValue(z.string().optional()),
  multicast_support: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_referencing_support: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_cidr_blocks: resolvableValue(z.string().array().optional()),
  vpn_ecmp_support: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  association_default_route_table_id: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  propagation_default_route_table_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway

export function AwsEc2TransitGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsEc2TransitGateway, idFilter, baseNode, optional)

export const useAwsEc2TransitGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsEc2TransitGateway, idFilter, baseNode, optional)
