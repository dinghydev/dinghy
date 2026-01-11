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
        access_control_list_configuration: z.object({
          key_path: z.string().optional(),
        }).optional(),
        documents_metadata_configuration: z.object({
          s3_prefix: z.string().optional(),
        }).optional(),
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
        authentication_configuration: z.object({
          basic_authentication: z.object({
            credentials: z.string(),
            host: z.string(),
            port: z.number(),
          }).array().optional(),
        }).optional(),
        proxy_configuration: z.object({
          credentials: z.string().optional(),
          host: z.string(),
          port: z.number(),
        }).optional(),
        urls: z.object({
          seed_url_configuration: z.object({
            seed_urls: z.string().array(),
            web_crawler_mode: z.string().optional(),
          }).optional(),
          site_maps_configuration: z.object({
            site_maps: z.string().array(),
          }).optional(),
        }),
      }).optional(),
    }).optional(),
  ),
  custom_document_enrichment_configuration: resolvableValue(
    z.object({
      role_arn: z.string().optional(),
      inline_configurations: z.object({
        document_content_deletion: z.boolean().optional(),
        condition: z.object({
          condition_document_attribute_key: z.string(),
          operator: z.string(),
          condition_on_value: z.object({
            date_value: z.string().optional(),
            long_value: z.number().optional(),
            string_list_value: z.string().array().optional(),
            string_value: z.string().optional(),
          }).optional(),
        }).optional(),
        target: z.object({
          target_document_attribute_key: z.string().optional(),
          target_document_attribute_value_deletion: z.boolean().optional(),
          target_document_attribute_value: z.object({
            date_value: z.string().optional(),
            long_value: z.number().optional(),
            string_list_value: z.string().array().optional(),
            string_value: z.string().optional(),
          }).optional(),
        }).optional(),
      }).array().optional(),
      post_extraction_hook_configuration: z.object({
        lambda_arn: z.string(),
        s3_bucket: z.string(),
        invocation_condition: z.object({
          condition_document_attribute_key: z.string(),
          operator: z.string(),
          condition_on_value: z.object({
            date_value: z.string().optional(),
            long_value: z.number().optional(),
            string_list_value: z.string().array().optional(),
            string_value: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
      pre_extraction_hook_configuration: z.object({
        lambda_arn: z.string(),
        s3_bucket: z.string(),
        invocation_condition: z.object({
          condition_document_attribute_key: z.string(),
          operator: z.string(),
          condition_on_value: z.object({
            date_value: z.string().optional(),
            long_value: z.number().optional(),
            string_list_value: z.string().array().optional(),
            string_value: z.string().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/kendra_data_source

export function AwsKendraDataSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsKendraDataSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsKendraDataSource, idFilter, baseNode, optional)

export const useAwsKendraDataSources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsKendraDataSource, idFilter, baseNode, optional)
