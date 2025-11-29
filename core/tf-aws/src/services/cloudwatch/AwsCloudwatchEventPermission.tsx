import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_event_permission

export const InputSchema = z.object({
  principal: resolvableValue(z.string()),
  statement_id: resolvableValue(z.string()),
  action: resolvableValue(z.string().optional()),
  condition: resolvableValue(
    z.object({
      key: z.string(),
      type: z.string(),
      value: z.string(),
    }).optional(),
  ),
  event_bus_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchEventPermission(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_permission'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventPermission = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudwatchEventPermission, node, id)

export const useAwsCloudwatchEventPermissions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudwatchEventPermission, node, id)
