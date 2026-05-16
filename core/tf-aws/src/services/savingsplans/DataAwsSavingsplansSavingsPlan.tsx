import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSavingsplansSavingsPlan } from './AwsSavingsplansSavingsPlan.tsx'

export const DataAwsSavingsplansSavingsPlanInputSchema = TfMetaSchema.extend({
  savings_plan_id: resolvableValue(z.string()),
})

export const DataAwsSavingsplansSavingsPlanOutputSchema = z.object({
  commitment: z.string().optional(),
  currency: z.string().optional(),
  description: z.string().optional(),
  ec2_instance_family: z.string().optional(),
  end: z.string().optional(),
  offering_id: z.string().optional(),
  payment_option: z.string().optional(),
  product_types: z.string().array().optional(),
  purchase_time: z.string().optional(),
  recurring_payment_amount: z.string().optional(),
  region: z.string().optional(),
  returnable_until: z.string().optional(),
  savings_plan_arn: z.string().optional(),
  savings_plan_offering_id: z.string().optional(),
  savings_plan_type: z.string().optional(),
  start: z.string().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  term_duration_in_seconds: z.number().optional(),
  upfront_payment_amount: z.string().optional(),
})

export type DataAwsSavingsplansSavingsPlanInputProps =
  & z.input<typeof DataAwsSavingsplansSavingsPlanInputSchema>
  & NodeProps

export type DataAwsSavingsplansSavingsPlanOutputProps =
  & z.output<typeof DataAwsSavingsplansSavingsPlanOutputSchema>
  & z.output<typeof DataAwsSavingsplansSavingsPlanInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_savings_plan

export function DataAwsSavingsplansSavingsPlan(
  props: Partial<DataAwsSavingsplansSavingsPlanInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSavingsplansSavingsPlan
      _type='aws_savingsplans_savings_plan'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSavingsplansSavingsPlanInputSchema}
      _outputSchema={DataAwsSavingsplansSavingsPlanOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSavingsplansSavingsPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSavingsplansSavingsPlanOutputProps>(
    DataAwsSavingsplansSavingsPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSavingsplansSavingsPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSavingsplansSavingsPlanOutputProps>(
    DataAwsSavingsplansSavingsPlan,
    idFilter,
    baseNode,
    optional,
  )
