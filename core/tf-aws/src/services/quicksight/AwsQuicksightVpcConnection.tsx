import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_vpc_connection

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  security_group_ids: resolvableValue(z.string().array()),
  subnet_ids: resolvableValue(z.string().array()),
  vpc_connection_id: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  dns_resolvers: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightVpcConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_vpc_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightVpcConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightVpcConnection, node, id)

export const useAwsQuicksightVpcConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightVpcConnection, node, id)
