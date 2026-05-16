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

export const AwsSagemakerDeviceInputSchema = TfMetaSchema.extend({
  device: resolvableValue(z.object({
    description: z.string().optional(),
    device_name: z.string(),
    iot_thing_name: z.string().optional(),
  })),
  device_fleet_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSagemakerDeviceOutputSchema = z.object({
  agent_version: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSagemakerDeviceInputProps =
  & z.input<typeof AwsSagemakerDeviceInputSchema>
  & NodeProps

export type AwsSagemakerDeviceOutputProps =
  & z.output<typeof AwsSagemakerDeviceOutputSchema>
  & z.output<typeof AwsSagemakerDeviceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_device

export function AwsSagemakerDevice(
  props: Partial<AwsSagemakerDeviceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_device'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerDeviceInputSchema}
      _outputSchema={AwsSagemakerDeviceOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerDevice = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerDeviceOutputProps>(
    AwsSagemakerDevice,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerDevices = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerDeviceOutputProps>(
    AwsSagemakerDevice,
    idFilter,
    baseNode,
    optional,
  )
