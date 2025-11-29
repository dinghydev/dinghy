import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/workspacesweb_session_logger

export const InputSchema = z.object({
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  customer_managed_key: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  event_filter: resolvableValue(
    z.object({
      include: z.string().array().optional(),
    }).optional(),
  ),
  log_configuration: resolvableValue(
    z.object({
      s3: z.object({
        bucket: z.string(),
        bucket_owner: z.string().optional(),
        folder_structure: z.string(),
        key_prefix: z.string().optional(),
        log_file_format: z.string(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  associated_portal_arns: z.string().array().optional(),
  session_logger_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWorkspaceswebSessionLogger(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_session_logger'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebSessionLogger = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWorkspaceswebSessionLogger, node, id)

export const useAwsWorkspaceswebSessionLoggers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWorkspaceswebSessionLogger, node, id)
