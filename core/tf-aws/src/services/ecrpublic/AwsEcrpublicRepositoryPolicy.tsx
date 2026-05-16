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

export const AwsEcrpublicRepositoryPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  repository_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsEcrpublicRepositoryPolicyOutputSchema = z.object({
  registry_id: z.string().optional(),
})

export type AwsEcrpublicRepositoryPolicyInputProps =
  & z.input<typeof AwsEcrpublicRepositoryPolicyInputSchema>
  & NodeProps

export type AwsEcrpublicRepositoryPolicyOutputProps =
  & z.output<typeof AwsEcrpublicRepositoryPolicyOutputSchema>
  & z.output<typeof AwsEcrpublicRepositoryPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ecrpublic_repository_policy

export function AwsEcrpublicRepositoryPolicy(
  props: Partial<AwsEcrpublicRepositoryPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecrpublic_repository_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEcrpublicRepositoryPolicyInputSchema}
      _outputSchema={AwsEcrpublicRepositoryPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsEcrpublicRepositoryPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEcrpublicRepositoryPolicyOutputProps>(
    AwsEcrpublicRepositoryPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEcrpublicRepositoryPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEcrpublicRepositoryPolicyOutputProps>(
    AwsEcrpublicRepositoryPolicy,
    idFilter,
    baseNode,
    optional,
  )
