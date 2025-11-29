import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dms_replication_subnet_group

export const InputSchema = z.object({
  replication_subnet_group_arn: resolvableValue(z.string()),
  replication_subnet_group_description: resolvableValue(z.string()),
  replication_subnet_group_id: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDmsReplicationSubnetGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_replication_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsReplicationSubnetGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDmsReplicationSubnetGroup, node, id)

export const useAwsDmsReplicationSubnetGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDmsReplicationSubnetGroup, node, id)
