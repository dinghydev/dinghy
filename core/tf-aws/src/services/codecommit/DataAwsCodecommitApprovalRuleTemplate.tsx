import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodecommitApprovalRuleTemplate } from './AwsCodecommitApprovalRuleTemplate.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/codecommit_approval_rule_template

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  approval_rule_template_id: z.string().optional(),
  content: z.string().optional(),
  creation_date: z.string().optional(),
  description: z.string().optional(),
  last_modified_date: z.string().optional(),
  last_modified_user: z.string().optional(),
  rule_content_sha256: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCodecommitApprovalRuleTemplate(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCodecommitApprovalRuleTemplate
      _type='aws_codecommit_approval_rule_template'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodecommitApprovalRuleTemplate = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsCodecommitApprovalRuleTemplate, node, id)

export const useDataAwsCodecommitApprovalRuleTemplates = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsCodecommitApprovalRuleTemplate, node, id)
