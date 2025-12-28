import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcIpam } from './AwsVpcIpam.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  default_resource_discovery_association_id: z.string().optional(),
  default_resource_discovery_id: z.string().optional(),
  description: z.string().optional(),
  enable_private_gua: z.boolean().optional(),
  id: z.string().optional(),
  ipam_region: z.string().optional(),
  metered_account: z.string().optional(),
  operating_regions: z.object({
    region_name: z.string(),
  }).array().optional(),
  owner_id: z.string().optional(),
  private_default_scope_id: z.string().optional(),
  public_default_scope_id: z.string().optional(),
  resource_discovery_association_count: z.number().optional(),
  scope_count: z.number().optional(),
  state: z.string().optional(),
  state_message: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tier: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpc_ipam

export function DataAwsVpcIpam(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpcIpam
      _type='aws_vpc_ipam'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcIpam = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsVpcIpam, idFilter, baseNode, optional)

export const useDataAwsVpcIpams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsVpcIpam, idFilter, baseNode, optional)
