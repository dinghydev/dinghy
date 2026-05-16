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

export const DataAwsApigatewayv2ExportInputSchema = TfMetaSchema.extend({
  api_id: resolvableValue(z.string()),
  output_type: resolvableValue(z.string()),
  specification: resolvableValue(z.string()),
  export_version: resolvableValue(z.string().optional()),
  include_extensions: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  stage_name: resolvableValue(z.string().optional()),
})

export const DataAwsApigatewayv2ExportOutputSchema = z.object({
  body: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsApigatewayv2ExportInputProps =
  & z.input<typeof DataAwsApigatewayv2ExportInputSchema>
  & NodeProps

export type DataAwsApigatewayv2ExportOutputProps =
  & z.output<typeof DataAwsApigatewayv2ExportOutputSchema>
  & z.output<typeof DataAwsApigatewayv2ExportInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/apigatewayv2_export

export function DataAwsApigatewayv2Export(
  props: Partial<DataAwsApigatewayv2ExportInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_export'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApigatewayv2ExportInputSchema}
      _outputSchema={DataAwsApigatewayv2ExportOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApigatewayv2Export = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsApigatewayv2ExportOutputProps>(
    DataAwsApigatewayv2Export,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsApigatewayv2Exports = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApigatewayv2ExportOutputProps>(
    DataAwsApigatewayv2Export,
    idFilter,
    baseNode,
    optional,
  )
