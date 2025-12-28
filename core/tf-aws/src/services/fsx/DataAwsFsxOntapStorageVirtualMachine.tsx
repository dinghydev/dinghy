import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsFsxOntapStorageVirtualMachine } from './AwsFsxOntapStorageVirtualMachine.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  active_directory_configuration: z.object({
    netbios_name: z.string(),
    self_managed_active_directory_configuration: z.object({
      dns_ips: z.set(z.string()),
      domain_name: z.string(),
      file_system_administrators_group: z.string(),
      organizational_unit_distinguished_name: z.string(),
      username: z.string(),
    }).array(),
  }).array().optional(),
  arn: z.string().optional(),
  creation_time: z.string().optional(),
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
  file_system_id: z.string().optional(),
  id: z.string().optional(),
  lifecycle_status: z.string().optional(),
  lifecycle_transition_reason: z.set(z.object({
    message: z.string(),
  })).optional(),
  name: z.string().optional(),
  subtype: z.string().optional(),
  uuid: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/fsx_ontap_storage_virtual_machine

export function DataAwsFsxOntapStorageVirtualMachine(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsFsxOntapStorageVirtualMachine
      _type='aws_fsx_ontap_storage_virtual_machine'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsFsxOntapStorageVirtualMachine = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsFsxOntapStorageVirtualMachine,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsFsxOntapStorageVirtualMachines = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsFsxOntapStorageVirtualMachine,
    idFilter,
    baseNode,
    optional,
  )
