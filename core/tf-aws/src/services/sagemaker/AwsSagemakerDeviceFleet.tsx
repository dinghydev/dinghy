import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_device_fleet

export const InputSchema = z.object({
  device_fleet_name: resolvableValue(z.string()),
  iot_role_alias: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  enable_iot_role_alias: resolvableValue(z.boolean().optional()),
  output_config: resolvableValue(z.object({
    kms_key_id: z.string().optional(),
    s3_output_location: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerDeviceFleet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_device_fleet'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerDeviceFleet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerDeviceFleet, node, id)

export const useAwsSagemakerDeviceFleets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerDeviceFleet, node, id)
