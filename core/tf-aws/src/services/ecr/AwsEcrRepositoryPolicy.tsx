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

export const AwsEcrRepositoryPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  repository: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcrRepositoryPolicyOutputSchema = z.object({
  registry_id: z.string().optional(),
  repository: z.string().optional(),
})

export const AwsEcrRepositoryPolicyImportSchema = z.object({
  repository: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEcrRepositoryPolicyInputProps =
  & z.input<typeof AwsEcrRepositoryPolicyInputSchema>
  & z.input<typeof AwsEcrRepositoryPolicyImportSchema>
  & NodeProps

export type AwsEcrRepositoryPolicyOutputProps =
  & z.output<typeof AwsEcrRepositoryPolicyOutputSchema>
  & z.output<typeof AwsEcrRepositoryPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecr_repository_policy

export function AwsEcrRepositoryPolicy(
  props: Partial<AwsEcrRepositoryPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecr_repository_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrRepositoryPolicyInputSchema}
      _outputSchema={AwsEcrRepositoryPolicyOutputSchema}
      _importSchema={AwsEcrRepositoryPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsEcrRepositoryPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrRepositoryPolicyOutputProps>(
    AwsEcrRepositoryPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrRepositoryPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrRepositoryPolicyOutputProps>(
    AwsEcrRepositoryPolicy,
    idFilter,
    baseNode,
    optional,
  )
