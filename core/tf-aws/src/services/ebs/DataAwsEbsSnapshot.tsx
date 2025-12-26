import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEbsSnapshot } from './AwsEbsSnapshot.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  most_recent: resolvableValue(z.boolean().optional()),
  owners: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  restorable_by_user_ids: resolvableValue(z.string().array().optional()),
  snapshot_ids: resolvableValue(z.string().array().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  data_encryption_key_id: z.string().optional(),
  description: z.string().optional(),
  encrypted: z.boolean().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  outpost_arn: z.string().optional(),
  owner_alias: z.string().optional(),
  owner_id: z.string().optional(),
  snapshot_id: z.string().optional(),
  start_time: z.string().optional(),
  state: z.string().optional(),
  storage_tier: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  volume_id: z.string().optional(),
  volume_size: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ebs_snapshot

export function DataAwsEbsSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEbsSnapshot
      _type='aws_ebs_snapshot'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEbsSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsEbsSnapshot, idFilter, baseNode, optional)

export const useDataAwsEbsSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsEbsSnapshot, idFilter, baseNode, optional)
