import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayVpcLink } from './AwsApiGatewayVpcLink.tsx'

export const DataAwsApiGatewayVpcLinkInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewayVpcLinkOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  target_arns: z.set(z.string()).optional(),
})

export type DataAwsApiGatewayVpcLinkInputProps =
  & z.input<typeof DataAwsApiGatewayVpcLinkInputSchema>
  & NodeProps

export type DataAwsApiGatewayVpcLinkOutputProps =
  & z.output<typeof DataAwsApiGatewayVpcLinkOutputSchema>
  & z.output<typeof DataAwsApiGatewayVpcLinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_vpc_link

export function DataAwsApiGatewayVpcLink(
  props: Partial<DataAwsApiGatewayVpcLinkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApiGatewayVpcLink
      _type='aws_api_gateway_vpc_link'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewayVpcLinkInputSchema}
      _outputSchema={DataAwsApiGatewayVpcLinkOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayVpcLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApiGatewayVpcLinkOutputProps>(
    DataAwsApiGatewayVpcLink,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayVpcLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewayVpcLinkOutputProps>(
    DataAwsApiGatewayVpcLink,
    idFilter,
    baseNode,
    optional,
  )
