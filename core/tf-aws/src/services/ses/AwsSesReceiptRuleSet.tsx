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

export const AwsSesReceiptRuleSetInputSchema = TfMetaSchema.extend({
  rule_set_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesReceiptRuleSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSesReceiptRuleSetInputProps =
  & z.input<typeof AwsSesReceiptRuleSetInputSchema>
  & NodeProps

export type AwsSesReceiptRuleSetOutputProps =
  & z.output<typeof AwsSesReceiptRuleSetOutputSchema>
  & z.output<typeof AwsSesReceiptRuleSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_receipt_rule_set

export function AwsSesReceiptRuleSet(
  props: Partial<AwsSesReceiptRuleSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_receipt_rule_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesReceiptRuleSetInputSchema}
      _outputSchema={AwsSesReceiptRuleSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesReceiptRuleSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesReceiptRuleSetOutputProps>(
    AwsSesReceiptRuleSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesReceiptRuleSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesReceiptRuleSetOutputProps>(
    AwsSesReceiptRuleSet,
    idFilter,
    baseNode,
    optional,
  )
