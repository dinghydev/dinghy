import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ecs_cluster

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  configuration: resolvableValue(
    z.object({
      execute_command_configuration: z.object({
        kms_key_id: z.string().optional(),
        logging: z.string().optional(),
      }).optional(),
      managed_storage_configuration: z.object({
        fargate_ephemeral_storage_kms_key_id: z.string().optional(),
        kms_key_id: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  service_connect_defaults: resolvableValue(
    z.object({
      namespace: z.string(),
    }).optional(),
  ),
  setting: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEcsCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ecs_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEcsCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEcsCluster, node, id)

export const useAwsEcsClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEcsCluster, node, id)
