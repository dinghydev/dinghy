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

export const AwsCloudwatchDashboardInputSchema = TfMetaSchema.extend({
  dashboard_body: resolvableValue(z.string()),
  dashboard_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCloudwatchDashboardOutputSchema = z.object({
  dashboard_arn: z.string().optional(),
})

export type AwsCloudwatchDashboardInputProps =
  & z.input<typeof AwsCloudwatchDashboardInputSchema>
  & NodeProps

export type AwsCloudwatchDashboardOutputProps =
  & z.output<typeof AwsCloudwatchDashboardOutputSchema>
  & z.output<typeof AwsCloudwatchDashboardInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_dashboard

export function AwsCloudwatchDashboard(
  props: Partial<AwsCloudwatchDashboardInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_dashboard'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchDashboardInputSchema}
      _outputSchema={AwsCloudwatchDashboardOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchDashboard = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchDashboardOutputProps>(
    AwsCloudwatchDashboard,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchDashboards = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchDashboardOutputProps>(
    AwsCloudwatchDashboard,
    idFilter,
    baseNode,
    optional,
  )
