import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKendraIndex } from './AwsKendraIndex.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  capacity_units: z.object({
    query_capacity_units: z.number(),
    storage_capacity_units: z.number(),
  }).array().optional(),
  created_at: z.string().optional(),
  description: z.string().optional(),
  document_metadata_configuration_updates: z.set(z.object({
    name: z.string(),
    relevance: z.object({
      duration: z.string(),
      freshness: z.boolean(),
      importance: z.number(),
      rank_order: z.string(),
      values_importance_map: z.record(z.string(), z.number()),
    }).array(),
    search: z.object({
      displayable: z.boolean(),
      facetable: z.boolean(),
      searchable: z.boolean(),
      sortable: z.boolean(),
    }).array(),
    type: z.string(),
  })).optional(),
  edition: z.string().optional(),
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
  name: z.string().optional(),
  role_arn: z.string().optional(),
  server_side_encryption_configuration: z.object({
    kms_key_id: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
  user_context_policy: z.string().optional(),
  user_group_resolution_configuration: z.object({
    user_group_resolution_mode: z.string(),
  }).array().optional(),
  user_token_configurations: z.object({
    json_token_type_configuration: z.object({
      group_attribute_field: z.string(),
      user_name_attribute_field: z.string(),
    }).array(),
    jwt_token_type_configuration: z.object({
      claim_regex: z.string(),
      group_attribute_field: z.string(),
      issuer: z.string(),
      key_location: z.string(),
      secrets_manager_arn: z.string(),
      url: z.string(),
      user_name_attribute_field: z.string(),
    }).array(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kendra_index

export function DataAwsKendraIndex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKendraIndex
      _type='aws_kendra_index'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKendraIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsKendraIndex, idFilter, baseNode, optional)

export const useDataAwsKendraIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsKendraIndex, idFilter, baseNode, optional)
