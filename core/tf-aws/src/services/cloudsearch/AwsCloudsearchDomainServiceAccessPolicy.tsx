import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudsearch_domain_service_access_policy

export const InputSchema = z.object({
  access_policy: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudsearchDomainServiceAccessPolicy(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudsearch_domain_service_access_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudsearchDomainServiceAccessPolicy = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsCloudsearchDomainServiceAccessPolicy, node, id)

export const useAwsCloudsearchDomainServiceAccessPolicys = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsCloudsearchDomainServiceAccessPolicy, node, id)
