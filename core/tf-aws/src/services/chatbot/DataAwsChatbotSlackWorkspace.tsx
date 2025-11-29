import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/chatbot_slack_workspace

export const InputSchema = z.object({
  slack_team_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  slack_team_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsChatbotSlackWorkspace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chatbot_slack_workspace'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsChatbotSlackWorkspace = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsChatbotSlackWorkspace, node, id)

export const useDataAwsChatbotSlackWorkspaces = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsChatbotSlackWorkspace, node, id)
