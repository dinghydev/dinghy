import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSavingsplansOfferingsInputSchema = TfMetaSchema.extend({
  currencies: resolvableValue(z.string().array().optional()),
  descriptions: resolvableValue(z.string().array().optional()),
  durations: resolvableValue(z.number().array().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  offering_ids: resolvableValue(z.string().array().optional()),
  operations: resolvableValue(z.string().array().optional()),
  payment_options: resolvableValue(z.string().array().optional()),
  plan_types: resolvableValue(z.string().array().optional()),
  product_type: resolvableValue(z.string().optional()),
  service_codes: resolvableValue(z.string().array().optional()),
  usage_types: resolvableValue(z.string().array().optional()),
})

export const DataAwsSavingsplansOfferingsOutputSchema = z.object({
  offerings: z.object({
    currency: z.string(),
    description: z.string(),
    duration_seconds: z.number(),
    offering_id: z.string(),
    operation: z.string(),
    payment_option: z.string(),
    plan_type: z.string(),
    product_types: z.set(z.string()),
    properties: z.object({
      name: z.string(),
      value: z.string(),
    }).array(),
    service_code: z.string(),
    usage_type: z.string(),
  }).array().optional(),
})

export type DataAwsSavingsplansOfferingsInputProps =
  & z.input<typeof DataAwsSavingsplansOfferingsInputSchema>
  & NodeProps

export type DataAwsSavingsplansOfferingsOutputProps =
  & z.output<typeof DataAwsSavingsplansOfferingsOutputSchema>
  & z.output<typeof DataAwsSavingsplansOfferingsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/savingsplans_offerings

export function DataAwsSavingsplansOfferings(
  props: Partial<DataAwsSavingsplansOfferingsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_savingsplans_offerings'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSavingsplansOfferingsInputSchema}
      _outputSchema={DataAwsSavingsplansOfferingsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSavingsplansOfferingss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSavingsplansOfferingsOutputProps>(
    DataAwsSavingsplansOfferings,
    idFilter,
    baseNode,
    optional,
  )
