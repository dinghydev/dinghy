import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssm_maintenance_window_target

export const InputSchema = z.object({
  resource_type: resolvableValue(z.string()),
  targets: resolvableValue(z.object({
    key: z.string(),
    values: z.string().array(),
  })),
  window_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  owner_information: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  window_id: resolvableValue(z.string()),
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

export function AwsSsmMaintenanceWindowTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_maintenance_window_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmMaintenanceWindowTarget = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsmMaintenanceWindowTarget, node, id)

export const useAwsSsmMaintenanceWindowTargets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsmMaintenanceWindowTarget, node, id)
