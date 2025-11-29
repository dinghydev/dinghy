import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/backup_vault_lock_configuration

export const InputSchema = z.object({
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

export function AwsBackupVaultLockConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsBackupVaultLockConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBackupVaultLockConfiguration, node, id)

export const useAwsBackupVaultLockConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBackupVaultLockConfiguration, node, id)
