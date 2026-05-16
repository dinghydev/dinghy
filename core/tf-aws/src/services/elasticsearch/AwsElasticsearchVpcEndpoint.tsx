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

export const AwsElasticsearchVpcEndpointInputSchema = TfMetaSchema.extend({
  domain_arn: resolvableValue(z.string()),
  vpc_options: resolvableValue(z.object({
    availability_zones: z.string().array().optional(),
    security_group_ids: z.string().array().optional(),
    subnet_ids: z.string().array(),
    vpc_id: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsElasticsearchVpcEndpointOutputSchema = z.object({
  endpoint: z.string().optional(),
  id: z.string().optional(),
})

export type AwsElasticsearchVpcEndpointInputProps =
  & z.input<typeof AwsElasticsearchVpcEndpointInputSchema>
  & NodeProps

export type AwsElasticsearchVpcEndpointOutputProps =
  & z.output<typeof AwsElasticsearchVpcEndpointOutputSchema>
  & z.output<typeof AwsElasticsearchVpcEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticsearch_vpc_endpoint

export function AwsElasticsearchVpcEndpoint(
  props: Partial<AwsElasticsearchVpcEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticsearch_vpc_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticsearchVpcEndpointInputSchema}
      _outputSchema={AwsElasticsearchVpcEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticsearchVpcEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticsearchVpcEndpointOutputProps>(
    AwsElasticsearchVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticsearchVpcEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticsearchVpcEndpointOutputProps>(
    AwsElasticsearchVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )
