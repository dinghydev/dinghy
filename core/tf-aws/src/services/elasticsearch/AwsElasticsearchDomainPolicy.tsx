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

export const AwsElasticsearchDomainPolicyInputSchema = TfMetaSchema.extend({
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

export const AwsElasticsearchDomainPolicyOutputSchema = z.object({})

export type AwsElasticsearchDomainPolicyInputProps =
  & z.input<typeof AwsElasticsearchDomainPolicyInputSchema>
  & NodeProps

export type AwsElasticsearchDomainPolicyOutputProps =
  & z.output<typeof AwsElasticsearchDomainPolicyOutputSchema>
  & z.output<typeof AwsElasticsearchDomainPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticsearch_domain_policy

export function AwsElasticsearchDomainPolicy(
  props: Partial<AwsElasticsearchDomainPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticsearch_domain_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticsearchDomainPolicyInputSchema}
      _outputSchema={AwsElasticsearchDomainPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticsearchDomainPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticsearchDomainPolicyOutputProps>(
    AwsElasticsearchDomainPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticsearchDomainPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticsearchDomainPolicyOutputProps>(
    AwsElasticsearchDomainPolicy,
    idFilter,
    baseNode,
    optional,
  )
