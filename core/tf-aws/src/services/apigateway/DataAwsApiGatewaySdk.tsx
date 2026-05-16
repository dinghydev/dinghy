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

export const DataAwsApiGatewaySdkInputSchema = TfMetaSchema.extend({
  rest_api_id: resolvableValue(z.string()),
  sdk_type: resolvableValue(z.string()),
  stage_name: resolvableValue(z.string()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewaySdkOutputSchema = z.object({
  body: z.string().optional(),
  content_disposition: z.string().optional(),
  content_type: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsApiGatewaySdkInputProps =
  & z.input<typeof DataAwsApiGatewaySdkInputSchema>
  & NodeProps

export type DataAwsApiGatewaySdkOutputProps =
  & z.output<typeof DataAwsApiGatewaySdkOutputSchema>
  & z.output<typeof DataAwsApiGatewaySdkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_sdk

export function DataAwsApiGatewaySdk(
  props: Partial<DataAwsApiGatewaySdkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_sdk'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewaySdkInputSchema}
      _outputSchema={DataAwsApiGatewaySdkOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApiGatewaySdk = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApiGatewaySdkOutputProps>(
    DataAwsApiGatewaySdk,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewaySdks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewaySdkOutputProps>(
    DataAwsApiGatewaySdk,
    idFilter,
    baseNode,
    optional,
  )
