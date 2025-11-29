import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_log_data_protection_policy

export const InputSchema = z.object({
  log_group_name: resolvableValue(z.string()),
  policy_document: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchLogDataProtectionPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_data_protection_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDataProtectionPolicy = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsCloudwatchLogDataProtectionPolicy, node, id)

export const useAwsCloudwatchLogDataProtectionPolicys = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsCloudwatchLogDataProtectionPolicy, node, id)
