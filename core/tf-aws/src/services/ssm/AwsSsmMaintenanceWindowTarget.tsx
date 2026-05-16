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

export const AwsSsmMaintenanceWindowTargetInputSchema = TfMetaSchema.extend({
  resource_type: resolvableValue(z.string()),
  targets: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).array(),
  ),
  window_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  owner_information: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSsmMaintenanceWindowTargetOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsSsmMaintenanceWindowTargetImportSchema = z.object({
  id: resolvableValue(z.string()),
  window_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsmMaintenanceWindowTargetInputProps =
  & z.input<typeof AwsSsmMaintenanceWindowTargetInputSchema>
  & z.input<typeof AwsSsmMaintenanceWindowTargetImportSchema>
  & NodeProps

export type AwsSsmMaintenanceWindowTargetOutputProps =
  & z.output<typeof AwsSsmMaintenanceWindowTargetOutputSchema>
  & z.output<typeof AwsSsmMaintenanceWindowTargetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_maintenance_window_target

export function AwsSsmMaintenanceWindowTarget(
  props: Partial<AwsSsmMaintenanceWindowTargetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_maintenance_window_target'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmMaintenanceWindowTargetInputSchema}
      _outputSchema={AwsSsmMaintenanceWindowTargetOutputSchema}
      _importSchema={AwsSsmMaintenanceWindowTargetImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmMaintenanceWindowTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmMaintenanceWindowTargetOutputProps>(
    AwsSsmMaintenanceWindowTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmMaintenanceWindowTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmMaintenanceWindowTargetOutputProps>(
    AwsSsmMaintenanceWindowTarget,
    idFilter,
    baseNode,
    optional,
  )
