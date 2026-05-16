import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDxConnection } from './AwsDxConnection.tsx'

export const DataAwsDxConnectionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDxConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  aws_device: z.string().optional(),
  bandwidth: z.string().optional(),
  id: z.string().optional(),
  location: z.string().optional(),
  owner_account_id: z.string().optional(),
  partner_name: z.string().optional(),
  provider_name: z.string().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vlan_id: z.number().optional(),
})

export type DataAwsDxConnectionInputProps =
  & z.input<typeof DataAwsDxConnectionInputSchema>
  & NodeProps

export type DataAwsDxConnectionOutputProps =
  & z.output<typeof DataAwsDxConnectionOutputSchema>
  & z.output<typeof DataAwsDxConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dx_connection

export function DataAwsDxConnection(
  props: Partial<DataAwsDxConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDxConnection
      _type='aws_dx_connection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDxConnectionInputSchema}
      _outputSchema={DataAwsDxConnectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDxConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDxConnectionOutputProps>(
    DataAwsDxConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDxConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDxConnectionOutputProps>(
    DataAwsDxConnection,
    idFilter,
    baseNode,
    optional,
  )
