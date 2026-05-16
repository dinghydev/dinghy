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

export const AwsApigatewayv2VpcLinkInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  security_group_ids: resolvableValue(z.string().array()),
  subnet_ids: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsApigatewayv2VpcLinkOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsApigatewayv2VpcLinkInputProps =
  & z.input<typeof AwsApigatewayv2VpcLinkInputSchema>
  & NodeProps

export type AwsApigatewayv2VpcLinkOutputProps =
  & z.output<typeof AwsApigatewayv2VpcLinkOutputSchema>
  & z.output<typeof AwsApigatewayv2VpcLinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apigatewayv2_vpc_link

export function AwsApigatewayv2VpcLink(
  props: Partial<AwsApigatewayv2VpcLinkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_vpc_link'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApigatewayv2VpcLinkInputSchema}
      _outputSchema={AwsApigatewayv2VpcLinkOutputSchema}
      {...props}
    />
  )
}

export const useAwsApigatewayv2VpcLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApigatewayv2VpcLinkOutputProps>(
    AwsApigatewayv2VpcLink,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApigatewayv2VpcLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApigatewayv2VpcLinkOutputProps>(
    AwsApigatewayv2VpcLink,
    idFilter,
    baseNode,
    optional,
  )
