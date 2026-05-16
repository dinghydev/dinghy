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

export const AwsNetworkmonitorProbeInputSchema = TfMetaSchema.extend({
  destination: resolvableValue(z.string()),
  monitor_name: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  source_arn: resolvableValue(z.string()),
  destination_port: resolvableValue(z.number().optional()),
  packet_size: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsNetworkmonitorProbeOutputSchema = z.object({
  address_family: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  probe_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsNetworkmonitorProbeInputProps =
  & z.input<typeof AwsNetworkmonitorProbeInputSchema>
  & NodeProps

export type AwsNetworkmonitorProbeOutputProps =
  & z.output<typeof AwsNetworkmonitorProbeOutputSchema>
  & z.output<typeof AwsNetworkmonitorProbeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmonitor_probe

export function AwsNetworkmonitorProbe(
  props: Partial<AwsNetworkmonitorProbeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmonitor_probe'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmonitorProbeInputSchema}
      _outputSchema={AwsNetworkmonitorProbeOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmonitorProbe = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmonitorProbeOutputProps>(
    AwsNetworkmonitorProbe,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmonitorProbes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmonitorProbeOutputProps>(
    AwsNetworkmonitorProbe,
    idFilter,
    baseNode,
    optional,
  )
