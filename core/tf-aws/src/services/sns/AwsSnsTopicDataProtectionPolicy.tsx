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

export const AwsSnsTopicDataProtectionPolicyInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSnsTopicDataProtectionPolicyOutputSchema = z.object({})

export const AwsSnsTopicDataProtectionPolicyImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsSnsTopicDataProtectionPolicyInputProps =
  & z.input<typeof AwsSnsTopicDataProtectionPolicyInputSchema>
  & z.input<typeof AwsSnsTopicDataProtectionPolicyImportSchema>
  & NodeProps

export type AwsSnsTopicDataProtectionPolicyOutputProps =
  & z.output<typeof AwsSnsTopicDataProtectionPolicyOutputSchema>
  & z.output<typeof AwsSnsTopicDataProtectionPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sns_topic_data_protection_policy

export function AwsSnsTopicDataProtectionPolicy(
  props: Partial<AwsSnsTopicDataProtectionPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sns_topic_data_protection_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSnsTopicDataProtectionPolicyInputSchema}
      _outputSchema={AwsSnsTopicDataProtectionPolicyOutputSchema}
      _importSchema={AwsSnsTopicDataProtectionPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsSnsTopicDataProtectionPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSnsTopicDataProtectionPolicyOutputProps>(
    AwsSnsTopicDataProtectionPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSnsTopicDataProtectionPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSnsTopicDataProtectionPolicyOutputProps>(
    AwsSnsTopicDataProtectionPolicy,
    idFilter,
    baseNode,
    optional,
  )
