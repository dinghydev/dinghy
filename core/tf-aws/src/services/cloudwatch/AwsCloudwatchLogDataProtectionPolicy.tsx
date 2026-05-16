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

export const AwsCloudwatchLogDataProtectionPolicyInputSchema = TfMetaSchema
  .extend({
    log_group_name: resolvableValue(z.string()),
    policy_document: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsCloudwatchLogDataProtectionPolicyOutputSchema = z.object({})

export type AwsCloudwatchLogDataProtectionPolicyInputProps =
  & z.input<typeof AwsCloudwatchLogDataProtectionPolicyInputSchema>
  & NodeProps

export type AwsCloudwatchLogDataProtectionPolicyOutputProps =
  & z.output<typeof AwsCloudwatchLogDataProtectionPolicyOutputSchema>
  & z.output<typeof AwsCloudwatchLogDataProtectionPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_data_protection_policy

export function AwsCloudwatchLogDataProtectionPolicy(
  props: Partial<AwsCloudwatchLogDataProtectionPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_data_protection_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogDataProtectionPolicyInputSchema}
      _outputSchema={AwsCloudwatchLogDataProtectionPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogDataProtectionPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogDataProtectionPolicyOutputProps>(
    AwsCloudwatchLogDataProtectionPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogDataProtectionPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogDataProtectionPolicyOutputProps>(
    AwsCloudwatchLogDataProtectionPolicy,
    idFilter,
    baseNode,
    optional,
  )
