import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/api_gateway_domain_name_access_association

export const InputSchema = z.object({
  access_association_source: resolvableValue(z.string()),
  access_association_source_type: resolvableValue(z.string()),
  domain_name_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApiGatewayDomainNameAccessAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_api_gateway_domain_name_access_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsApiGatewayDomainNameAccessAssociation = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsApiGatewayDomainNameAccessAssociation, node, id)

export const useAwsApiGatewayDomainNameAccessAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsApiGatewayDomainNameAccessAssociation, node, id)
