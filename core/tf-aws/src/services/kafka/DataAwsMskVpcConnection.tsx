import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskVpcConnection } from './AwsMskVpcConnection.tsx'

export const DataAwsMskVpcConnectionInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMskVpcConnectionOutputSchema = z.object({
  authentication: z.string().optional(),
  client_subnets: z.set(z.string()).optional(),
  security_groups: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  target_cluster_arn: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type DataAwsMskVpcConnectionInputProps =
  & z.input<typeof DataAwsMskVpcConnectionInputSchema>
  & NodeProps

export type DataAwsMskVpcConnectionOutputProps =
  & z.output<typeof DataAwsMskVpcConnectionOutputSchema>
  & z.output<typeof DataAwsMskVpcConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/msk_vpc_connection

export function DataAwsMskVpcConnection(
  props: Partial<DataAwsMskVpcConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMskVpcConnection
      _type='aws_msk_vpc_connection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskVpcConnectionInputSchema}
      _outputSchema={DataAwsMskVpcConnectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskVpcConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMskVpcConnectionOutputProps>(
    DataAwsMskVpcConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMskVpcConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskVpcConnectionOutputProps>(
    DataAwsMskVpcConnection,
    idFilter,
    baseNode,
    optional,
  )
