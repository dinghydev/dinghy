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

export const DataAwsApiGatewayExportInputSchema = TfMetaSchema.extend({
  export_type: resolvableValue(z.string()),
  rest_api_id: resolvableValue(z.string()),
  stage_name: resolvableValue(z.string()),
  accepts: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsApiGatewayExportOutputSchema = z.object({
  body: z.string().optional(),
  content_disposition: z.string().optional(),
  content_type: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsApiGatewayExportInputProps =
  & z.input<typeof DataAwsApiGatewayExportInputSchema>
  & NodeProps

export type DataAwsApiGatewayExportOutputProps =
  & z.output<typeof DataAwsApiGatewayExportOutputSchema>
  & z.output<typeof DataAwsApiGatewayExportInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/api_gateway_export

export function DataAwsApiGatewayExport(
  props: Partial<DataAwsApiGatewayExportInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_export'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApiGatewayExportInputSchema}
      _outputSchema={DataAwsApiGatewayExportOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApiGatewayExport = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApiGatewayExportOutputProps>(
    DataAwsApiGatewayExport,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApiGatewayExports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApiGatewayExportOutputProps>(
    DataAwsApiGatewayExport,
    idFilter,
    baseNode,
    optional,
  )
