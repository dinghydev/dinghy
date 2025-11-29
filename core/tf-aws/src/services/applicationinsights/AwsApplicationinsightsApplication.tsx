import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/applicationinsights_application

export const InputSchema = z.object({
  resource_group_name: resolvableValue(z.string()),
  auto_config_enabled: resolvableValue(z.boolean().optional()),
  auto_create: resolvableValue(z.boolean().optional()),
  cwe_monitor_enabled: resolvableValue(z.boolean().optional()),
  grouping_type: resolvableValue(z.string().optional()),
  ops_center_enabled: resolvableValue(z.boolean().optional()),
  ops_item_sns_topic_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApplicationinsightsApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_applicationinsights_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApplicationinsightsApplication = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsApplicationinsightsApplication, node, id)

export const useAwsApplicationinsightsApplications = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsApplicationinsightsApplication, node, id)
