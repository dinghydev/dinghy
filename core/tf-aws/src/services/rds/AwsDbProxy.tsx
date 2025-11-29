import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/db_proxy

export const InputSchema = z.object({
  engine_family: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  vpc_subnet_ids: resolvableValue(z.string().array()),
  auth: resolvableValue(
    z.object({
      auth_scheme: z.string().optional(),
      client_password_auth_type: z.string().optional(),
      description: z.string().optional(),
      iam_auth: z.string().optional(),
      secret_arn: z.string().optional(),
      username: z.string().optional(),
    }).array().optional(),
  ),
  debug_logging: resolvableValue(z.boolean().optional()),
  default_auth_scheme: resolvableValue(z.string().optional()),
  idle_client_timeout: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  require_tls: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_security_group_ids: resolvableValue(z.string().array().optional()),
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

export function AwsDbProxy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_proxy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDbProxy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDbProxy, node, id)

export const useAwsDbProxys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDbProxy, node, id)
