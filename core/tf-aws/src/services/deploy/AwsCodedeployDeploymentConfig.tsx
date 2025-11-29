import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codedeploy_deployment_config

export const InputSchema = z.object({
  deployment_config_name: resolvableValue(z.string()),
  compute_platform: resolvableValue(z.string().optional()),
  minimum_healthy_hosts: resolvableValue(
    z.object({
      type: z.string().optional(),
      value: z.number().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  traffic_routing_config: resolvableValue(
    z.object({
      type: z.string().optional(),
    }).optional(),
  ),
  zonal_config: resolvableValue(
    z.object({
      first_zone_monitor_duration_in_seconds: z.number().optional(),
      monitor_duration_in_seconds: z.number().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  deployment_config_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodedeployDeploymentConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codedeploy_deployment_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodedeployDeploymentConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodedeployDeploymentConfig, node, id)

export const useAwsCodedeployDeploymentConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodedeployDeploymentConfig, node, id)
