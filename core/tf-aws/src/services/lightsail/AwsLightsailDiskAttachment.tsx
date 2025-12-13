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

export const InputSchema = z.object({
  disk_name: resolvableValue(z.string()),
  disk_path: resolvableValue(z.string()),
  instance_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_disk_attachment

export function AwsLightsailDiskAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_disk_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDiskAttachment = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsLightsailDiskAttachment, idFilter, baseNode)

export const useAwsLightsailDiskAttachments = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsLightsailDiskAttachment, idFilter, baseNode)
