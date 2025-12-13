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
  failure_reasons: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  knowledge_base_configuration: resolvableValue(
    z.object({
      type: z.string(),
      vector_knowledge_base_configuration: z.object({
        embedding_model_arn: z.string(),
        embedding_model_configuration: z.object({
          bedrock_embedding_model_configuration: z.object({
            dimensions: z.number().optional(),
            embedding_data_type: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
        supplemental_data_storage_configuration: z.object({
          storage_location: z.object({
            type: z.string(),
            s3_location: z.object({
              uri: z.string(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  storage_configuration: resolvableValue(
    z.object({
      type: z.string(),
      opensearch_serverless_configuration: z.object({
        collection_arn: z.string(),
        vector_index_name: z.string(),
        field_mapping: z.object({
          metadata_field: z.string().optional(),
          text_field: z.string().optional(),
          vector_field: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      pinecone_configuration: z.object({
        connection_string: z.string(),
        credentials_secret_arn: z.string(),
        namespace: z.string().optional(),
        field_mapping: z.object({
          metadata_field: z.string().optional(),
          text_field: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      rds_configuration: z.object({
        credentials_secret_arn: z.string(),
        database_name: z.string(),
        resource_arn: z.string(),
        table_name: z.string(),
        field_mapping: z.object({
          custom_metadata_field: z.string().optional(),
          metadata_field: z.string(),
          primary_key_field: z.string(),
          text_field: z.string(),
          vector_field: z.string(),
        }).array().optional(),
      }).array().optional(),
      redis_enterprise_cloud_configuration: z.object({
        credentials_secret_arn: z.string(),
        endpoint: z.string(),
        vector_index_name: z.string(),
        field_mapping: z.object({
          metadata_field: z.string().optional(),
          text_field: z.string().optional(),
          vector_field: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
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
  id: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagent_knowledge_base

export function AwsBedrockagentKnowledgeBase(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagent_knowledge_base'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentKnowledgeBase = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsBedrockagentKnowledgeBase, idFilter, baseNode)

export const useAwsBedrockagentKnowledgeBases = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsBedrockagentKnowledgeBase, idFilter, baseNode)
