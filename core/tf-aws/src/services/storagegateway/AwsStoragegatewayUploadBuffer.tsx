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

export const AwsStoragegatewayUploadBufferInputSchema = TfMetaSchema.extend({
  gateway_arn: resolvableValue(z.string()),
  disk_id: resolvableValue(z.string().optional()),
  disk_path: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsStoragegatewayUploadBufferOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsStoragegatewayUploadBufferInputProps =
  & z.input<typeof AwsStoragegatewayUploadBufferInputSchema>
  & NodeProps

export type AwsStoragegatewayUploadBufferOutputProps =
  & z.output<typeof AwsStoragegatewayUploadBufferOutputSchema>
  & z.output<typeof AwsStoragegatewayUploadBufferInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/storagegateway_upload_buffer

export function AwsStoragegatewayUploadBuffer(
  props: Partial<AwsStoragegatewayUploadBufferInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_storagegateway_upload_buffer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsStoragegatewayUploadBufferInputSchema}
      _outputSchema={AwsStoragegatewayUploadBufferOutputSchema}
      {...props}
    />
  )
}

export const useAwsStoragegatewayUploadBuffer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsStoragegatewayUploadBufferOutputProps>(
    AwsStoragegatewayUploadBuffer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsStoragegatewayUploadBuffers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsStoragegatewayUploadBufferOutputProps>(
    AwsStoragegatewayUploadBuffer,
    idFilter,
    baseNode,
    optional,
  )
