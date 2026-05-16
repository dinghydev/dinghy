import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsLocationTrackerAssociationsInputSchema = TfMetaSchema
  .extend({
    tracker_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsLocationTrackerAssociationsOutputSchema = z.object({
  consumer_arns: z.set(z.string()).optional(),
})

export type DataAwsLocationTrackerAssociationsInputProps =
  & z.input<typeof DataAwsLocationTrackerAssociationsInputSchema>
  & NodeProps

export type DataAwsLocationTrackerAssociationsOutputProps =
  & z.output<typeof DataAwsLocationTrackerAssociationsOutputSchema>
  & z.output<typeof DataAwsLocationTrackerAssociationsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/location_tracker_associations

export function DataAwsLocationTrackerAssociations(
  props: Partial<DataAwsLocationTrackerAssociationsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_tracker_associations'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLocationTrackerAssociationsInputSchema}
      _outputSchema={DataAwsLocationTrackerAssociationsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsLocationTrackerAssociationss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLocationTrackerAssociationsOutputProps>(
    DataAwsLocationTrackerAssociations,
    idFilter,
    baseNode,
    optional,
  )
