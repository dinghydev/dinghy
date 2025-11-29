import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration

export const InputSchema = z.object({
  elements: resolvableValue(z.object({
    type: z.string(),
  })),
  name: resolvableValue(z.string()),
  resource_access_role_arn: resolvableValue(z.string()),
  real_time_alert_configuration: resolvableValue(
    z.object({
      disabled: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chimesdkmediapipelines_media_insights_pipeline_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration,
    node,
    id,
  )

export const useAwsChimesdkmediapipelinesMediaInsightsPipelineConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsChimesdkmediapipelinesMediaInsightsPipelineConfiguration,
    node,
    id,
  )
