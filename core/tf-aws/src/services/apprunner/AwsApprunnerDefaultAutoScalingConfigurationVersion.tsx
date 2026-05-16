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

export const AwsApprunnerDefaultAutoScalingConfigurationVersionInputSchema =
  TfMetaSchema.extend({
    auto_scaling_configuration_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsApprunnerDefaultAutoScalingConfigurationVersionOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsApprunnerDefaultAutoScalingConfigurationVersionInputProps =
  & z.input<
    typeof AwsApprunnerDefaultAutoScalingConfigurationVersionInputSchema
  >
  & NodeProps

export type AwsApprunnerDefaultAutoScalingConfigurationVersionOutputProps =
  & z.output<
    typeof AwsApprunnerDefaultAutoScalingConfigurationVersionOutputSchema
  >
  & z.output<
    typeof AwsApprunnerDefaultAutoScalingConfigurationVersionInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/apprunner_default_auto_scaling_configuration_version

export function AwsApprunnerDefaultAutoScalingConfigurationVersion(
  props: Partial<AwsApprunnerDefaultAutoScalingConfigurationVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_default_auto_scaling_configuration_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsApprunnerDefaultAutoScalingConfigurationVersionInputSchema}
      _outputSchema={AwsApprunnerDefaultAutoScalingConfigurationVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerDefaultAutoScalingConfigurationVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsApprunnerDefaultAutoScalingConfigurationVersionOutputProps>(
    AwsApprunnerDefaultAutoScalingConfigurationVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsApprunnerDefaultAutoScalingConfigurationVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsApprunnerDefaultAutoScalingConfigurationVersionOutputProps>(
    AwsApprunnerDefaultAutoScalingConfigurationVersion,
    idFilter,
    baseNode,
    optional,
  )
