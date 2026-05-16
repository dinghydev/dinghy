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

export const AwsCloudwatchLogResourcePolicyInputSchema = TfMetaSchema.extend({
  policy_document: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resource_arn: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchLogResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
  policy_scope: z.string().optional(),
  revision_id: z.string().optional(),
})

export type AwsCloudwatchLogResourcePolicyInputProps =
  & z.input<typeof AwsCloudwatchLogResourcePolicyInputSchema>
  & NodeProps

export type AwsCloudwatchLogResourcePolicyOutputProps =
  & z.output<typeof AwsCloudwatchLogResourcePolicyOutputSchema>
  & z.output<typeof AwsCloudwatchLogResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_log_resource_policy

export function AwsCloudwatchLogResourcePolicy(
  props: Partial<AwsCloudwatchLogResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_log_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchLogResourcePolicyInputSchema}
      _outputSchema={AwsCloudwatchLogResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchLogResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchLogResourcePolicyOutputProps>(
    AwsCloudwatchLogResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchLogResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchLogResourcePolicyOutputProps>(
    AwsCloudwatchLogResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
