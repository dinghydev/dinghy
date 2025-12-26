import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcIpamPreviewNextCidr } from './AwsVpcIpamPreviewNextCidr.tsx'

export const InputSchema = z.object({
  ipam_pool_id: resolvableValue(z.string()),
  disallowed_cidrs: resolvableValue(z.string().array().optional()),
  netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpc_ipam_preview_next_cidr

export function DataAwsVpcIpamPreviewNextCidr(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsVpcIpamPreviewNextCidr
      _type='aws_vpc_ipam_preview_next_cidr'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcIpamPreviewNextCidr = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsVpcIpamPreviewNextCidr,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpcIpamPreviewNextCidrs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsVpcIpamPreviewNextCidr,
    idFilter,
    baseNode,
    optional,
  )
