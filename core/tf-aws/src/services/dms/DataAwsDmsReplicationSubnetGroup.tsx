import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDmsReplicationSubnetGroup } from './AwsDmsReplicationSubnetGroup.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dms_replication_subnet_group

export const InputSchema = z.object({
  replication_subnet_group_arn: resolvableValue(z.string()),
  replication_subnet_group_id: resolvableValue(z.string()),
  subnet_group_status: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  replication_subnet_group_description: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDmsReplicationSubnetGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDmsReplicationSubnetGroup
      _type='aws_dms_replication_subnet_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDmsReplicationSubnetGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsDmsReplicationSubnetGroup, node, id)

export const useDataAwsDmsReplicationSubnetGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsDmsReplicationSubnetGroup, node, id)
