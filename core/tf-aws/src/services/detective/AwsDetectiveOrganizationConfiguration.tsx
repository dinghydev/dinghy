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

export const AwsDetectiveOrganizationConfigurationInputSchema = TfMetaSchema
  .extend({
    auto_enable: resolvableValue(z.boolean()),
    graph_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsDetectiveOrganizationConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDetectiveOrganizationConfigurationInputProps =
  & z.input<typeof AwsDetectiveOrganizationConfigurationInputSchema>
  & NodeProps

export type AwsDetectiveOrganizationConfigurationOutputProps =
  & z.output<typeof AwsDetectiveOrganizationConfigurationOutputSchema>
  & z.output<typeof AwsDetectiveOrganizationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/detective_organization_configuration

export function AwsDetectiveOrganizationConfiguration(
  props: Partial<AwsDetectiveOrganizationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_detective_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDetectiveOrganizationConfigurationInputSchema}
      _outputSchema={AwsDetectiveOrganizationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsDetectiveOrganizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDetectiveOrganizationConfigurationOutputProps>(
    AwsDetectiveOrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDetectiveOrganizationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDetectiveOrganizationConfigurationOutputProps>(
    AwsDetectiveOrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
