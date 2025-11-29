import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsImagebuilderDistributionConfiguration } from './AwsImagebuilderDistributionConfiguration.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/imagebuilder_distribution_configuration

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  date_created: z.string().optional(),
  date_updated: z.string().optional(),
  description: z.string().optional(),
  distribution: z.object({
    ami_distribution_configuration: z.object({
      ami_tags: z.record(z.string(), z.string()),
      description: z.string(),
      kms_key_id: z.string(),
      launch_permission: z.object({
        organization_arns: z.string().array(),
        organizational_unit_arns: z.string().array(),
        user_groups: z.string().array(),
        user_ids: z.string().array(),
      }).array(),
      name: z.string(),
      target_account_ids: z.string().array(),
    }).array(),
    container_distribution_configuration: z.object({
      container_tags: z.string().array(),
      description: z.string(),
      target_repository: z.object({
        repository_name: z.string(),
        service: z.string(),
      }).array(),
    }).array(),
    fast_launch_configuration: z.object({
      account_id: z.string(),
      enabled: z.boolean(),
      launch_template: z.object({
        launch_template_id: z.string(),
        launch_template_name: z.string(),
        launch_template_version: z.string(),
      }).array(),
      max_parallel_launches: z.number(),
      snapshot_configuration: z.object({
        target_resource_count: z.number(),
      }).array(),
    }).array(),
    launch_template_configuration: z.object({
      account_id: z.string(),
      default: z.boolean(),
      launch_template_id: z.string(),
    }).array(),
    license_configuration_arns: z.string().array(),
    region: z.string(),
    s3_export_configuration: z.object({
      disk_image_format: z.string(),
      role_name: z.string(),
      s3_bucket: z.string(),
      s3_prefix: z.string(),
    }).array(),
    ssm_parameter_configuration: z.object({
      ami_account_id: z.string(),
      data_type: z.string(),
      parameter_name: z.string(),
    }).array(),
  }).array().optional(),
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
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    DataAwsImagebuilderDistributionConfiguration,
    node,
    id,
  )

export const useDataAwsImagebuilderDistributionConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsImagebuilderDistributionConfiguration,
    node,
    id,
  )
