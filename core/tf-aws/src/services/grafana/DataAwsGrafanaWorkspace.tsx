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

export const InputSchema = TfMetaSchema.extend({
  saml_configuration_status: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  account_access_type: z.string().optional(),
  arn: z.string().optional(),
  authentication_providers: z.string().array().optional(),
  created_date: z.string().optional(),
  data_sources: z.string().array().optional(),
  description: z.string().optional(),
  endpoint: z.string().optional(),
  grafana_version: z.string().optional(),
  last_updated_date: z.string().optional(),
  name: z.string().optional(),
  notification_destinations: z.string().array().optional(),
  organization_role_name: z.string().optional(),
  organizational_units: z.string().array().optional(),
  permission_type: z.string().optional(),
  role_arn: z.string().optional(),
  stack_set_name: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/grafana_workspace

export function DataAwsGrafanaWorkspace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsGrafanaWorkspace
      _type='aws_grafana_workspace'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsGrafanaWorkspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsGrafanaWorkspace,
    idFilter,
    baseNode,
    optional,
  )
