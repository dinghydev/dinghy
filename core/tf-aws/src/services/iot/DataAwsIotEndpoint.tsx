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

export const DataAwsIotEndpointInputSchema = TfMetaSchema.extend({
  endpoint_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsIotEndpointOutputSchema = z.object({
  endpoint_address: z.string().optional(),
})

export type DataAwsIotEndpointInputProps =
  & z.input<typeof DataAwsIotEndpointInputSchema>
  & NodeProps

export type DataAwsIotEndpointOutputProps =
  & z.output<typeof DataAwsIotEndpointOutputSchema>
  & z.output<typeof DataAwsIotEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iot_endpoint

export function DataAwsIotEndpoint(
  props: Partial<DataAwsIotEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIotEndpointInputSchema}
      _outputSchema={DataAwsIotEndpointOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIotEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIotEndpointOutputProps>(
    DataAwsIotEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIotEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIotEndpointOutputProps>(
    DataAwsIotEndpoint,
    idFilter,
    baseNode,
    optional,
  )
