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

export const AwsApiGatewayVpcLinkInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  target_arns: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApiGatewayVpcLinkOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsApiGatewayVpcLinkInputProps =
  & z.input<typeof AwsApiGatewayVpcLinkInputSchema>
  & NodeProps

export type AwsApiGatewayVpcLinkOutputProps =
  & z.output<typeof AwsApiGatewayVpcLinkOutputSchema>
  & z.output<typeof AwsApiGatewayVpcLinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_vpc_link

export function AwsApiGatewayVpcLink(
  props: Partial<AwsApiGatewayVpcLinkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_vpc_link'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayVpcLinkInputSchema}
      _outputSchema={AwsApiGatewayVpcLinkOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayVpcLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayVpcLinkOutputProps>(
    AwsApiGatewayVpcLink,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayVpcLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayVpcLinkOutputProps>(
    AwsApiGatewayVpcLink,
    idFilter,
    baseNode,
    optional,
  )
