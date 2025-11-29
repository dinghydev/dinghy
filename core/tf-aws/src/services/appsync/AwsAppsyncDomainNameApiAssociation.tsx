import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appsync_domain_name_api_association

export const InputSchema = z.object({
  api_id: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
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

export function AwsAppsyncDomainNameApiAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appsync_domain_name_api_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppsyncDomainNameApiAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsAppsyncDomainNameApiAssociation, node, id)

export const useAwsAppsyncDomainNameApiAssociations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsAppsyncDomainNameApiAssociation, node, id)
