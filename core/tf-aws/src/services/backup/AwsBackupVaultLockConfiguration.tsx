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

export const AwsBackupVaultLockConfigurationInputSchema = TfMetaSchema.extend({
  backup_vault_name: resolvableValue(z.string()),
  changeable_for_days: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  max_retention_days: resolvableValue(z.number().optional()),
  min_retention_days: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsBackupVaultLockConfigurationOutputSchema = z.object({
  backup_vault_arn: z.string().optional(),
  backup_vault_name: z.string().optional(),
})

export type AwsBackupVaultLockConfigurationInputProps =
  & z.input<typeof AwsBackupVaultLockConfigurationInputSchema>
  & NodeProps

export type AwsBackupVaultLockConfigurationOutputProps =
  & z.output<typeof AwsBackupVaultLockConfigurationOutputSchema>
  & z.output<typeof AwsBackupVaultLockConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_vault_lock_configuration

export function AwsBackupVaultLockConfiguration(
  props: Partial<AwsBackupVaultLockConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_vault_lock_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupVaultLockConfigurationInputSchema}
      _outputSchema={AwsBackupVaultLockConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupVaultLockConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupVaultLockConfigurationOutputProps>(
    AwsBackupVaultLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupVaultLockConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupVaultLockConfigurationOutputProps>(
    AwsBackupVaultLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )
