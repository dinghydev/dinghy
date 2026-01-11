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
  volume_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  outpost_arn: resolvableValue(z.string().optional()),
  permanent_restore: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  storage_tier: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  temporary_restore_days: resolvableValue(z.number().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  data_encryption_key_id: z.string().optional(),
  encrypted: z.boolean().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  owner_alias: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  volume_size: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ebs_snapshot

export function AwsEbsSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEbsSnapshot, idFilter, baseNode, optional)

export const useAwsEbsSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEbsSnapshot, idFilter, baseNode, optional)
