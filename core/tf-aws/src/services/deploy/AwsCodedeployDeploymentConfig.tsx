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

export const AwsCodedeployDeploymentConfigInputSchema = TfMetaSchema.extend({
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
      time_based_canary: z.object({
        interval: z.number().optional(),
        percentage: z.number().optional(),
      }).optional(),
      time_based_linear: z.object({
        interval: z.number().optional(),
        percentage: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  zonal_config: resolvableValue(
    z.object({
      first_zone_monitor_duration_in_seconds: z.number().optional(),
      monitor_duration_in_seconds: z.number().optional(),
      minimum_healthy_hosts_per_zone: z.object({
        type: z.string().optional(),
        value: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
})

export const AwsCodedeployDeploymentConfigOutputSchema = z.object({
  arn: z.string().optional(),
  deployment_config_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsCodedeployDeploymentConfigInputProps =
  & z.input<typeof AwsCodedeployDeploymentConfigInputSchema>
  & NodeProps

export type AwsCodedeployDeploymentConfigOutputProps =
  & z.output<typeof AwsCodedeployDeploymentConfigOutputSchema>
  & z.output<typeof AwsCodedeployDeploymentConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codedeploy_deployment_config

export function AwsCodedeployDeploymentConfig(
  props: Partial<AwsCodedeployDeploymentConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codedeploy_deployment_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodedeployDeploymentConfigInputSchema}
      _outputSchema={AwsCodedeployDeploymentConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsCodedeployDeploymentConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodedeployDeploymentConfigOutputProps>(
    AwsCodedeployDeploymentConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodedeployDeploymentConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodedeployDeploymentConfigOutputProps>(
    AwsCodedeployDeploymentConfig,
    idFilter,
    baseNode,
    optional,
  )
