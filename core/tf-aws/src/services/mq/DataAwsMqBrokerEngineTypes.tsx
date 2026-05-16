import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsMqBrokerEngineTypesInputSchema = TfMetaSchema.extend({
  engine_type: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMqBrokerEngineTypesOutputSchema = z.object({
  broker_engine_types: z.object({
    engine_type: z.string(),
    engine_versions: z.object({
      name: z.string(),
    }).array(),
  }).array().optional(),
})

export type DataAwsMqBrokerEngineTypesInputProps =
  & z.input<typeof DataAwsMqBrokerEngineTypesInputSchema>
  & NodeProps

export type DataAwsMqBrokerEngineTypesOutputProps =
  & z.output<typeof DataAwsMqBrokerEngineTypesOutputSchema>
  & z.output<typeof DataAwsMqBrokerEngineTypesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mq_broker_engine_types

export function DataAwsMqBrokerEngineTypes(
  props: Partial<DataAwsMqBrokerEngineTypesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mq_broker_engine_types'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMqBrokerEngineTypesInputSchema}
      _outputSchema={DataAwsMqBrokerEngineTypesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMqBrokerEngineTypess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMqBrokerEngineTypesOutputProps>(
    DataAwsMqBrokerEngineTypes,
    idFilter,
    baseNode,
    optional,
  )
