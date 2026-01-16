import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkmanagerDevice } from './AwsNetworkmanagerDevice.tsx'

export const InputSchema = TfMetaSchema.extend({
  device_id: resolvableValue(z.string()),
  global_network_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  aws_location: z.object({
    subnet_arn: z.string(),
    zone: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  location: z.object({
    address: z.string(),
    latitude: z.string(),
    longitude: z.string(),
  }).array().optional(),
  model: z.string().optional(),
  serial_number: z.string().optional(),
  site_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  vendor: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/networkmanager_device

export function DataAwsNetworkmanagerDevice(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerDevice
      _type='aws_networkmanager_device'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerDevice = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsNetworkmanagerDevice,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkmanagerDevices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNetworkmanagerDevice,
    idFilter,
    baseNode,
    optional,
  )
