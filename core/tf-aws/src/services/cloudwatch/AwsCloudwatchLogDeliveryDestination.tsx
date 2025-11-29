import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_log_delivery_destination

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  delivery_destination_configuration: resolvableValue(
    z.object({
      destination_resource_arn: z.string().optional(),
    }).optional(),
  ),
  delivery_destination_type: resolvableValue(z.string().optional()),
  output_format: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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

export function AwsCloudwatchLogDeliveryDestination(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_delivery_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDeliveryDestination = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCloudwatchLogDeliveryDestination, node, id)

export const useAwsCloudwatchLogDeliveryDestinations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCloudwatchLogDeliveryDestination, node, id)
