import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsOpensearchAuthorizeVpcEndpointAccessInputSchema = TfMetaSchema
  .extend({
    account: resolvableValue(z.string()),
    domain_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsOpensearchAuthorizeVpcEndpointAccessOutputSchema = z.object({
  authorized_principal: z.object({
    principal: z.string(),
    principal_type: z.string(),
  }).array().optional(),
})

export type AwsOpensearchAuthorizeVpcEndpointAccessInputProps =
  & z.input<typeof AwsOpensearchAuthorizeVpcEndpointAccessInputSchema>
  & NodeProps

export type AwsOpensearchAuthorizeVpcEndpointAccessOutputProps =
  & z.output<typeof AwsOpensearchAuthorizeVpcEndpointAccessOutputSchema>
  & z.output<typeof AwsOpensearchAuthorizeVpcEndpointAccessInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearch_authorize_vpc_endpoint_access

export function AwsOpensearchAuthorizeVpcEndpointAccess(
  props: Partial<AwsOpensearchAuthorizeVpcEndpointAccessInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_authorize_vpc_endpoint_access'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchAuthorizeVpcEndpointAccessInputSchema}
      _outputSchema={AwsOpensearchAuthorizeVpcEndpointAccessOutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchAuthorizeVpcEndpointAccesss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchAuthorizeVpcEndpointAccessOutputProps>(
    AwsOpensearchAuthorizeVpcEndpointAccess,
    idFilter,
    baseNode,
    optional,
  )
