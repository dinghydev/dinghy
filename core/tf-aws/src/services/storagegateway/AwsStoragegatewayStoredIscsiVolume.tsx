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

export const AwsStoragegatewayStoredIscsiVolumeInputSchema = TfMetaSchema
  .extend({
    disk_id: resolvableValue(z.string()),
    gateway_arn: resolvableValue(z.string()),
    network_interface_id: resolvableValue(z.string()),
    preserve_existing_data: resolvableValue(z.boolean()),
    target_name: resolvableValue(z.string()),
    kms_encrypted: resolvableValue(z.boolean().optional()),
    kms_key: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    snapshot_id: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsStoragegatewayStoredIscsiVolumeOutputSchema = z.object({
  arn: z.string().optional(),
  chap_enabled: z.boolean().optional(),
  id: z.string().optional(),
  lun_number: z.number().optional(),
  network_interface_port: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  target_arn: z.string().optional(),
  volume_attachment_status: z.string().optional(),
  volume_id: z.string().optional(),
  volume_size_in_bytes: z.number().optional(),
  volume_status: z.string().optional(),
  volume_type: z.string().optional(),
})

export type AwsStoragegatewayStoredIscsiVolumeInputProps =
  & z.input<typeof AwsStoragegatewayStoredIscsiVolumeInputSchema>
  & NodeProps

export type AwsStoragegatewayStoredIscsiVolumeOutputProps =
  & z.output<typeof AwsStoragegatewayStoredIscsiVolumeOutputSchema>
  & z.output<typeof AwsStoragegatewayStoredIscsiVolumeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/storagegateway_stored_iscsi_volume

export function AwsStoragegatewayStoredIscsiVolume(
  props: Partial<AwsStoragegatewayStoredIscsiVolumeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_stored_iscsi_volume'
      _category='resource'
      _title={_title}
      _inputSchema={AwsStoragegatewayStoredIscsiVolumeInputSchema}
      _outputSchema={AwsStoragegatewayStoredIscsiVolumeOutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayStoredIscsiVolume = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsStoragegatewayStoredIscsiVolumeOutputProps>(
    AwsStoragegatewayStoredIscsiVolume,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewayStoredIscsiVolumes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsStoragegatewayStoredIscsiVolumeOutputProps>(
    AwsStoragegatewayStoredIscsiVolume,
    idFilter,
    baseNode,
    optional,
  )
