import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/backup_logically_air_gapped_vault

export const InputSchema = z.object({
  max_retention_days: resolvableValue(z.number()),
  min_retention_days: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  encryption_key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBackupLogicallyAirGappedVault(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_logically_air_gapped_vault'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupLogicallyAirGappedVault = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBackupLogicallyAirGappedVault, node, id)

export const useAwsBackupLogicallyAirGappedVaults = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBackupLogicallyAirGappedVault, node, id)
