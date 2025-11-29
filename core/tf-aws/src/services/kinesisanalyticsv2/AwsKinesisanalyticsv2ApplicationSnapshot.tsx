import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kinesisanalyticsv2_application_snapshot

export const InputSchema = z.object({
  application_name: resolvableValue(z.string()),
  snapshot_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  application_version_id: z.number().optional(),
  id: z.string().optional(),
  snapshot_creation_timestamp: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKinesisanalyticsv2ApplicationSnapshot(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesisanalyticsv2_application_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisanalyticsv2ApplicationSnapshot = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsKinesisanalyticsv2ApplicationSnapshot, node, id)

export const useAwsKinesisanalyticsv2ApplicationSnapshots = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsKinesisanalyticsv2ApplicationSnapshot, node, id)
