import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsKey } from './AwsKmsKey.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kms_key

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string()),
  cloud_hsm_cluster_id: resolvableValue(z.string()),
  creation_date: resolvableValue(z.string()),
  custom_key_store_id: resolvableValue(z.string()),
  customer_master_key_spec: resolvableValue(z.string()),
  deletion_date: resolvableValue(z.string()),
  description: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean()),
  expiration_model: resolvableValue(z.string()),
  key_id: resolvableValue(z.string()),
  key_manager: resolvableValue(z.string()),
  key_spec: resolvableValue(z.string()),
  key_state: resolvableValue(z.string()),
  key_usage: resolvableValue(z.string()),
  multi_region: resolvableValue(z.boolean()),
  multi_region_configuration: resolvableValue(
    z.object({
      multi_region_key_type: z.string(),
      primary_key: z.object({
        arn: z.string(),
        region: z.string(),
      }).array(),
      replica_keys: z.object({
        arn: z.string(),
        region: z.string(),
      }).array(),
    }).array(),
  ),
  origin: resolvableValue(z.string()),
  pending_deletion_window_in_days: resolvableValue(z.number()),
  valid_to: resolvableValue(z.string()),
  xks_key_configuration: resolvableValue(
    z.object({
      id: z.string(),
    }).array(),
  ),
  grant_tokens: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKmsKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsKmsKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKmsKey, node, id)

export const useDataAwsKmsKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKmsKey, node, id)
