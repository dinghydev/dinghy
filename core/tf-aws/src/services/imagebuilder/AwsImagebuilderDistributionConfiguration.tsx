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

export const InputSchema = z.object({
  distribution: resolvableValue(
    z.object({
      license_configuration_arns: z.string().array().optional(),
      region: z.string(),
      ami_distribution_configuration: z.object({
        ami_tags: z.record(z.string(), z.string()).optional(),
        description: z.string().optional(),
        kms_key_id: z.string().optional(),
        name: z.string().optional(),
        target_account_ids: z.string().array().optional(),
        launch_permission: z.object({
          organization_arns: z.string().array().optional(),
          organizational_unit_arns: z.string().array().optional(),
          user_groups: z.string().array().optional(),
          user_ids: z.string().array().optional(),
        }).optional(),
      }).optional(),
      container_distribution_configuration: z.object({
        container_tags: z.string().array().optional(),
        description: z.string().optional(),
        target_repository: z.object({
          repository_name: z.string(),
          service: z.string(),
        }),
      }).optional(),
      fast_launch_configuration: z.object({
        account_id: z.string(),
        enabled: z.boolean(),
        max_parallel_launches: z.number().optional(),
        launch_template: z.object({
          launch_template_id: z.string().optional(),
          launch_template_name: z.string().optional(),
          launch_template_version: z.string().optional(),
        }).optional(),
        snapshot_configuration: z.object({
          target_resource_count: z.number().optional(),
        }).optional(),
      }).array().optional(),
      launch_template_configuration: z.object({
        account_id: z.string().optional(),
        default: z.boolean().optional(),
        launch_template_id: z.string(),
      }).array().optional(),
      s3_export_configuration: z.object({
        disk_image_format: z.string(),
        role_name: z.string(),
        s3_bucket: z.string(),
        s3_prefix: z.string().optional(),
      }).optional(),
      ssm_parameter_configuration: z.object({
        ami_account_id: z.string().optional(),
        data_type: z.string().optional(),
        parameter_name: z.string(),
      }).array().optional(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  date_created: z.string().optional(),
  date_updated: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/imagebuilder_distribution_configuration

export function AwsImagebuilderDistributionConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_imagebuilder_distribution_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsImagebuilderDistributionConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsImagebuilderDistributionConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsImagebuilderDistributionConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsImagebuilderDistributionConfiguration,
    idFilter,
    baseNode,
    optional,
  )
