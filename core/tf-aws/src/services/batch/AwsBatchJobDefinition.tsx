import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/batch_job_definition

export const InputSchema = z.object({
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

export function AwsBatchJobDefinition(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsBatchJobDefinition = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBatchJobDefinition, node, id)

export const useAwsBatchJobDefinitions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBatchJobDefinition, node, id)
