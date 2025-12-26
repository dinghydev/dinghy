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
  project_name: resolvableValue(z.string()),
  branch_filter: resolvableValue(z.string().optional()),
  build_type: resolvableValue(z.string().optional()),
  filter_group: resolvableValue(
    z.object({
      filter: z.object({
        exclude_matched_pattern: z.boolean().optional(),
        pattern: z.string(),
        type: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  manual_creation: resolvableValue(z.boolean().optional()),
  pull_request_build_policy: resolvableValue(
    z.object({
      approver_roles: z.string().array().optional(),
      requires_comment_approval: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scope_configuration: resolvableValue(
    z.object({
      domain: z.string().optional(),
      name: z.string(),
      scope: z.string(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  payload_url: z.string().optional(),
  secret: z.string().optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codebuild_webhook

export function AwsCodebuildWebhook(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codebuild_webhook'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCodebuildWebhook = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsCodebuildWebhook, idFilter, baseNode, optional)

export const useAwsCodebuildWebhooks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsCodebuildWebhook, idFilter, baseNode, optional)
