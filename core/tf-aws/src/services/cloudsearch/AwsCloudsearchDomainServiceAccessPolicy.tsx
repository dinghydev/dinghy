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

export const AwsCloudsearchDomainServiceAccessPolicyInputSchema = TfMetaSchema
  .extend({
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

export const AwsCloudsearchDomainServiceAccessPolicyOutputSchema = z.object({})

export type AwsCloudsearchDomainServiceAccessPolicyInputProps =
  & z.input<typeof AwsCloudsearchDomainServiceAccessPolicyInputSchema>
  & NodeProps

export type AwsCloudsearchDomainServiceAccessPolicyOutputProps =
  & z.output<typeof AwsCloudsearchDomainServiceAccessPolicyOutputSchema>
  & z.output<typeof AwsCloudsearchDomainServiceAccessPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudsearch_domain_service_access_policy

export function AwsCloudsearchDomainServiceAccessPolicy(
  props: Partial<AwsCloudsearchDomainServiceAccessPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudsearch_domain_service_access_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudsearchDomainServiceAccessPolicyInputSchema}
      _outputSchema={AwsCloudsearchDomainServiceAccessPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudsearchDomainServiceAccessPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudsearchDomainServiceAccessPolicyOutputProps>(
    AwsCloudsearchDomainServiceAccessPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudsearchDomainServiceAccessPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudsearchDomainServiceAccessPolicyOutputProps>(
    AwsCloudsearchDomainServiceAccessPolicy,
    idFilter,
    baseNode,
    optional,
  )
