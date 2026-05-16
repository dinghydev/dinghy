import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsNetworkmanagerDevicesInputSchema = TfMetaSchema.extend({
  global_network_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  site_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsNetworkmanagerDevicesOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsNetworkmanagerDevicesInputProps =
  & z.input<typeof DataAwsNetworkmanagerDevicesInputSchema>
  & NodeProps

export type DataAwsNetworkmanagerDevicesOutputProps =
  & z.output<typeof DataAwsNetworkmanagerDevicesOutputSchema>
  & z.output<typeof DataAwsNetworkmanagerDevicesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkmanager_devices

export function DataAwsNetworkmanagerDevices(
  props: Partial<DataAwsNetworkmanagerDevicesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_devices'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkmanagerDevicesInputSchema}
      _outputSchema={DataAwsNetworkmanagerDevicesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNetworkmanagerDevicess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkmanagerDevicesOutputProps>(
    DataAwsNetworkmanagerDevices,
    idFilter,
    baseNode,
    optional,
  )
