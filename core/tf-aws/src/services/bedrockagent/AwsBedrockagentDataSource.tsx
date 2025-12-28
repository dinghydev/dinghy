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
  knowledge_base_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  data_deletion_policy: resolvableValue(z.string().optional()),
  data_source_configuration: resolvableValue(
    z.object({
      type: z.string(),
      confluence_configuration: z.object({
        crawler_configuration: z.object({
          filter_configuration: z.object({
            type: z.string(),
            pattern_object_filter: z.object({
              filters: z.object({
                exclusion_filters: z.string().array().optional(),
                inclusion_filters: z.string().array().optional(),
                object_type: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        source_configuration: z.object({
          auth_type: z.string(),
          credentials_secret_arn: z.string(),
          host_type: z.string(),
          host_url: z.string(),
        }).array().optional(),
      }).array().optional(),
      s3_configuration: z.object({
        bucket_arn: z.string(),
        bucket_owner_account_id: z.string().optional(),
        inclusion_prefixes: z.string().array().optional(),
      }).array().optional(),
      salesforce_configuration: z.object({
        crawler_configuration: z.object({
          filter_configuration: z.object({
            type: z.string(),
            pattern_object_filter: z.object({
              filters: z.object({
                exclusion_filters: z.string().array().optional(),
                inclusion_filters: z.string().array().optional(),
                object_type: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        source_configuration: z.object({
          auth_type: z.string(),
          credentials_secret_arn: z.string(),
          host_url: z.string(),
        }).array().optional(),
      }).array().optional(),
      share_point_configuration: z.object({
        crawler_configuration: z.object({
          filter_configuration: z.object({
            type: z.string(),
            pattern_object_filter: z.object({
              filters: z.object({
                exclusion_filters: z.string().array().optional(),
                inclusion_filters: z.string().array().optional(),
                object_type: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        source_configuration: z.object({
          auth_type: z.string(),
          credentials_secret_arn: z.string(),
          domain: z.string(),
          host_type: z.string(),
          site_urls: z.string().array(),
          tenant_id: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      web_configuration: z.object({
        crawler_configuration: z.object({
          exclusion_filters: z.string().array().optional(),
          inclusion_filters: z.string().array().optional(),
          scope: z.string().optional(),
          user_agent: z.string().optional(),
          crawler_limits: z.object({
            max_pages: z.number().optional(),
            rate_limit: z.number().optional(),
          }).array().optional(),
        }).array().optional(),
        source_configuration: z.object({
          url_configuration: z.object({
            seed_urls: z.object({
              url: z.string().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  server_side_encryption_configuration: resolvableValue(
    z.object({
      kms_key_arn: z.string().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  vector_ingestion_configuration: resolvableValue(
    z.object({
      chunking_configuration: z.object({
        chunking_strategy: z.string(),
        fixed_size_chunking_configuration: z.object({
          max_tokens: z.number(),
          overlap_percentage: z.number(),
        }).array().optional(),
        hierarchical_chunking_configuration: z.object({
          overlap_tokens: z.number(),
          level_configuration: z.object({
            max_tokens: z.number(),
          }).array().optional(),
        }).array().optional(),
        semantic_chunking_configuration: z.object({
          breakpoint_percentile_threshold: z.number(),
          buffer_size: z.number(),
          max_token: z.number(),
        }).array().optional(),
      }).array().optional(),
      custom_transformation_configuration: z.object({
        intermediate_storage: z.object({
          s3_location: z.object({
            uri: z.string(),
          }).array().optional(),
        }).array().optional(),
        transformation: z.object({
          step_to_apply: z.string(),
          transformation_function: z.object({
            transformation_lambda_configuration: z.object({
              lambda_arn: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      parsing_configuration: z.object({
        parsing_strategy: z.string(),
        bedrock_foundation_model_configuration: z.object({
          model_arn: z.string(),
          parsing_prompt: z.object({
            parsing_prompt_string: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  data_source_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_data_source

export function AwsBedrockagentDataSource(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_data_source'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentDataSource = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentDataSource,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentDataSources = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentDataSource,
    idFilter,
    baseNode,
    optional,
  )
