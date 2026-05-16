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

export const AwsAppconfigDeploymentInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  configuration_profile_id: resolvableValue(z.string()),
  configuration_version: resolvableValue(z.string()),
  deployment_strategy_id: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  kms_key_identifier: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppconfigDeploymentOutputSchema = z.object({
  arn: z.string().optional(),
  deployment_number: z.number().optional(),
  id: z.string().optional(),
  kms_key_arn: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppconfigDeploymentInputProps =
  & z.input<typeof AwsAppconfigDeploymentInputSchema>
  & NodeProps

export type AwsAppconfigDeploymentOutputProps =
  & z.output<typeof AwsAppconfigDeploymentOutputSchema>
  & z.output<typeof AwsAppconfigDeploymentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appconfig_deployment

export function AwsAppconfigDeployment(
  props: Partial<AwsAppconfigDeploymentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_deployment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppconfigDeploymentInputSchema}
      _outputSchema={AwsAppconfigDeploymentOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigDeployment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppconfigDeploymentOutputProps>(
    AwsAppconfigDeployment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppconfigDeployments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppconfigDeploymentOutputProps>(
    AwsAppconfigDeployment,
    idFilter,
    baseNode,
    optional,
  )
