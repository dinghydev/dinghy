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
  file_system_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  active_directory_configuration: resolvableValue(
    z.object({
      netbios_name: z.string().optional(),
      self_managed_active_directory_configuration: z.object({
        dns_ips: z.string().array(),
        domain_name: z.string(),
        file_system_administrators_group: z.string().optional(),
        organizational_unit_distinguished_name: z.string().optional(),
        password: z.string(),
        username: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  root_volume_security_style: resolvableValue(z.string().optional()),
  svm_admin_password: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoints: z.object({
    iscsi: z.object({
      dns_name: z.string(),
      ip_addresses: z.set(z.string()),
    }).array(),
    management: z.object({
      dns_name: z.string(),
      ip_addresses: z.set(z.string()),
    }).array(),
    nfs: z.object({
      dns_name: z.string(),
      ip_addresses: z.set(z.string()),
    }).array(),
    smb: z.object({
      dns_name: z.string(),
      ip_addresses: z.set(z.string()),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  subtype: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  uuid: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/fsx_ontap_storage_virtual_machine

export function AwsFsxOntapStorageVirtualMachine(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_ontap_storage_virtual_machine'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxOntapStorageVirtualMachine = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsFsxOntapStorageVirtualMachine,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxOntapStorageVirtualMachines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsFsxOntapStorageVirtualMachine,
    idFilter,
    baseNode,
    optional,
  )
