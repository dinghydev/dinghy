import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dsql_cluster_peering

export const InputSchema = z.object({
  clusters: resolvableValue(z.string().array()),
  identifier: resolvableValue(z.string()),
  witness_region: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDsqlClusterPeering(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dsql_cluster_peering'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDsqlClusterPeering = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDsqlClusterPeering, node, id)

export const useAwsDsqlClusterPeerings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDsqlClusterPeering, node, id)
