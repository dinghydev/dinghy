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

export const AwsXrayResourcePolicyInputSchema = TfMetaSchema.extend({
  policy_document: resolvableValue(z.string()),
  policy_name: resolvableValue(z.string()),
  bypass_policy_lockout_check: resolvableValue(z.boolean().optional()),
  policy_revision_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsXrayResourcePolicyOutputSchema = z.object({
  last_updated_time: z.string().optional(),
  policy_revision_id: z.string().optional(),
})

export type AwsXrayResourcePolicyInputProps =
  & z.input<typeof AwsXrayResourcePolicyInputSchema>
  & NodeProps

export type AwsXrayResourcePolicyOutputProps =
  & z.output<typeof AwsXrayResourcePolicyOutputSchema>
  & z.output<typeof AwsXrayResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/xray_resource_policy

export function AwsXrayResourcePolicy(
  props: Partial<AwsXrayResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_xray_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsXrayResourcePolicyInputSchema}
      _outputSchema={AwsXrayResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsXrayResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsXrayResourcePolicyOutputProps>(
    AwsXrayResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsXrayResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsXrayResourcePolicyOutputProps>(
    AwsXrayResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
