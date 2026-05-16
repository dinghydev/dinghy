import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRdsClusterParameterGroup } from './AwsRdsClusterParameterGroup.tsx'

export const DataAwsRdsClusterParameterGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsRdsClusterParameterGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  family: z.string().optional(),
})

export type DataAwsRdsClusterParameterGroupInputProps =
  & z.input<typeof DataAwsRdsClusterParameterGroupInputSchema>
  & NodeProps

export type DataAwsRdsClusterParameterGroupOutputProps =
  & z.output<typeof DataAwsRdsClusterParameterGroupOutputSchema>
  & z.output<typeof DataAwsRdsClusterParameterGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/rds_cluster_parameter_group

export function DataAwsRdsClusterParameterGroup(
  props: Partial<DataAwsRdsClusterParameterGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRdsClusterParameterGroup
      _type='aws_rds_cluster_parameter_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRdsClusterParameterGroupInputSchema}
      _outputSchema={DataAwsRdsClusterParameterGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRdsClusterParameterGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRdsClusterParameterGroupOutputProps>(
    DataAwsRdsClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRdsClusterParameterGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRdsClusterParameterGroupOutputProps>(
    DataAwsRdsClusterParameterGroup,
    idFilter,
    baseNode,
    optional,
  )
