import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/eks_access_policy_association

export const InputSchema = z.object({
  associated_at: resolvableValue(z.string()),
  cluster_name: resolvableValue(z.string()),
  modified_at: resolvableValue(z.string()),
  policy_arn: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  access_scope: resolvableValue(z.object({
    namespaces: z.string().array().optional(),
    type: z.string(),
  })),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEksAccessPolicyAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_access_policy_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksAccessPolicyAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEksAccessPolicyAssociation, node, id)

export const useAwsEksAccessPolicyAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEksAccessPolicyAssociation, node, id)
