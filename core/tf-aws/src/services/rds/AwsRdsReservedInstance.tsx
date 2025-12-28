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

export const InputSchema = z.object({
  offering_id: resolvableValue(z.string()),
  instance_count: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  reservation_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  currency_code: z.string().optional(),
  db_instance_class: z.string().optional(),
  duration: z.number().optional(),
  fixed_price: z.number().optional(),
  id: z.string().optional(),
  lease_id: z.string().optional(),
  multi_az: z.boolean().optional(),
  offering_type: z.string().optional(),
  product_description: z.string().optional(),
  recurring_charges: z.object({
    recurring_charge_amount: z.number(),
    recurring_charge_frequency: z.string(),
  }).array().optional(),
  start_time: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  usage_price: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_reserved_instance

export function AwsRdsReservedInstance(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_reserved_instance'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsReservedInstance = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRdsReservedInstance,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsReservedInstances = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRdsReservedInstance,
    idFilter,
    baseNode,
    optional,
  )
