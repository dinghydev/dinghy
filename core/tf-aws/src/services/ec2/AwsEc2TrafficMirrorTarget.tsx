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

export const AwsEc2TrafficMirrorTargetInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  gateway_load_balancer_endpoint_id: resolvableValue(z.string().optional()),
  network_interface_id: resolvableValue(z.string().optional()),
  network_load_balancer_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2TrafficMirrorTargetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TrafficMirrorTargetInputProps =
  & z.input<typeof AwsEc2TrafficMirrorTargetInputSchema>
  & NodeProps

export type AwsEc2TrafficMirrorTargetOutputProps =
  & z.output<typeof AwsEc2TrafficMirrorTargetOutputSchema>
  & z.output<typeof AwsEc2TrafficMirrorTargetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_traffic_mirror_target

export function AwsEc2TrafficMirrorTarget(
  props: Partial<AwsEc2TrafficMirrorTargetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_traffic_mirror_target'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TrafficMirrorTargetInputSchema}
      _outputSchema={AwsEc2TrafficMirrorTargetOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TrafficMirrorTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TrafficMirrorTargetOutputProps>(
    AwsEc2TrafficMirrorTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TrafficMirrorTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TrafficMirrorTargetOutputProps>(
    AwsEc2TrafficMirrorTarget,
    idFilter,
    baseNode,
    optional,
  )
