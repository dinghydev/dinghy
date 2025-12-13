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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/grafana_workspace_saml_configuration

export function AwsGrafanaWorkspaceSamlConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_saml_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceSamlConfiguration = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNode<OutputProps>(
    AwsGrafanaWorkspaceSamlConfiguration,
    idFilter,
    baseNode,
  )

export const useAwsGrafanaWorkspaceSamlConfigurations = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(
    AwsGrafanaWorkspaceSamlConfiguration,
    idFilter,
    baseNode,
  )
