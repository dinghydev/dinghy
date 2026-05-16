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

export const AwsRedshiftserverlessResourcePolicyInputSchema = TfMetaSchema
  .extend({
    policy: resolvableValue(z.string()),
    resource_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsRedshiftserverlessResourcePolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRedshiftserverlessResourcePolicyInputProps =
  & z.input<typeof AwsRedshiftserverlessResourcePolicyInputSchema>
  & NodeProps

export type AwsRedshiftserverlessResourcePolicyOutputProps =
  & z.output<typeof AwsRedshiftserverlessResourcePolicyOutputSchema>
  & z.output<typeof AwsRedshiftserverlessResourcePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshiftserverless_resource_policy

export function AwsRedshiftserverlessResourcePolicy(
  props: Partial<AwsRedshiftserverlessResourcePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshiftserverless_resource_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftserverlessResourcePolicyInputSchema}
      _outputSchema={AwsRedshiftserverlessResourcePolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftserverlessResourcePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftserverlessResourcePolicyOutputProps>(
    AwsRedshiftserverlessResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftserverlessResourcePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftserverlessResourcePolicyOutputProps>(
    AwsRedshiftserverlessResourcePolicy,
    idFilter,
    baseNode,
    optional,
  )
