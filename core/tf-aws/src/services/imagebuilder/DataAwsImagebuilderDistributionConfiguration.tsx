import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderDistributionConfiguration } from './AwsImagebuilderDistributionConfiguration.tsx'

export const DataAwsImagebuilderDistributionConfigurationInputSchema =
  TfMetaSchema.extend({
    arn: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsImagebuilderDistributionConfigurationOutputSchema = z
  .object({
    date_created: z.string().optional(),
    date_updated: z.string().optional(),
    description: z.string().optional(),
    distribution: z.set(z.object({
      ami_distribution_configuration: z.set(z.object({
        ami_tags: z.record(z.string(), z.string()),
        description: z.string(),
        kms_key_id: z.string(),
        launch_permission: z.set(z.object({
          organization_arns: z.set(z.string()),
          organizational_unit_arns: z.set(z.string()),
          user_groups: z.set(z.string()),
          user_ids: z.set(z.string()),
        })),
        name: z.string(),
        target_account_ids: z.set(z.string()),
      })),
      container_distribution_configuration: z.set(z.object({
        container_tags: z.set(z.string()),
        description: z.string(),
        target_repository: z.set(z.object({
          repository_name: z.string(),
          service: z.string(),
        })),
      })),
      fast_launch_configuration: z.set(z.object({
        account_id: z.string(),
        enabled: z.boolean(),
        launch_template: z.set(z.object({
          launch_template_id: z.string(),
          launch_template_name: z.string(),
          launch_template_version: z.string(),
        })),
        max_parallel_launches: z.number(),
        snapshot_configuration: z.set(z.object({
          target_resource_count: z.number(),
        })),
      })),
      launch_template_configuration: z.set(z.object({
        account_id: z.string(),
        default: z.boolean(),
        launch_template_id: z.string(),
      })),
      license_configuration_arns: z.set(z.string()),
      region: z.string(),
      s3_export_configuration: z.set(z.object({
        disk_image_format: z.string(),
        role_name: z.string(),
        s3_bucket: z.string(),
        s3_prefix: z.string(),
      })),
      ssm_parameter_configuration: z.set(z.object({
        ami_account_id: z.string(),
        data_type: z.string(),
        parameter_name: z.string(),
      })),
    })).optional(),
    name: z.string().optional(),
    region: z.string().optional(),
    tags: z.record(z.string(), z.string()).optional(),
  })

export type DataAwsImagebuilderDistributionConfigurationInputProps =
  & z.input<typeof DataAwsImagebuilderDistributionConfigurationInputSchema>
  & NodeProps

export type DataAwsImagebuilderDistributionConfigurationOutputProps =
  & z.output<typeof DataAwsImagebuilderDistributionConfigurationOutputSchema>
  & z.output<typeof DataAwsImagebuilderDistributionConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/imagebuilder_distribution_configuration

export function DataAwsImagebuilderDistributionConfiguration(
  props: Partial<DataAwsImagebuilderDistributionConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsImagebuilderDistributionConfiguration
      _type='aws_imagebuilder_distribution_configuration'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsImagebuilderDistributionConfigurationInputSchema}
      _outputSchema={DataAwsImagebuilderDistributionConfigurationOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderDistributionConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsImagebuilderDistributionConfigurationOutputProps>(
    DataAwsImagebuilderDistributionConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsImagebuilderDistributionConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsImagebuilderDistributionConfigurationOutputProps>(
    DataAwsImagebuilderDistributionConfiguration,
    idFilter,
    baseNode,
    optional,
  )
