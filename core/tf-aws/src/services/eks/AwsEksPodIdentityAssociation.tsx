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

export const InputSchema = TfMetaSchema.extend({
  cluster_name: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  namespace: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  service_account: resolvableValue(z.string()),
  disable_session_tags: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_role_arn: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  association_arn: z.string().optional(),
  association_id: z.string().optional(),
  external_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/eks_pod_identity_association

export function AwsEksPodIdentityAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_pod_identity_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksPodIdentityAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEksPodIdentityAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEksPodIdentityAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEksPodIdentityAssociation,
    idFilter,
    baseNode,
    optional,
  )
