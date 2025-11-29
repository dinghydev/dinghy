import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/msk_serverless_cluster

export const InputSchema = z.object({
  client_authentication: resolvableValue(z.object({
    sasl: z.object({
      iam: z.object({
        enabled: z.boolean(),
      }),
    }),
  })),
  cluster_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  vpc_config: resolvableValue(z.object({
    security_group_ids: z.string().array().optional(),
    subnet_ids: z.string().array(),
  })),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bootstrap_brokers_sasl_iam: z.string().optional(),
  cluster_uuid: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMskServerlessCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_serverless_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMskServerlessCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMskServerlessCluster, node, id)

export const useAwsMskServerlessClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMskServerlessCluster, node, id)
