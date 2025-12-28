import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  ipam_ids: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  ipams: z.object({
    arn: z.string(),
    default_resource_discovery_association_id: z.string(),
    default_resource_discovery_id: z.string(),
    description: z.string(),
    enable_private_gua: z.boolean(),
    id: z.string(),
    ipam_region: z.string(),
    metered_account: z.string(),
    operating_regions: z.object({
      region_name: z.string(),
    }).array(),
    owner_id: z.string(),
    private_default_scope_id: z.string(),
    public_default_scope_id: z.string(),
    resource_discovery_association_count: z.number(),
    scope_count: z.number(),
    state: z.string(),
    state_message: z.string(),
    tier: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpc_ipams

export function DataAwsVpcIpams(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipams'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcIpamss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsVpcIpams, idFilter, baseNode, optional)
