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
  subnet_id: resolvableValue(z.string()),
  allocation_id: resolvableValue(z.string().optional()),
  connectivity_type: resolvableValue(z.string().optional()),
  private_ip: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  secondary_allocation_ids: resolvableValue(z.string().array().optional()),
  secondary_private_ip_address_count: resolvableValue(z.number().optional()),
  secondary_private_ip_addresses: resolvableValue(
    z.string().array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  association_id: z.string().optional(),
  id: z.string().optional(),
  network_interface_id: z.string().optional(),
  public_ip: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/nat_gateway

export function AwsNatGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_nat_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNatGateway = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsNatGateway, idFilter, baseNode)

export const useAwsNatGateways = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsNatGateway, idFilter, baseNode)
