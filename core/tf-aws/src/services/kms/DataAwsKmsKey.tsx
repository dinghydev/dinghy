import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsKey } from './AwsKmsKey.tsx'

export const InputSchema = TfMetaSchema.extend({
  key_id: resolvableValue(z.string()),
  grant_tokens: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  aws_account_id: z.string().optional(),
  cloud_hsm_cluster_id: z.string().optional(),
  creation_date: z.string().optional(),
  custom_key_store_id: z.string().optional(),
  customer_master_key_spec: z.string().optional(),
  deletion_date: z.string().optional(),
  description: z.string().optional(),
  enabled: z.boolean().optional(),
  expiration_model: z.string().optional(),
  key_manager: z.string().optional(),
  key_spec: z.string().optional(),
  key_state: z.string().optional(),
  key_usage: z.string().optional(),
  multi_region: z.boolean().optional(),
  multi_region_configuration: z.object({
    multi_region_key_type: z.string(),
    primary_key: z.object({
      arn: z.string(),
      region: z.string(),
    }).array(),
    replica_keys: z.object({
      arn: z.string(),
      region: z.string(),
    }).array(),
  }).array().optional(),
  origin: z.string().optional(),
  pending_deletion_window_in_days: z.number().optional(),
  valid_to: z.string().optional(),
  xks_key_configuration: z.object({
    id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/kms_key

export function DataAwsKmsKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKmsKey
      _type='aws_kms_key'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKmsKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsKmsKey, idFilter, baseNode, optional)

export const useDataAwsKmsKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsKmsKey, idFilter, baseNode, optional)
