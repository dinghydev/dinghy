import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_container_service_deployment_version

export const InputSchema = z.object({
  service_name: resolvableValue(z.string()),
  container: resolvableValue(
    z.object({
      command: z.string().array().optional(),
      container_name: z.string(),
      environment: z.record(z.string(), z.string()).optional(),
      image: z.string(),
      ports: z.record(z.string(), z.string()).optional(),
    }).array(),
  ),
  public_endpoint: resolvableValue(
    z.object({
      container_name: z.string(),
      container_port: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  version: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLightsailContainerServiceDeploymentVersion(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_container_service_deployment_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailContainerServiceDeploymentVersion = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsLightsailContainerServiceDeploymentVersion,
    node,
    id,
  )

export const useAwsLightsailContainerServiceDeploymentVersions = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsLightsailContainerServiceDeploymentVersion,
    node,
    id,
  )
