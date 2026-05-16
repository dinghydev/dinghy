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

export const AwsCodecommitApprovalRuleTemplateAssociationInputSchema =
  TfMetaSchema.extend({
    approval_rule_template_name: resolvableValue(z.string()),
    repository_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsCodecommitApprovalRuleTemplateAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsCodecommitApprovalRuleTemplateAssociationInputProps =
  & z.input<typeof AwsCodecommitApprovalRuleTemplateAssociationInputSchema>
  & NodeProps

export type AwsCodecommitApprovalRuleTemplateAssociationOutputProps =
  & z.output<typeof AwsCodecommitApprovalRuleTemplateAssociationOutputSchema>
  & z.output<typeof AwsCodecommitApprovalRuleTemplateAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codecommit_approval_rule_template_association

export function AwsCodecommitApprovalRuleTemplateAssociation(
  props: Partial<AwsCodecommitApprovalRuleTemplateAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codecommit_approval_rule_template_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodecommitApprovalRuleTemplateAssociationInputSchema}
      _outputSchema={AwsCodecommitApprovalRuleTemplateAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodecommitApprovalRuleTemplateAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodecommitApprovalRuleTemplateAssociationOutputProps>(
    AwsCodecommitApprovalRuleTemplateAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodecommitApprovalRuleTemplateAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodecommitApprovalRuleTemplateAssociationOutputProps>(
    AwsCodecommitApprovalRuleTemplateAssociation,
    idFilter,
    baseNode,
    optional,
  )
