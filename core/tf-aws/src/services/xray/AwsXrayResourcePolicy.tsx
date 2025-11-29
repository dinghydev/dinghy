import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/xray_resource_policy

export const InputSchema = z.object({
  policy_document: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string()),
  bypass_policy_lockout_check: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  last_updated_time: z.string().optional(),
  policy_revision_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsXrayResourcePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_xray_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsXrayResourcePolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsXrayResourcePolicy, node, id)

export const useAwsXrayResourcePolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsXrayResourcePolicy, node, id)
