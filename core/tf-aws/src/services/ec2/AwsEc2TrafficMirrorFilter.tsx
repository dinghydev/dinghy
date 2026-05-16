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

export const AwsEc2TrafficMirrorFilterInputSchema = TfMetaSchema.extend({
  description: resolvableValue(z.string().optional()),
  network_services: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2TrafficMirrorFilterOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TrafficMirrorFilterInputProps =
  & z.input<typeof AwsEc2TrafficMirrorFilterInputSchema>
  & NodeProps

export type AwsEc2TrafficMirrorFilterOutputProps =
  & z.output<typeof AwsEc2TrafficMirrorFilterOutputSchema>
  & z.output<typeof AwsEc2TrafficMirrorFilterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_traffic_mirror_filter

export function AwsEc2TrafficMirrorFilter(
  props: Partial<AwsEc2TrafficMirrorFilterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_traffic_mirror_filter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TrafficMirrorFilterInputSchema}
      _outputSchema={AwsEc2TrafficMirrorFilterOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TrafficMirrorFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TrafficMirrorFilterOutputProps>(
    AwsEc2TrafficMirrorFilter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TrafficMirrorFilters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TrafficMirrorFilterOutputProps>(
    AwsEc2TrafficMirrorFilter,
    idFilter,
    baseNode,
    optional,
  )
