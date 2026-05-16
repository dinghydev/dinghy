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

export const AwsBackupLogicallyAirGappedVaultInputSchema = TfMetaSchema.extend({
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

export const AwsBackupLogicallyAirGappedVaultOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBackupLogicallyAirGappedVaultInputProps =
  & z.input<typeof AwsBackupLogicallyAirGappedVaultInputSchema>
  & NodeProps

export type AwsBackupLogicallyAirGappedVaultOutputProps =
  & z.output<typeof AwsBackupLogicallyAirGappedVaultOutputSchema>
  & z.output<typeof AwsBackupLogicallyAirGappedVaultInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_logically_air_gapped_vault

export function AwsBackupLogicallyAirGappedVault(
  props: Partial<AwsBackupLogicallyAirGappedVaultInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_logically_air_gapped_vault'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupLogicallyAirGappedVaultInputSchema}
      _outputSchema={AwsBackupLogicallyAirGappedVaultOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupLogicallyAirGappedVault = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupLogicallyAirGappedVaultOutputProps>(
    AwsBackupLogicallyAirGappedVault,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupLogicallyAirGappedVaults = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupLogicallyAirGappedVaultOutputProps>(
    AwsBackupLogicallyAirGappedVault,
    idFilter,
    baseNode,
    optional,
  )
