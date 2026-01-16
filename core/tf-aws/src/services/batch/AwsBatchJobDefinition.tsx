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
  type: resolvableValue(z.string()),
  container_properties: resolvableValue(z.string().optional()),
  deregister_on_new_revision: resolvableValue(z.boolean().optional()),
  ecs_properties: resolvableValue(z.string().optional()),
  eks_properties: resolvableValue(
    z.object({
      pod_properties: z.object({
        dns_policy: z.string().optional(),
        host_network: z.boolean().optional(),
        service_account_name: z.string().optional(),
        share_process_namespace: z.boolean().optional(),
        containers: z.object({
          args: z.string().array().optional(),
          command: z.string().array().optional(),
          image: z.string(),
          image_pull_policy: z.string().optional(),
          name: z.string().optional(),
          env: z.object({
            name: z.string(),
            value: z.string(),
          }).array().optional(),
          resources: z.object({
            limits: z.record(z.string(), z.string()).optional(),
            requests: z.record(z.string(), z.string()).optional(),
          }).optional(),
          security_context: z.object({
            privileged: z.boolean().optional(),
            read_only_root_file_system: z.boolean().optional(),
            run_as_group: z.number().optional(),
            run_as_non_root: z.boolean().optional(),
            run_as_user: z.number().optional(),
          }).optional(),
          volume_mounts: z.object({
            mount_path: z.string(),
            name: z.string(),
            read_only: z.boolean().optional(),
          }).array().optional(),
        }).array(),
        image_pull_secret: z.object({
          name: z.string(),
        }).array().optional(),
        init_containers: z.object({
          args: z.string().array().optional(),
          command: z.string().array().optional(),
          image: z.string(),
          image_pull_policy: z.string().optional(),
          name: z.string().optional(),
          env: z.object({
            name: z.string(),
            value: z.string(),
          }).array().optional(),
          resources: z.object({
            limits: z.record(z.string(), z.string()).optional(),
            requests: z.record(z.string(), z.string()).optional(),
          }).optional(),
          security_context: z.object({
            privileged: z.boolean().optional(),
            read_only_root_file_system: z.boolean().optional(),
            run_as_group: z.number().optional(),
            run_as_non_root: z.boolean().optional(),
            run_as_user: z.number().optional(),
          }).optional(),
          volume_mounts: z.object({
            mount_path: z.string(),
            name: z.string(),
            read_only: z.boolean().optional(),
          }).array().optional(),
        }).array().optional(),
        metadata: z.object({
          labels: z.record(z.string(), z.string()).optional(),
        }).optional(),
        volumes: z.object({
          name: z.string().optional(),
          empty_dir: z.object({
            medium: z.string().optional(),
            size_limit: z.string(),
          }).optional(),
          host_path: z.object({
            path: z.string(),
          }).optional(),
          secret: z.object({
            optional: z.boolean().optional(),
            secret_name: z.string(),
          }).optional(),
        }).array().optional(),
      }),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  node_properties: resolvableValue(z.string().optional()),
  parameters: resolvableValue(z.record(z.string(), z.string()).optional()),
  platform_capabilities: resolvableValue(z.string().array().optional()),
  propagate_tags: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  retry_strategy: resolvableValue(
    z.object({
      attempts: z.number().optional(),
      evaluate_on_exit: z.object({
        action: z.string(),
        on_exit_code: z.string().optional(),
        on_reason: z.string().optional(),
        on_status_reason: z.string().optional(),
      }).array().optional(),
    }).optional(),
  ),
  scheduling_priority: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeout: resolvableValue(
    z.object({
      attempt_duration_seconds: z.number().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  arn_prefix: z.string().optional(),
  revision: z.number().optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/batch_job_definition

export function AwsBatchJobDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_batch_job_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsBatchJobDefinition = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsBatchJobDefinition, idFilter, baseNode, optional)

export const useAwsBatchJobDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBatchJobDefinition,
    idFilter,
    baseNode,
    optional,
  )
