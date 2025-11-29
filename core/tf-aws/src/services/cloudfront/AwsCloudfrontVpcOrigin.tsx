import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfront_vpc_origin

export const InputSchema = z.object({
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
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontVpcOrigin(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_vpc_origin'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontVpcOrigin = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontVpcOrigin, node, id)

export const useAwsCloudfrontVpcOrigins = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontVpcOrigin, node, id)
