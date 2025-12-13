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
  cluster_id: resolvableValue(z.string()),
  instance_type_configs: resolvableValue(
    z.object({
      bid_price: z.string().optional(),
      bid_price_as_percentage_of_on_demand_price: z.number().optional(),
      instance_type: z.string(),
      weighted_capacity: z.number().optional(),
      configurations: z.object({
        classification: z.string().optional(),
        properties: z.record(z.string(), z.string()).optional(),
      }).array().optional(),
      ebs_config: z.object({
        iops: z.number().optional(),
        size: z.number(),
        type: z.string(),
        volumes_per_instance: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  launch_specifications: resolvableValue(
    z.object({
      on_demand_specification: z.object({
        allocation_strategy: z.string(),
      }).array().optional(),
      spot_specification: z.object({
        allocation_strategy: z.string(),
        block_duration_minutes: z.number().optional(),
        timeout_action: z.string(),
        timeout_duration_minutes: z.number(),
      }).array().optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  target_on_demand_capacity: resolvableValue(z.number().optional()),
  target_spot_capacity: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  provisioned_on_demand_capacity: z.number().optional(),
  provisioned_spot_capacity: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emr_instance_fleet

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

export const useAwsEmrInstanceFleet = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsEmrInstanceFleet, idFilter, baseNode)

export const useAwsEmrInstanceFleets = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsEmrInstanceFleet, idFilter, baseNode)
