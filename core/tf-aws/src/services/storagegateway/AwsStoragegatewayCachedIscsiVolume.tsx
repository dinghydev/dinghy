import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_cached_iscsi_volume

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsStoragegatewayCachedIscsiVolume(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_cached_iscsi_volume'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayCachedIscsiVolume = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsStoragegatewayCachedIscsiVolume, node, id)

export const useAwsStoragegatewayCachedIscsiVolumes = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsStoragegatewayCachedIscsiVolume, node, id)
