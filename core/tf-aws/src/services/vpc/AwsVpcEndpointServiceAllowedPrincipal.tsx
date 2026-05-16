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

export const AwsVpcEndpointServiceAllowedPrincipalInputSchema = TfMetaSchema
  .extend({
    principal_arn: resolvableValue(z.string()),
    vpc_endpoint_service_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsVpcEndpointServiceAllowedPrincipalOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVpcEndpointServiceAllowedPrincipalInputProps =
  & z.input<typeof AwsVpcEndpointServiceAllowedPrincipalInputSchema>
  & NodeProps

export type AwsVpcEndpointServiceAllowedPrincipalOutputProps =
  & z.output<typeof AwsVpcEndpointServiceAllowedPrincipalOutputSchema>
  & z.output<typeof AwsVpcEndpointServiceAllowedPrincipalInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_service_allowed_principal

export function AwsVpcEndpointServiceAllowedPrincipal(
  props: Partial<AwsVpcEndpointServiceAllowedPrincipalInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_service_allowed_principal'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointServiceAllowedPrincipalInputSchema}
      _outputSchema={AwsVpcEndpointServiceAllowedPrincipalOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointServiceAllowedPrincipal = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointServiceAllowedPrincipalOutputProps>(
    AwsVpcEndpointServiceAllowedPrincipal,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointServiceAllowedPrincipals = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointServiceAllowedPrincipalOutputProps>(
    AwsVpcEndpointServiceAllowedPrincipal,
    idFilter,
    baseNode,
    optional,
  )
