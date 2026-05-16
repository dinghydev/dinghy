import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticacheSubnetGroup } from './AwsElasticacheSubnetGroup.tsx'

export const DataAwsElasticacheSubnetGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsElasticacheSubnetGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type DataAwsElasticacheSubnetGroupInputProps =
  & z.input<typeof DataAwsElasticacheSubnetGroupInputSchema>
  & NodeProps

export type DataAwsElasticacheSubnetGroupOutputProps =
  & z.output<typeof DataAwsElasticacheSubnetGroupOutputSchema>
  & z.output<typeof DataAwsElasticacheSubnetGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elasticache_subnet_group

export function DataAwsElasticacheSubnetGroup(
  props: Partial<DataAwsElasticacheSubnetGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsElasticacheSubnetGroup
      _type='aws_elasticache_subnet_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElasticacheSubnetGroupInputSchema}
      _outputSchema={DataAwsElasticacheSubnetGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticacheSubnetGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElasticacheSubnetGroupOutputProps>(
    DataAwsElasticacheSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticacheSubnetGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsElasticacheSubnetGroupOutputProps>(
    DataAwsElasticacheSubnetGroup,
    idFilter,
    baseNode,
    optional,
  )
