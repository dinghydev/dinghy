import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayResource } from './AwsApiGatewayResource.tsx'

export const DataAwsApiGatewayResourceInputSchema = TfMetaSchema.extend({
  path: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewayResourceOutputSchema = z.object({
  id: z.string().optional(),
  parent_id: z.string().optional(),
  path_part: z.string().optional(),
})

export type DataAwsApiGatewayResourceInputProps =
  & z.input<typeof DataAwsApiGatewayResourceInputSchema>
  & NodeProps

export type DataAwsApiGatewayResourceOutputProps =
  & z.output<typeof DataAwsApiGatewayResourceOutputSchema>
  & z.output<typeof DataAwsApiGatewayResourceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_resource

export function DataAwsApiGatewayResource(
  props: Partial<DataAwsApiGatewayResourceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApiGatewayResource
      _type='aws_api_gateway_resource'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewayResourceInputSchema}
      _outputSchema={DataAwsApiGatewayResourceOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayResource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApiGatewayResourceOutputProps>(
    DataAwsApiGatewayResource,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayResources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewayResourceOutputProps>(
    DataAwsApiGatewayResource,
    idFilter,
    baseNode,
    optional,
  )
