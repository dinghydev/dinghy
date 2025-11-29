import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/pinpoint_email_template

export const InputSchema = z.object({
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  template_name: resolvableValue(z.string()),
  email_template: resolvableValue(
    z.object({
      default_substitutions: z.string().optional(),
      description: z.string().optional(),
      html_part: z.string().optional(),
      recommender_id: z.string().optional(),
      subject: z.string().optional(),
      text_part: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsPinpointEmailTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_email_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointEmailTemplate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsPinpointEmailTemplate, node, id)

export const useAwsPinpointEmailTemplates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsPinpointEmailTemplate, node, id)
