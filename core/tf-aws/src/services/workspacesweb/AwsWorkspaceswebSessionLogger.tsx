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
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  customer_managed_key: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  event_filter: resolvableValue(
    z.object({
      include: z.string().array().optional(),
      all: z.object({}).array().optional(),
    }).array().optional(),
  ),
  log_configuration: resolvableValue(
    z.object({
      s3: z.object({
        bucket: z.string(),
        bucket_owner: z.string().optional(),
        folder_structure: z.string(),
        key_prefix: z.string().optional(),
        log_file_format: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/workspacesweb_session_logger

export function AwsWorkspaceswebSessionLogger(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsWorkspaceswebSessionLogger = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsWorkspaceswebSessionLogger,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebSessionLoggers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsWorkspaceswebSessionLogger,
    idFilter,
    baseNode,
    optional,
  )
