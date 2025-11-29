import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_agent

export const InputSchema = z.object({
  activation_key: resolvableValue(z.string().optional()),
  ip_address: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  private_link_endpoint: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_arns: resolvableValue(z.string().array().optional()),
  subnet_arns: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
  vpc_endpoint_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
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

export function AwsDatasyncAgent(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_agent'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncAgent = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatasyncAgent, node, id)

export const useAwsDatasyncAgents = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatasyncAgent, node, id)
