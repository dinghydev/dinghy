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

export const AwsLicensemanagerLicenseConfigurationInputSchema = TfMetaSchema
  .extend({
    license_counting_type: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    description: resolvableValue(z.string().optional()),
    license_count: resolvableValue(z.number().optional()),
    license_count_hard_limit: resolvableValue(z.boolean().optional()),
    license_rules: resolvableValue(z.string().array().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsLicensemanagerLicenseConfigurationOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsLicensemanagerLicenseConfigurationInputProps =
  & z.input<typeof AwsLicensemanagerLicenseConfigurationInputSchema>
  & NodeProps

export type AwsLicensemanagerLicenseConfigurationOutputProps =
  & z.output<typeof AwsLicensemanagerLicenseConfigurationOutputSchema>
  & z.output<typeof AwsLicensemanagerLicenseConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/licensemanager_license_configuration

export function AwsLicensemanagerLicenseConfiguration(
  props: Partial<AwsLicensemanagerLicenseConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_licensemanager_license_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLicensemanagerLicenseConfigurationInputSchema}
      _outputSchema={AwsLicensemanagerLicenseConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsLicensemanagerLicenseConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLicensemanagerLicenseConfigurationOutputProps>(
    AwsLicensemanagerLicenseConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLicensemanagerLicenseConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLicensemanagerLicenseConfigurationOutputProps>(
    AwsLicensemanagerLicenseConfiguration,
    idFilter,
    baseNode,
    optional,
  )
