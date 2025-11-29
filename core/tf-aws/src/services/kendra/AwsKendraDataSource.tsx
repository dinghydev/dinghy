import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kendra_data_source

export const InputSchema = z.object({
  index_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      s3_configuration: z.object({
        bucket_name: z.string(),
        exclusion_patterns: z.string().array().optional(),
        inclusion_patterns: z.string().array().optional(),
        inclusion_prefixes: z.string().array().optional(),
      }).optional(),
      template_configuration: z.object({
        template: z.string(),
      }).optional(),
      web_crawler_configuration: z.object({
        crawl_depth: z.number().optional(),
        max_content_size_per_page_in_mega_bytes: z.number().optional(),
        max_links_per_page: z.number().optional(),
        max_urls_per_minute_crawl_rate: z.number().optional(),
        url_exclusion_patterns: z.string().array().optional(),
        url_inclusion_patterns: z.string().array().optional(),
      }).optional(),
    }).optional(),
  ),
  custom_document_enrichment_configuration: resolvableValue(
    z.object({
      role_arn: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  language_code: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  schedule: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  data_source_id: z.string().optional(),
  error_message: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKendraDataSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kendra_data_source'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKendraDataSource = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKendraDataSource, node, id)

export const useAwsKendraDataSources = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKendraDataSource, node, id)
