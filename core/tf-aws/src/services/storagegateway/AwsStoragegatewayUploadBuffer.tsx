import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/storagegateway_upload_buffer

export const InputSchema = z.object({
  gateway_arn: resolvableValue(z.string()),
  disk_id: resolvableValue(z.string().optional()),
  disk_path: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsStoragegatewayUploadBuffer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_upload_buffer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayUploadBuffer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsStoragegatewayUploadBuffer, node, id)

export const useAwsStoragegatewayUploadBuffers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsStoragegatewayUploadBuffer, node, id)
