import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBackupVault } from './AwsBackupVault.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/backup_vault

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  kms_key_arn: z.string().optional(),
  recovery_points: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsBackupVault(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsBackupVault
      _type='aws_backup_vault'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBackupVault = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsBackupVault, node, id)

export const useDataAwsBackupVaults = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsBackupVault, node, id)
