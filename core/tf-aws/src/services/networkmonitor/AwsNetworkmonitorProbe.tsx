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

export const InputSchema = TfMetaSchema.extend({
  address_family: resolvableValue(z.string()),
  arn: resolvableValue(z.string()),
  destination: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  monitor_name: resolvableValue(z.string()),
  probe_id: resolvableValue(z.string()),
  protocol: resolvableValue(z.string()),
  source_arn: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  vpc_id: resolvableValue(z.string()),
  destination_port: resolvableValue(z.number().optional()),
  packet_size: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmonitor_probe

export function AwsNetworkmonitorProbe(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmonitor_probe'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmonitorProbe = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsNetworkmonitorProbe,
    idFilter,
    baseNode,
    optional,
  )
