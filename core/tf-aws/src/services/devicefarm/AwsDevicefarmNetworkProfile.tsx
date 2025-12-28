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
  name: resolvableValue(z.string()),
  project_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  downlink_bandwidth_bits: resolvableValue(z.number().optional()),
  downlink_delay_ms: resolvableValue(z.number().optional()),
  downlink_jitter_ms: resolvableValue(z.number().optional()),
  downlink_loss_percent: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
  uplink_bandwidth_bits: resolvableValue(z.number().optional()),
  uplink_delay_ms: resolvableValue(z.number().optional()),
  uplink_jitter_ms: resolvableValue(z.number().optional()),
  uplink_loss_percent: resolvableValue(z.number().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/devicefarm_network_profile

export function AwsDevicefarmNetworkProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devicefarm_network_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDevicefarmNetworkProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDevicefarmNetworkProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDevicefarmNetworkProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDevicefarmNetworkProfile,
    idFilter,
    baseNode,
    optional,
  )
