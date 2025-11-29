import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_device

export const InputSchema = z.object({
  agent_version: resolvableValue(z.string()),
  device_fleet_name: resolvableValue(z.string()),
  device: resolvableValue(z.object({
    description: z.string().optional(),
    device_name: z.string(),
    iot_thing_name: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerDevice(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_device'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerDevice = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerDevice, node, id)

export const useAwsSagemakerDevices = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerDevice, node, id)
