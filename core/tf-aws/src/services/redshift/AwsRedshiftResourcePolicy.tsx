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

export const AwsRedshiftResourcePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRedshiftResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRedshiftResourcePolicyInputProps =
  & z.input<typeof AwsRedshiftResourcePolicyInputSchema>
  & NodeProps

export type AwsRedshiftResourcePolicyOutputProps =
  & z.output<typeof AwsRedshiftResourcePolicyOutputSchema>
  & z.output<typeof AwsRedshiftResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_resource_policy

export function AwsRedshiftResourcePolicy(
  props: Partial<AwsRedshiftResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftResourcePolicyInputSchema}
      _outputSchema={AwsRedshiftResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftResourcePolicyOutputProps>(
    AwsRedshiftResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftResourcePolicyOutputProps>(
    AwsRedshiftResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
