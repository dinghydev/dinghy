import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_device

export const InputSchema = z.object({
  global_network_id: resolvableValue(z.string()),
  aws_location: resolvableValue(
    z.object({
      subnet_arn: z.string().optional(),
      zone: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  location: resolvableValue(
    z.object({
      address: z.string().optional(),
      latitude: z.string().optional(),
      longitude: z.string().optional(),
    }).optional(),
  ),
  model: resolvableValue(z.string().optional()),
  serial_number: resolvableValue(z.string().optional()),
  site_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  vendor: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerDevice(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_device'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerDevice = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNetworkmanagerDevice, node, id)

export const useAwsNetworkmanagerDevices = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNetworkmanagerDevice, node, id)
