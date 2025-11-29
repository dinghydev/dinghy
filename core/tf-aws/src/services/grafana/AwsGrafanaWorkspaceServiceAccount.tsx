import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/grafana_workspace_service_account

export const InputSchema = z.object({
  grafana_role: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  workspace_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  service_account_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGrafanaWorkspaceServiceAccount(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_service_account'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceServiceAccount = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGrafanaWorkspaceServiceAccount, node, id)

export const useAwsGrafanaWorkspaceServiceAccounts = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsGrafanaWorkspaceServiceAccount, node, id)
