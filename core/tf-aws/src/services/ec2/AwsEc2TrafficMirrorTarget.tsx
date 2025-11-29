import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_traffic_mirror_target

export const InputSchema = z.object({
  description: resolvableValue(z.string().optional()),
  gateway_load_balancer_endpoint_id: resolvableValue(z.string().optional()),
  network_interface_id: resolvableValue(z.string().optional()),
  network_load_balancer_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TrafficMirrorTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_traffic_mirror_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TrafficMirrorTarget = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2TrafficMirrorTarget, node, id)

export const useAwsEc2TrafficMirrorTargets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2TrafficMirrorTarget, node, id)
