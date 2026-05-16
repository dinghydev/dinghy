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

export const AwsSesActiveReceiptRuleSetInputSchema = TfMetaSchema.extend({
  rule_set_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesActiveReceiptRuleSetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSesActiveReceiptRuleSetInputProps =
  & z.input<typeof AwsSesActiveReceiptRuleSetInputSchema>
  & NodeProps

export type AwsSesActiveReceiptRuleSetOutputProps =
  & z.output<typeof AwsSesActiveReceiptRuleSetOutputSchema>
  & z.output<typeof AwsSesActiveReceiptRuleSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_active_receipt_rule_set

export function AwsSesActiveReceiptRuleSet(
  props: Partial<AwsSesActiveReceiptRuleSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_active_receipt_rule_set'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesActiveReceiptRuleSetInputSchema}
      _outputSchema={AwsSesActiveReceiptRuleSetOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesActiveReceiptRuleSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesActiveReceiptRuleSetOutputProps>(
    AwsSesActiveReceiptRuleSet,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesActiveReceiptRuleSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesActiveReceiptRuleSetOutputProps>(
    AwsSesActiveReceiptRuleSet,
    idFilter,
    baseNode,
    optional,
  )
