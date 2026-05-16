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

export const AwsEc2NetworkInsightsAccessScopeInputSchema = TfMetaSchema.extend({
  exclude_paths: resolvableValue(
    z.object({
      destination: z.object({
        packet_header_statement: z.object({
          destination_addresses: z.string().array().optional(),
          destination_ports: z.string().array().optional(),
          destination_prefix_lists: z.string().array().optional(),
          protocols: z.string().array().optional(),
          source_addresses: z.string().array().optional(),
          source_ports: z.string().array().optional(),
          source_prefix_lists: z.string().array().optional(),
        }).array().optional(),
        resource_statement: z.object({
          resource_types: z.string().array().optional(),
          resources: z.string().array().optional(),
        }).array().optional(),
      }).array().optional(),
      source: z.object({
        packet_header_statement: z.object({
          destination_addresses: z.string().array().optional(),
          destination_ports: z.string().array().optional(),
          destination_prefix_lists: z.string().array().optional(),
          protocols: z.string().array().optional(),
          source_addresses: z.string().array().optional(),
          source_ports: z.string().array().optional(),
          source_prefix_lists: z.string().array().optional(),
        }).array().optional(),
        resource_statement: z.object({
          resource_types: z.string().array().optional(),
          resources: z.string().array().optional(),
        }).array().optional(),
      }).array().optional(),
      through_resources: z.object({
        resource_statement: z.object({
          resource_types: z.string().array().optional(),
          resources: z.string().array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  match_paths: resolvableValue(
    z.object({
      destination: z.object({
        packet_header_statement: z.object({
          destination_addresses: z.string().array().optional(),
          destination_ports: z.string().array().optional(),
          destination_prefix_lists: z.string().array().optional(),
          protocols: z.string().array().optional(),
          source_addresses: z.string().array().optional(),
          source_ports: z.string().array().optional(),
          source_prefix_lists: z.string().array().optional(),
        }).array().optional(),
        resource_statement: z.object({
          resource_types: z.string().array().optional(),
          resources: z.string().array().optional(),
        }).array().optional(),
      }).array().optional(),
      source: z.object({
        packet_header_statement: z.object({
          destination_addresses: z.string().array().optional(),
          destination_ports: z.string().array().optional(),
          destination_prefix_lists: z.string().array().optional(),
          protocols: z.string().array().optional(),
          source_addresses: z.string().array().optional(),
          source_ports: z.string().array().optional(),
          source_prefix_lists: z.string().array().optional(),
        }).array().optional(),
        resource_statement: z.object({
          resource_types: z.string().array().optional(),
          resources: z.string().array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2NetworkInsightsAccessScopeOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEc2NetworkInsightsAccessScopeImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEc2NetworkInsightsAccessScopeInputProps =
  & z.input<typeof AwsEc2NetworkInsightsAccessScopeInputSchema>
  & z.input<typeof AwsEc2NetworkInsightsAccessScopeImportSchema>
  & NodeProps

export type AwsEc2NetworkInsightsAccessScopeOutputProps =
  & z.output<typeof AwsEc2NetworkInsightsAccessScopeOutputSchema>
  & z.output<typeof AwsEc2NetworkInsightsAccessScopeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_network_insights_access_scope

export function AwsEc2NetworkInsightsAccessScope(
  props: Partial<AwsEc2NetworkInsightsAccessScopeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_network_insights_access_scope'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2NetworkInsightsAccessScopeInputSchema}
      _outputSchema={AwsEc2NetworkInsightsAccessScopeOutputSchema}
      _importSchema={AwsEc2NetworkInsightsAccessScopeImportSchema}
      {...props}
    />
  )
}

export const useAwsEc2NetworkInsightsAccessScope = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2NetworkInsightsAccessScopeOutputProps>(
    AwsEc2NetworkInsightsAccessScope,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2NetworkInsightsAccessScopes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2NetworkInsightsAccessScopeOutputProps>(
    AwsEc2NetworkInsightsAccessScope,
    idFilter,
    baseNode,
    optional,
  )
