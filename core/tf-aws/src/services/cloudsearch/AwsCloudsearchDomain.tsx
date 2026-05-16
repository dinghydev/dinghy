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

export const AwsCloudsearchDomainInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  endpoint_options: resolvableValue(
    z.object({
      enforce_https: z.boolean().optional(),
      tls_security_policy: z.string().optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  index_field: resolvableValue(
    z.object({
      analysis_scheme: z.string().optional(),
      default_value: z.string().optional(),
      facet: z.boolean().optional(),
      highlight: z.boolean().optional(),
      name: z.string(),
      return: z.boolean().optional(),
      search: z.boolean().optional(),
      sort: z.boolean().optional(),
      source_fields: z.string().optional(),
      type: z.string(),
    }).array().optional(),
  ),
  multi_az: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  scaling_parameters: resolvableValue(
    z.object({
      desired_instance_type: z.string().optional(),
      desired_partition_count: z.number().optional(),
      desired_replication_count: z.number().optional(),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsCloudsearchDomainOutputSchema = z.object({
  arn: z.string().optional(),
  document_service_endpoint: z.string().optional(),
  domain_id: z.string().optional(),
  search_service_endpoint: z.string().optional(),
})

export type AwsCloudsearchDomainInputProps =
  & z.input<typeof AwsCloudsearchDomainInputSchema>
  & NodeProps

export type AwsCloudsearchDomainOutputProps =
  & z.output<typeof AwsCloudsearchDomainOutputSchema>
  & z.output<typeof AwsCloudsearchDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudsearch_domain

export function AwsCloudsearchDomain(
  props: Partial<AwsCloudsearchDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudsearch_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudsearchDomainInputSchema}
      _outputSchema={AwsCloudsearchDomainOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudsearchDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudsearchDomainOutputProps>(
    AwsCloudsearchDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudsearchDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudsearchDomainOutputProps>(
    AwsCloudsearchDomain,
    idFilter,
    baseNode,
    optional,
  )
