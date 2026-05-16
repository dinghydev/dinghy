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

export const DataAwsMskKafkaVersionInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  preferred_versions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  version: resolvableValue(z.string().optional()),
})

export const DataAwsMskKafkaVersionOutputSchema = z.object({
  status: z.string().optional(),
})

export type DataAwsMskKafkaVersionInputProps =
  & z.input<typeof DataAwsMskKafkaVersionInputSchema>
  & NodeProps

export type DataAwsMskKafkaVersionOutputProps =
  & z.output<typeof DataAwsMskKafkaVersionOutputSchema>
  & z.output<typeof DataAwsMskKafkaVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/msk_kafka_version

export function DataAwsMskKafkaVersion(
  props: Partial<DataAwsMskKafkaVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_kafka_version'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskKafkaVersionInputSchema}
      _outputSchema={DataAwsMskKafkaVersionOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMskKafkaVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMskKafkaVersionOutputProps>(
    DataAwsMskKafkaVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMskKafkaVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskKafkaVersionOutputProps>(
    DataAwsMskKafkaVersion,
    idFilter,
    baseNode,
    optional,
  )
