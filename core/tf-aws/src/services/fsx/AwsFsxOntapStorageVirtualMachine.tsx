import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fsx_ontap_storage_virtual_machine

export const InputSchema = z.object({
  file_system_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  active_directory_configuration: resolvableValue(
    z.object({
      netbios_name: z.string().optional(),
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
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoints: z.object({
    iscsi: z.object({
      dns_name: z.string(),
      ip_addresses: z.string().array(),
    }).array(),
    management: z.object({
      dns_name: z.string(),
      ip_addresses: z.string().array(),
    }).array(),
    nfs: z.object({
      dns_name: z.string(),
      ip_addresses: z.string().array(),
    }).array(),
    smb: z.object({
      dns_name: z.string(),
      ip_addresses: z.string().array(),
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

export function AwsFsxOntapStorageVirtualMachine(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsFsxOntapStorageVirtualMachine = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsFsxOntapStorageVirtualMachine, node, id)

export const useAwsFsxOntapStorageVirtualMachines = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsFsxOntapStorageVirtualMachine, node, id)
