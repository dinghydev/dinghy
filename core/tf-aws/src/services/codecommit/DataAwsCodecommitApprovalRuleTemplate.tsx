import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodecommitApprovalRuleTemplate } from './AwsCodecommitApprovalRuleTemplate.tsx'

export const DataAwsCodecommitApprovalRuleTemplateInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsCodecommitApprovalRuleTemplateOutputSchema = z.object({
  approval_rule_template_id: z.string().optional(),
  content: z.string().optional(),
  creation_date: z.string().optional(),
  description: z.string().optional(),
  last_modified_date: z.string().optional(),
  last_modified_user: z.string().optional(),
  rule_content_sha256: z.string().optional(),
})

export type DataAwsCodecommitApprovalRuleTemplateInputProps =
  & z.input<typeof DataAwsCodecommitApprovalRuleTemplateInputSchema>
  & NodeProps

export type DataAwsCodecommitApprovalRuleTemplateOutputProps =
  & z.output<typeof DataAwsCodecommitApprovalRuleTemplateOutputSchema>
  & z.output<typeof DataAwsCodecommitApprovalRuleTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/codecommit_approval_rule_template

export function DataAwsCodecommitApprovalRuleTemplate(
  props: Partial<DataAwsCodecommitApprovalRuleTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCodecommitApprovalRuleTemplate
      _type='aws_codecommit_approval_rule_template'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCodecommitApprovalRuleTemplateInputSchema}
      _outputSchema={DataAwsCodecommitApprovalRuleTemplateOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodecommitApprovalRuleTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCodecommitApprovalRuleTemplateOutputProps>(
    DataAwsCodecommitApprovalRuleTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCodecommitApprovalRuleTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCodecommitApprovalRuleTemplateOutputProps>(
    DataAwsCodecommitApprovalRuleTemplate,
    idFilter,
    baseNode,
    optional,
  )
