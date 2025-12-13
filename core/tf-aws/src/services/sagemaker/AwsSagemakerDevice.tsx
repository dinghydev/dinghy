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

export const InputSchema = z.object({
  agent_version: resolvableValue(z.string()),
  device: resolvableValue(z.object({
    description: z.string().optional(),
    device_name: z.string(),
    iot_thing_name: z.string().optional(),
  })),
  device_fleet_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_device

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

export const useAwsSagemakerDevice = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsSagemakerDevice, idFilter, baseNode)

export const useAwsSagemakerDevices = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsSagemakerDevice, idFilter, baseNode)
