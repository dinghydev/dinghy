import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/redshift_orderable_cluster

export const InputSchema = z.object({
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

export function DataAwsRedshiftOrderableCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsRedshiftOrderableCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsRedshiftOrderableCluster, node, id)

export const useDataAwsRedshiftOrderableClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsRedshiftOrderableCluster, node, id)
