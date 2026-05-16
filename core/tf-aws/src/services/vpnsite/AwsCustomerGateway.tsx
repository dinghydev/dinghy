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

export const AwsCustomerGatewayInputSchema = TfMetaSchema.extend({
  type: resolvableValue(z.string()),
  bgp_asn: resolvableValue(z.string().optional()),
  bgp_asn_extended: resolvableValue(z.string().optional()),
  certificate_arn: resolvableValue(z.string().optional()),
  device_name: resolvableValue(z.string().optional()),
  ip_address: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCustomerGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCustomerGatewayInputProps =
  & z.input<typeof AwsCustomerGatewayInputSchema>
  & NodeProps

export type AwsCustomerGatewayOutputProps =
  & z.output<typeof AwsCustomerGatewayOutputSchema>
  & z.output<typeof AwsCustomerGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/customer_gateway

export function AwsCustomerGateway(
  props: Partial<AwsCustomerGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_customer_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCustomerGatewayInputSchema}
      _outputSchema={AwsCustomerGatewayOutputSchema}
      {...props}
    />
  )
}

export const useAwsCustomerGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCustomerGatewayOutputProps>(
    AwsCustomerGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCustomerGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCustomerGatewayOutputProps>(
    AwsCustomerGateway,
    idFilter,
    baseNode,
    optional,
  )
