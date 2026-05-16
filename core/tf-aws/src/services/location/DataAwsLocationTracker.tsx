import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationTracker } from './AwsLocationTracker.tsx'

export const DataAwsLocationTrackerInputSchema = TfMetaSchema.extend({
  tracker_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLocationTrackerOutputSchema = z.object({
  create_time: z.string().optional(),
  description: z.string().optional(),
  kms_key_id: z.string().optional(),
  position_filtering: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tracker_arn: z.string().optional(),
  update_time: z.string().optional(),
})

export type DataAwsLocationTrackerInputProps =
  & z.input<typeof DataAwsLocationTrackerInputSchema>
  & NodeProps

export type DataAwsLocationTrackerOutputProps =
  & z.output<typeof DataAwsLocationTrackerOutputSchema>
  & z.output<typeof DataAwsLocationTrackerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/location_tracker

export function DataAwsLocationTracker(
  props: Partial<DataAwsLocationTrackerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLocationTracker
      _type='aws_location_tracker'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLocationTrackerInputSchema}
      _outputSchema={DataAwsLocationTrackerOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationTracker = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLocationTrackerOutputProps>(
    DataAwsLocationTracker,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLocationTrackers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLocationTrackerOutputProps>(
    DataAwsLocationTracker,
    idFilter,
    baseNode,
    optional,
  )
