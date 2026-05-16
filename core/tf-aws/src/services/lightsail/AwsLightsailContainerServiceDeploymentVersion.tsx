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

export const AwsLightsailContainerServiceDeploymentVersionInputSchema =
  TfMetaSchema.extend({
    container: resolvableValue(
      z.object({
        command: z.string().array().optional(),
        container_name: z.string(),
        environment: z.record(z.string(), z.string()).optional(),
        image: z.string(),
        ports: z.record(z.string(), z.string()).optional(),
      }).array(),
    ),
    service_name: resolvableValue(z.string()),
    public_endpoint: resolvableValue(
      z.object({
        container_name: z.string(),
        container_port: z.number(),
        health_check: z.object({
          healthy_threshold: z.number().optional(),
          interval_seconds: z.number().optional(),
          path: z.string().optional(),
          success_codes: z.string().optional(),
          timeout_seconds: z.number().optional(),
          unhealthy_threshold: z.number().optional(),
        }),
      }).optional(),
    ),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsLightsailContainerServiceDeploymentVersionOutputSchema = z
  .object({
    created_at: z.string().optional(),
    id: z.string().optional(),
    state: z.string().optional(),
    version: z.number().optional(),
  })

export type AwsLightsailContainerServiceDeploymentVersionInputProps =
  & z.input<typeof AwsLightsailContainerServiceDeploymentVersionInputSchema>
  & NodeProps

export type AwsLightsailContainerServiceDeploymentVersionOutputProps =
  & z.output<typeof AwsLightsailContainerServiceDeploymentVersionOutputSchema>
  & z.output<typeof AwsLightsailContainerServiceDeploymentVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_container_service_deployment_version

export function AwsLightsailContainerServiceDeploymentVersion(
  props: Partial<AwsLightsailContainerServiceDeploymentVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_container_service_deployment_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailContainerServiceDeploymentVersionInputSchema}
      _outputSchema={AwsLightsailContainerServiceDeploymentVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailContainerServiceDeploymentVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailContainerServiceDeploymentVersionOutputProps>(
    AwsLightsailContainerServiceDeploymentVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailContainerServiceDeploymentVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailContainerServiceDeploymentVersionOutputProps>(
    AwsLightsailContainerServiceDeploymentVersion,
    idFilter,
    baseNode,
    optional,
  )
