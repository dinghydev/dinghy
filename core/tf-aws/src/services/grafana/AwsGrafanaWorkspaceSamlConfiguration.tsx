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

export const AwsGrafanaWorkspaceSamlConfigurationInputSchema = TfMetaSchema
  .extend({
    editor_role_values: resolvableValue(z.string().array()),
    workspace_id: resolvableValue(z.string()),
    admin_role_values: resolvableValue(z.string().array().optional()),
    allowed_organizations: resolvableValue(z.string().array().optional()),
    email_assertion: resolvableValue(z.string().optional()),
    groups_assertion: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    idp_metadata_url: resolvableValue(z.string().optional()),
    idp_metadata_xml: resolvableValue(z.string().optional()),
    login_assertion: resolvableValue(z.string().optional()),
    login_validity_duration: resolvableValue(z.number().optional()),
    name_assertion: resolvableValue(z.string().optional()),
    org_assertion: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    role_assertion: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsGrafanaWorkspaceSamlConfigurationOutputSchema = z.object({
  status: z.string().optional(),
})

export type AwsGrafanaWorkspaceSamlConfigurationInputProps =
  & z.input<typeof AwsGrafanaWorkspaceSamlConfigurationInputSchema>
  & NodeProps

export type AwsGrafanaWorkspaceSamlConfigurationOutputProps =
  & z.output<typeof AwsGrafanaWorkspaceSamlConfigurationOutputSchema>
  & z.output<typeof AwsGrafanaWorkspaceSamlConfigurationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_saml_configuration

export function AwsGrafanaWorkspaceSamlConfiguration(
  props: Partial<AwsGrafanaWorkspaceSamlConfigurationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_saml_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGrafanaWorkspaceSamlConfigurationInputSchema}
      _outputSchema={AwsGrafanaWorkspaceSamlConfigurationOutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceSamlConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGrafanaWorkspaceSamlConfigurationOutputProps>(
    AwsGrafanaWorkspaceSamlConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGrafanaWorkspaceSamlConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGrafanaWorkspaceSamlConfigurationOutputProps>(
    AwsGrafanaWorkspaceSamlConfiguration,
    idFilter,
    baseNode,
    optional,
  )
