import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/apprunner_default_auto_scaling_configuration_version

export const InputSchema = z.object({
  auto_scaling_configuration_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsApprunnerDefaultAutoScalingConfigurationVersion(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_apprunner_default_auto_scaling_configuration_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsApprunnerDefaultAutoScalingConfigurationVersion = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsApprunnerDefaultAutoScalingConfigurationVersion,
    node,
    id,
  )

export const useAwsApprunnerDefaultAutoScalingConfigurationVersions = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsApprunnerDefaultAutoScalingConfigurationVersion,
    node,
    id,
  )
