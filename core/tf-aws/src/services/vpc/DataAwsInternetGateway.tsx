import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsInternetGateway } from './AwsInternetGateway.tsx'

export const DataAwsInternetGatewayInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  internet_gateway_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsInternetGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  attachments: z.object({
    state: z.string(),
    vpc_id: z.string(),
  }).array().optional(),
  owner_id: z.string().optional(),
})

export type DataAwsInternetGatewayInputProps =
  & z.input<typeof DataAwsInternetGatewayInputSchema>
  & NodeProps

export type DataAwsInternetGatewayOutputProps =
  & z.output<typeof DataAwsInternetGatewayOutputSchema>
  & z.output<typeof DataAwsInternetGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/internet_gateway

export function DataAwsInternetGateway(
  props: Partial<DataAwsInternetGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsInternetGateway
      _type='aws_internet_gateway'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsInternetGatewayInputSchema}
      _outputSchema={DataAwsInternetGatewayOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsInternetGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsInternetGatewayOutputProps>(
    DataAwsInternetGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsInternetGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsInternetGatewayOutputProps>(
    DataAwsInternetGateway,
    idFilter,
    baseNode,
    optional,
  )
