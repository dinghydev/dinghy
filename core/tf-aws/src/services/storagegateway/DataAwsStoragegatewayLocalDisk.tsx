import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/storagegateway_local_disk

export const InputSchema = z.object({
  gateway_arn: resolvableValue(z.string()),
  disk_node: resolvableValue(z.string().optional()),
  disk_path: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  disk_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsStoragegatewayLocalDisk(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_local_disk'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsStoragegatewayLocalDisk = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsStoragegatewayLocalDisk, node, id)

export const useDataAwsStoragegatewayLocalDisks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsStoragegatewayLocalDisk, node, id)
