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

export const AwsDmsReplicationSubnetGroupInputSchema = TfMetaSchema.extend({
  replication_subnet_group_description: resolvableValue(z.string()),
  replication_subnet_group_id: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDmsReplicationSubnetGroupOutputSchema = z.object({
  replication_subnet_group_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsDmsReplicationSubnetGroupInputProps =
  & z.input<typeof AwsDmsReplicationSubnetGroupInputSchema>
  & NodeProps

export type AwsDmsReplicationSubnetGroupOutputProps =
  & z.output<typeof AwsDmsReplicationSubnetGroupOutputSchema>
  & z.output<typeof AwsDmsReplicationSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dms_replication_subnet_group

export function AwsDmsReplicationSubnetGroup(
  props: Partial<AwsDmsReplicationSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_replication_subnet_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDmsReplicationSubnetGroupInputSchema}
      _outputSchema={AwsDmsReplicationSubnetGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsReplicationSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDmsReplicationSubnetGroupOutputProps>(
    AwsDmsReplicationSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDmsReplicationSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDmsReplicationSubnetGroupOutputProps>(
    AwsDmsReplicationSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
