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

export const AwsVpcIpamPreviewNextCidrInputSchema = TfMetaSchema.extend({
  ipam_pool_id: resolvableValue(z.string()),
  disallowed_cidrs: resolvableValue(z.string().array().optional()),
  netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpcIpamPreviewNextCidrOutputSchema = z.object({
  cidr: z.string().optional(),
  id: z.string().optional(),
})

export type AwsVpcIpamPreviewNextCidrInputProps =
  & z.input<typeof AwsVpcIpamPreviewNextCidrInputSchema>
  & NodeProps

export type AwsVpcIpamPreviewNextCidrOutputProps =
  & z.output<typeof AwsVpcIpamPreviewNextCidrOutputSchema>
  & z.output<typeof AwsVpcIpamPreviewNextCidrInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_preview_next_cidr

export function AwsVpcIpamPreviewNextCidr(
  props: Partial<AwsVpcIpamPreviewNextCidrInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_preview_next_cidr'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamPreviewNextCidrInputSchema}
      _outputSchema={AwsVpcIpamPreviewNextCidrOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamPreviewNextCidr = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamPreviewNextCidrOutputProps>(
    AwsVpcIpamPreviewNextCidr,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpamPreviewNextCidrs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamPreviewNextCidrOutputProps>(
    AwsVpcIpamPreviewNextCidr,
    idFilter,
    baseNode,
    optional,
  )
