import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDmsReplicationSubnetGroup } from './AwsDmsReplicationSubnetGroup.tsx'

export const DataAwsDmsReplicationSubnetGroupInputSchema = TfMetaSchema.extend({
  replication_subnet_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsDmsReplicationSubnetGroupOutputSchema = z.object({
  replication_subnet_group_arn: z.string().optional(),
  replication_subnet_group_description: z.string().optional(),
  subnet_group_status: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type DataAwsDmsReplicationSubnetGroupInputProps =
  & z.input<typeof DataAwsDmsReplicationSubnetGroupInputSchema>
  & NodeProps

export type DataAwsDmsReplicationSubnetGroupOutputProps =
  & z.output<typeof DataAwsDmsReplicationSubnetGroupOutputSchema>
  & z.output<typeof DataAwsDmsReplicationSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dms_replication_subnet_group

export function DataAwsDmsReplicationSubnetGroup(
  props: Partial<DataAwsDmsReplicationSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDmsReplicationSubnetGroup
      _type='aws_dms_replication_subnet_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDmsReplicationSubnetGroupInputSchema}
      _outputSchema={DataAwsDmsReplicationSubnetGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDmsReplicationSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDmsReplicationSubnetGroupOutputProps>(
    DataAwsDmsReplicationSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDmsReplicationSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDmsReplicationSubnetGroupOutputProps>(
    DataAwsDmsReplicationSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
