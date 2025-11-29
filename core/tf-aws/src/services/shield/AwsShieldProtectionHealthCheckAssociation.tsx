import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/shield_protection_health_check_association

export const InputSchema = z.object({
  health_check_arn: resolvableValue(z.string()),
  shield_protection_id: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsShieldProtectionHealthCheckAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_protection_health_check_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldProtectionHealthCheckAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsShieldProtectionHealthCheckAssociation, node, id)

export const useAwsShieldProtectionHealthCheckAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsShieldProtectionHealthCheckAssociation,
    node,
    id,
  )
