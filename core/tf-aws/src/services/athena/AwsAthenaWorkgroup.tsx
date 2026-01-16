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

export const InputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      bytes_scanned_cutoff_per_query: z.number().optional(),
      enable_minimum_encryption_configuration: z.boolean().optional(),
      enforce_workgroup_configuration: z.boolean().optional(),
      execution_role: z.string().optional(),
      publish_cloudwatch_metrics_enabled: z.boolean().optional(),
      requester_pays_enabled: z.boolean().optional(),
      customer_content_encryption_configuration: z.object({
        kms_key: z.string().optional(),
      }).optional(),
      engine_version: z.object({
        effective_engine_version: z.string().optional(),
        selected_engine_version: z.string().optional(),
      }).optional(),
      identity_center_configuration: z.object({
        enable_identity_center: z.boolean().optional(),
        identity_center_instance_arn: z.string().optional(),
      }).optional(),
      managed_query_results_configuration: z.object({
        enabled: z.boolean().optional(),
        encryption_configuration: z.object({
          kms_key: z.string().optional(),
        }).optional(),
      }).optional(),
      monitoring_configuration: z.object({
        cloud_watch_logging_configuration: z.object({
          enabled: z.boolean(),
          log_group: z.string().optional(),
          log_stream_name_prefix: z.string().optional(),
          log_type: z.object({
            key: z.string(),
            values: z.string().array(),
          }).array().optional(),
        }).optional(),
        managed_logging_configuration: z.object({
          enabled: z.boolean(),
          kms_key: z.string().optional(),
        }).optional(),
        s3_logging_configuration: z.object({
          enabled: z.boolean(),
          kms_key: z.string().optional(),
          log_location: z.string().optional(),
        }).optional(),
      }).optional(),
      result_configuration: z.object({
        expected_bucket_owner: z.string().optional(),
        output_location: z.string().optional(),
        acl_configuration: z.object({
          s3_acl_option: z.string(),
        }).optional(),
        encryption_configuration: z.object({
          encryption_option: z.string().optional(),
          kms_key_arn: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  configuration: z.object({
    bytes_scanned_cutoff_per_query: z.number().optional(),
    enable_minimum_encryption_configuration: z.boolean().optional(),
    enforce_workgroup_configuration: z.boolean().optional(),
    execution_role: z.string().optional(),
    publish_cloudwatch_metrics_enabled: z.boolean().optional(),
    requester_pays_enabled: z.boolean().optional(),
    customer_content_encryption_configuration: z.object({
      kms_key: z.string().optional(),
    }).optional(),
    engine_version: z.object({
      effective_engine_version: z.string().optional(),
      selected_engine_version: z.string().optional(),
    }).optional(),
    identity_center_configuration: z.object({
      enable_identity_center: z.boolean().optional(),
      identity_center_instance_arn: z.string().optional(),
    }).optional(),
    managed_query_results_configuration: z.object({
      enabled: z.boolean().optional(),
      encryption_configuration: z.object({
        kms_key: z.string().optional(),
      }).optional(),
    }).optional(),
    monitoring_configuration: z.object({
      cloud_watch_logging_configuration: z.object({
        enabled: z.boolean(),
        log_group: z.string().optional(),
        log_stream_name_prefix: z.string().optional(),
        log_type: z.object({
          key: z.string(),
          values: z.set(z.string()),
        }).array().optional(),
      }).optional(),
      managed_logging_configuration: z.object({
        enabled: z.boolean(),
        kms_key: z.string().optional(),
      }).optional(),
      s3_logging_configuration: z.object({
        enabled: z.boolean(),
        kms_key: z.string().optional(),
        log_location: z.string().optional(),
      }).optional(),
    }).optional(),
    result_configuration: z.object({
      expected_bucket_owner: z.string().optional(),
      output_location: z.string().optional(),
      acl_configuration: z.object({
        s3_acl_option: z.string(),
      }).optional(),
      encryption_configuration: z.object({
        encryption_option: z.string().optional(),
        kms_key_arn: z.string().optional(),
      }).optional(),
    }).optional(),
  }).optional().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/athena_workgroup

export function AwsAthenaWorkgroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_athena_workgroup'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAthenaWorkgroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsAthenaWorkgroup, idFilter, baseNode, optional)

export const useAwsAthenaWorkgroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsAthenaWorkgroup, idFilter, baseNode, optional)
