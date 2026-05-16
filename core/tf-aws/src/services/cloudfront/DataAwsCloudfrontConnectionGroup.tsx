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

export const DataAwsCloudfrontConnectionGroupInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  routing_endpoint: resolvableValue(z.string().optional()),
})

export const DataAwsCloudfrontConnectionGroupOutputSchema = z.object({
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

export type DataAwsCloudfrontConnectionGroupInputProps =
  & z.input<typeof DataAwsCloudfrontConnectionGroupInputSchema>
  & NodeProps

export type DataAwsCloudfrontConnectionGroupOutputProps =
  & z.output<typeof DataAwsCloudfrontConnectionGroupOutputSchema>
  & z.output<typeof DataAwsCloudfrontConnectionGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudfront_connection_group

export function DataAwsCloudfrontConnectionGroup(
  props: Partial<DataAwsCloudfrontConnectionGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontConnectionGroup
      _type='aws_cloudfront_connection_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudfrontConnectionGroupInputSchema}
      _outputSchema={DataAwsCloudfrontConnectionGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontConnectionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCloudfrontConnectionGroupOutputProps>(
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
  useTypedNodes<DataAwsCloudfrontConnectionGroupOutputProps>(
    DataAwsCloudfrontConnectionGroup,
    idFilter,
    baseNode,
    optional,
  )
