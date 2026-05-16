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

export const AwsM2DeploymentInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  application_version: resolvableValue(z.number()),
  environment_id: resolvableValue(z.string()),
  start: resolvableValue(z.boolean()),
  force_stop: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsM2DeploymentOutputSchema = z.object({
  deployment_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsM2DeploymentInputProps =
  & z.input<typeof AwsM2DeploymentInputSchema>
  & NodeProps

export type AwsM2DeploymentOutputProps =
  & z.output<typeof AwsM2DeploymentOutputSchema>
  & z.output<typeof AwsM2DeploymentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/m2_deployment

export function AwsM2Deployment(props: Partial<AwsM2DeploymentInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_m2_deployment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsM2DeploymentInputSchema}
      _outputSchema={AwsM2DeploymentOutputSchema}
      {...props}
    />
  )
}

export const useAwsM2Deployment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsM2DeploymentOutputProps>(
    AwsM2Deployment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsM2Deployments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsM2DeploymentOutputProps>(
    AwsM2Deployment,
    idFilter,
    baseNode,
    optional,
  )
