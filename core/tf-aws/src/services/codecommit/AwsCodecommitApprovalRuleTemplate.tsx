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

export const AwsCodecommitApprovalRuleTemplateInputSchema = TfMetaSchema.extend(
  {
    content: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsCodecommitApprovalRuleTemplateOutputSchema = z.object({
  approval_rule_template_id: z.string().optional(),
  creation_date: z.string().optional(),
  last_modified_date: z.string().optional(),
  last_modified_user: z.string().optional(),
  rule_content_sha256: z.string().optional(),
})

export type AwsCodecommitApprovalRuleTemplateInputProps =
  & z.input<typeof AwsCodecommitApprovalRuleTemplateInputSchema>
  & NodeProps

export type AwsCodecommitApprovalRuleTemplateOutputProps =
  & z.output<typeof AwsCodecommitApprovalRuleTemplateOutputSchema>
  & z.output<typeof AwsCodecommitApprovalRuleTemplateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codecommit_approval_rule_template

export function AwsCodecommitApprovalRuleTemplate(
  props: Partial<AwsCodecommitApprovalRuleTemplateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecommit_approval_rule_template'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodecommitApprovalRuleTemplateInputSchema}
      _outputSchema={AwsCodecommitApprovalRuleTemplateOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecommitApprovalRuleTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodecommitApprovalRuleTemplateOutputProps>(
    AwsCodecommitApprovalRuleTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodecommitApprovalRuleTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodecommitApprovalRuleTemplateOutputProps>(
    AwsCodecommitApprovalRuleTemplate,
    idFilter,
    baseNode,
    optional,
  )
