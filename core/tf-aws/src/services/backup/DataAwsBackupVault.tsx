import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupVault } from './AwsBackupVault.tsx'

export const DataAwsBackupVaultInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBackupVaultOutputSchema = z.object({
  arn: z.string().optional(),
  kms_key_arn: z.string().optional(),
  recovery_points: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsBackupVaultInputProps =
  & z.input<typeof DataAwsBackupVaultInputSchema>
  & NodeProps

export type DataAwsBackupVaultOutputProps =
  & z.output<typeof DataAwsBackupVaultOutputSchema>
  & z.output<typeof DataAwsBackupVaultInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/backup_vault

export function DataAwsBackupVault(
  props: Partial<DataAwsBackupVaultInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBackupVault
      _type='aws_backup_vault'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBackupVaultInputSchema}
      _outputSchema={DataAwsBackupVaultOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupVault = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBackupVaultOutputProps>(
    DataAwsBackupVault,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBackupVaults = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBackupVaultOutputProps>(
    DataAwsBackupVault,
    idFilter,
    baseNode,
    optional,
  )
