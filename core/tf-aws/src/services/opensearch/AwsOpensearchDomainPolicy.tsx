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

export const AwsOpensearchDomainPolicyInputSchema = TfMetaSchema.extend({
  access_policies: resolvableValue(z.string()),
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

export const AwsOpensearchDomainPolicyOutputSchema = z.object({})

export type AwsOpensearchDomainPolicyInputProps =
  & z.input<typeof AwsOpensearchDomainPolicyInputSchema>
  & NodeProps

export type AwsOpensearchDomainPolicyOutputProps =
  & z.output<typeof AwsOpensearchDomainPolicyOutputSchema>
  & z.output<typeof AwsOpensearchDomainPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearch_domain_policy

export function AwsOpensearchDomainPolicy(
  props: Partial<AwsOpensearchDomainPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_domain_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchDomainPolicyInputSchema}
      _outputSchema={AwsOpensearchDomainPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchDomainPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchDomainPolicyOutputProps>(
    AwsOpensearchDomainPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchDomainPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchDomainPolicyOutputProps>(
    AwsOpensearchDomainPolicy,
    idFilter,
    baseNode,
    optional,
  )
