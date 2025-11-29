import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codecommit_approval_rule_template_association

export const InputSchema = z.object({
  approval_rule_template_name: resolvableValue(z.string()),
  repository_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
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

export function AwsCodecommitApprovalRuleTemplateAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecommit_approval_rule_template_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecommitApprovalRuleTemplateAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsCodecommitApprovalRuleTemplateAssociation,
    node,
    id,
  )

export const useAwsCodecommitApprovalRuleTemplateAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsCodecommitApprovalRuleTemplateAssociation,
    node,
    id,
  )
