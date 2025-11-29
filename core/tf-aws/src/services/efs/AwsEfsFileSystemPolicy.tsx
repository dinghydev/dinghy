import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/efs_file_system_policy

export const InputSchema = z.object({
  file_system_id: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  bypass_policy_lockout_safety_check: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEfsFileSystemPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_efs_file_system_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEfsFileSystemPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEfsFileSystemPolicy, node, id)

export const useAwsEfsFileSystemPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEfsFileSystemPolicy, node, id)
