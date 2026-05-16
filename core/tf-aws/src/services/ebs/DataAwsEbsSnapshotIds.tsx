import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEbsSnapshotIdsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  owners: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  restorable_by_user_ids: resolvableValue(z.string().array().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsEbsSnapshotIdsOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsEbsSnapshotIdsInputProps =
  & z.input<typeof DataAwsEbsSnapshotIdsInputSchema>
  & NodeProps

export type DataAwsEbsSnapshotIdsOutputProps =
  & z.output<typeof DataAwsEbsSnapshotIdsOutputSchema>
  & z.output<typeof DataAwsEbsSnapshotIdsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ebs_snapshot_ids

export function DataAwsEbsSnapshotIds(
  props: Partial<DataAwsEbsSnapshotIdsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_snapshot_ids'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEbsSnapshotIdsInputSchema}
      _outputSchema={DataAwsEbsSnapshotIdsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEbsSnapshotIdss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEbsSnapshotIdsOutputProps>(
    DataAwsEbsSnapshotIds,
    idFilter,
    baseNode,
    optional,
  )
