import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSsmMaintenanceWindowsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSsmMaintenanceWindowsOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsSsmMaintenanceWindowsInputProps =
  & z.input<typeof DataAwsSsmMaintenanceWindowsInputSchema>
  & NodeProps

export type DataAwsSsmMaintenanceWindowsOutputProps =
  & z.output<typeof DataAwsSsmMaintenanceWindowsOutputSchema>
  & z.output<typeof DataAwsSsmMaintenanceWindowsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ssm_maintenance_windows

export function DataAwsSsmMaintenanceWindows(
  props: Partial<DataAwsSsmMaintenanceWindowsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_maintenance_windows'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSsmMaintenanceWindowsInputSchema}
      _outputSchema={DataAwsSsmMaintenanceWindowsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSsmMaintenanceWindowss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSsmMaintenanceWindowsOutputProps>(
    DataAwsSsmMaintenanceWindows,
    idFilter,
    baseNode,
    optional,
  )
