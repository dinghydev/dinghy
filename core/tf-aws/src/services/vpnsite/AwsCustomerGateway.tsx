import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/customer_gateway

export const InputSchema = z.object({
  type: resolvableValue(z.string()),
  bgp_asn: resolvableValue(z.string().optional()),
  bgp_asn_extended: resolvableValue(z.string().optional()),
  certificate_arn: resolvableValue(z.string().optional()),
  device_name: resolvableValue(z.string().optional()),
  ip_address: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCustomerGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_customer_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCustomerGateway = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCustomerGateway, node, id)

export const useAwsCustomerGateways = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCustomerGateway, node, id)
