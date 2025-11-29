import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emr_instance_group

export const InputSchema = z.object({
  cluster_id: resolvableValue(z.string()),
  instance_type: resolvableValue(z.string()),
  running_instance_count: resolvableValue(z.number()),
  status: resolvableValue(z.string()),
  autoscaling_policy: resolvableValue(z.string().optional()),
  bid_price: resolvableValue(z.string().optional()),
  configurations_json: resolvableValue(z.string().optional()),
  ebs_config: resolvableValue(
    z.object({
      iops: z.number().optional(),
      size: z.number(),
      type: z.string(),
      volumes_per_instance: z.number().optional(),
    }).array().optional(),
  ),
  ebs_optimized: resolvableValue(z.boolean().optional()),
  instance_count: resolvableValue(z.number().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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

export function AwsEmrInstanceGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emr_instance_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrInstanceGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEmrInstanceGroup, node, id)

export const useAwsEmrInstanceGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEmrInstanceGroup, node, id)
