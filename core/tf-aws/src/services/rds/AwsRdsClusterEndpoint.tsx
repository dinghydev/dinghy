import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_cluster_endpoint

export const InputSchema = z.object({
  cluster_endpoint_identifier: resolvableValue(z.string()),
  cluster_identifier: resolvableValue(z.string()),
  custom_endpoint_type: resolvableValue(z.string()),
  excluded_members: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  static_members: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRdsClusterEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRdsClusterEndpoint, node, id)

export const useAwsRdsClusterEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRdsClusterEndpoint, node, id)
