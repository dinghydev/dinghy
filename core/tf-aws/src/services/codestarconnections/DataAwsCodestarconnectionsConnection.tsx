import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodestarconnectionsConnection } from './AwsCodestarconnectionsConnection.tsx'

export const DataAwsCodestarconnectionsConnectionInputSchema = TfMetaSchema
  .extend({
    arn: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsCodestarconnectionsConnectionOutputSchema = z.object({
  connection_status: z.string().optional(),
  host_arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  provider_type: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsCodestarconnectionsConnectionInputProps =
  & z.input<typeof DataAwsCodestarconnectionsConnectionInputSchema>
  & NodeProps

export type DataAwsCodestarconnectionsConnectionOutputProps =
  & z.output<typeof DataAwsCodestarconnectionsConnectionOutputSchema>
  & z.output<typeof DataAwsCodestarconnectionsConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/codestarconnections_connection

export function DataAwsCodestarconnectionsConnection(
  props: Partial<DataAwsCodestarconnectionsConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCodestarconnectionsConnection
      _type='aws_codestarconnections_connection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCodestarconnectionsConnectionInputSchema}
      _outputSchema={DataAwsCodestarconnectionsConnectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodestarconnectionsConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCodestarconnectionsConnectionOutputProps>(
    DataAwsCodestarconnectionsConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCodestarconnectionsConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCodestarconnectionsConnectionOutputProps>(
    DataAwsCodestarconnectionsConnection,
    idFilter,
    baseNode,
    optional,
  )
