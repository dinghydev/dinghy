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

export const InputSchema = TfMetaSchema.extend({
  backup_vault_name: resolvableValue(z.string()),
  changeable_for_days: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  max_retention_days: resolvableValue(z.number().optional()),
  min_retention_days: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  backup_vault_arn: z.string().optional(),
  backup_vault_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_vault_lock_configuration

export function AwsBackupVaultLockConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_vault_lock_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupVaultLockConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsBackupVaultLockConfiguration,
    idFilter,
    baseNode,
    optional,
  )
