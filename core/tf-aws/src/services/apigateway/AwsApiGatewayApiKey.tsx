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

export const AwsApiGatewayApiKeyInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  customer_id: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  value: resolvableValue(z.string().optional()),
})

export const AwsApiGatewayApiKeyOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  last_updated_date: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsApiGatewayApiKeyInputProps =
  & z.input<typeof AwsApiGatewayApiKeyInputSchema>
  & NodeProps

export type AwsApiGatewayApiKeyOutputProps =
  & z.output<typeof AwsApiGatewayApiKeyOutputSchema>
  & z.output<typeof AwsApiGatewayApiKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/api_gateway_api_key

export function AwsApiGatewayApiKey(
  props: Partial<AwsApiGatewayApiKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_api_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApiGatewayApiKeyInputSchema}
      _outputSchema={AwsApiGatewayApiKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayApiKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApiGatewayApiKeyOutputProps>(
    AwsApiGatewayApiKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApiGatewayApiKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApiGatewayApiKeyOutputProps>(
    AwsApiGatewayApiKey,
    idFilter,
    baseNode,
    optional,
  )
