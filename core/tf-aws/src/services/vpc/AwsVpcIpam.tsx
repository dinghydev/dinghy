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

export const AwsVpcIpamInputSchema = TfMetaSchema.extend({
  operating_regions: resolvableValue(
    z.object({
      region_name: z.string(),
    }).array(),
  ),
  cascade: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  enable_private_gua: resolvableValue(z.boolean().optional()),
  metered_account: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tier: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcIpamOutputSchema = z.object({
  arn: z.string().optional(),
  default_resource_discovery_association_id: z.string().optional(),
  default_resource_discovery_id: z.string().optional(),
  id: z.string().optional(),
  private_default_scope_id: z.string().optional(),
  public_default_scope_id: z.string().optional(),
  scope_count: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpcIpamInputProps =
  & z.input<typeof AwsVpcIpamInputSchema>
  & NodeProps

export type AwsVpcIpamOutputProps =
  & z.output<typeof AwsVpcIpamOutputSchema>
  & z.output<typeof AwsVpcIpamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam

export function AwsVpcIpam(props: Partial<AwsVpcIpamInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamInputSchema}
      _outputSchema={AwsVpcIpamOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpam = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamOutputProps>(AwsVpcIpam, idFilter, baseNode, optional)

export const useAwsVpcIpams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamOutputProps>(AwsVpcIpam, idFilter, baseNode, optional)
