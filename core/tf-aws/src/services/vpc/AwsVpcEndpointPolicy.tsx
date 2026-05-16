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

export const AwsVpcEndpointPolicyInputSchema = TfMetaSchema.extend({
  vpc_endpoint_id: resolvableValue(z.string()),
  policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcEndpointPolicyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVpcEndpointPolicyInputProps =
  & z.input<typeof AwsVpcEndpointPolicyInputSchema>
  & NodeProps

export type AwsVpcEndpointPolicyOutputProps =
  & z.output<typeof AwsVpcEndpointPolicyOutputSchema>
  & z.output<typeof AwsVpcEndpointPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_policy

export function AwsVpcEndpointPolicy(
  props: Partial<AwsVpcEndpointPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointPolicyInputSchema}
      _outputSchema={AwsVpcEndpointPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointPolicyOutputProps>(
    AwsVpcEndpointPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointPolicyOutputProps>(
    AwsVpcEndpointPolicy,
    idFilter,
    baseNode,
    optional,
  )
