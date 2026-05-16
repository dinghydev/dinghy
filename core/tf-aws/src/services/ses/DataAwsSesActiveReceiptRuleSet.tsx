import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesActiveReceiptRuleSet } from './AwsSesActiveReceiptRuleSet.tsx'

export const DataAwsSesActiveReceiptRuleSetInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSesActiveReceiptRuleSetOutputSchema = z.object({
  arn: z.string().optional(),
  rule_set_name: z.string().optional(),
})

export type DataAwsSesActiveReceiptRuleSetInputProps =
  & z.input<typeof DataAwsSesActiveReceiptRuleSetInputSchema>
  & NodeProps

export type DataAwsSesActiveReceiptRuleSetOutputProps =
  & z.output<typeof DataAwsSesActiveReceiptRuleSetOutputSchema>
  & z.output<typeof DataAwsSesActiveReceiptRuleSetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ses_active_receipt_rule_set

export function DataAwsSesActiveReceiptRuleSet(
  props: Partial<DataAwsSesActiveReceiptRuleSetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSesActiveReceiptRuleSet
      _type='aws_ses_active_receipt_rule_set'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSesActiveReceiptRuleSetInputSchema}
      _outputSchema={DataAwsSesActiveReceiptRuleSetOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesActiveReceiptRuleSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSesActiveReceiptRuleSetOutputProps>(
    DataAwsSesActiveReceiptRuleSet,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSesActiveReceiptRuleSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSesActiveReceiptRuleSetOutputProps>(
    DataAwsSesActiveReceiptRuleSet,
    idFilter,
    baseNode,
    optional,
  )
