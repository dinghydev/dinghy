import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/grafana_workspace_api_key

export const InputSchema = z.object({
  __key: resolvableValue(z.string()),
  key_name: resolvableValue(z.string()),
  key_role: resolvableValue(z.string()),
  seconds_to_live: resolvableValue(z.number()),
  workspace_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGrafanaWorkspaceApiKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_api_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceApiKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGrafanaWorkspaceApiKey, node, id)

export const useAwsGrafanaWorkspaceApiKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGrafanaWorkspaceApiKey, node, id)
