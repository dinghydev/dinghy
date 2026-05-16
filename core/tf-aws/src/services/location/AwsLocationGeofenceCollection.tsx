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

export const AwsLocationGeofenceCollectionInputSchema = TfMetaSchema.extend({
  collection_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsLocationGeofenceCollectionOutputSchema = z.object({
  collection_arn: z.string().optional(),
  create_time: z.string().optional(),
  update_time: z.string().optional(),
})

export type AwsLocationGeofenceCollectionInputProps =
  & z.input<typeof AwsLocationGeofenceCollectionInputSchema>
  & NodeProps

export type AwsLocationGeofenceCollectionOutputProps =
  & z.output<typeof AwsLocationGeofenceCollectionOutputSchema>
  & z.output<typeof AwsLocationGeofenceCollectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/location_geofence_collection

export function AwsLocationGeofenceCollection(
  props: Partial<AwsLocationGeofenceCollectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_location_geofence_collection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLocationGeofenceCollectionInputSchema}
      _outputSchema={AwsLocationGeofenceCollectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsLocationGeofenceCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLocationGeofenceCollectionOutputProps>(
    AwsLocationGeofenceCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLocationGeofenceCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLocationGeofenceCollectionOutputProps>(
    AwsLocationGeofenceCollection,
    idFilter,
    baseNode,
    optional,
  )
