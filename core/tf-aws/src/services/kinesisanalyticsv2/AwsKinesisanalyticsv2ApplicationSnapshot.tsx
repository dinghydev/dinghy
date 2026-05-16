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

export const AwsKinesisanalyticsv2ApplicationSnapshotInputSchema = TfMetaSchema
  .extend({
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

export const AwsKinesisanalyticsv2ApplicationSnapshotOutputSchema = z.object({
  application_version_id: z.number().optional(),
  id: z.string().optional(),
  snapshot_creation_timestamp: z.string().optional(),
})

export type AwsKinesisanalyticsv2ApplicationSnapshotInputProps =
  & z.input<typeof AwsKinesisanalyticsv2ApplicationSnapshotInputSchema>
  & NodeProps

export type AwsKinesisanalyticsv2ApplicationSnapshotOutputProps =
  & z.output<typeof AwsKinesisanalyticsv2ApplicationSnapshotOutputSchema>
  & z.output<typeof AwsKinesisanalyticsv2ApplicationSnapshotInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kinesisanalyticsv2_application_snapshot

export function AwsKinesisanalyticsv2ApplicationSnapshot(
  props: Partial<AwsKinesisanalyticsv2ApplicationSnapshotInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesisanalyticsv2_application_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKinesisanalyticsv2ApplicationSnapshotInputSchema}
      _outputSchema={AwsKinesisanalyticsv2ApplicationSnapshotOutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisanalyticsv2ApplicationSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKinesisanalyticsv2ApplicationSnapshotOutputProps>(
    AwsKinesisanalyticsv2ApplicationSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKinesisanalyticsv2ApplicationSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKinesisanalyticsv2ApplicationSnapshotOutputProps>(
    AwsKinesisanalyticsv2ApplicationSnapshot,
    idFilter,
    baseNode,
    optional,
  )
