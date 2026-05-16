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

export const AwsCloudfrontVpcOriginInputSchema = TfMetaSchema.extend({
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_origin_endpoint_config: resolvableValue(
    z.object({
      arn: z.string(),
      http_port: z.number(),
      https_port: z.number(),
      name: z.string(),
      origin_protocol_policy: z.string(),
      origin_ssl_protocols: z.object({
        items: z.string().array(),
        quantity: z.number(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const AwsCloudfrontVpcOriginOutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudfrontVpcOriginInputProps =
  & z.input<typeof AwsCloudfrontVpcOriginInputSchema>
  & NodeProps

export type AwsCloudfrontVpcOriginOutputProps =
  & z.output<typeof AwsCloudfrontVpcOriginOutputSchema>
  & z.output<typeof AwsCloudfrontVpcOriginInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_vpc_origin

export function AwsCloudfrontVpcOrigin(
  props: Partial<AwsCloudfrontVpcOriginInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_vpc_origin'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontVpcOriginInputSchema}
      _outputSchema={AwsCloudfrontVpcOriginOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontVpcOrigin = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontVpcOriginOutputProps>(
    AwsCloudfrontVpcOrigin,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontVpcOrigins = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontVpcOriginOutputProps>(
    AwsCloudfrontVpcOrigin,
    idFilter,
    baseNode,
    optional,
  )
