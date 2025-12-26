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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lightsail_container_service_deployment_version

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
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsLightsailContainerServiceDeploymentVersion,
    idFilter,
    baseNode,
    optional,
  )
