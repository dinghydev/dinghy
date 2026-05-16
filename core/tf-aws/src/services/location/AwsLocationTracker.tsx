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

export const AwsLocationTrackerInputSchema = TfMetaSchema.extend({
  tracker_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  position_filtering: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsLocationTrackerOutputSchema = z.object({
  create_time: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  tracker_arn: z.string().optional(),
  update_time: z.string().optional(),
})

export type AwsLocationTrackerInputProps =
  & z.input<typeof AwsLocationTrackerInputSchema>
  & NodeProps

export type AwsLocationTrackerOutputProps =
  & z.output<typeof AwsLocationTrackerOutputSchema>
  & z.output<typeof AwsLocationTrackerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/location_tracker

export function AwsLocationTracker(
  props: Partial<AwsLocationTrackerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_tracker'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLocationTrackerInputSchema}
      _outputSchema={AwsLocationTrackerOutputSchema}
      {...props}
    />
  )
}

export const useAwsLocationTracker = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLocationTrackerOutputProps>(
    AwsLocationTracker,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLocationTrackers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLocationTrackerOutputProps>(
    AwsLocationTracker,
    idFilter,
    baseNode,
    optional,
  )
