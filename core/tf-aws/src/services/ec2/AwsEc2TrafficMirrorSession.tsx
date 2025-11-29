import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_traffic_mirror_session

export const InputSchema = z.object({
  network_interface_id: resolvableValue(z.string()),
  session_number: resolvableValue(z.number()),
  traffic_mirror_filter_id: resolvableValue(z.string()),
  traffic_mirror_target_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  packet_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  virtual_network_id: resolvableValue(z.number().optional()),
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

export function AwsEc2TrafficMirrorSession(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_traffic_mirror_session'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TrafficMirrorSession = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2TrafficMirrorSession, node, id)

export const useAwsEc2TrafficMirrorSessions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2TrafficMirrorSession, node, id)
