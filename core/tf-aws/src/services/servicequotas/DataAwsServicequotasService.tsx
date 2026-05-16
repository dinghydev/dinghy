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

export const DataAwsServicequotasServiceInputSchema = TfMetaSchema.extend({
  service_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsServicequotasServiceOutputSchema = z.object({
  id: z.string().optional(),
  service_code: z.string().optional(),
})

export type DataAwsServicequotasServiceInputProps =
  & z.input<typeof DataAwsServicequotasServiceInputSchema>
  & NodeProps

export type DataAwsServicequotasServiceOutputProps =
  & z.output<typeof DataAwsServicequotasServiceOutputSchema>
  & z.output<typeof DataAwsServicequotasServiceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicequotas_service

export function DataAwsServicequotasService(
  props: Partial<DataAwsServicequotasServiceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicequotas_service'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicequotasServiceInputSchema}
      _outputSchema={DataAwsServicequotasServiceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicequotasService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServicequotasServiceOutputProps>(
    DataAwsServicequotasService,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicequotasServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicequotasServiceOutputProps>(
    DataAwsServicequotasService,
    idFilter,
    baseNode,
    optional,
  )
