import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securityhub_standards_control_association

export const InputSchema = z.object({
  association_status: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  security_control_id: resolvableValue(z.string()),
  standards_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  updated_reason: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSecurityhubStandardsControlAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_standards_control_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubStandardsControlAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsSecurityhubStandardsControlAssociation, node, id)

export const useAwsSecurityhubStandardsControlAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsSecurityhubStandardsControlAssociation,
    node,
    id,
  )
