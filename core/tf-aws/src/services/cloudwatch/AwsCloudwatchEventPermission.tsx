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

export const AwsCloudwatchEventPermissionInputSchema = TfMetaSchema.extend({
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

export const AwsCloudwatchEventPermissionOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsCloudwatchEventPermissionInputProps =
  & z.input<typeof AwsCloudwatchEventPermissionInputSchema>
  & NodeProps

export type AwsCloudwatchEventPermissionOutputProps =
  & z.output<typeof AwsCloudwatchEventPermissionOutputSchema>
  & z.output<typeof AwsCloudwatchEventPermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_event_permission

export function AwsCloudwatchEventPermission(
  props: Partial<AwsCloudwatchEventPermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchEventPermissionInputSchema}
      _outputSchema={AwsCloudwatchEventPermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchEventPermissionOutputProps>(
    AwsCloudwatchEventPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchEventPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchEventPermissionOutputProps>(
    AwsCloudwatchEventPermission,
    idFilter,
    baseNode,
    optional,
  )
