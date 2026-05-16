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

export const AwsApplicationinsightsApplicationInputSchema = TfMetaSchema.extend(
  {
    resource_group_name: resolvableValue(z.string()),
    auto_config_enabled: resolvableValue(z.boolean().optional()),
    auto_create: resolvableValue(z.boolean().optional()),
    cwe_monitor_enabled: resolvableValue(z.boolean().optional()),
    grouping_type: resolvableValue(z.string().optional()),
    ops_center_enabled: resolvableValue(z.boolean().optional()),
    ops_item_sns_topic_arn: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  },
)

export const AwsApplicationinsightsApplicationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsApplicationinsightsApplicationInputProps =
  & z.input<typeof AwsApplicationinsightsApplicationInputSchema>
  & NodeProps

export type AwsApplicationinsightsApplicationOutputProps =
  & z.output<typeof AwsApplicationinsightsApplicationOutputSchema>
  & z.output<typeof AwsApplicationinsightsApplicationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/applicationinsights_application

export function AwsApplicationinsightsApplication(
  props: Partial<AwsApplicationinsightsApplicationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_applicationinsights_application'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApplicationinsightsApplicationInputSchema}
      _outputSchema={AwsApplicationinsightsApplicationOutputSchema}
      {...props}
    />
  )
}

export const useAwsApplicationinsightsApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApplicationinsightsApplicationOutputProps>(
    AwsApplicationinsightsApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApplicationinsightsApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApplicationinsightsApplicationOutputProps>(
    AwsApplicationinsightsApplication,
    idFilter,
    baseNode,
    optional,
  )
