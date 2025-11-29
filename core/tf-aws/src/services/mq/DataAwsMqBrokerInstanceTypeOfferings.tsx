import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/mq_broker_instance_type_offerings

export const InputSchema = z.object({
  engine_type: resolvableValue(z.string().optional()),
  host_instance_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  storage_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  broker_instance_options: z.object({
    availability_zones: z.object({
      name: z.string(),
    }).array(),
    engine_type: z.string(),
    host_instance_type: z.string(),
    storage_type: z.string(),
    supported_deployment_modes: z.string().array(),
    supported_engine_versions: z.string().array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMqBrokerInstanceTypeOfferings(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mq_broker_instance_type_offerings'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMqBrokerInstanceTypeOfferingss = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsMqBrokerInstanceTypeOfferings, node, id)
