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

export const AwsEc2TrafficMirrorSessionInputSchema = TfMetaSchema.extend({
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

export const AwsEc2TrafficMirrorSessionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TrafficMirrorSessionInputProps =
  & z.input<typeof AwsEc2TrafficMirrorSessionInputSchema>
  & NodeProps

export type AwsEc2TrafficMirrorSessionOutputProps =
  & z.output<typeof AwsEc2TrafficMirrorSessionOutputSchema>
  & z.output<typeof AwsEc2TrafficMirrorSessionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_traffic_mirror_session

export function AwsEc2TrafficMirrorSession(
  props: Partial<AwsEc2TrafficMirrorSessionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_traffic_mirror_session'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TrafficMirrorSessionInputSchema}
      _outputSchema={AwsEc2TrafficMirrorSessionOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TrafficMirrorSession = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TrafficMirrorSessionOutputProps>(
    AwsEc2TrafficMirrorSession,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TrafficMirrorSessions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TrafficMirrorSessionOutputProps>(
    AwsEc2TrafficMirrorSession,
    idFilter,
    baseNode,
    optional,
  )
