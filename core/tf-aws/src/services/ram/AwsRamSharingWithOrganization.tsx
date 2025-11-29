import {
  camelCaseToWords,
  type NodeProps,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ram_sharing_with_organization

export const InputSchema = z.object({})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRamSharingWithOrganization(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ram_sharing_with_organization'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRamSharingWithOrganization = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRamSharingWithOrganization, node, id)

export const useAwsRamSharingWithOrganizations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRamSharingWithOrganization, node, id)
