import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsFsxOntapStorageVirtualMachinesInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsFsxOntapStorageVirtualMachinesOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsFsxOntapStorageVirtualMachinesInputProps =
  & z.input<typeof DataAwsFsxOntapStorageVirtualMachinesInputSchema>
  & NodeProps

export type DataAwsFsxOntapStorageVirtualMachinesOutputProps =
  & z.output<typeof DataAwsFsxOntapStorageVirtualMachinesOutputSchema>
  & z.output<typeof DataAwsFsxOntapStorageVirtualMachinesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/fsx_ontap_storage_virtual_machines

export function DataAwsFsxOntapStorageVirtualMachines(
  props: Partial<DataAwsFsxOntapStorageVirtualMachinesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_ontap_storage_virtual_machines'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsFsxOntapStorageVirtualMachinesInputSchema}
      _outputSchema={DataAwsFsxOntapStorageVirtualMachinesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsFsxOntapStorageVirtualMachiness = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsFsxOntapStorageVirtualMachinesOutputProps>(
    DataAwsFsxOntapStorageVirtualMachines,
    idFilter,
    baseNode,
    optional,
  )
