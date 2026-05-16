import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsApigatewayv2ApisInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  protocol_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsApigatewayv2ApisOutputSchema = z.object({
  ids: z.set(z.string()).optional(),
})

export type DataAwsApigatewayv2ApisInputProps =
  & z.input<typeof DataAwsApigatewayv2ApisInputSchema>
  & NodeProps

export type DataAwsApigatewayv2ApisOutputProps =
  & z.output<typeof DataAwsApigatewayv2ApisOutputSchema>
  & z.output<typeof DataAwsApigatewayv2ApisInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/apigatewayv2_apis

export function DataAwsApigatewayv2Apis(
  props: Partial<DataAwsApigatewayv2ApisInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apigatewayv2_apis'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsApigatewayv2ApisInputSchema}
      _outputSchema={DataAwsApigatewayv2ApisOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsApigatewayv2Apiss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsApigatewayv2ApisOutputProps>(
    DataAwsApigatewayv2Apis,
    idFilter,
    baseNode,
    optional,
  )
