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
  description: resolvableValue(z.string()),
  execution_role_arn: resolvableValue(z.string()),
  policy_details: resolvableValue(z.object({
    copy_tags: z.boolean().optional(),
    create_interval: z.number().optional(),
    extend_deletion: z.boolean().optional(),
    policy_language: z.string().optional(),
    policy_type: z.string().optional(),
    resource_locations: z.string().array().optional(),
    resource_type: z.string().optional(),
    resource_types: z.string().array().optional(),
    retain_interval: z.number().optional(),
    target_tags: z.record(z.string(), z.string()).optional(),
    action: z.object({
      name: z.string(),
      cross_region_copy: z.object({
        target: z.string(),
        encryption_configuration: z.object({
          cmk_arn: z.string().optional(),
          encrypted: z.boolean().optional(),
        }),
        retain_rule: z.object({
          interval: z.number(),
          interval_unit: z.string(),
        }).optional(),
      }).array(),
    }).optional(),
    event_source: z.object({
      type: z.string(),
      parameters: z.object({
        description_regex: z.string(),
        event_type: z.string(),
        snapshot_owner: z.string().array(),
      }),
    }).optional(),
    exclusions: z.object({
      exclude_boot_volumes: z.boolean().optional(),
      exclude_tags: z.record(z.string(), z.string()).optional(),
      exclude_volume_types: z.string().array().optional(),
    }).optional(),
    parameters: z.object({
      exclude_boot_volume: z.boolean().optional(),
      no_reboot: z.boolean().optional(),
    }).optional(),
    schedule: z.object({
      copy_tags: z.boolean().optional(),
      name: z.string(),
      tags_to_add: z.record(z.string(), z.string()).optional(),
      variable_tags: z.record(z.string(), z.string()).optional(),
      archive_rule: z.object({
        archive_retain_rule: z.object({
          retention_archive_tier: z.object({
            count: z.number().optional(),
            interval: z.number().optional(),
            interval_unit: z.string().optional(),
          }),
        }),
      }).optional(),
      create_rule: z.object({
        cron_expression: z.string().optional(),
        interval: z.number().optional(),
        interval_unit: z.string().optional(),
        location: z.string().optional(),
        times: z.string().array().optional(),
        scripts: z.object({
          execute_operation_on_script_failure: z.boolean().optional(),
          execution_handler: z.string(),
          execution_handler_service: z.string().optional(),
          execution_timeout: z.number().optional(),
          maximum_retry_count: z.number().optional(),
          stages: z.string().array().optional(),
        }).optional(),
      }),
      cross_region_copy_rule: z.object({
        cmk_arn: z.string().optional(),
        copy_tags: z.boolean().optional(),
        encrypted: z.boolean(),
        target: z.string().optional(),
        target_region: z.string().optional(),
        deprecate_rule: z.object({
          interval: z.number(),
          interval_unit: z.string(),
        }).optional(),
        retain_rule: z.object({
          interval: z.number(),
          interval_unit: z.string(),
        }).optional(),
      }).array().optional(),
      deprecate_rule: z.object({
        count: z.number().optional(),
        interval: z.number().optional(),
        interval_unit: z.string().optional(),
      }).optional(),
      fast_restore_rule: z.object({
        availability_zones: z.string().array(),
        count: z.number().optional(),
        interval: z.number().optional(),
        interval_unit: z.string().optional(),
      }).optional(),
      retain_rule: z.object({
        count: z.number().optional(),
        interval: z.number().optional(),
        interval_unit: z.string().optional(),
      }),
      share_rule: z.object({
        target_accounts: z.string().array(),
        unshare_interval: z.number().optional(),
        unshare_interval_unit: z.string().optional(),
      }).optional(),
    }).array().optional(),
  })),
  default_policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dlm_lifecycle_policy

export function AwsDlmLifecyclePolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dlm_lifecycle_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDlmLifecyclePolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsDlmLifecyclePolicy, idFilter, baseNode, optional)

export const useAwsDlmLifecyclePolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDlmLifecyclePolicy,
    idFilter,
    baseNode,
    optional,
  )
