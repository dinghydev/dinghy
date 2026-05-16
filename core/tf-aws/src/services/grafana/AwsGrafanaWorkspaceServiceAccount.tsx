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

export const AwsGrafanaWorkspaceServiceAccountInputSchema = TfMetaSchema.extend(
  {
    grafana_role: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    workspace_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsGrafanaWorkspaceServiceAccountOutputSchema = z.object({
  id: z.string().optional(),
  service_account_id: z.string().optional(),
})

export type AwsGrafanaWorkspaceServiceAccountInputProps =
  & z.input<typeof AwsGrafanaWorkspaceServiceAccountInputSchema>
  & NodeProps

export type AwsGrafanaWorkspaceServiceAccountOutputProps =
  & z.output<typeof AwsGrafanaWorkspaceServiceAccountOutputSchema>
  & z.output<typeof AwsGrafanaWorkspaceServiceAccountInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account

export function AwsGrafanaWorkspaceServiceAccount(
  props: Partial<AwsGrafanaWorkspaceServiceAccountInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_service_account'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGrafanaWorkspaceServiceAccountInputSchema}
      _outputSchema={AwsGrafanaWorkspaceServiceAccountOutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceServiceAccount = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGrafanaWorkspaceServiceAccountOutputProps>(
    AwsGrafanaWorkspaceServiceAccount,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGrafanaWorkspaceServiceAccounts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGrafanaWorkspaceServiceAccountOutputProps>(
    AwsGrafanaWorkspaceServiceAccount,
    idFilter,
    baseNode,
    optional,
  )
