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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpn_gateway

export function DataAwsVpnGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsVpnGateway
      _type='aws_vpn_gateway'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpnGateway = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsVpnGateway, idFilter, baseNode)

export const useDataAwsVpnGateways = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsVpnGateway, idFilter, baseNode)
