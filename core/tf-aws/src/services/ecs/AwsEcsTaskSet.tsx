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
  cluster: resolvableValue(z.string()),
  service: resolvableValue(z.string()),
  task_definition: resolvableValue(z.string()),
  capacity_provider_strategy: resolvableValue(
    z.object({
      base: z.number().optional(),
      capacity_provider: z.string(),
      weight: z.number(),
    }).array().optional(),
  ),
  external_id: resolvableValue(z.string().optional()),
  force_delete: resolvableValue(z.boolean().optional()),
  launch_type: resolvableValue(z.string().optional()),
  load_balancer: resolvableValue(
    z.object({
      container_name: z.string(),
      container_port: z.number().optional(),
      load_balancer_name: z.string().optional(),
      target_group_arn: z.string().optional(),
    }).array().optional(),
  ),
  network_configuration: resolvableValue(
    z.object({
      assign_public_ip: z.boolean().optional(),
      security_groups: z.string().array().optional(),
      subnets: z.string().array(),
    }).optional(),
  ),
  platform_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scale: resolvableValue(
    z.object({
      unit: z.string().optional(),
      value: z.number().optional(),
    }).optional(),
  ),
  service_registries: resolvableValue(
    z.object({
      container_name: z.string().optional(),
      container_port: z.number().optional(),
      port: z.number().optional(),
      registry_arn: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  wait_until_stable: resolvableValue(z.boolean().optional()),
  wait_until_stable_timeout: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  stability_status: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  task_set_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecs_task_set

export function AwsEcsTaskSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_task_set'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsTaskSet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsEcsTaskSet, idFilter, baseNode, optional)

export const useAwsEcsTaskSets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsEcsTaskSet, idFilter, baseNode, optional)
