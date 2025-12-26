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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_distribution_configuration

export function DataAwsImagebuilderDistributionConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsImagebuilderDistributionConfiguration
      _type='aws_imagebuilder_distribution_configuration'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsImagebuilderDistributionConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsImagebuilderDistributionConfiguration,
    idFilter,
    baseNode,
    optional,
  )
