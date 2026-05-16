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

export const AwsSsmMaintenanceWindowInputSchema = TfMetaSchema.extend({
  cutoff: resolvableValue(z.number()),
  duration: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  schedule: resolvableValue(z.string()),
  allow_unassociated_targets: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  end_date: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  schedule_offset: resolvableValue(z.number().optional()),
  schedule_timezone: resolvableValue(z.string().optional()),
  start_date: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsSsmMaintenanceWindowOutputSchema = z.object({
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSsmMaintenanceWindowImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsmMaintenanceWindowInputProps =
  & z.input<typeof AwsSsmMaintenanceWindowInputSchema>
  & z.input<typeof AwsSsmMaintenanceWindowImportSchema>
  & NodeProps

export type AwsSsmMaintenanceWindowOutputProps =
  & z.output<typeof AwsSsmMaintenanceWindowOutputSchema>
  & z.output<typeof AwsSsmMaintenanceWindowInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_maintenance_window

export function AwsSsmMaintenanceWindow(
  props: Partial<AwsSsmMaintenanceWindowInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_maintenance_window'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmMaintenanceWindowInputSchema}
      _outputSchema={AwsSsmMaintenanceWindowOutputSchema}
      _importSchema={AwsSsmMaintenanceWindowImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmMaintenanceWindow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmMaintenanceWindowOutputProps>(
    AwsSsmMaintenanceWindow,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmMaintenanceWindows = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmMaintenanceWindowOutputProps>(
    AwsSsmMaintenanceWindow,
    idFilter,
    baseNode,
    optional,
  )
