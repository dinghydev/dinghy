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

export const InputSchema = TfMetaSchema.extend({
  cluster_type: resolvableValue(z.string().optional()),
  cluster_version: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  node_type: resolvableValue(z.string().optional()),
  preferred_node_types: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  availability_zones: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/redshift_orderable_cluster

export function DataAwsRedshiftOrderableCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_orderable_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRedshiftOrderableCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsRedshiftOrderableCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRedshiftOrderableClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsRedshiftOrderableCluster,
    idFilter,
    baseNode,
    optional,
  )
