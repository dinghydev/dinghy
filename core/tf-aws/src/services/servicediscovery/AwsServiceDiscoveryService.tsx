import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/service_discovery_service

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  dns_config: resolvableValue(
    z.object({
      namespace_id: z.string(),
      routing_policy: z.string().optional(),
    }).optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  health_check_config: resolvableValue(
    z.object({
      failure_threshold: z.number().optional(),
      resource_path: z.string().optional(),
      type: z.string().optional(),
    }).optional(),
  ),
  health_check_custom_config: resolvableValue(
    z.object({
      failure_threshold: z.number().optional(),
    }).optional(),
  ),
  namespace_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsServiceDiscoveryService(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_service_discovery_service'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServiceDiscoveryService = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsServiceDiscoveryService, node, id)

export const useAwsServiceDiscoveryServices = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsServiceDiscoveryService, node, id)
