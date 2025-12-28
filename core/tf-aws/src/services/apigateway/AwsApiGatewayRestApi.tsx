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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  api_key_source: resolvableValue(z.string().optional()),
  binary_media_types: resolvableValue(z.string().array().optional()),
  body: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  disable_execute_api_endpoint: resolvableValue(z.boolean().optional()),
  endpoint_configuration: resolvableValue(
    z.object({
      ip_address_type: z.string().optional(),
      types: z.string().array(),
      vpc_endpoint_ids: z.string().array().optional(),
    }).optional(),
  ),
  fail_on_warnings: resolvableValue(z.boolean().optional()),
  minimum_compression_size: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  policy: resolvableValue(z.string().optional()),
  put_rest_api_mode: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  execution_arn: z.string().optional(),
  id: z.string().optional(),
  root_resource_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_rest_api

export function AwsApiGatewayRestApi(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_rest_api'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayRestApi = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsApiGatewayRestApi, idFilter, baseNode, optional)

export const useAwsApiGatewayRestApis = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsApiGatewayRestApi, idFilter, baseNode, optional)
