import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationTrackerAssociation } from './AwsLocationTrackerAssociation.tsx'

export const DataAwsLocationTrackerAssociationInputSchema = TfMetaSchema.extend(
  {
    consumer_arn: resolvableValue(z.string()),
    tracker_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const DataAwsLocationTrackerAssociationOutputSchema = z.object({})

export type DataAwsLocationTrackerAssociationInputProps =
  & z.input<typeof DataAwsLocationTrackerAssociationInputSchema>
  & NodeProps

export type DataAwsLocationTrackerAssociationOutputProps =
  & z.output<typeof DataAwsLocationTrackerAssociationOutputSchema>
  & z.output<typeof DataAwsLocationTrackerAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/location_tracker_association

export function DataAwsLocationTrackerAssociation(
  props: Partial<DataAwsLocationTrackerAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLocationTrackerAssociation
      _type='aws_location_tracker_association'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLocationTrackerAssociationInputSchema}
      _outputSchema={DataAwsLocationTrackerAssociationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationTrackerAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLocationTrackerAssociationOutputProps>(
    DataAwsLocationTrackerAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLocationTrackerAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLocationTrackerAssociationOutputProps>(
    DataAwsLocationTrackerAssociation,
    idFilter,
    baseNode,
    optional,
  )
