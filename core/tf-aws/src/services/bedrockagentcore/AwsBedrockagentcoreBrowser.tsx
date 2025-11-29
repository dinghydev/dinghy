import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrockagentcore_browser

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  execution_role_arn: resolvableValue(z.string().optional()),
  network_configuration: resolvableValue(
    z.object({
      network_mode: z.string(),
    }).optional(),
  ),
  recording: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  browser_arn: z.string().optional(),
  browser_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockagentcoreBrowser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrockagentcore_browser'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockagentcoreBrowser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBedrockagentcoreBrowser, node, id)

export const useAwsBedrockagentcoreBrowsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBedrockagentcoreBrowser, node, id)
