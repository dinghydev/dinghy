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

export const AwsSagemakerModelPackageGroupPolicyInputSchema = TfMetaSchema
  .extend({
    model_package_group_name: resolvableValue(z.string()),
    resource_policy: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSagemakerModelPackageGroupPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSagemakerModelPackageGroupPolicyInputProps =
  & z.input<typeof AwsSagemakerModelPackageGroupPolicyInputSchema>
  & NodeProps

export type AwsSagemakerModelPackageGroupPolicyOutputProps =
  & z.output<typeof AwsSagemakerModelPackageGroupPolicyOutputSchema>
  & z.output<typeof AwsSagemakerModelPackageGroupPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_model_package_group_policy

export function AwsSagemakerModelPackageGroupPolicy(
  props: Partial<AwsSagemakerModelPackageGroupPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_model_package_group_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerModelPackageGroupPolicyInputSchema}
      _outputSchema={AwsSagemakerModelPackageGroupPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerModelPackageGroupPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerModelPackageGroupPolicyOutputProps>(
    AwsSagemakerModelPackageGroupPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerModelPackageGroupPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerModelPackageGroupPolicyOutputProps>(
    AwsSagemakerModelPackageGroupPolicy,
    idFilter,
    baseNode,
    optional,
  )
