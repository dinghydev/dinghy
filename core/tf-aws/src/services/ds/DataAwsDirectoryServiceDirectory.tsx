import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDirectoryServiceDirectory } from './AwsDirectoryServiceDirectory.tsx'

export const InputSchema = TfMetaSchema.extend({
  directory_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  access_url: z.string().optional(),
  alias: z.string().optional(),
  connect_settings: z.object({
    availability_zones: z.set(z.string()),
    connect_ips: z.set(z.string()),
    customer_dns_ips: z.set(z.string()),
    customer_username: z.string(),
    subnet_ids: z.set(z.string()),
    vpc_id: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  dns_ip_addresses: z.set(z.string()).optional(),
  edition: z.string().optional(),
  enable_sso: z.boolean().optional(),
  name: z.string().optional(),
  radius_settings: z.object({
    authentication_protocol: z.string(),
    display_label: z.string(),
    radius_port: z.number(),
    radius_retries: z.number(),
    radius_servers: z.set(z.string()),
    radius_timeout: z.number(),
    use_same_username: z.boolean(),
  }).array().optional(),
  security_group_id: z.string().optional(),
  short_name: z.string().optional(),
  size: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
  vpc_settings: z.object({
    availability_zones: z.set(z.string()),
    subnet_ids: z.set(z.string()),
    vpc_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/directory_service_directory

export function DataAwsDirectoryServiceDirectory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDirectoryServiceDirectory
      _type='aws_directory_service_directory'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDirectoryServiceDirectory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsDirectoryServiceDirectory,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDirectoryServiceDirectorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsDirectoryServiceDirectory,
    idFilter,
    baseNode,
    optional,
  )
