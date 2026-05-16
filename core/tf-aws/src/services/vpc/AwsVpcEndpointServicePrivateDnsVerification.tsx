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

export const AwsVpcEndpointServicePrivateDnsVerificationInputSchema =
  TfMetaSchema.extend({
    service_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
      }).optional(),
    ),
    wait_for_verification: resolvableValue(z.boolean().optional()),
  })

export const AwsVpcEndpointServicePrivateDnsVerificationOutputSchema = z.object(
  {},
)

export type AwsVpcEndpointServicePrivateDnsVerificationInputProps =
  & z.input<typeof AwsVpcEndpointServicePrivateDnsVerificationInputSchema>
  & NodeProps

export type AwsVpcEndpointServicePrivateDnsVerificationOutputProps =
  & z.output<typeof AwsVpcEndpointServicePrivateDnsVerificationOutputSchema>
  & z.output<typeof AwsVpcEndpointServicePrivateDnsVerificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_service_private_dns_verification

export function AwsVpcEndpointServicePrivateDnsVerification(
  props: Partial<AwsVpcEndpointServicePrivateDnsVerificationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_service_private_dns_verification'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointServicePrivateDnsVerificationInputSchema}
      _outputSchema={AwsVpcEndpointServicePrivateDnsVerificationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointServicePrivateDnsVerification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointServicePrivateDnsVerificationOutputProps>(
    AwsVpcEndpointServicePrivateDnsVerification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointServicePrivateDnsVerifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointServicePrivateDnsVerificationOutputProps>(
    AwsVpcEndpointServicePrivateDnsVerification,
    idFilter,
    baseNode,
    optional,
  )
