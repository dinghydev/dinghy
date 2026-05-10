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

export const InputSchema = TfMetaSchema.extend({
  commitment: resolvableValue(z.string()),
  savings_plan_offering_id: resolvableValue(z.string()),
  purchase_time: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  currency: z.string().optional(),
  description: z.string().optional(),
  ec2_instance_family: z.string().optional(),
  end: z.string().optional(),
  offering_id: z.string().optional(),
  payment_option: z.string().optional(),
  product_types: z.string().array().optional(),
  recurring_payment_amount: z.string().optional(),
  region: z.string().optional(),
  returnable_until: z.string().optional(),
  savings_plan_arn: z.string().optional(),
  savings_plan_id: z.string().optional(),
  savings_plan_type: z.string().optional(),
  start: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  term_duration_in_seconds: z.number().optional(),
  upfront_payment_amount: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/savingsplans_savings_plan

export function AwsSavingsplansSavingsPlan(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_savingsplans_savings_plan'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSavingsplansSavingsPlan = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSavingsplansSavingsPlan,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSavingsplansSavingsPlans = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSavingsplansSavingsPlan,
    idFilter,
    baseNode,
    optional,
  )
