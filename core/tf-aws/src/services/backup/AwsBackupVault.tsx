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

export const AwsBackupVaultInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  force_destroy: resolvableValue(z.boolean().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBackupVaultOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  recovery_points: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBackupVaultInputProps =
  & z.input<typeof AwsBackupVaultInputSchema>
  & NodeProps

export type AwsBackupVaultOutputProps =
  & z.output<typeof AwsBackupVaultOutputSchema>
  & z.output<typeof AwsBackupVaultInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/backup_vault

export function AwsBackupVault(props: Partial<AwsBackupVaultInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_backup_vault'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBackupVaultInputSchema}
      _outputSchema={AwsBackupVaultOutputSchema}
      {...props}
    />
  )
}

export const useAwsBackupVault = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBackupVaultOutputProps>(
    AwsBackupVault,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBackupVaults = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBackupVaultOutputProps>(
    AwsBackupVault,
    idFilter,
    baseNode,
    optional,
  )
