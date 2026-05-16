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

export const AwsEcrRegistryPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcrRegistryPolicyOutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type AwsEcrRegistryPolicyInputProps =
  & z.input<typeof AwsEcrRegistryPolicyInputSchema>
  & NodeProps

export type AwsEcrRegistryPolicyOutputProps =
  & z.output<typeof AwsEcrRegistryPolicyOutputSchema>
  & z.output<typeof AwsEcrRegistryPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_registry_policy

export function AwsEcrRegistryPolicy(
  props: Partial<AwsEcrRegistryPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_registry_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrRegistryPolicyInputSchema}
      _outputSchema={AwsEcrRegistryPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrRegistryPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrRegistryPolicyOutputProps>(
    AwsEcrRegistryPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrRegistryPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrRegistryPolicyOutputProps>(
    AwsEcrRegistryPolicy,
    idFilter,
    baseNode,
    optional,
  )
