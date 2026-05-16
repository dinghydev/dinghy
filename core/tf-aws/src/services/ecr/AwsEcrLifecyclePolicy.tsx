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

export const AwsEcrLifecyclePolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  repository: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcrLifecyclePolicyOutputSchema = z.object({
  registry_id: z.string().optional(),
  repository: z.string().optional(),
})

export const AwsEcrLifecyclePolicyImportSchema = z.object({
  repository: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEcrLifecyclePolicyInputProps =
  & z.input<typeof AwsEcrLifecyclePolicyInputSchema>
  & z.input<typeof AwsEcrLifecyclePolicyImportSchema>
  & NodeProps

export type AwsEcrLifecyclePolicyOutputProps =
  & z.output<typeof AwsEcrLifecyclePolicyOutputSchema>
  & z.output<typeof AwsEcrLifecyclePolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_lifecycle_policy

export function AwsEcrLifecyclePolicy(
  props: Partial<AwsEcrLifecyclePolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_lifecycle_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrLifecyclePolicyInputSchema}
      _outputSchema={AwsEcrLifecyclePolicyOutputSchema}
      _importSchema={AwsEcrLifecyclePolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsEcrLifecyclePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrLifecyclePolicyOutputProps>(
    AwsEcrLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrLifecyclePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrLifecyclePolicyOutputProps>(
    AwsEcrLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )
