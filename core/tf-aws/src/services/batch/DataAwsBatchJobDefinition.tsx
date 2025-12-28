import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBatchJobDefinition } from './AwsBatchJobDefinition.tsx'

export const InputSchema = z.object({
  arn_prefix: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string())),
  type: resolvableValue(z.string()),
  arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  revision: resolvableValue(z.number().optional()),
  status: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  container_orchestration_type: z.string().optional(),
  eks_properties: z.object({
    pod_properties: z.object({
      containers: z.object({
        args: z.string().array(),
        command: z.string().array(),
        env: z.object({
          name: z.string(),
          value: z.string(),
        }).array(),
        image: z.string(),
        image_pull_policy: z.string(),
        name: z.string(),
        resources: z.object({
          limits: z.record(z.string(), z.string()),
          requests: z.record(z.string(), z.string()),
        }).array(),
        security_context: z.object({
          privileged: z.boolean(),
          read_only_root_file_system: z.boolean(),
          run_as_group: z.number(),
          run_as_non_root: z.boolean(),
          run_as_user: z.number(),
        }).array(),
        volume_mounts: z.object({
          mount_path: z.string(),
          name: z.string(),
          read_only: z.boolean(),
        }).array(),
      }).array(),
      dns_policy: z.string(),
      host_network: z.boolean(),
      image_pull_secrets: z.object({
        name: z.string(),
      }).array(),
      init_containers: z.object({
        args: z.string().array(),
        command: z.string().array(),
        env: z.object({
          name: z.string(),
          value: z.string(),
        }).array(),
        image: z.string(),
        image_pull_policy: z.string(),
        name: z.string(),
        resources: z.object({
          limits: z.record(z.string(), z.string()),
          requests: z.record(z.string(), z.string()),
        }).array(),
        security_context: z.object({
          privileged: z.boolean(),
          read_only_root_file_system: z.boolean(),
          run_as_group: z.number(),
          run_as_non_root: z.boolean(),
          run_as_user: z.number(),
        }).array(),
        volume_mounts: z.object({
          mount_path: z.string(),
          name: z.string(),
          read_only: z.boolean(),
        }).array(),
      }).array(),
      metadata: z.object({
        labels: z.record(z.string(), z.string()),
      }).array(),
      service_account_name: z.string(),
      share_process_namespace: z.boolean(),
      volumes: z.object({
        empty_dir: z.object({
          medium: z.string(),
          size_limit: z.string(),
        }).array(),
        host_path: z.object({
          path: z.string(),
        }).array(),
        name: z.string(),
        secret: z.object({
          optional: z.boolean(),
          secret_name: z.string(),
        }).array(),
      }).array(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  node_properties: z.object({
    main_node: z.number(),
    node_range_properties: z.object({
      container: z.object({
        command: z.string().array(),
        environment: z.object({
          name: z.string(),
          value: z.string(),
        }).array(),
        ephemeral_storage: z.object({
          size_in_gib: z.number(),
        }).array(),
        execution_role_arn: z.string(),
        fargate_platform_configuration: z.object({
          platform_version: z.string(),
        }).array(),
        image: z.string(),
        instance_type: z.string(),
        job_role_arn: z.string(),
        linux_parameters: z.object({
          devices: z.object({
            container_path: z.string(),
            host_path: z.string(),
            permissions: z.string().array(),
          }).array(),
          init_process_enabled: z.boolean(),
          max_swap: z.number(),
          shared_memory_size: z.number(),
          swappiness: z.number(),
          tmpfs: z.object({
            container_path: z.string(),
            mount_options: z.string().array(),
            size: z.number(),
          }).array(),
        }).array(),
        log_configuration: z.object({
          log_driver: z.string(),
          options: z.record(z.string(), z.string()),
          secret_options: z.object({
            name: z.string(),
            value_from: z.string(),
          }).array(),
        }).array(),
        mount_points: z.object({
          container_path: z.string(),
          read_only: z.boolean(),
          source_volume: z.string(),
        }).array(),
        network_configuration: z.object({
          assign_public_ip: z.boolean(),
        }).array(),
        privileged: z.boolean(),
        readonly_root_filesystem: z.boolean(),
        resource_requirements: z.object({
          type: z.string(),
          value: z.string(),
        }).array(),
        runtime_platform: z.object({
          cpu_architecture: z.string(),
          operating_system_family: z.string(),
        }).array(),
        secrets: z.object({
          name: z.string(),
          value_from: z.string(),
        }).array(),
        ulimits: z.object({
          hard_limit: z.number(),
          name: z.string(),
          soft_limit: z.number(),
        }).array(),
        user: z.string(),
        volumes: z.object({
          efs_volume_configuration: z.object({
            authorization_config: z.object({
              access_point_id: z.string(),
              iam: z.string(),
            }).array(),
            file_system_id: z.string(),
            root_directory: z.string(),
            transit_encryption: z.string(),
            transit_encryption_port: z.number(),
          }).array(),
          host: z.object({
            source_path: z.string(),
          }).array(),
          name: z.string(),
        }).array(),
      }).array(),
      target_nodes: z.string(),
    }).array(),
    num_nodes: z.number(),
  }).array().optional(),
  retry_strategy: z.object({
    attempts: z.number(),
    evaluate_on_exit: z.object({
      action: z.string(),
      on_exit_code: z.string(),
      on_reason: z.string(),
      on_status_reason: z.string(),
    }).array(),
  }).array().optional(),
  scheduling_priority: z.number().optional(),
  timeout: z.object({
    attempt_duration_seconds: z.number(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/batch_job_definition

export function DataAwsBatchJobDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBatchJobDefinition
      _type='aws_batch_job_definition'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBatchJobDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsBatchJobDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBatchJobDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsBatchJobDefinition,
    idFilter,
    baseNode,
    optional,
  )
