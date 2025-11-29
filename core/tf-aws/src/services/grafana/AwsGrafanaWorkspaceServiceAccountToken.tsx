import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/grafana_workspace_service_account_token

export const InputSchema = z.object({
  __key: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  seconds_to_live: resolvableValue(z.number()),
  service_account_id: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  expires_at: z.string().optional(),
  service_account_token_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGrafanaWorkspaceServiceAccountToken(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_service_account_token'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceServiceAccountToken = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsGrafanaWorkspaceServiceAccountToken, node, id)

export const useAwsGrafanaWorkspaceServiceAccountTokens = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsGrafanaWorkspaceServiceAccountToken, node, id)
