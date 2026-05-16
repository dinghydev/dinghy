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

export const AwsCodepipelineWebhookInputSchema = TfMetaSchema.extend({
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

export const AwsCodepipelineWebhookOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export const AwsCodepipelineWebhookImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodepipelineWebhookInputProps =
  & z.input<typeof AwsCodepipelineWebhookInputSchema>
  & z.input<typeof AwsCodepipelineWebhookImportSchema>
  & NodeProps

export type AwsCodepipelineWebhookOutputProps =
  & z.output<typeof AwsCodepipelineWebhookOutputSchema>
  & z.output<typeof AwsCodepipelineWebhookInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codepipeline_webhook

export function AwsCodepipelineWebhook(
  props: Partial<AwsCodepipelineWebhookInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codepipeline_webhook'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodepipelineWebhookInputSchema}
      _outputSchema={AwsCodepipelineWebhookOutputSchema}
      _importSchema={AwsCodepipelineWebhookImportSchema}
      {...props}
    />
  )
}

export const useAwsCodepipelineWebhook = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodepipelineWebhookOutputProps>(
    AwsCodepipelineWebhook,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodepipelineWebhooks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodepipelineWebhookOutputProps>(
    AwsCodepipelineWebhook,
    idFilter,
    baseNode,
    optional,
  )
