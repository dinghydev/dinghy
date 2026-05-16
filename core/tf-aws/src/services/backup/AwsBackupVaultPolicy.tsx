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

export const AwsBackupVaultPolicyInputSchema = TfMetaSchema.extend({
  backup_vault_name: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsBackupVaultPolicyOutputSchema = z.object({
  backup_vault_arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsBackupVaultPolicyInputProps =
  & z.input<typeof AwsBackupVaultPolicyInputSchema>
  & NodeProps

export type AwsBackupVaultPolicyOutputProps =
  & z.output<typeof AwsBackupVaultPolicyOutputSchema>
  & z.output<typeof AwsBackupVaultPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_vault_policy

export function AwsBackupVaultPolicy(
  props: Partial<AwsBackupVaultPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_vault_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupVaultPolicyInputSchema}
      _outputSchema={AwsBackupVaultPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupVaultPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupVaultPolicyOutputProps>(
    AwsBackupVaultPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupVaultPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupVaultPolicyOutputProps>(
    AwsBackupVaultPolicy,
    idFilter,
    baseNode,
    optional,
  )
