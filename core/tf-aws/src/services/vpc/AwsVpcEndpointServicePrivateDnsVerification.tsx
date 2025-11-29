import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_endpoint_service_private_dns_verification

export const InputSchema = z.object({
  service_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  wait_for_verification: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcEndpointServicePrivateDnsVerification(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_service_private_dns_verification'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointServicePrivateDnsVerification = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsVpcEndpointServicePrivateDnsVerification,
    node,
    id,
  )

export const useAwsVpcEndpointServicePrivateDnsVerifications = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsVpcEndpointServicePrivateDnsVerification,
    node,
    id,
  )
