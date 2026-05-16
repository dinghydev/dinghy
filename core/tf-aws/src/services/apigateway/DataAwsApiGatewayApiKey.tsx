import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApiGatewayApiKey } from './AwsApiGatewayApiKey.tsx'

export const DataAwsApiGatewayApiKeyInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewayApiKeyOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  customer_id: z.string().optional(),
  description: z.string().optional(),
  enabled: z.boolean().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  value: z.string().optional(),
})

export type DataAwsApiGatewayApiKeyInputProps =
  & z.input<typeof DataAwsApiGatewayApiKeyInputSchema>
  & NodeProps

export type DataAwsApiGatewayApiKeyOutputProps =
  & z.output<typeof DataAwsApiGatewayApiKeyOutputSchema>
  & z.output<typeof DataAwsApiGatewayApiKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_api_key

export function DataAwsApiGatewayApiKey(
  props: Partial<DataAwsApiGatewayApiKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApiGatewayApiKey
      _type='aws_api_gateway_api_key'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewayApiKeyInputSchema}
      _outputSchema={DataAwsApiGatewayApiKeyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApiGatewayApiKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApiGatewayApiKeyOutputProps>(
    DataAwsApiGatewayApiKey,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayApiKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewayApiKeyOutputProps>(
    DataAwsApiGatewayApiKey,
    idFilter,
    baseNode,
    optional,
  )
