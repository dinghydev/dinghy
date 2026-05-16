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

export const DataAwsChatbotSlackWorkspaceInputSchema = TfMetaSchema.extend({
  slack_team_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsChatbotSlackWorkspaceOutputSchema = z.object({
  slack_team_id: z.string().optional(),
})

export type DataAwsChatbotSlackWorkspaceInputProps =
  & z.input<typeof DataAwsChatbotSlackWorkspaceInputSchema>
  & NodeProps

export type DataAwsChatbotSlackWorkspaceOutputProps =
  & z.output<typeof DataAwsChatbotSlackWorkspaceOutputSchema>
  & z.output<typeof DataAwsChatbotSlackWorkspaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/chatbot_slack_workspace

export function DataAwsChatbotSlackWorkspace(
  props: Partial<DataAwsChatbotSlackWorkspaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chatbot_slack_workspace'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsChatbotSlackWorkspaceInputSchema}
      _outputSchema={DataAwsChatbotSlackWorkspaceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsChatbotSlackWorkspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsChatbotSlackWorkspaceOutputProps>(
    DataAwsChatbotSlackWorkspace,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsChatbotSlackWorkspaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsChatbotSlackWorkspaceOutputProps>(
    DataAwsChatbotSlackWorkspace,
    idFilter,
    baseNode,
    optional,
  )
