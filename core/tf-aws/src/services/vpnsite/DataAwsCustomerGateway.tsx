import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCustomerGateway } from './AwsCustomerGateway.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/customer_gateway

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
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bgp_asn: z.number().optional(),
  bgp_asn_extended: z.number().optional(),
  certificate_arn: z.string().optional(),
  device_name: z.string().optional(),
  ip_address: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCustomerGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCustomerGateway
      _type='aws_customer_gateway'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCustomerGateway = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsCustomerGateway, node, id)

export const useDataAwsCustomerGateways = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsCustomerGateway, node, id)
