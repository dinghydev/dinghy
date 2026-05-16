import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCustomerGateway } from './AwsCustomerGateway.tsx'

export const DataAwsCustomerGatewayInputSchema = TfMetaSchema.extend({
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

export const DataAwsCustomerGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  bgp_asn: z.number().optional(),
  bgp_asn_extended: z.number().optional(),
  certificate_arn: z.string().optional(),
  device_name: z.string().optional(),
  ip_address: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type DataAwsCustomerGatewayInputProps =
  & z.input<typeof DataAwsCustomerGatewayInputSchema>
  & NodeProps

export type DataAwsCustomerGatewayOutputProps =
  & z.output<typeof DataAwsCustomerGatewayOutputSchema>
  & z.output<typeof DataAwsCustomerGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/customer_gateway

export function DataAwsCustomerGateway(
  props: Partial<DataAwsCustomerGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCustomerGateway
      _type='aws_customer_gateway'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCustomerGatewayInputSchema}
      _outputSchema={DataAwsCustomerGatewayOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCustomerGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCustomerGatewayOutputProps>(
    DataAwsCustomerGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCustomerGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCustomerGatewayOutputProps>(
    DataAwsCustomerGateway,
    idFilter,
    baseNode,
    optional,
  )
