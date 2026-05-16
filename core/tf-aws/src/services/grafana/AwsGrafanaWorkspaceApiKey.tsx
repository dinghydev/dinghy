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

export const AwsGrafanaWorkspaceApiKeyInputSchema = TfMetaSchema.extend({
  key_name: resolvableValue(z.string()),
  key_role: resolvableValue(z.string()),
  seconds_to_live: resolvableValue(z.number()),
  workspace_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsGrafanaWorkspaceApiKeyOutputSchema = z.object({
  __key: z.string().optional(),
})

export type AwsGrafanaWorkspaceApiKeyInputProps =
  & z.input<typeof AwsGrafanaWorkspaceApiKeyInputSchema>
  & NodeProps

export type AwsGrafanaWorkspaceApiKeyOutputProps =
  & z.output<typeof AwsGrafanaWorkspaceApiKeyOutputSchema>
  & z.output<typeof AwsGrafanaWorkspaceApiKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_api_key

export function AwsGrafanaWorkspaceApiKey(
  props: Partial<AwsGrafanaWorkspaceApiKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_grafana_workspace_api_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGrafanaWorkspaceApiKeyInputSchema}
      _outputSchema={AwsGrafanaWorkspaceApiKeyOutputSchema}
      {...props}
    />
  )
}

export const useAwsGrafanaWorkspaceApiKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGrafanaWorkspaceApiKeyOutputProps>(
    AwsGrafanaWorkspaceApiKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGrafanaWorkspaceApiKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGrafanaWorkspaceApiKeyOutputProps>(
    AwsGrafanaWorkspaceApiKey,
    idFilter,
    baseNode,
    optional,
  )
