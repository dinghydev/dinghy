import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ivs_recording_configuration

export const InputSchema = z.object({
  destination_configuration: resolvableValue(z.object({
    s3: z.object({
      bucket_name: z.string(),
    }),
  })),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  recording_reconnect_window_seconds: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  thumbnail_configuration: resolvableValue(
    z.object({
      recording_mode: z.string().optional(),
      target_interval_seconds: z.number().optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  state: z.string().optional(),
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

export function AwsIvsRecordingConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ivs_recording_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsIvsRecordingConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIvsRecordingConfiguration, node, id)

export const useAwsIvsRecordingConfigurations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIvsRecordingConfiguration, node, id)
