import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_public_ipv4_pool

export const InputSchema = z.object({
  pool_address_ranges: resolvableValue(
    z.object({
      address_count: z.number(),
      available_address_count: z.number(),
      first_address: z.string(),
      last_address: z.string(),
    }).array(),
  ),
  pool_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  description: z.string().optional(),
  network_border_group: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  total_address_count: z.number().optional(),
  total_available_address_count: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEc2PublicIpv4Pool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_public_ipv4_pool'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2PublicIpv4Pool = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsEc2PublicIpv4Pool, node, id)

export const useDataAwsEc2PublicIpv4Pools = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsEc2PublicIpv4Pool, node, id)
