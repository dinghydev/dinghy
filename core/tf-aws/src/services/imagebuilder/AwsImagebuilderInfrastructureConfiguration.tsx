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

export const AwsImagebuilderInfrastructureConfigurationInputSchema =
  TfMetaSchema.extend({
    instance_profile_name: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    instance_metadata_options: resolvableValue(
      z.object({
        http_put_response_hop_limit: z.number().optional(),
        http_tokens: z.string().optional(),
      }).optional(),
    ),
    instance_types: resolvableValue(z.string().array().optional()),
    key_pair: resolvableValue(z.string().optional()),
    logging: resolvableValue(
      z.object({
        s3_logs: z.object({
          s3_bucket_name: z.string(),
          s3_key_prefix: z.string().optional(),
        }),
      }).optional(),
    ),
    placement: resolvableValue(
      z.object({
        availability_zone: z.string().optional(),
        host_id: z.string().optional(),
        host_resource_group_arn: z.string().optional(),
        tenancy: z.string().optional(),
      }).optional(),
    ),
    region: resolvableValue(z.string().optional()),
    resource_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    security_group_ids: resolvableValue(z.string().array().optional()),
    sns_topic_arn: resolvableValue(z.string().optional()),
    subnet_id: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    terminate_instance_on_failure: resolvableValue(z.boolean().optional()),
  })

export const AwsImagebuilderInfrastructureConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  date_updated: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsImagebuilderInfrastructureConfigurationImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsImagebuilderInfrastructureConfigurationInputProps =
  & z.input<typeof AwsImagebuilderInfrastructureConfigurationInputSchema>
  & z.input<typeof AwsImagebuilderInfrastructureConfigurationImportSchema>
  & NodeProps

export type AwsImagebuilderInfrastructureConfigurationOutputProps =
  & z.output<typeof AwsImagebuilderInfrastructureConfigurationOutputSchema>
  & z.output<typeof AwsImagebuilderInfrastructureConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/imagebuilder_infrastructure_configuration

export function AwsImagebuilderInfrastructureConfiguration(
  props: Partial<AwsImagebuilderInfrastructureConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_infrastructure_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsImagebuilderInfrastructureConfigurationInputSchema}
      _outputSchema={AwsImagebuilderInfrastructureConfigurationOutputSchema}
      _importSchema={AwsImagebuilderInfrastructureConfigurationImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderInfrastructureConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsImagebuilderInfrastructureConfigurationOutputProps>(
    AwsImagebuilderInfrastructureConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderInfrastructureConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsImagebuilderInfrastructureConfigurationOutputProps>(
    AwsImagebuilderInfrastructureConfiguration,
    idFilter,
    baseNode,
    optional,
  )
