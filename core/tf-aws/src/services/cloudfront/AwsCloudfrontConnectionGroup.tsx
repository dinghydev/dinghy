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

export const AwsCloudfrontConnectionGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  anycast_ip_list_id: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  ipv6_enabled: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  wait_for_deployment: resolvableValue(z.boolean().optional()),
})

export const AwsCloudfrontConnectionGroupOutputSchema = z.object({
  arn: z.string().optional(),
  etag: z.string().optional(),
  id: z.string().optional(),
  is_default: z.boolean().optional(),
  last_modified_time: z.string().optional(),
  routing_endpoint: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudfrontConnectionGroupInputProps =
  & z.input<typeof AwsCloudfrontConnectionGroupInputSchema>
  & NodeProps

export type AwsCloudfrontConnectionGroupOutputProps =
  & z.output<typeof AwsCloudfrontConnectionGroupOutputSchema>
  & z.output<typeof AwsCloudfrontConnectionGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfront_connection_group

export function AwsCloudfrontConnectionGroup(
  props: Partial<AwsCloudfrontConnectionGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfront_connection_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontConnectionGroupInputSchema}
      _outputSchema={AwsCloudfrontConnectionGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontConnectionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontConnectionGroupOutputProps>(
    AwsCloudfrontConnectionGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontConnectionGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontConnectionGroupOutputProps>(
    AwsCloudfrontConnectionGroup,
    idFilter,
    baseNode,
    optional,
  )
