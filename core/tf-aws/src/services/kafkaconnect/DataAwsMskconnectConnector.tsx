import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskconnectConnector } from './AwsMskconnectConnector.tsx'

export const DataAwsMskconnectConnectorInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMskconnectConnectorOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type DataAwsMskconnectConnectorInputProps =
  & z.input<typeof DataAwsMskconnectConnectorInputSchema>
  & NodeProps

export type DataAwsMskconnectConnectorOutputProps =
  & z.output<typeof DataAwsMskconnectConnectorOutputSchema>
  & z.output<typeof DataAwsMskconnectConnectorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_connector

export function DataAwsMskconnectConnector(
  props: Partial<DataAwsMskconnectConnectorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMskconnectConnector
      _type='aws_mskconnect_connector'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskconnectConnectorInputSchema}
      _outputSchema={DataAwsMskconnectConnectorOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskconnectConnector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMskconnectConnectorOutputProps>(
    DataAwsMskconnectConnector,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMskconnectConnectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskconnectConnectorOutputProps>(
    DataAwsMskconnectConnector,
    idFilter,
    baseNode,
    optional,
  )
