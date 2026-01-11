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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  execution_role_arn: resolvableValue(z.string().optional()),
  network_configuration: resolvableValue(
    z.object({
      network_mode: z.string(),
      vpc_config: z.object({
        security_groups: z.string().array(),
        subnets: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  recording: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      s3_location: z.object({
        bucket: z.string(),
        prefix: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrockagentcore_browser

export function AwsBedrockagentcoreBrowser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsBedrockagentcoreBrowser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockagentcoreBrowser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockagentcoreBrowsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockagentcoreBrowser,
    idFilter,
    baseNode,
    optional,
  )
