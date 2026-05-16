import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationGeofenceCollection } from './AwsLocationGeofenceCollection.tsx'

export const DataAwsLocationGeofenceCollectionInputSchema = TfMetaSchema.extend(
  {
    collection_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const DataAwsLocationGeofenceCollectionOutputSchema = z.object({
  collection_arn: z.string().optional(),
  create_time: z.string().optional(),
  description: z.string().optional(),
  kms_key_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type DataAwsLocationGeofenceCollectionInputProps =
  & z.input<typeof DataAwsLocationGeofenceCollectionInputSchema>
  & NodeProps

export type DataAwsLocationGeofenceCollectionOutputProps =
  & z.output<typeof DataAwsLocationGeofenceCollectionOutputSchema>
  & z.output<typeof DataAwsLocationGeofenceCollectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/location_geofence_collection

export function DataAwsLocationGeofenceCollection(
  props: Partial<DataAwsLocationGeofenceCollectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLocationGeofenceCollection
      _type='aws_location_geofence_collection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLocationGeofenceCollectionInputSchema}
      _outputSchema={DataAwsLocationGeofenceCollectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationGeofenceCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLocationGeofenceCollectionOutputProps>(
    DataAwsLocationGeofenceCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLocationGeofenceCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLocationGeofenceCollectionOutputProps>(
    DataAwsLocationGeofenceCollection,
    idFilter,
    baseNode,
    optional,
  )
