import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/msk_kafka_version

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  preferred_versions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMskKafkaVersion(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_kafka_version'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMskKafkaVersion = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMskKafkaVersion, node, id)

export const useDataAwsMskKafkaVersions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMskKafkaVersion, node, id)
