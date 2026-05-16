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

export const AwsVpcIpamScopeInputSchema = TfMetaSchema.extend({
  ipam_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcIpamScopeOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ipam_arn: z.string().optional(),
  ipam_scope_type: z.string().optional(),
  is_default: z.boolean().optional(),
  pool_count: z.number().optional(),
})

export type AwsVpcIpamScopeInputProps =
  & z.input<typeof AwsVpcIpamScopeInputSchema>
  & NodeProps

export type AwsVpcIpamScopeOutputProps =
  & z.output<typeof AwsVpcIpamScopeOutputSchema>
  & z.output<typeof AwsVpcIpamScopeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_scope

export function AwsVpcIpamScope(props: Partial<AwsVpcIpamScopeInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_scope'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamScopeInputSchema}
      _outputSchema={AwsVpcIpamScopeOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamScope = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamScopeOutputProps>(
    AwsVpcIpamScope,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpamScopes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamScopeOutputProps>(
    AwsVpcIpamScope,
    idFilter,
    baseNode,
    optional,
  )
