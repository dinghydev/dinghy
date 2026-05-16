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

export const AwsDbProxyEndpointInputSchema = TfMetaSchema.extend({
  db_proxy_endpoint_name: resolvableValue(z.string()),
  db_proxy_name: resolvableValue(z.string()),
  vpc_subnet_ids: resolvableValue(z.string().array()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_role: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
})

export const AwsDbProxyEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  is_default: z.boolean().optional(),
  vpc_id: z.string().optional(),
})

export type AwsDbProxyEndpointInputProps =
  & z.input<typeof AwsDbProxyEndpointInputSchema>
  & NodeProps

export type AwsDbProxyEndpointOutputProps =
  & z.output<typeof AwsDbProxyEndpointOutputSchema>
  & z.output<typeof AwsDbProxyEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_proxy_endpoint

export function AwsDbProxyEndpoint(
  props: Partial<AwsDbProxyEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_proxy_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbProxyEndpointInputSchema}
      _outputSchema={AwsDbProxyEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbProxyEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbProxyEndpointOutputProps>(
    AwsDbProxyEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbProxyEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbProxyEndpointOutputProps>(
    AwsDbProxyEndpoint,
    idFilter,
    baseNode,
    optional,
  )
