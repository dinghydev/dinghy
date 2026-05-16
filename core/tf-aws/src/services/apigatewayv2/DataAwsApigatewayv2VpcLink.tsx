import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApigatewayv2VpcLink } from './AwsApigatewayv2VpcLink.tsx'

export const DataAwsApigatewayv2VpcLinkInputSchema = TfMetaSchema.extend({
  vpc_link_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApigatewayv2VpcLinkOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  security_group_ids: z.set(z.string()).optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsApigatewayv2VpcLinkInputProps =
  & z.input<typeof DataAwsApigatewayv2VpcLinkInputSchema>
  & NodeProps

export type DataAwsApigatewayv2VpcLinkOutputProps =
  & z.output<typeof DataAwsApigatewayv2VpcLinkOutputSchema>
  & z.output<typeof DataAwsApigatewayv2VpcLinkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/apigatewayv2_vpc_link

export function DataAwsApigatewayv2VpcLink(
  props: Partial<DataAwsApigatewayv2VpcLinkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApigatewayv2VpcLink
      _type='aws_apigatewayv2_vpc_link'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApigatewayv2VpcLinkInputSchema}
      _outputSchema={DataAwsApigatewayv2VpcLinkOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApigatewayv2VpcLink = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApigatewayv2VpcLinkOutputProps>(
    DataAwsApigatewayv2VpcLink,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApigatewayv2VpcLinks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApigatewayv2VpcLinkOutputProps>(
    DataAwsApigatewayv2VpcLink,
    idFilter,
    baseNode,
    optional,
  )
