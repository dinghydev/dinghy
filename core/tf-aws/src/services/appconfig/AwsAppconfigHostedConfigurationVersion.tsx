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

export const AwsAppconfigHostedConfigurationVersionInputSchema = TfMetaSchema
  .extend({
    application_id: resolvableValue(z.string()),
    configuration_profile_id: resolvableValue(z.string()),
    content: resolvableValue(z.string()),
    content_type: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsAppconfigHostedConfigurationVersionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  version_number: z.number().optional(),
})

export type AwsAppconfigHostedConfigurationVersionInputProps =
  & z.input<typeof AwsAppconfigHostedConfigurationVersionInputSchema>
  & NodeProps

export type AwsAppconfigHostedConfigurationVersionOutputProps =
  & z.output<typeof AwsAppconfigHostedConfigurationVersionOutputSchema>
  & z.output<typeof AwsAppconfigHostedConfigurationVersionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appconfig_hosted_configuration_version

export function AwsAppconfigHostedConfigurationVersion(
  props: Partial<AwsAppconfigHostedConfigurationVersionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_hosted_configuration_version'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppconfigHostedConfigurationVersionInputSchema}
      _outputSchema={AwsAppconfigHostedConfigurationVersionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigHostedConfigurationVersion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppconfigHostedConfigurationVersionOutputProps>(
    AwsAppconfigHostedConfigurationVersion,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppconfigHostedConfigurationVersions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppconfigHostedConfigurationVersionOutputProps>(
    AwsAppconfigHostedConfigurationVersion,
    idFilter,
    baseNode,
    optional,
  )
