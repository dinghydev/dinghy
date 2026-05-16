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

export const AwsCloudwatchLogAccountPolicyInputSchema = TfMetaSchema.extend({
  policy_document: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string()),
  policy_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(z.string().optional()),
  selection_criteria: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchLogAccountPolicyOutputSchema = z.object({})

export type AwsCloudwatchLogAccountPolicyInputProps =
  & z.input<typeof AwsCloudwatchLogAccountPolicyInputSchema>
  & NodeProps

export type AwsCloudwatchLogAccountPolicyOutputProps =
  & z.output<typeof AwsCloudwatchLogAccountPolicyOutputSchema>
  & z.output<typeof AwsCloudwatchLogAccountPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_account_policy

export function AwsCloudwatchLogAccountPolicy(
  props: Partial<AwsCloudwatchLogAccountPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_account_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogAccountPolicyInputSchema}
      _outputSchema={AwsCloudwatchLogAccountPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogAccountPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogAccountPolicyOutputProps>(
    AwsCloudwatchLogAccountPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogAccountPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogAccountPolicyOutputProps>(
    AwsCloudwatchLogAccountPolicy,
    idFilter,
    baseNode,
    optional,
  )
