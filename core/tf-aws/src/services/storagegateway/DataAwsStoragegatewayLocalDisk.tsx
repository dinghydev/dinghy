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

export const DataAwsStoragegatewayLocalDiskInputSchema = TfMetaSchema.extend({
  gateway_arn: resolvableValue(z.string()),
  disk_node: resolvableValue(z.string().optional()),
  disk_path: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsStoragegatewayLocalDiskOutputSchema = z.object({
  disk_id: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsStoragegatewayLocalDiskInputProps =
  & z.input<typeof DataAwsStoragegatewayLocalDiskInputSchema>
  & NodeProps

export type DataAwsStoragegatewayLocalDiskOutputProps =
  & z.output<typeof DataAwsStoragegatewayLocalDiskOutputSchema>
  & z.output<typeof DataAwsStoragegatewayLocalDiskInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/storagegateway_local_disk

export function DataAwsStoragegatewayLocalDisk(
  props: Partial<DataAwsStoragegatewayLocalDiskInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_local_disk'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsStoragegatewayLocalDiskInputSchema}
      _outputSchema={DataAwsStoragegatewayLocalDiskOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsStoragegatewayLocalDisk = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsStoragegatewayLocalDiskOutputProps>(
    DataAwsStoragegatewayLocalDisk,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsStoragegatewayLocalDisks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsStoragegatewayLocalDiskOutputProps>(
    DataAwsStoragegatewayLocalDisk,
    idFilter,
    baseNode,
    optional,
  )
