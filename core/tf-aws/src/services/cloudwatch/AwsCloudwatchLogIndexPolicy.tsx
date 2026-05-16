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

export const AwsCloudwatchLogIndexPolicyInputSchema = TfMetaSchema.extend({
  log_group_name: resolvableValue(z.string()),
  policy_document: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchLogIndexPolicyOutputSchema = z.object({})

export type AwsCloudwatchLogIndexPolicyInputProps =
  & z.input<typeof AwsCloudwatchLogIndexPolicyInputSchema>
  & NodeProps

export type AwsCloudwatchLogIndexPolicyOutputProps =
  & z.output<typeof AwsCloudwatchLogIndexPolicyOutputSchema>
  & z.output<typeof AwsCloudwatchLogIndexPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_index_policy

export function AwsCloudwatchLogIndexPolicy(
  props: Partial<AwsCloudwatchLogIndexPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_index_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogIndexPolicyInputSchema}
      _outputSchema={AwsCloudwatchLogIndexPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogIndexPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogIndexPolicyOutputProps>(
    AwsCloudwatchLogIndexPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogIndexPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogIndexPolicyOutputProps>(
    AwsCloudwatchLogIndexPolicy,
    idFilter,
    baseNode,
    optional,
  )
