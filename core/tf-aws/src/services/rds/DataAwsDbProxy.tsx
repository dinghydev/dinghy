import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDbProxy } from './AwsDbProxy.tsx'

export const DataAwsDbProxyInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsDbProxyOutputSchema = z.object({
  arn: z.string().optional(),
  auth: z.set(z.object({
    auth_scheme: z.string(),
    client_password_auth_type: z.string(),
    description: z.string(),
    iam_auth: z.string(),
    secret_arn: z.string(),
    username: z.string(),
  })).optional(),
  debug_logging: z.boolean().optional(),
  default_auth_scheme: z.string().optional(),
  endpoint: z.string().optional(),
  endpoint_network_type: z.string().optional(),
  engine_family: z.string().optional(),
  idle_client_timeout: z.number().optional(),
  require_tls: z.boolean().optional(),
  role_arn: z.string().optional(),
  target_connection_network_type: z.string().optional(),
  vpc_id: z.string().optional(),
  vpc_security_group_ids: z.set(z.string()).optional(),
  vpc_subnet_ids: z.set(z.string()).optional(),
})

export type DataAwsDbProxyInputProps =
  & z.input<typeof DataAwsDbProxyInputSchema>
  & NodeProps

export type DataAwsDbProxyOutputProps =
  & z.output<typeof DataAwsDbProxyOutputSchema>
  & z.output<typeof DataAwsDbProxyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/db_proxy

export function DataAwsDbProxy(props: Partial<DataAwsDbProxyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDbProxy
      _type='aws_db_proxy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDbProxyInputSchema}
      _outputSchema={DataAwsDbProxyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDbProxy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDbProxyOutputProps>(
    DataAwsDbProxy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDbProxys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDbProxyOutputProps>(
    DataAwsDbProxy,
    idFilter,
    baseNode,
    optional,
  )
