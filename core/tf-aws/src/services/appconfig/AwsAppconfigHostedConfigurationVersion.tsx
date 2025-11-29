import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appconfig_hosted_configuration_version

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  configuration_profile_id: resolvableValue(z.string()),
  content: resolvableValue(z.string()),
  content_type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  version_number: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppconfigHostedConfigurationVersion(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_hosted_configuration_version'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigHostedConfigurationVersion = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsAppconfigHostedConfigurationVersion, node, id)

export const useAwsAppconfigHostedConfigurationVersions = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsAppconfigHostedConfigurationVersion, node, id)
