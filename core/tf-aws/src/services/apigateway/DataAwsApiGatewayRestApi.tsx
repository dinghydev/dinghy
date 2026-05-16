import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayRestApi } from './AwsApiGatewayRestApi.tsx'

export const DataAwsApiGatewayRestApiInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewayRestApiOutputSchema = z.object({
  api_key_source: z.string().optional(),
  arn: z.string().optional(),
  binary_media_types: z.string().array().optional(),
  description: z.string().optional(),
  endpoint_configuration: z.object({
    ip_address_type: z.string(),
    types: z.string().array(),
    vpc_endpoint_ids: z.set(z.string()),
  }).array().optional(),
  execution_arn: z.string().optional(),
  id: z.string().optional(),
  minimum_compression_size: z.string().optional(),
  policy: z.string().optional(),
  root_resource_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsApiGatewayRestApiInputProps =
  & z.input<typeof DataAwsApiGatewayRestApiInputSchema>
  & NodeProps

export type DataAwsApiGatewayRestApiOutputProps =
  & z.output<typeof DataAwsApiGatewayRestApiOutputSchema>
  & z.output<typeof DataAwsApiGatewayRestApiInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_rest_api

export function DataAwsApiGatewayRestApi(
  props: Partial<DataAwsApiGatewayRestApiInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApiGatewayRestApi
      _type='aws_api_gateway_rest_api'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewayRestApiInputSchema}
      _outputSchema={DataAwsApiGatewayRestApiOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayRestApi = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApiGatewayRestApiOutputProps>(
    DataAwsApiGatewayRestApi,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayRestApis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewayRestApiOutputProps>(
    DataAwsApiGatewayRestApi,
    idFilter,
    baseNode,
    optional,
  )
