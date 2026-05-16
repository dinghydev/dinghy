import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderInfrastructureConfiguration } from './AwsImagebuilderInfrastructureConfiguration.tsx'

export const DataAwsImagebuilderInfrastructureConfigurationInputSchema =
  TfMetaSchema.extend({
    arn: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsImagebuilderInfrastructureConfigurationOutputSchema = z
  .object({
    date_created: z.string().optional(),
    date_updated: z.string().optional(),
    description: z.string().optional(),
    instance_metadata_options: z.object({
      http_put_response_hop_limit: z.number(),
      http_tokens: z.string(),
    }).array().optional(),
    instance_profile_name: z.string().optional(),
    instance_types: z.set(z.string()).optional(),
    key_pair: z.string().optional(),
    logging: z.object({
      s3_logs: z.object({
        s3_bucket_name: z.string(),
        s3_key_prefix: z.string(),
      }).array(),
    }).array().optional(),
    name: z.string().optional(),
    placement: z.object({
      availability_zone: z.string(),
      host_id: z.string(),
      host_resource_group_arn: z.string(),
      tenancy: z.string(),
    }).array().optional(),
    resource_tags: z.record(z.string(), z.string()).optional(),
    security_group_ids: z.set(z.string()).optional(),
    sns_topic_arn: z.string().optional(),
    subnet_id: z.string().optional(),
    tags: z.record(z.string(), z.string()).optional(),
    terminate_instance_on_failure: z.boolean().optional(),
  })

export type DataAwsImagebuilderInfrastructureConfigurationInputProps =
  & z.input<typeof DataAwsImagebuilderInfrastructureConfigurationInputSchema>
  & NodeProps

export type DataAwsImagebuilderInfrastructureConfigurationOutputProps =
  & z.output<typeof DataAwsImagebuilderInfrastructureConfigurationOutputSchema>
  & z.output<typeof DataAwsImagebuilderInfrastructureConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_infrastructure_configuration

export function DataAwsImagebuilderInfrastructureConfiguration(
  props: Partial<DataAwsImagebuilderInfrastructureConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsImagebuilderInfrastructureConfiguration
      _type='aws_imagebuilder_infrastructure_configuration'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderInfrastructureConfigurationInputSchema}
      _outputSchema={DataAwsImagebuilderInfrastructureConfigurationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderInfrastructureConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsImagebuilderInfrastructureConfigurationOutputProps>(
    DataAwsImagebuilderInfrastructureConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsImagebuilderInfrastructureConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderInfrastructureConfigurationOutputProps>(
    DataAwsImagebuilderInfrastructureConfiguration,
    idFilter,
    baseNode,
    optional,
  )
