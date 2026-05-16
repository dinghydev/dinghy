import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsBackupVaultNotificationsInputSchema = TfMetaSchema.extend({
  backup_vault_events: resolvableValue(z.string().array()),
  backup_vault_name: resolvableValue(z.string()),
  sns_topic_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsBackupVaultNotificationsOutputSchema = z.object({
  backup_vault_arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsBackupVaultNotificationsInputProps =
  & z.input<typeof AwsBackupVaultNotificationsInputSchema>
  & NodeProps

export type AwsBackupVaultNotificationsOutputProps =
  & z.output<typeof AwsBackupVaultNotificationsOutputSchema>
  & z.output<typeof AwsBackupVaultNotificationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_vault_notifications

export function AwsBackupVaultNotifications(
  props: Partial<AwsBackupVaultNotificationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_vault_notifications'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupVaultNotificationsInputSchema}
      _outputSchema={AwsBackupVaultNotificationsOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupVaultNotificationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupVaultNotificationsOutputProps>(
    AwsBackupVaultNotifications,
    idFilter,
    baseNode,
    optional,
  )
