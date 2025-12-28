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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssm_maintenance_window

export function AwsSsmMaintenanceWindow(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_maintenance_window'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmMaintenanceWindow = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSsmMaintenanceWindow,
    idFilter,
    baseNode,
    optional,
  )
