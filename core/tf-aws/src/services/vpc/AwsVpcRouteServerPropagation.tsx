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

export const AwsVpcRouteServerPropagationInputSchema = TfMetaSchema.extend({
  route_server_id: resolvableValue(z.string()),
  route_table_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcRouteServerPropagationOutputSchema = z.object({})

export type AwsVpcRouteServerPropagationInputProps =
  & z.input<typeof AwsVpcRouteServerPropagationInputSchema>
  & NodeProps

export type AwsVpcRouteServerPropagationOutputProps =
  & z.output<typeof AwsVpcRouteServerPropagationOutputSchema>
  & z.output<typeof AwsVpcRouteServerPropagationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_route_server_propagation

export function AwsVpcRouteServerPropagation(
  props: Partial<AwsVpcRouteServerPropagationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_route_server_propagation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcRouteServerPropagationInputSchema}
      _outputSchema={AwsVpcRouteServerPropagationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcRouteServerPropagation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcRouteServerPropagationOutputProps>(
    AwsVpcRouteServerPropagation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcRouteServerPropagations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcRouteServerPropagationOutputProps>(
    AwsVpcRouteServerPropagation,
    idFilter,
    baseNode,
    optional,
  )
