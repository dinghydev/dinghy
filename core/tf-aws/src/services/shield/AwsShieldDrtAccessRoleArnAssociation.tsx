import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/shield_drt_access_role_arn_association

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
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

export function AwsShieldDrtAccessRoleArnAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_drt_access_role_arn_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldDrtAccessRoleArnAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsShieldDrtAccessRoleArnAssociation, node, id)

export const useAwsShieldDrtAccessRoleArnAssociations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsShieldDrtAccessRoleArnAssociation, node, id)
