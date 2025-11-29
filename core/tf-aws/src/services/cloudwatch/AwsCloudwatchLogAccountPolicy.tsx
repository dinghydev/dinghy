import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_log_account_policy

export const InputSchema = z.object({
  policy_document: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string()),
  policy_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(z.string().optional()),
  selection_criteria: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchLogAccountPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_account_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogAccountPolicy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudwatchLogAccountPolicy, node, id)

export const useAwsCloudwatchLogAccountPolicys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudwatchLogAccountPolicy, node, id)
