import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sesv2_configuration_set_event_destination

export const InputSchema = z.object({
  configuration_set_name: resolvableValue(z.string()),
  event_destination_name: resolvableValue(z.string()),
  event_destination: resolvableValue(z.object({
    enabled: z.boolean().optional(),
    matching_event_types: z.string().array(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSesv2ConfigurationSetEventDestination(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sesv2_configuration_set_event_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesv2ConfigurationSetEventDestination = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsSesv2ConfigurationSetEventDestination, node, id)

export const useAwsSesv2ConfigurationSetEventDestinations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsSesv2ConfigurationSetEventDestination, node, id)
