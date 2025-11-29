import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_endpoint

export const InputSchema = z.object({
  endpoint_config_name: resolvableValue(z.string()),
  deployment_config: resolvableValue(
    z.object({
      auto_rollback_configuration: z.object({
        alarms: z.object({
          alarm_name: z.string(),
        }).array().optional(),
      }).optional(),
      blue_green_update_policy: z.object({
        maximum_execution_timeout_in_seconds: z.number().optional(),
        termination_wait_in_seconds: z.number().optional(),
      }).optional(),
      rolling_update_policy: z.object({
        maximum_execution_timeout_in_seconds: z.number().optional(),
        wait_interval_in_seconds: z.number(),
      }).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerEndpoint, node, id)

export const useAwsSagemakerEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerEndpoint, node, id)
