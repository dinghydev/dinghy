import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsGrafanaWorkspace } from './AwsGrafanaWorkspace.tsx'

export const DataAwsGrafanaWorkspaceInputSchema = TfMetaSchema.extend({
  workspace_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsGrafanaWorkspaceOutputSchema = z.object({
  account_access_type: z.string().optional(),
  arn: z.string().optional(),
  authentication_providers: z.string().array().optional(),
  created_date: z.string().optional(),
  data_sources: z.string().array().optional(),
  description: z.string().optional(),
  endpoint: z.string().optional(),
  grafana_version: z.string().optional(),
  kms_key_id: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
  notification_destinations: z.string().array().optional(),
  organization_role_name: z.string().optional(),
  organizational_units: z.string().array().optional(),
  permission_type: z.string().optional(),
  role_arn: z.string().optional(),
  saml_configuration_status: z.string().optional(),
  stack_set_name: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsGrafanaWorkspaceInputProps =
  & z.input<typeof DataAwsGrafanaWorkspaceInputSchema>
  & NodeProps

export type DataAwsGrafanaWorkspaceOutputProps =
  & z.output<typeof DataAwsGrafanaWorkspaceOutputSchema>
  & z.output<typeof DataAwsGrafanaWorkspaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/grafana_workspace

export function DataAwsGrafanaWorkspace(
  props: Partial<DataAwsGrafanaWorkspaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGrafanaWorkspace
      _type='aws_grafana_workspace'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsGrafanaWorkspaceInputSchema}
      _outputSchema={DataAwsGrafanaWorkspaceOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGrafanaWorkspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsGrafanaWorkspaceOutputProps>(
    DataAwsGrafanaWorkspace,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsGrafanaWorkspaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsGrafanaWorkspaceOutputProps>(
    DataAwsGrafanaWorkspace,
    idFilter,
    baseNode,
    optional,
  )
