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

export const AwsEfsFileSystemPolicyInputSchema = TfMetaSchema.extend({
  file_system_id: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  bypass_policy_lockout_safety_check: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEfsFileSystemPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsEfsFileSystemPolicyInputProps =
  & z.input<typeof AwsEfsFileSystemPolicyInputSchema>
  & NodeProps

export type AwsEfsFileSystemPolicyOutputProps =
  & z.output<typeof AwsEfsFileSystemPolicyOutputSchema>
  & z.output<typeof AwsEfsFileSystemPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/efs_file_system_policy

export function AwsEfsFileSystemPolicy(
  props: Partial<AwsEfsFileSystemPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_file_system_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEfsFileSystemPolicyInputSchema}
      _outputSchema={AwsEfsFileSystemPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsFileSystemPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEfsFileSystemPolicyOutputProps>(
    AwsEfsFileSystemPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEfsFileSystemPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEfsFileSystemPolicyOutputProps>(
    AwsEfsFileSystemPolicy,
    idFilter,
    baseNode,
    optional,
  )
