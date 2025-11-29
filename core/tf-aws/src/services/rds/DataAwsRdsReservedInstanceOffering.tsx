import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/rds_reserved_instance_offering

export const InputSchema = z.object({
  db_instance_class: resolvableValue(z.string()),
  duration: resolvableValue(z.number()),
  multi_az: resolvableValue(z.boolean()),
  offering_type: resolvableValue(z.string()),
  product_description: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  currency_code: z.string().optional(),
  fixed_price: z.number().optional(),
  id: z.string().optional(),
  offering_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRdsReservedInstanceOffering(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_reserved_instance_offering'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRdsReservedInstanceOffering = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsRdsReservedInstanceOffering, node, id)

export const useDataAwsRdsReservedInstanceOfferings = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsRdsReservedInstanceOffering, node, id)
