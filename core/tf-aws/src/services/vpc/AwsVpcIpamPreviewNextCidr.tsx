import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_ipam_preview_next_cidr

export const InputSchema = z.object({
  ipam_pool_id: resolvableValue(z.string()),
  disallowed_cidrs: resolvableValue(z.string().array().optional()),
  netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  cidr: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcIpamPreviewNextCidr(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_preview_next_cidr'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamPreviewNextCidr = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcIpamPreviewNextCidr, node, id)

export const useAwsVpcIpamPreviewNextCidrs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcIpamPreviewNextCidr, node, id)
