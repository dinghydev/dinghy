import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_endpoint_service_allowed_principal

export const InputSchema = z.object({
  principal_arn: resolvableValue(z.string()),
  vpc_endpoint_service_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcEndpointServiceAllowedPrincipal(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_service_allowed_principal'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointServiceAllowedPrincipal = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsVpcEndpointServiceAllowedPrincipal, node, id)

export const useAwsVpcEndpointServiceAllowedPrincipals = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsVpcEndpointServiceAllowedPrincipal, node, id)
