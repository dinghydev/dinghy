import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCloudfrontDistribution } from './AwsCloudfrontDistribution.tsx'

export const InputSchema = TfMetaSchema.extend({
  enabled: resolvableValue(z.boolean()),
  id: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  aliases: z.set(z.string()).optional(),
  anycast_ip_list_id: z.string().optional(),
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  etag: z.string().optional(),
  hosted_zone_id: z.string().optional(),
  id: z.string().optional(),
  in_progress_validation_batches: z.number().optional(),
  last_modified_time: z.string().optional(),
  status: z.string().optional(),
  web_acl_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cloudfront_distribution

export function DataAwsCloudfrontDistribution(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCloudfrontDistribution
      _type='aws_cloudfront_distribution'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCloudfrontDistribution = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCloudfrontDistribution,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCloudfrontDistributions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudfrontDistribution,
    idFilter,
    baseNode,
    optional,
  )
