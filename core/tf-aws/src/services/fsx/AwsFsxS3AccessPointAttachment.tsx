import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fsx_s3_access_point_attachment

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  openzfs_configuration: resolvableValue(
    z.object({
      volume_id: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  s3_access_point: resolvableValue(
    z.object({
      policy: z.string().optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  s3_access_point_alias: z.string().optional(),
  s3_access_point_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsFsxS3AccessPointAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_s3_access_point_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxS3AccessPointAttachment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsFsxS3AccessPointAttachment, node, id)

export const useAwsFsxS3AccessPointAttachments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsFsxS3AccessPointAttachment, node, id)
