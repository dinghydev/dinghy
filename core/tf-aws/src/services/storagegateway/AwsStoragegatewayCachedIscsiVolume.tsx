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

export const AwsStoragegatewayCachedIscsiVolumeInputSchema = TfMetaSchema
  .extend({
    gateway_arn: resolvableValue(z.string()),
    network_interface_id: resolvableValue(z.string()),
    target_name: resolvableValue(z.string()),
    volume_size_in_bytes: resolvableValue(z.number()),
    kms_encrypted: resolvableValue(z.boolean().optional()),
    kms_key: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    snapshot_id: resolvableValue(z.string().optional()),
    source_volume_arn: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsStoragegatewayCachedIscsiVolumeOutputSchema = z.object({
  arn: z.string().optional(),
  chap_enabled: z.boolean().optional(),
  id: z.string().optional(),
  lun_number: z.number().optional(),
  network_interface_port: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  target_arn: z.string().optional(),
  volume_arn: z.string().optional(),
  volume_id: z.string().optional(),
})

export type AwsStoragegatewayCachedIscsiVolumeInputProps =
  & z.input<typeof AwsStoragegatewayCachedIscsiVolumeInputSchema>
  & NodeProps

export type AwsStoragegatewayCachedIscsiVolumeOutputProps =
  & z.output<typeof AwsStoragegatewayCachedIscsiVolumeOutputSchema>
  & z.output<typeof AwsStoragegatewayCachedIscsiVolumeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/storagegateway_cached_iscsi_volume

export function AwsStoragegatewayCachedIscsiVolume(
  props: Partial<AwsStoragegatewayCachedIscsiVolumeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_cached_iscsi_volume'
      _category='resource'
      _title={_title}
      _inputSchema={AwsStoragegatewayCachedIscsiVolumeInputSchema}
      _outputSchema={AwsStoragegatewayCachedIscsiVolumeOutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayCachedIscsiVolume = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsStoragegatewayCachedIscsiVolumeOutputProps>(
    AwsStoragegatewayCachedIscsiVolume,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewayCachedIscsiVolumes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsStoragegatewayCachedIscsiVolumeOutputProps>(
    AwsStoragegatewayCachedIscsiVolume,
    idFilter,
    baseNode,
    optional,
  )
