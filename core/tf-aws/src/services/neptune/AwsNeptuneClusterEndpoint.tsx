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

export const AwsNeptuneClusterEndpointInputSchema = TfMetaSchema.extend({
  cluster_endpoint_identifier: resolvableValue(z.string()),
  cluster_identifier: resolvableValue(z.string()),
  endpoint_type: resolvableValue(z.string()),
  excluded_members: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  static_members: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsNeptuneClusterEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNeptuneClusterEndpointInputProps =
  & z.input<typeof AwsNeptuneClusterEndpointInputSchema>
  & NodeProps

export type AwsNeptuneClusterEndpointOutputProps =
  & z.output<typeof AwsNeptuneClusterEndpointOutputSchema>
  & z.output<typeof AwsNeptuneClusterEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptune_cluster_endpoint

export function AwsNeptuneClusterEndpoint(
  props: Partial<AwsNeptuneClusterEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptune_cluster_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNeptuneClusterEndpointInputSchema}
      _outputSchema={AwsNeptuneClusterEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptuneClusterEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNeptuneClusterEndpointOutputProps>(
    AwsNeptuneClusterEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNeptuneClusterEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNeptuneClusterEndpointOutputProps>(
    AwsNeptuneClusterEndpoint,
    idFilter,
    baseNode,
    optional,
  )
