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

export const AwsCloudfrontAnycastIpListInputSchema = TfMetaSchema.extend({
  ip_count: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCloudfrontAnycastIpListOutputSchema = z.object({
  anycast_ips: z.string().array().optional(),
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudfrontAnycastIpListInputProps =
  & z.input<typeof AwsCloudfrontAnycastIpListInputSchema>
  & NodeProps

export type AwsCloudfrontAnycastIpListOutputProps =
  & z.output<typeof AwsCloudfrontAnycastIpListOutputSchema>
  & z.output<typeof AwsCloudfrontAnycastIpListInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_anycast_ip_list

export function AwsCloudfrontAnycastIpList(
  props: Partial<AwsCloudfrontAnycastIpListInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_anycast_ip_list'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontAnycastIpListInputSchema}
      _outputSchema={AwsCloudfrontAnycastIpListOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontAnycastIpList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontAnycastIpListOutputProps>(
    AwsCloudfrontAnycastIpList,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontAnycastIpLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontAnycastIpListOutputProps>(
    AwsCloudfrontAnycastIpList,
    idFilter,
    baseNode,
    optional,
  )
