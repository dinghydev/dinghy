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
  name: resolvableValue(z.string()),
  password: resolvableValue(z.string()),
  alias: resolvableValue(z.string().optional()),
  connect_settings: resolvableValue(
    z.object({
      availability_zones: z.string().array(),
      connect_ips: z.string().array(),
      customer_dns_ips: z.string().array(),
      customer_username: z.string(),
      subnet_ids: z.string().array(),
      vpc_id: z.string(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  desired_number_of_domain_controllers: resolvableValue(z.number().optional()),
  edition: resolvableValue(z.string().optional()),
  enable_sso: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  short_name: resolvableValue(z.string().optional()),
  size: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  vpc_settings: resolvableValue(
    z.object({
      availability_zones: z.string().array(),
      subnet_ids: z.string().array(),
      vpc_id: z.string(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  access_url: z.string().optional(),
  dns_ip_addresses: z.set(z.string()).optional(),
  id: z.string().optional(),
  security_group_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/directory_service_directory

export function AwsDirectoryServiceDirectory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_directory_service_directory'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDirectoryServiceDirectory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDirectoryServiceDirectory,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDirectoryServiceDirectorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDirectoryServiceDirectory,
    idFilter,
    baseNode,
    optional,
  )
