import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_stored_iscsi_volume

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsStoragegatewayStoredIscsiVolume(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_stored_iscsi_volume'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayStoredIscsiVolume = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsStoragegatewayStoredIscsiVolume, node, id)

export const useAwsStoragegatewayStoredIscsiVolumes = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsStoragegatewayStoredIscsiVolume, node, id)
