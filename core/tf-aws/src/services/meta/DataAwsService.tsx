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

export const DataAwsServiceInputSchema = TfMetaSchema.extend({
  partition: resolvableValue(z.string()),
  dns_name: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  reverse_dns_name: resolvableValue(z.string().optional()),
  reverse_dns_prefix: resolvableValue(z.string().optional()),
  service_id: resolvableValue(z.string().optional()),
})

export const DataAwsServiceOutputSchema = z.object({
  partition: z.string().optional(),
  supported: z.boolean().optional(),
})

export type DataAwsServiceInputProps =
  & z.input<typeof DataAwsServiceInputSchema>
  & NodeProps

export type DataAwsServiceOutputProps =
  & z.output<typeof DataAwsServiceOutputSchema>
  & z.output<typeof DataAwsServiceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/service

export function DataAwsService(props: Partial<DataAwsServiceInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServiceInputSchema}
      _outputSchema={DataAwsServiceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsService = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServiceOutputProps>(
    DataAwsService,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServiceOutputProps>(
    DataAwsService,
    idFilter,
    baseNode,
    optional,
  )
