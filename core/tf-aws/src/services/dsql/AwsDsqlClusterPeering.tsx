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

export const AwsDsqlClusterPeeringInputSchema = TfMetaSchema.extend({
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

export const AwsDsqlClusterPeeringOutputSchema = z.object({})

export type AwsDsqlClusterPeeringInputProps =
  & z.input<typeof AwsDsqlClusterPeeringInputSchema>
  & NodeProps

export type AwsDsqlClusterPeeringOutputProps =
  & z.output<typeof AwsDsqlClusterPeeringOutputSchema>
  & z.output<typeof AwsDsqlClusterPeeringInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dsql_cluster_peering

export function AwsDsqlClusterPeering(
  props: Partial<AwsDsqlClusterPeeringInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dsql_cluster_peering'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDsqlClusterPeeringInputSchema}
      _outputSchema={AwsDsqlClusterPeeringOutputSchema}
      {...props}
    />
  )
}

export const useAwsDsqlClusterPeering = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDsqlClusterPeeringOutputProps>(
    AwsDsqlClusterPeering,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDsqlClusterPeerings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDsqlClusterPeeringOutputProps>(
    AwsDsqlClusterPeering,
    idFilter,
    baseNode,
    optional,
  )
