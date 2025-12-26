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
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  capacity_units: resolvableValue(
    z.object({
      query_capacity_units: z.number().optional(),
      storage_capacity_units: z.number().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  document_metadata_configuration_updates: resolvableValue(
    z.object({
      name: z.string(),
      type: z.string(),
      relevance: z.object({
        duration: z.string().optional(),
        freshness: z.boolean().optional(),
        importance: z.number().optional(),
        rank_order: z.string().optional(),
        values_importance_map: z.record(z.string(), z.number()).optional(),
      }).optional(),
      search: z.object({
        displayable: z.boolean().optional(),
        facetable: z.boolean().optional(),
        searchable: z.boolean().optional(),
        sortable: z.boolean().optional(),
      }).optional(),
    }).array().optional(),
  ),
  edition: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  server_side_encryption_configuration: resolvableValue(
    z.object({
      kms_key_id: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_context_policy: resolvableValue(z.string().optional()),
  user_group_resolution_configuration: resolvableValue(
    z.object({
      user_group_resolution_mode: z.string(),
    }).optional(),
  ),
  user_token_configurations: resolvableValue(
    z.object({
      json_token_type_configuration: z.object({
        group_attribute_field: z.string(),
        user_name_attribute_field: z.string(),
      }).optional(),
      jwt_token_type_configuration: z.object({
        claim_regex: z.string().optional(),
        group_attribute_field: z.string().optional(),
        issuer: z.string().optional(),
        key_location: z.string(),
        secrets_manager_arn: z.string().optional(),
        url: z.string().optional(),
        user_name_attribute_field: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  error_message: z.string().optional(),
  id: z.string().optional(),
  index_statistics: z.object({
    faq_statistics: z.object({
      indexed_question_answers_count: z.number(),
    }).array(),
    text_document_statistics: z.object({
      indexed_text_bytes: z.number(),
      indexed_text_documents_count: z.number(),
    }).array(),
  }).array().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kendra_index

export function AwsKendraIndex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kendra_index'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKendraIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsKendraIndex, idFilter, baseNode, optional)

export const useAwsKendraIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsKendraIndex, idFilter, baseNode, optional)
