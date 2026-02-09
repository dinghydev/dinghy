import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontConnectionGroup } from './AwsCloudfrontConnectionGroup.tsx'

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  routing_endpoint: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  anycast_ip_list_id: z.string().optional(),
  arn: z.string().optional(),
  enabled: z.boolean().optional(),
  etag: z.string().optional(),
  ipv6_enabled: z.boolean().optional(),
  is_default: z.boolean().optional(),
  last_modified_time: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_connection_group

export function DataAwsCloudfrontConnectionGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontConnectionGroup
      _type='aws_cloudfront_connection_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontConnectionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudfrontConnectionGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontConnectionGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudfrontConnectionGroup,
    idFilter,
    baseNode,
    optional,
  )
