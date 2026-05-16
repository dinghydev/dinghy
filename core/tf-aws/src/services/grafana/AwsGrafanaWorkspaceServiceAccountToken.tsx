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

export const AwsGrafanaWorkspaceServiceAccountTokenInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    seconds_to_live: resolvableValue(z.number()),
    service_account_id: resolvableValue(z.string()),
    workspace_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsGrafanaWorkspaceServiceAccountTokenOutputSchema = z.object({
  __key: z.string().optional(),
  created_at: z.string().optional(),
  expires_at: z.string().optional(),
  id: z.string().optional(),
  service_account_token_id: z.string().optional(),
})

export type AwsGrafanaWorkspaceServiceAccountTokenInputProps =
  & z.input<typeof AwsGrafanaWorkspaceServiceAccountTokenInputSchema>
  & NodeProps

export type AwsGrafanaWorkspaceServiceAccountTokenOutputProps =
  & z.output<typeof AwsGrafanaWorkspaceServiceAccountTokenOutputSchema>
  & z.output<typeof AwsGrafanaWorkspaceServiceAccountTokenInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token

export function AwsGrafanaWorkspaceServiceAccountToken(
  props: Partial<AwsGrafanaWorkspaceServiceAccountTokenInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_service_account_token'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGrafanaWorkspaceServiceAccountTokenInputSchema}
      _outputSchema={AwsGrafanaWorkspaceServiceAccountTokenOutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceServiceAccountToken = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGrafanaWorkspaceServiceAccountTokenOutputProps>(
    AwsGrafanaWorkspaceServiceAccountToken,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGrafanaWorkspaceServiceAccountTokens = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGrafanaWorkspaceServiceAccountTokenOutputProps>(
    AwsGrafanaWorkspaceServiceAccountToken,
    idFilter,
    baseNode,
    optional,
  )
