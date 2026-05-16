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

export const AwsRdsClusterEndpointInputSchema = TfMetaSchema.extend({
  cluster_endpoint_identifier: resolvableValue(z.string()),
  cluster_identifier: resolvableValue(z.string()),
  custom_endpoint_type: resolvableValue(z.string()),
  excluded_members: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  static_members: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRdsClusterEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRdsClusterEndpointInputProps =
  & z.input<typeof AwsRdsClusterEndpointInputSchema>
  & NodeProps

export type AwsRdsClusterEndpointOutputProps =
  & z.output<typeof AwsRdsClusterEndpointOutputSchema>
  & z.output<typeof AwsRdsClusterEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rds_cluster_endpoint

export function AwsRdsClusterEndpoint(
  props: Partial<AwsRdsClusterEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRdsClusterEndpointInputSchema}
      _outputSchema={AwsRdsClusterEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRdsClusterEndpointOutputProps>(
    AwsRdsClusterEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsClusterEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRdsClusterEndpointOutputProps>(
    AwsRdsClusterEndpoint,
    idFilter,
    baseNode,
    optional,
  )
