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

export const AwsEfsBackupPolicyInputSchema = TfMetaSchema.extend({
  backup_policy: resolvableValue(z.object({
    status: z.string(),
  })),
  file_system_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEfsBackupPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEfsBackupPolicyInputProps =
  & z.input<typeof AwsEfsBackupPolicyInputSchema>
  & NodeProps

export type AwsEfsBackupPolicyOutputProps =
  & z.output<typeof AwsEfsBackupPolicyOutputSchema>
  & z.output<typeof AwsEfsBackupPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/efs_backup_policy

export function AwsEfsBackupPolicy(
  props: Partial<AwsEfsBackupPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_backup_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEfsBackupPolicyInputSchema}
      _outputSchema={AwsEfsBackupPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsBackupPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEfsBackupPolicyOutputProps>(
    AwsEfsBackupPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEfsBackupPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEfsBackupPolicyOutputProps>(
    AwsEfsBackupPolicy,
    idFilter,
    baseNode,
    optional,
  )
