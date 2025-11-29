import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codepipeline_webhook

export const InputSchema = z.object({
  authentication: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      json_path: z.string(),
      match_equals: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  target_action: resolvableValue(z.string()),
  target_pipeline: resolvableValue(z.string()),
  authentication_configuration: resolvableValue(
    z.object({
      allowed_ip_range: z.string().optional(),
      secret_token: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodepipelineWebhook(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codepipeline_webhook'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCodepipelineWebhook = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCodepipelineWebhook, node, id)

export const useAwsCodepipelineWebhooks = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCodepipelineWebhook, node, id)
