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

export const AwsOpensearchVpcEndpointInputSchema = TfMetaSchema.extend({
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

export const AwsOpensearchVpcEndpointOutputSchema = z.object({
  endpoint: z.string().optional(),
  id: z.string().optional(),
})

export type AwsOpensearchVpcEndpointInputProps =
  & z.input<typeof AwsOpensearchVpcEndpointInputSchema>
  & NodeProps

export type AwsOpensearchVpcEndpointOutputProps =
  & z.output<typeof AwsOpensearchVpcEndpointOutputSchema>
  & z.output<typeof AwsOpensearchVpcEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearch_vpc_endpoint

export function AwsOpensearchVpcEndpoint(
  props: Partial<AwsOpensearchVpcEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_vpc_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchVpcEndpointInputSchema}
      _outputSchema={AwsOpensearchVpcEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchVpcEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchVpcEndpointOutputProps>(
    AwsOpensearchVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchVpcEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchVpcEndpointOutputProps>(
    AwsOpensearchVpcEndpoint,
    idFilter,
    baseNode,
    optional,
  )
