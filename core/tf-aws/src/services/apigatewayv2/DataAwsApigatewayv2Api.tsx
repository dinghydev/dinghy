import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsApigatewayv2Api } from './AwsApigatewayv2Api.tsx'

export const DataAwsApigatewayv2ApiInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApigatewayv2ApiOutputSchema = z.object({
  api_endpoint: z.string().optional(),
  api_key_selection_expression: z.string().optional(),
  arn: z.string().optional(),
  cors_configuration: z.object({
    allow_credentials: z.boolean(),
    allow_headers: z.set(z.string()),
    allow_methods: z.set(z.string()),
    allow_origins: z.set(z.string()),
    expose_headers: z.set(z.string()),
    max_age: z.number(),
  }).array().optional(),
  description: z.string().optional(),
  disable_execute_api_endpoint: z.boolean().optional(),
  execution_arn: z.string().optional(),
  ip_address_type: z.string().optional(),
  name: z.string().optional(),
  protocol_type: z.string().optional(),
  route_selection_expression: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type DataAwsApigatewayv2ApiInputProps =
  & z.input<typeof DataAwsApigatewayv2ApiInputSchema>
  & NodeProps

export type DataAwsApigatewayv2ApiOutputProps =
  & z.output<typeof DataAwsApigatewayv2ApiOutputSchema>
  & z.output<typeof DataAwsApigatewayv2ApiInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/apigatewayv2_api

export function DataAwsApigatewayv2Api(
  props: Partial<DataAwsApigatewayv2ApiInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsApigatewayv2Api
      _type='aws_apigatewayv2_api'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApigatewayv2ApiInputSchema}
      _outputSchema={DataAwsApigatewayv2ApiOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsApigatewayv2Api = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApigatewayv2ApiOutputProps>(
    DataAwsApigatewayv2Api,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApigatewayv2Apis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApigatewayv2ApiOutputProps>(
    DataAwsApigatewayv2Api,
    idFilter,
    baseNode,
    optional,
  )
