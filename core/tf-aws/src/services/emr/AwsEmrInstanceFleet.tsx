import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emr_instance_fleet

export const InputSchema = z.object({
  cluster_id: resolvableValue(z.string()),
  provisioned_on_demand_capacity: resolvableValue(z.number()),
  provisioned_spot_capacity: resolvableValue(z.number()),
  instance_type_configs: resolvableValue(
    z.object({
      bid_price: z.string().optional(),
      bid_price_as_percentage_of_on_demand_price: z.number().optional(),
      instance_type: z.string(),
      weighted_capacity: z.number().optional(),
    }).array().optional(),
  ),
  launch_specifications: resolvableValue(
    z.object({
      on_demand_specification: z.object({
        allocation_strategy: z.string(),
      }).optional(),
      spot_specification: z.object({
        allocation_strategy: z.string(),
        block_duration_minutes: z.number().optional(),
        timeout_action: z.string(),
        timeout_duration_minutes: z.number(),
      }).optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target_on_demand_capacity: resolvableValue(z.number().optional()),
  target_spot_capacity: resolvableValue(z.number().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEmrInstanceFleet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_instance_fleet'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrInstanceFleet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEmrInstanceFleet, node, id)

export const useAwsEmrInstanceFleets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEmrInstanceFleet, node, id)
