import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsNetworkInterfacesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsNetworkInterfacesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsNetworkInterfacesInputProps =
  & z.input<typeof DataAwsNetworkInterfacesInputSchema>
  & NodeProps

export type DataAwsNetworkInterfacesOutputProps =
  & z.output<typeof DataAwsNetworkInterfacesOutputSchema>
  & z.output<typeof DataAwsNetworkInterfacesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/network_interfaces

export function DataAwsNetworkInterfaces(
  props: Partial<DataAwsNetworkInterfacesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_interfaces'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkInterfacesInputSchema}
      _outputSchema={DataAwsNetworkInterfacesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNetworkInterfacess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkInterfacesOutputProps>(
    DataAwsNetworkInterfaces,
    idFilter,
    baseNode,
    optional,
  )
