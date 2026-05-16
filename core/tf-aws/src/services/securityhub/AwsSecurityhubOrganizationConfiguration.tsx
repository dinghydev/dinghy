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

export const AwsSecurityhubOrganizationConfigurationInputSchema = TfMetaSchema
  .extend({
    auto_enable: resolvableValue(z.boolean()),
    auto_enable_standards: resolvableValue(z.string().optional()),
    organization_configuration: resolvableValue(
      z.object({
        configuration_type: z.string(),
      }).optional(),
    ),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsSecurityhubOrganizationConfigurationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSecurityhubOrganizationConfigurationInputProps =
  & z.input<typeof AwsSecurityhubOrganizationConfigurationInputSchema>
  & NodeProps

export type AwsSecurityhubOrganizationConfigurationOutputProps =
  & z.output<typeof AwsSecurityhubOrganizationConfigurationOutputSchema>
  & z.output<typeof AwsSecurityhubOrganizationConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/securityhub_organization_configuration

export function AwsSecurityhubOrganizationConfiguration(
  props: Partial<AwsSecurityhubOrganizationConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_organization_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSecurityhubOrganizationConfigurationInputSchema}
      _outputSchema={AwsSecurityhubOrganizationConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubOrganizationConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSecurityhubOrganizationConfigurationOutputProps>(
    AwsSecurityhubOrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSecurityhubOrganizationConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSecurityhubOrganizationConfigurationOutputProps>(
    AwsSecurityhubOrganizationConfiguration,
    idFilter,
    baseNode,
    optional,
  )
