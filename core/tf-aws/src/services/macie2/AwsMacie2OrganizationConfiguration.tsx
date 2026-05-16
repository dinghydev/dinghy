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

export const AwsMacie2OrganizationConfigurationInputSchema = TfMetaSchema
  .extend({
    auto_enable: resolvableValue(z.boolean()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsMacie2OrganizationConfigurationOutputSchema = z.object({})

export type AwsMacie2OrganizationConfigurationInputProps =
  & z.input<typeof AwsMacie2OrganizationConfigurationInputSchema>
  & NodeProps

export type AwsMacie2OrganizationConfigurationOutputProps =
  & z.output<typeof AwsMacie2OrganizationConfigurationOutputSchema>
  & z.output<typeof AwsMacie2OrganizationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/macie2_organization_configuration

export function AwsMacie2OrganizationConfiguration(
  props: Partial<AwsMacie2OrganizationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_macie2_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMacie2OrganizationConfigurationInputSchema}
      _outputSchema={AwsMacie2OrganizationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsMacie2OrganizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMacie2OrganizationConfigurationOutputProps>(
    AwsMacie2OrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMacie2OrganizationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMacie2OrganizationConfigurationOutputProps>(
    AwsMacie2OrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
